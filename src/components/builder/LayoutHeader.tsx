'use client';
// @mui
import { styled } from '@mui/material/styles';
import { Tab, Tabs, Toolbar } from '@mui/material';
// utils
import cssStyles from '@/utils/cssStyles';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  boxShadow: 'none',
  zIndex: theme.zIndex.appBar + 1,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.grey[200]}`,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

export function LayoutHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get('tab') || 'build';

  return (
    <RootStyle>
      <Tabs
        value={tab}
        onChange={(e, value) => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set('tab', value);
          router.push(`${pathname}?${newSearchParams}`);
        }}
      >
        <Tab label="Build" value="build" />
        <Tab label="Preview" value="preview" />
      </Tabs>
    </RootStyle>
  );
}
