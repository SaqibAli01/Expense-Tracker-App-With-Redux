
import './App.css';
import { Provider } from 'react-redux';
import Apps from './ComponentsRedux/Apps'
import store from './ComponentsRedux/Store/Store';

function App() {
  return <>
   <Provider store={store}>
<Apps/>
   </Provider>

    </>
}

export default App;
