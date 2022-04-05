import React, { useContext, useState } from 'react';
import { Button } from '../Buttons';
import { CardsContext } from '../../context';

export const AddNewFieldForm = () => {
  const { addNewField, setIsVisibleNewFieldForm } = useContext(CardsContext);
  const [fieldName, setFieldName] = useState('');
  const [text, setText] = useState('cancel');  

  const inputHandler = ({ target:{value}}) => {
    setFieldName(value);
    value.length ? setText('add') : setText('Cancel');
  }

  const cancelForm = () => setIsVisibleNewFieldForm(false);

  return (
    <div className='add-field-form'>
      <input type="text" placeholder='Add new field' onChange={inputHandler} />
      {text === 'add' ? <Button classes={['add-field-btn']} text={text} callback={() => addNewField(fieldName)} /> : <Button classes={['add-field-btn']} text={text} callback={cancelForm} />}
    </div>
  )
}