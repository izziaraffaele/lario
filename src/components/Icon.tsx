// icons
import { Icon as Iconify, IconifyIcon } from '@iconify/react';
// @mui
import { Box, BoxProps, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  sx?: SxProps;
  icon: IconifyIcon | string;
}

export default function Icon({ icon, sx, ...other }: Props) {
  return <Box component={Iconify} icon={icon} sx={{ ...sx }} {...other} />;
}
