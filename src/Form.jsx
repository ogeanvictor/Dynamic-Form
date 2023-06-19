import React from 'react';
import { useForm } from 'react-hook-form';
import DynamicFormControl from './DynamicFormControl';

const Form = ({ fields }) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
        {fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.fieldName}>{field.label}</label>
            <DynamicFormControl {...field} register={register} />
          </div>
        ))}

        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form