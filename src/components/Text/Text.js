import React from 'react';
import { checkIsArray } from '../../helpers';

export function Text({classes, text}) {
  return (
    <p className={checkIsArray(classes)}>
      {text}
    </p>
  )
}
