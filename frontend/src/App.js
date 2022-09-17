import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import Footer from './Components/Footer/Footer'
import "./App.css";
const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Main />
          <Footer />
          </>
      </BrowserRouter>
      </Provider>
     
  );
}

export default App;
