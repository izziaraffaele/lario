import {
  Box,
  Stack,
  Typography,
  Card,
  Divider,
  Container,
  ListItemText,
  IconButton,
  CardActionArea,
} from '@mui/material';

import { Logo } from '@/components/Logo';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Box>
      <PageHero>
        <Container maxWidth="sm">
          <Logo fontSize="6rem" />

          <Typography variant="h5" color="text.secondary">
            The data collection layer
            <br />
            for Decentralized Organizazions
          </Typography>
        </Container>
      </PageHero>
      <Box component="section" mb={4}>
        <Container maxWidth="md">
          <Stack direction="row" py={3} spacing={3}>
            <BenefitBox
              primary="Data collection flows simplified"
              secondary="With Lario's intuitive visual form builder, create everything
                from simple application forms for your upcoming DAO initiatives
                to intricate onboarding processes for new members. Seamlessly
                verify on-chain activities and issue credentials directly on the
                blockchain."
            />
            <BenefitBox
              primary="Clear and discoverable data collection requirements"
              secondary="Lario enables DAOs to publish form schemas as an onchain
                attestation using EAS. This provides clarity on what data is
                needed for reporting and survey, offers a tamper-proof record of
                these requirements, and ensures that any changes or updates are
                transparently logged on the blockchain and subject to the DAO
                governance procedures."
            />
            <BenefitBox
              primary="Streamlined Governance and decision making"
              secondary="Onchain ad offchain attestations provide transparent and
                verifiable data records, assisting DAOs in making informed
                decisions based on the insights derived from the data. With
                Lario governance actions are rooted in evidence and the genuine
                needs and feedback of the community without compromising
                privacy."
            />
          </Stack>
        </Container>
      </Box>
      <Box component="section" mb={4}>
        <Container maxWidth="md">
          <Divider />
        </Container>
      </Box>
      <Box component="section" mb={4}>
        <Container maxWidth="md">
          <Typography variant="h6">Examples</Typography>
          <Stack direction="column" py={3} spacing={3}>
            <ExampleCard
              primary="Basic form"
              secondary="This is just a basic form"
              href="/builder/0xaa8ed4b6ad1ad5a52fe365b6591ed1813cc2778d13260ad41331990d7ab03d88/logic"
            />
            <ExampleCard
              primary="Survey with rewards"
              secondary="This is a Survey with a final treat"
              href="/builder/0xaa8ed4b6ad1ad5a52fe365b6591ed1813cc2778d13260ad41331990d7ab03d88/logic"
            />
            <ExampleCard
              primary="DAO onboarding"
              secondary="This is a complex DAO onboarding flow"
              href="/builder/0xaa8ed4b6ad1ad5a52fe365b6591ed1813cc2778d13260ad41331990d7ab03d88/logic"
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

function BenefitBox(props: { primary?: string; secondary?: string }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {props.primary}
      </Typography>
      <Typography color="text.secondary">{props.secondary}</Typography>
    </Box>
  );
}
function ExampleCard(props: {
  primary?: string;
  secondary?: string;
  href: string;
}) {
  return (
    <Card>
      <CardActionArea component={Link} href={props.href} sx={{ p: 2, flex: 1 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <ListItemText primary={props.primary} secondary={props.secondary} />
          <IconButton>
            <Icon icon="octicon:link-external-16" />
          </IconButton>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
