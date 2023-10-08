'use client';

// components
import { LayoutHeader } from '@/components/builder';
import { useParams } from 'next/navigation';
import { Box, CircularProgress } from '@mui/material';
import { useFormAttestation } from '@/hooks/useFormAttestation';
import { useEffect } from 'react';
import { useFormBuilderStore } from '@/hooks/useFormBuilder';
import { fromAttestation } from '@/core/form-builder';

export default function BuilderLayout({ children }: React.PropsWithChildren) {
  const params = useParams<{ formId: string }>();
  const { reset } = useFormBuilderStore();
  const {
    data: attestation,
    isLoading,
    error,
    isValidating,
  } = useFormAttestation(params.formId);
  console.log(isValidating, error, isLoading, attestation);
  useEffect(() => {
    if (attestation !== undefined) {
      console.log('reset');
      reset(
        attestation ? fromAttestation(attestation) : { nodes: [], edges: [] }
      );
    }
  }, [attestation]); // eslint-disable-line

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        '& main': {
          height: '100%',
        },
      }}
    >
      <LayoutHeader />
      {isLoading ? <CircularProgress /> : children}
    </Box>
  );
}
