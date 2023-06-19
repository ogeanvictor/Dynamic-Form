import React from 'react';
import Form from './Form';
import { fields } from './schema';

import './App.css';

function App() {
 return (
    <div className='container'>
      <h1>Formulários Dinâmicos</h1>
      <Form fields={fields} />
    </div>
 )
}

export default App
