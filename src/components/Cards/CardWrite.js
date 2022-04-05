import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../Container';
import { H3 } from '../Headings';
import { Text } from '../Text';
import { StarRating } from './StarRating';
import { Button, SubmitButton } from '../Buttons';
import { MainPizzaAppContext } from '../../context';
import { StarRatingContext } from '../../context';
import { AddNewFieldForm } from './AddNewFieldForm';
import { CardsContext } from '../../context';
import { FormGroup } from './FormGroup';

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
  const [ newFields, setNewFields ] = useState([]);
  const [isVisibleNewFieldForm, setIsVisibleNewFieldForm] = useState(false);
  const [newFieldsData, setNewFieldsData] = useState({});

  const clickCancel = () => {
    setIsVisibleCard(false);
    setIsVisibleTable(true);
  }

  const addNewField = (newField) => {
    const tempArray = newFields;
    tempArray.push(newField);
    tempArray.reverse();
    setNewFields(tempArray);
    setIsVisibleNewFieldForm(false);
  }

  const showAddNewFieldForm = (e) => {
    e.preventDefault();
    setIsVisibleNewFieldForm(true);
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

  const handleInputFields = (name, value) => {
    setNewFieldsData({ ...newFieldsData, [name]: value });
  }

  const submitData = (data) => {
    const dataIndex = partyGuests.indexOf(content);
    const newData = Object.keys(newFieldsData).length
      ? { ...Object.assign(newFieldsData, data), rating }
      : { ...data, rating };
    partyGuests.splice(dataIndex, 1, { ...content, comments: newData });
    localStorage.setItem('partyGuests', JSON.stringify(partyGuests));
    reset();
    setIsVisibleCard(false);
    setIsVisibleTable(true);
    setIsLoaded(false);
    console.log(JSON.stringify(newData));
  }

  

  return (
    <Container classes={["card"]}>
      {
        isVisibleNewFieldForm &&
        <CardsContext.Provider value={{addNewField, isVisibleNewFieldForm, setIsVisibleNewFieldForm}}>
            <AddNewFieldForm />
        </CardsContext.Provider>
      }
      <form className="empty-form" onSubmit={handleSubmit(submitData)}>
        <Container classes={["name-field"]}>
          <H3 classes={["name-field__title"]} text='name'/>
          <Text classes={["name-field__name"]} text={content.name}/>
        </Container>
        <StarRating classes={["stars"]} />
        {
          newFields.length !== 0 && newFields.map(item =>
            <FormGroup key={item} text={item} handleInput={handleInputFields}/>)
        }
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
        <div className='btn-container'>
          <Button classes={['add-field-btn']} text='new field' callback={showAddNewFieldForm}/>
          {(isValid && isValidPhone) ? <SubmitButton classes={["action-btn"]} text='save' />:<Button classes={["action-btn"]} text='cancel' callback={clickCancel} /> }
        </div>
      </form>
    </Container>
  )
}
