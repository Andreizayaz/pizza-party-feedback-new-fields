import React from 'react';
import { checkIsArray } from '../../helpers';

export function H3({classes, text}) {
  return (
    <h3 className = {checkIsArray(classes)}>{text}</h3>
  )
}
