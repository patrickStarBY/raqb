import './BaseButton.scss';

import { Button, ButtonProps } from '@material-ui/core';
import cn from 'classnames';
import React from 'react';

export const BaseButton: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <Button className={cn('base-button', className)} {...props}>
    {children}
  </Button>
);
