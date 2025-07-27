import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Login from './login';
import Home from './home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
