import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

type ValidStep = 'ens' | 'nft' | 'token' | 'poap';

export function WorkflowStepBuilder() {
  const [rules, setRules] = useState({
    ens: false,
    nft: false,
    token: false,
    poap: false,
  });

  const handleToggle = (key: ValidStep) => () =>
    setRules((v) => ({ ...v, [key]: !v[key] }));

  return (
    <List>
      <WorkflowStepItem
        primaryText="ENS"
        open={rules.ens}
        onToggle={handleToggle('ens')}
      />
      <WorkflowStepItem
        primaryText="NFT"
        open={rules.nft}
        onToggle={handleToggle('nft')}
      >
        <Box p={2}>
          <TextField label="NFT address" size="small" />
        </Box>
      </WorkflowStepItem>
      <WorkflowStepItem
        primaryText="ERC20"
        open={rules.token}
        onToggle={handleToggle('token')}
      >
        <Box p={2}>
          <TextField label="Token address" size="small" />
        </Box>
      </WorkflowStepItem>
      <WorkflowStepItem
        primaryText="POAP"
        open={rules.poap}
        onToggle={handleToggle('poap')}
      >
        <Box p={2}>
          <TextField label="POAP" size="small" />
        </Box>
      </WorkflowStepItem>
    </List>
  );
}

export type WorkflowStepItemProps = {
  open?: boolean;
  onToggle?: () => void;
  primaryText?: string;
  secondaryText?: string;
};

export function WorkflowStepItem(
  props: React.PropsWithChildren<WorkflowStepItemProps>
) {
  const { open, primaryText, secondaryText, onToggle, children } = props;
  return (
    <List component="div" disablePadding dense>
      <ListItemButton onClick={onToggle}>
        <ListItemText primary={primaryText} secondary={secondaryText} />
        <ListItemIcon>
          <Switch checked={open} />
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </List>
  );
}
