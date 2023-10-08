import { Typography, TypographyProps, Stack } from '@mui/material';
import { Icon } from './Icon';

export function Logo({ fontSize, ...others }: TypographyProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ display: 'inline-flex' }}>
      <Icon
        icon="heroicons-solid:collection"
        fontSize={fontSize}
        sx={{ paddingRight: '4px', display: 'block' }}
      />
      <Typography variant="h4" component="h1" fontSize={fontSize} {...others}>
        Lario
      </Typography>
    </Stack>
  );
}
