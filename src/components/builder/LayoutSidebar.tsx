import { styled } from '@mui/material/styles';
import { Icon } from '../Icon';
import { Box } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  borderRight: `1px solid ${theme.palette.grey[200]}`,

  transition: theme.transitions.create('top', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  padding: theme.spacing(1, 0),
  boxShadow: theme.customShadows.z8,
  backgroundColor: theme.palette.background.default,
}));

const SidebarItem = styled('div')(({ theme }) => ({
  borderRadius: 4,
  overflow: 'hidden',
  color: theme.palette.text.secondary,
}));

const Tool = styled('div')(({ theme }) => ({
  width: 48,
  height: 48,
  padding: theme.spacing(1.5),
  flexShrink: 0,
  display: 'flex',
  borderRadius: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey[300],
}));

export function LayoutSidebar() {
  const handleDragStart =
    (nodeType: string): React.DragEventHandler =>
    (event) => {
      event.dataTransfer.setData('application/reactflow', nodeType);
      event.dataTransfer.effectAllowed = 'move';
    };

  return (
    <RootStyle>
      <Box px={1}>
        <SidebarItem onDragStart={handleDragStart('welcome-screen')} draggable>
          <Tool>
            <Icon fontSize={24} icon="octicon:typography-16" />
          </Tool>
        </SidebarItem>
      </Box>
    </RootStyle>
  );
}
