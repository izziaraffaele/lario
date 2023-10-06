import { Handle, Position } from 'reactflow';
import { styled, alpha } from '@mui/material/styles';

const StyleRoot = styled('div')(({ theme }) => ({
  ...theme.typography.overline,
  background: alpha(theme.palette.primary.light, 0.8),
  borderRadius: 24,
  padding: theme.spacing(0, 4, 0, 2),
  position: 'relative',
  '& .react-flow__handle': {
    right: 12,
    backgroundColor: alpha('#000', 0.6),
  },
}));

export function StartNode() {
  return (
    <StyleRoot>
      Start
      <Handle
        type="source"
        position={Position.Right}
        isConnectableEnd={false}
      />
    </StyleRoot>
  );
}
