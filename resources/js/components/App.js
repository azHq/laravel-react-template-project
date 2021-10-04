import {React,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './FontAwesomeIcon';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import axios from 'axios';
import Dashboard from './Dashboard';
import Login from './Login';
axios.defaults.withCredentials = true;
import Sidebar from './Sidebar';
import Navbar from './Navbar';
function App() {
     //var apiToken=localStorage.getItem("apiToken");
     const[apiToken,setApiToken]=useState(localStorage.getItem("apiToken"));
     const history=useHistory();
    useEffect(() => {
       
       

      }, []);
    return (
        <div className="App">
           <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login setApiToken={setApiToken} />
                    </Route>
                    <Route path="/*" >
                         { apiToken?<Dashboard />: <Redirect to="/login"></Redirect>}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default withRouter(App);

if (document.getElementById('App')) {
    ReactDOM.render(<App/>, document.getElementById('App'));
}
