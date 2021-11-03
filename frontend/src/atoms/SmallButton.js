import React from 'react';
import classNames from 'classnames';

const COLORS = {
  red: 'bg-red',
  green: 'bg-green',
  default: 'bg-blue',
};

export function SmallButton({ colorScheme = 'default', ...props }) {
  return (
    <button
      className={classNames('f6 dim br2 bn pa1 dib white', COLORS[colorScheme])}
      type="button"
      {...props}
    />
  );
}
