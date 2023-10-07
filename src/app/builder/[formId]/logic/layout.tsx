'use client';
import 'reactflow/dist/style.css';

import { LayoutDrawer, LayoutSidebar } from '@/components/builder';
import { Box, Stack } from '@mui/material';
import { ReactFlowProvider } from 'reactflow';

export default function BuilderLogicLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <ReactFlowProvider>
      <Stack direction="row" position="relative" flex={1}>
        <LayoutSidebar />
        <Box component="main" flex={1}>
          {children}
        </Box>
        <LayoutDrawer />
      </Stack>
    </ReactFlowProvider>
  );
}
