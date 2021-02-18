import './App.scss';
import Navbar from './components/Navbar';
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
    </div>
  );
}

export default App;
