import React from 'react'
import { checkIsArray } from '../../helpers';

export function Img({imgSource, altText, titleText, classes}) {
  return (
    <img className={checkIsArray(classes)} src={imgSource||'#'} alt={altText||''} title={titleText||''}/>
  )
}
