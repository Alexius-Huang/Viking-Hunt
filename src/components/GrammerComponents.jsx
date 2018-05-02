import React from 'react';

const Word = ({
  masculine = false,
  feminine = false,
  neuter = false,
  verb = false,
  adj = false,
  adv = false,
  conj = false,
  plural = undefined,
  eng = '',
  children
}) => {
  let type;
  if (masculine || feminine || neuter) {
    if (masculine && feminine) {
      type = '(m./f.)';
    } else if (masculine) {
      type = '(m.)';
    } else if (neuter) {
      type = '(n.)';
    } else if (feminine) {
      type = '(f.)';
    }
  } else if (verb) {
    type = '(v.)';
  } else if (adj) {
    type = '(adj.)';
  } else if (adv) {
    type = '(adv.)';
  } else if (conj) {
    type = '(conj.)';
  }

  return (
    <span>
      <strong>{children}</strong> {type} {eng}
      {plural && <span>({plural} <i>(pl.)</i>)</span>}
    </span>
  );
}

export default Word;
