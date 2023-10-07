import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { FormNodeToolbarProps } from './types';
import { Icon } from '../Icon';
import { Typography } from '@mui/material';

const StyleRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.paper,
  alignItems: 'center',
  border: `1px solid ${theme.palette.grey['300']}`,
  borderRadius: theme.shape.borderRadius,
  fontSize: '1rem',
  maxWidth: 300,
  '.iconify': {
    color: theme.palette.text.secondary,
    display: 'block',
  },
}));

const StyleIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 40,
  minHeight: 40,
  backgroundColor: theme.palette.grey[300],
}));

export type FormNodeTypeItemProps = FormNodeToolbarProps & {
  collapsed?: boolean;
};

export const FormNodeTypeItem = forwardRef(
  ({ type, label, icon, collapsed, ...others }: FormNodeTypeItemProps, ref) => {
    return (
      <StyleRoot {...others} ref={ref as any}>
        <StyleIcon>
          {typeof icon === 'string' ? <Icon icon={icon} width={24} /> : icon}
        </StyleIcon>
        {!collapsed && (
          <Typography sx={{ px: 2 }} noWrap>
            {label}
          </Typography>
        )}
      </StyleRoot>
    );
  }
);
