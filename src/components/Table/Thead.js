import React from 'react';
import { checkIsArray } from '../../helpers';

export function Thead({classes, children}) {
  return (
    <thead className={checkIsArray(classes)}>
      {children}
    </thead>
  )
}
