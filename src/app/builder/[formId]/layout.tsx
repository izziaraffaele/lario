'use client';

// mui
import { styled } from '@mui/material/styles';
// components
import { LayoutHeader } from '@/components/builder';

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
    <RootStyle>
      <LayoutHeader />
      {children}
    </RootStyle>
  );
}
