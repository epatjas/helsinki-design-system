import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconEnvelope: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M22 4v16H2V4h20zm-7.862 9.436L12 15.338l-2.14-1.902L4.536 18h14.927l-5.325-4.564zM20 8.226l-4.353 3.869L20 15.826v-7.6zM4 8.227v7.598l4.352-3.73L4 8.227zM19.493 6H4.505L12 12.661 19.493 6z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconEnvelope;
