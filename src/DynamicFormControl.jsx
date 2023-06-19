import React from 'react';

const DynamicFormControl = ({type, fieldName, defaultValue, register, config, options}) => {
  switch (type) {
    case 'text':
      return (
        <input
          id={fieldName}
          type={type}
          defaultValue={defaultValue}
          {...register(fieldName, {...config})}
        />
      );

    case 'email':
      return (
        <input
          id={fieldName}
          type={type}
          defaultValue={defaultValue}
          {...register(fieldName, {...config})}
        />
      );

    case 'date':
      return (
        <input
          id={fieldName}
          type={type}
          defaultValue={defaultValue}
          {...register(fieldName, {...config})}
        />
      );

    case 'password':
      return (
        <input
          id={fieldName}
          type={type}
          defaultValue={defaultValue}
          {...register(fieldName, {...config})}
        />
      );

    case 'select':
      return (
        <select 
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