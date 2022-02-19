import React from 'react';
import { checkIsArray } from '../../helpers';

export function Header({classes, children}) {
  return (
    <header className={checkIsArray(classes)}>
      {children}
    </header>
  )
}
