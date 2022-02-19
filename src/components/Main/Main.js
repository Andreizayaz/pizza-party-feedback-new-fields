import React from 'react';
import { checkIsArray } from '../../helpers';

export function Main({classes, children}) {
  return (
    <main className={checkIsArray(classes)}>
      {children}
    </main>
  )
}
