import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Notice from './pages/Notice';

function App() {
  return (
    <div id="container">
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}  />
          <Route  path="/notice?index=:index" component={Notice}  />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
