import { useSelector } from 'react-redux';

const App = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);


  return (
    <div className="App">

    </div>
  );
}

export default App;