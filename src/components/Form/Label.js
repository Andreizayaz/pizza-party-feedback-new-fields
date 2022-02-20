import React from 'react';
import { checkIsArray } from '../../helpers';

export function Label({classes, text, forElemId}) {
  return (
    <label className={checkIsArray(classes)} htmlFor={forElemId}>
      {text}
    </label>
  )
}
