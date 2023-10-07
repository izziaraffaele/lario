'use client';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Tab, Tabs, Toolbar } from '@mui/material';
// utils
import cssStyles from '@/utils/cssStyles';
import {
  useSearchParams,
  useRouter,
  usePathname,
  useParams,
} from 'next/navigation';
import { Icon } from '../Icon';
// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  boxShadow: 'none',
  zIndex: theme.zIndex.appBar + 1,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.grey[200]}`,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
  },
}));

// ----------------------------------------------------------------------

export function LayoutHeader() {
  const params = useParams<{ formId: string }>();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = pathname.split('/').pop();

  return (
    <RootStyle>
      <Icon
        icon="heroicons-solid:collection"
        fontSize={40}
        sx={{ paddingRight: '4px' }}
      />
      <Tabs
        sx={{ flex: 1 }}
        value={tab}
        onChange={(e, value) => {
          router.push(`/builder/${params.formId}/${value}`);
        }}
      >
        <Tab label="Build" value="logic" />
        <Tab label="Preview" value="preview" />
      </Tabs>
    </RootStyle>
  );
}
