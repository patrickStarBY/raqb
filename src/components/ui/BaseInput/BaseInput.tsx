import './BaseInput.scss';

import { TextField, TextFieldProps } from '@material-ui/core';
import cn from 'classnames';
import React from 'react';

export const BaseInput: React.FC<TextFieldProps> = ({ className, ...props }) => (
  <TextField className={cn('base-input', className)} {...props} />
);
