import React from 'react'
import DynamicFormControl from './DynamicFormControl'

const Form = ({fields}) => {
  
  return (
    <form>
        {fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.fieldName}>{field.label}</label>
            <DynamicFormControl {...field} />
          </div>
        ))}
    </form>
  )
}

export default Form