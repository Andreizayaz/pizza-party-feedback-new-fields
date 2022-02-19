import React from 'react';
import { checkIsArray } from '../../helpers';

export function Caption({classes, text}) {
  return (
    <caption className={checkIsArray(classes)}>
      {text}
    </caption>
  )
}
