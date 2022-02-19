import React from 'react';
import { checkIsArray } from './../../helpers';

export function H2({classes, text}) {
  return (
    <h2 className = {checkIsArray(classes)}>{text}</h2>
  )
}
