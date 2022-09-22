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
     <div id="page-container">
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Main />
          <Footer />
          </>
      </BrowserRouter>
      </Provider>
     </div>
  );
}

export default App;
