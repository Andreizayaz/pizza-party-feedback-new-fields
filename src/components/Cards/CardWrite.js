import React, { useContext, useState } from 'react';
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

  const [isValidPhone, setValidPhone] = useState(true);
  const { rating } = useContext(StarRatingContext);
  const { partyGuests, setIsLoaded, setIsVisibleTable, setIsVisibleCard } = useContext(MainPizzaAppContext);

  const clickCancel = () => {
    setIsVisibleCard(false);
    setIsVisibleTable(true);
  }

  const checkPhoneInput = ({ target }) => {
    const value = target.value;
    if (!value) return;
    const digitsCount = value.split('').filter(item=>Number(item)).length;

    if (digitsCount >= 3 && digitsCount <= 10) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
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
            <label htmlFor="phone" className="label">phone</label>
            <input id="phone" type="text" onInput={(e)=>checkPhoneInput(e)} className="text" {...register('phone', {
              required: 'Field is required'
            })} />
          {errors?.phone && <p className="error-text">{errors?.phone?.message}</p>}
          {!isValidPhone && <p className="error-text">Phon number can contain only digits, '+' or whitespaces. Count digits in phone number must be from 3 to 10</p>}
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
        {(isValid && isValidPhone) ? <SubmitButton classes={["action-btn"]} text='save' />:<Button classes={["action-btn"]} text='cancel' callback={clickCancel} /> }
      </form>
    </Container>
  )
}
