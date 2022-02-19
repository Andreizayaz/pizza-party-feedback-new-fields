import React from 'react';
import { checkIsArray } from '../../helpers';

export function H1({classes, text}) {
  return (
    <h1 className = {checkIsArray(classes)}>{text}</h1>
  )
}
