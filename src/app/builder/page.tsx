'use client';
import { Card, CardActionArea, Stack } from '@mui/material';
import Link from 'next/link';

export default function PageBuilder() {
  return (
    <Stack>
      <Card>
        <CardActionArea
          component={Link}
          sx={{ p: 3 }}
          href="/builder/0xaa8ed4b6ad1ad5a52fe365b6591ed1813cc2778d13260ad41331990d7ab03d88/logic"
        >
          Basic
        </CardActionArea>
      </Card>
    </Stack>
  );
}
