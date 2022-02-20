import React from 'react';
import { checkIsArray } from '../../helpers';

export function InputText({classes, text, elemId, placeholderText}) {
  return (
    <input type='text' className={checkIsArray(classes)} id={elemId} placeholder={placeholderText}/>
  )
}
