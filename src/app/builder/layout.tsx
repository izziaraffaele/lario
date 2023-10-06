'use client';

import 'reactflow/dist/style.css';

import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LayoutHeader } from '@/components/builder/LayoutHeader';
import { LayoutSidebar } from '@/components/builder/LayoutSidebar';
import { ReactFlowProvider } from 'reactflow';
import { LayoutDrawer } from '@/components/builder/LayoutDrawer';
import { useRef } from 'react';

const RootStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  '& main': {
    height: '100%',
  },
});

export default function BuilderLayout({ children }: React.PropsWithChildren) {
  const mainRef = useRef(null);
  return (
    <ReactFlowProvider>
      <RootStyle>
        <LayoutHeader />
        <Stack direction="row" position="relative" flex={1} ref={mainRef}>
          <LayoutSidebar />
          <Box component="main" flex={1}>
            {children}
          </Box>
          <LayoutDrawer>content</LayoutDrawer>
        </Stack>
      </RootStyle>
    </ReactFlowProvider>
  );
}
