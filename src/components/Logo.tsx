import { Typography, TypographyProps, Stack } from '@mui/material';
import { Icon } from './Icon';

export function Logo(props: TypographyProps) {
  return (
    <Stack direction="row">
      <Icon
        icon="heroicons-solid:collection"
        fontSize={40}
        sx={{ paddingRight: '4px' }}
      />
      <Typography variant="h4" component="h1" {...props}>
        Lario
      </Typography>
    </Stack>
  );
}
