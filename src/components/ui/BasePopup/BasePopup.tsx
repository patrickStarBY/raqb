import './BasePopup.scss';

import { Backdrop, Fade, Modal, ModalProps } from '@material-ui/core';
import cn from 'classnames';
import React from 'react';

interface IBasePopup extends ModalProps {
  long?: boolean;
}

export const BasePopup: React.FC<IBasePopup> = ({ open, children, long, ...props }) => (
  <Modal
    open={open}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
    {...props}
  >
    <Fade in={open} unmountOnExit>
      <div className="base-popup">
        <div className={cn('base-popup__container', long && 'base-popup__container_long')}>
          <div className="base-popup__content">{children}</div>
        </div>
      </div>
    </Fade>
  </Modal>
);
