import React from 'react';
import { checkIsArray } from '../../helpers';

export function Section({classes, children}) {
  return (
    <section className={checkIsArray(classes)}>
      {children}
    </section>
  )
}
