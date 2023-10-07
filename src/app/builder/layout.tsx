'use client';

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
  return (
    <ReactFlowProvider>
      <RootStyle>
        <LayoutHeader />
        <Stack direction="row" position="relative" flex={1}>
          <LayoutSidebar />
          <Box component="main" flex={1}>
            {children}
          </Box>
          <LayoutDrawer />
        </Stack>
      </RootStyle>
    </ReactFlowProvider>
  );
}
