import React from 'react';
import { checkIsArray } from '../../helpers';

export function Container({classes, children, clickCallback}) {
  return (
    <div className={checkIsArray(classes)} onClick={clickCallback}>
      {children}
    </div>
  )
}
