import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import Footer from './Components/Footer/Footer'
import "./App.css";
import Invitations from './Components/Home/Invitations'
const store = ConfigureStore();

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Main />
          <Footer />
          </>
      </BrowserRouter>
      </Provider>
      </>
     
  );
}

export default App;
