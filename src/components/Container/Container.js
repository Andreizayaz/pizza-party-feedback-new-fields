import React from 'react';
import { checkIsArray } from '../../helpers';

export function Container({classes, children}) {
  return (
    <div className={checkIsArray(classes)}>
      {children}
    </div>
  )
}
