import React from 'react';
import { checkIsArray } from '../../helpers';

export function Button({classes, text, callback}) {
  return (
    <button data-testid='button' className={checkIsArray(classes)} onClick={callback}>{text}</button>
  )
}
