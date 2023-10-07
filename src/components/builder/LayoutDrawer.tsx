import { FormBuilderStore } from '@/core/form-builder';
import { useFormBuilderStore } from '@/hooks/useFormBuilder';
import { Box, ListItemText, Paper, PaperProps, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useMemo } from 'react';
import { FormNodePanel } from './FormNodePanel';
import { nodeTypes } from '@/utils/nodeTypes';

const DRAWER_WIDTH = 300;

const StyleRoot = styled(Paper, {
  shouldForwardProp: (name) => name !== 'open',
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  overflow: 'scroll',
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('transform'),
  transform: `translateX(${open ? 0 : DRAWER_WIDTH}px)`,
})) as React.FC<PaperProps & { open?: boolean }>;

const selector = (s: FormBuilderStore) => ({
  selectedNode: s.nodes.find((n) => n.selected),
});

export function LayoutDrawer() {
  const { selectedNode } = useFormBuilderStore(selector);
  const nodeType = useMemo(
    () => nodeTypes.find((nodeType) => nodeType.key === selectedNode?.type),
    [selectedNode]
  );

  return (
    <StyleRoot elevation={16} open={Boolean(selectedNode)}>
      {selectedNode && (
        <Stack px={3} py={2} direction="column" spacing={2}>
          <ListItemText
            primary={nodeType?.label}
            primaryTypographyProps={{ variant: 'h6' }}
            secondary={nodeType?.description}
          />
          <FormNodePanel
            key={selectedNode.id}
            data={selectedNode.data}
            id={selectedNode.id}
            type={selectedNode.type}
            onSave={() => {}}
          />
        </Stack>
      )}
    </StyleRoot>
  );
}
