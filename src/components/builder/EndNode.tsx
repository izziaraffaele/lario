import { Handle, Position } from 'reactflow';
import { styled } from '@mui/material/styles';

const StyleRoot = styled('div')(({ theme }) => ({
  ...theme.typography.overline,
  background: theme.palette.grey[300],
  borderRadius: 24,
  padding: theme.spacing(0, 2, 0, 4),
  position: 'relative',
  '& .react-flow__handle': {
    left: 12,
    backgroundColor: theme.palette.grey[600],
  },
}));

export function EndNode() {
  return (
    <StyleRoot>
      <Handle
        type="target"
        position={Position.Left}
        isConnectableStart={false}
      />
      End
    </StyleRoot>
  );
}
