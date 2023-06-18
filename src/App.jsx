import React from 'react'

import Form from './Form';

import { fields } from './schema';

import './App.css';

function App() {
 return (
  <>
    <Form fields={fields} />
  </>
 )
}

export default App
