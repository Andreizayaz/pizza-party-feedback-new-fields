import React from 'react';
import { checkIsArray } from '../../helpers';

export function TextArea({classes, placeholderText, elemId}) {
  return (
    <textarea className={checkIsArray(classes)} id={elemId} placeholder={placeholderText}></textarea>
  )
}
