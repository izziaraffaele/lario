'use client';

// icons
import { Icon as Iconify, IconifyIcon } from '@iconify/react';
// @mui
import { Box, BoxProps, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

export type IconProps = BoxProps & {
  sx?: SxProps;
  icon: IconifyIcon | string;
};

export function Icon({ icon, sx, ...other }: IconProps) {
  return <Box component={Iconify} icon={icon} sx={{ ...sx }} {...other} />;
}
