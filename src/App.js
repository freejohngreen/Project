import './App.css';
import{BrowserRouter as Router, Route, Switch, Link} from "react-router-dom" 
import Home from "./Pages/home"
import Createrequest from "./Pages/Createrequest"

//This block of code is what creates the links to the two different pages.
function App() {
 
  return <div className= "App">
    <Router>
      <div className="navbar">
      <Link to="/createrequest">Create A Request</Link>
      <Link to= "/">Home Page</Link>
      </div>
      <Switch>
        <Route path="/" exact component = {Home}></Route>
        <Route path="/createrequest" exact component= {Createrequest}></Route>
      </Switch>
    </Router>
  </div>;
  
}

export default App;
