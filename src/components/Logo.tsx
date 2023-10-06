import { Typography, TypographyProps } from '@mui/material';

export function Logo(props: TypographyProps) {
  return (
    <Typography variant="h4" component="h1" {...props}>
      Lario
    </Typography>
  );
}
