import { Paper, PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export type LayoutDrawerProps = PaperProps & {
  open?: boolean;
};

const DRAWER_WIDTH = 300;

const StyleRoot = styled(Paper, {
  shouldForwardProp: (name) => name !== 'open',
})<LayoutDrawerProps>(({ theme, open }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width'),
  transform: `translateX(${open ? 0 : DRAWER_WIDTH}px)`,
})) as React.FC<LayoutDrawerProps>;

export function LayoutDrawer({
  children,
  open,
}: React.PropsWithChildren<LayoutDrawerProps>) {
  return (
    <StyleRoot elevation={16} open={open}>
      {children}
    </StyleRoot>
  );
}
