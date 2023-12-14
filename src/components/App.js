import { Routes, Route, Navigate } from 'react-router';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

const App = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <div className="App">
      <Routes>
        {!isLoggedIn && (<Route path='/' element={<Home />} />)}
        {isLoggedIn && (<Route path='/' element={<Navigate to={'/profile'} />} />)}
        {isLoggedIn && (<Route path='/profile' element={<Profile />} />)}
        {!isLoggedIn && (<Route path='/profile' element={<Auth />} />)}
      </Routes>
    </div>
  );
}

export default App;