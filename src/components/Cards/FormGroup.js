import React from 'react';

export const FormGroup = ({ text, handleInput }) => {
  const handleInputValue = ({target}) => {
    const { name, value } = target;
    if (!value.trim().length) {
      return;
    }

    handleInput(name, value);
  }
  return (
    <div className="empty-form__row">
      <label htmlFor={text} className="label">{text}</label>
      <input id={text} type="text" className="text" name={text} onChange={handleInputValue}/>
    </div>
  )
}