import { EAS } from '@ethereum-attestation-service/eas-sdk';
import { useEffect, useMemo } from 'react';
import { ethers } from 'ethers';
import useSWR from 'swr';

export function useFormAttestation(attestationId: string) {
  const eas = useMemo(() => {
    return new EAS('0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A');
  }, []);

  useEffect(() => {
    const url = 'https://goerli.base.org';
    const provider = new ethers.providers.JsonRpcProvider(url) as any;

    eas.connect(provider);
  }, [eas]);

  return useSWR(attestationId, () =>
    attestationId && attestationId.startsWith('0x')
      ? eas.getAttestation(attestationId)
      : null
  );
}
