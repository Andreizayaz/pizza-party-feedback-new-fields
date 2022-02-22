import React, {useContext, useState} from 'react';
import { Container } from '../Container';
import { Button } from '../Buttons';
import { CardWrite } from './CardWrite';
import { CardRead } from './CardRead';
import { MainPizzaAppContext } from '../../context';
import { StarRatingContext } from '../../context';

export function Card() {
  const [countStars] = useState(5);
  const [rating, setRating] = useState(3);
  const { setIsVisibleTable, setIsVisibleCard, cardContent } = useContext(MainPizzaAppContext);
  const isEmpty = Object.keys(cardContent.comments).length === 0;

  const hideCard = () => {
      setIsVisibleCard(false);
      setIsVisibleTable(true);
  }

  return (
    <Container classes={["overlay"]}>
      <Button classes={["close-btn"]} callback={hideCard} text='X'/>
      <StarRatingContext.Provider value={{
      countStars,
      rating: isEmpty ? rating : cardContent.comments.rating,
      setRating,
      isReadOnly: isEmpty ?false:true
    }}>
        {isEmpty ? <CardWrite content={cardContent}/> : <CardRead cardContent={cardContent}/>}
      </StarRatingContext.Provider>
    </Container>
    )
}
