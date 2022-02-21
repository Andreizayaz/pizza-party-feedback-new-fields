import React, {useContext} from 'react';
import { Star } from './Star';
import { checkIsArray } from '../../helpers';
import { StarRatingContext } from '../../context';

export function StarRating({ classes }) {
  debugger
  const { countStars, rating, setRating, isReadOnly } = useContext(StarRatingContext);

  if (isReadOnly) {
    return (
    <div className={checkIsArray(classes)}>
      {
        new Array(countStars)
          .fill()
          .map((_, index) => (
            <Star key={index} classes={["stars__item"]} filled={index < rating} />))
      }
    </div>
  )
  }
  
  return (
    <div className={checkIsArray(classes)}>
      {
        new Array(countStars)
          .fill()
          .map((_, index) => (
            <Star key={index} classes={["stars__item"]} filled={index < rating} callback={() => setRating(index + 1)} />))
      }
    </div>
  )
}
