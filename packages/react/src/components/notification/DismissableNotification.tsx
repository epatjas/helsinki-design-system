import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops.cjs';

import classNames from '../../utils/classNames';
import Notification, { NotificationProps } from './Notification';
import { IconCross } from '../../icons';
import styles from './DismissableNotification.module.css';

export type DismissableNotificationProps = {
  closeButtonLabelText: string;
  onClose?: () => void;
} & NotificationProps;

const DismissableNotification: React.FC<DismissableNotificationProps> = (props: DismissableNotificationProps) => {
  const [isOpen, setOpen] = useState(true);
  const { type = null, closeButtonLabelText = null, onClose = null, children = null } = props;

  return (
    <Transition
      config={{ tension: 300, friction: 30 }}
      items={isOpen}
      enter={{ height: 'auto' }}
      leave={{ height: 0 }}
      onDestroyed={onClose}
    >
      {(show) =>
        show &&
        ((transitionProps) => (
          <div style={{ ...transitionProps, ...{ overflowY: 'hidden', position: 'relative' } }}>
            <Notification {...props}>
              <button
                className={classNames(styles.buttonClose, styles[type])}
                type="button"
                title={closeButtonLabelText}
                aria-label={closeButtonLabelText}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <IconCross className={styles.iconClose} />
              </button>
              {children}
            </Notification>
          </div>
        ))
      }
    </Transition>
  );
};

export default DismissableNotification;
