import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../Container';
import { H3 } from '../Headings';
import { Text } from '../Text';
import { StarRating } from './StarRating';
import { Button, SubmitButton } from '../Buttons';
import { MainPizzaAppContext } from '../../context';
import { StarRatingContext } from '../../context';

export function CardWrite({ content }) {
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const { rating } = useContext(StarRatingContext);
  const { partyGuests, setIsLoaded, setIsVisibleTable, setIsVisibleCard } = useContext(MainPizzaAppContext);

  const clickCancel = () => {
    setIsVisibleCard(false);
    setIsVisibleTable(true);
  }

  const submitData = (data) => {
    const dataIndex = partyGuests.indexOf(content);
    const newData = { ...data, rating };
    partyGuests.splice(dataIndex, 1, { ...content, comments: newData });
    localStorage.setItem('partyGuests', JSON.stringify(partyGuests));
    reset();
    setIsVisibleCard(false);
    setIsVisibleTable(true);
    setIsLoaded(false);
  }

  

  return (
    <Container classes={["card"]}>
      <form className="empty-form" onSubmit={handleSubmit(submitData)}>
        <Container classes={["name-field"]}>
          <H3 classes={["name-field__title"]} text='name'/>
          <Text classes={["name-field__name"]} text={content.name}/>
        </Container>
          <StarRating classes={["stars"]} />
        <Container classes={["empty-form__row"]}>
            <label htmlFor="name" className="label">phone</label>
            <input id="name" type="text" className="text" {...register('phone', {
              required: 'Field is required',
              minLength: {
                value: 3,
                message: 'Minimum 3 symbols'
              },
              maxLength: {
                value: 10,
                message: 'Maximum 10 symbols'
              },
            })} />
          {errors?.phone && <p className="error-text">{errors?.phone?.message}</p>}
        </Container>
        <Container classes={["empty-form__row"]}>
          <label htmlFor="comment" className="label">comment</label>
          <textarea id="comment" type="text" className="text" {...register('comment', {
            required: 'Field is required',
              minLength: {
                value: 3,
                message: 'Minimum 3 symbols'
              },
              maxLength: {
                value: 100,
                message: 'Maximum 100 symbols'
              },
          })}></textarea>
          {errors?.comment && <p className="error-text">{errors?.comment?.message}</p>}
        </Container>
        {isValid ? <SubmitButton classes={["action-btn"]} text='save' />:<Button classes={["action-btn"]} text='cancel' callback={clickCancel} /> }
      </form>
    </Container>
  )
}
