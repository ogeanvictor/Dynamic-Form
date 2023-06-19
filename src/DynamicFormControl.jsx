import React from 'react';

const DynamicFormControl = ({type, fieldName, defaultValue, register, config, options}) => {
  switch (type) {
    case 'text':
      return (
        <input
          className='input-area'
          id={fieldName}
          type={type}
          defaultValue={defaultValue}
          {...register(fieldName, {...config})}
        />
      );

    case 'email':
      return (
        <input
          className='input-area'
          id={fieldName}
          type={type}
          defaultValue={defaultValue}
          {...register(fieldName, {...config})}
        />
      );

    case 'date':
      return (
        <input
          className='input-area'
          id={fieldName}
          type={type}
          defaultValue={defaultValue}
          {...register(fieldName, {...config})}
        />
      );

    case 'password':
      return (
        <input
          className='input-area'
          id={fieldName}
          type={type}
          defaultValue={defaultValue}
          {...register(fieldName, {...config})}
        />
      );

    case 'select':
      return (
        <select 
          className='input-area'
          id={fieldName}
          {...register(fieldName, {...config})}
          name={fieldName}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )

    default:
      return (
        <input type='text' />
      )
  }
}

export default DynamicFormControl