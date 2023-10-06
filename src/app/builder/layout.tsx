'use client';

import { useRef } from 'react';
// reactflow
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
// mui
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import {
  LayoutHeader,
  LayoutSidebar,
  LayoutDrawer,
} from '@/components/builder';

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
