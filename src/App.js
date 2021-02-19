import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <div id="container">
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main}  />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
