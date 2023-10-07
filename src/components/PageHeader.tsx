import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { Logo } from './Logo';

export function PageHeader() {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: 'background.paper', color: 'text.primary' }}
    >
      <Container size="lg">
        <Toolbar component="header">
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
