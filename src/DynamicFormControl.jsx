import React from 'react'
import { useFormContext } from 'react-hook-form'

const DynamicFormControl = (type, fieldName, defaultValue, config, options) => {
  const register = useFormContext();

  switch (type) {
    case 'text':
      return (
        <input 
          type="text"
          defaultValue={defaultValue}
          {...register(fieldName, config)}
        />
      );

    case 'email':
      return (
        <input 
          type='email'
          defaultValue={defaultValue}
          {...register(fieldName, config)}
        />
      );

    case 'date':
      return (
        <input
          type='date'
          defaultValue={defaultValue}
          {...register(fieldName, config)}
        />
      );

      case 'password':
        return (
          <input
            type='password'
            defaultValue={defaultValue}
            {...register(fieldName, config)}
          />
        );

      case 'select':
        return (
          <select 
            name={fieldName} 
            id={fieldName}
            {...register(fieldName, config)}
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