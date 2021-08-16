import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboards from './pages/Dashboards/Dashboards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard/home" />
          </Route>
          <Route path="/dashboard/:page" exact>
            <Dashboards />
          </Route>
          <Route path="/dashboard/:page/:id" exact>
            <h1>id</h1>
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
