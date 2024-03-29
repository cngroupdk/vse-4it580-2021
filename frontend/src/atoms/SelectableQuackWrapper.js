import React from 'react';
import classNames from 'classnames';

export function SelectableQuackWrapper({ isSelected, children }) {
  return (
    <div
      className={classNames('mv2 pa2 flex br2 bg-black-05', {
        'bg-black-05': !isSelected,
        'bg-light-green': isSelected,
      })}
    >
      {children}
    </div>
  );
}
