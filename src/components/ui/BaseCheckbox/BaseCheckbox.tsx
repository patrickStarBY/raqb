import './BaseCheckbox.scss';

import { Checkbox, FormControlLabel, FormControlLabelProps } from '@material-ui/core';
import cn from 'classnames';
import React from 'react';

type TBaseCheckbox = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<FormControlLabelProps, 'control' | 'onChange'>;

export const BaseCheckbox: React.FC<TBaseCheckbox> = ({
  className,
  checked,
  onChange,
  name,
  ...props
}) => (
  <FormControlLabel
    className={cn('base-checkbox', className)}
    control={<Checkbox checked={checked} onChange={onChange} name={name} color="primary" />}
    {...props}
  />
);
