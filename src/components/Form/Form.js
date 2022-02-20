import React from 'react';
import { checkIsArray } from '../../helpers';

export function Form({classes, children}) {
  return (
    <form className={checkIsArray(classes)}>
      {children}
    </form>
  )
}
