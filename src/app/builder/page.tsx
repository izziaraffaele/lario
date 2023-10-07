'use client';
import EmptyContent from '@/components/EmptyContent';
import { PageHeader } from '@/components/PageHeader';
import {
  Button,
  Card,
  CardActionArea,
  Container,
  Typography,
  Stack,
  Toolbar,
  ListItemText,
  Divider,
} from '@mui/material';
import Link from 'next/link';

const templates = [
  {
    uid: '0xaa8ed4b6ad1ad5a52fe365b6591ed1813cc2778d13260ad41331990d7ab03d88',
    label: 'Basic form',
    description: 'This is just a basic form',
  },
];

export default function PageBuilder() {
  return (
    <Stack>
      <PageHeader />
      <Container sx={{ py: 3 }} maxWidth="lg">
        <Typography variant="h5" gutterBottom>
          Templates
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          {templates.map((template) => (
            <Card key={template.uid}>
              <CardActionArea
                component={Link}
                href={`/builder/${template.uid}/logic`}
                sx={{ px: 3, py: 2 }}
              >
                <ListItemText
                  primary={template.label}
                  secondary={template.description}
                />
              </CardActionArea>
            </Card>
          ))}
        </Stack>
        <Divider sx={{ my: 3 }} />
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            component={Link}
            href="/builder/new/logic"
          >
            Create
          </Button>
        </Toolbar>
        <EmptyContent
          title="Nothing to display yet!"
          description="Crate a new form from scratch"
        />
      </Container>
    </Stack>
  );
}
