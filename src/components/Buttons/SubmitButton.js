import React from 'react';
import { checkIsArray } from '../../helpers';

export function SubmitButton({ classes, text }) {
  return (
    <input type="submit" className={checkIsArray(classes)} value={text}/>
  )
}
