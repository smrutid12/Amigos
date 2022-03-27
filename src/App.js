import "./App.css";
import "./Home/Home"
import Home from "./Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Genre from "./Home/Genre";
import Education from "./Home/Education";
import Sports from "./Home/Sports";

function App() {
  return (
    <div className="App">
      <header className="App-header"><Home/></header>
      <Router>
        <Switch>
         
          <Route exact path="/" component={Home} />
            
          <Route path="/genre" component={Genre} />
            
          <Route path="/education" component={Education} />

          <Route path="/sports" component={Sports} />
            
          {/* <Route path="/sports" component={Sports} /> */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
