import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { FormNodeToolbarProps } from './types';
import { Icon } from '../Icon';

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.paper,
  alignItems: 'center',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.grey['500'],
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.8rem',
  padding: theme.spacing(1),
  maxWidth: 300,
  '.iconify': {
    color: theme.palette.text.secondary,
    display: 'block',
  },
}));

export type FormNodeTypeItemProps = FormNodeToolbarProps & {
  collapsed?: boolean;
};

export const FormNodeTypeItem = forwardRef(
  ({ type, label, icon, collapsed, ...others }: FormNodeTypeItemProps, ref) => {
    console.log(label, icon, type);
    return (
      <StyledRoot {...others} ref={ref as any}>
        {typeof icon === 'string' ? <Icon icon={icon} width={24} /> : icon}

        {!collapsed && (
          <span style={{ marginLeft: 8 }}>{label}asda sdasdassda sdasd</span>
        )}
      </StyledRoot>
    );
  }
);
