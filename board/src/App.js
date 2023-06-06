import './App.css';
import Homepage from './components/page/Homepage/Homepage';

import Todo from './components/molecules/Todo/Todo';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
    <Provider store = {store}>
      <Homepage/> 
      <Todo/>
  

    </Provider>
    </>
  );
}

export default App;
