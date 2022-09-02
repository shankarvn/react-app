import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import { TodoList } from './components/TodoList';
import { ToDo } from './model/state';
import { ToDoUseState } from './components/ToDoUseState';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { PhoneInput } from './components/PhoneInput';
import { SampleRedux } from './components/SampleRedux';

function App() {



  return (

    <div className="app">
      {/* Example for normal state management within a component and passing props (useState) */}

      <main>
        <Routes>

          <Route path="usestate" element={<ToDoUseState/>}>
          </Route>

          <Route path="phone" element={<PhoneInput/>}>
          </Route>

          <Route path="redux" element={<SampleRedux/>}>
          </Route>

          <Route path="/" element={<Home/>}>
          </Route>

        </Routes>
      </main>

      
    </div>
  );
}

export default App;
