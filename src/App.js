import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile"
import Work from "./pages/work/Work"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
    <Switch>
      <Route  path = "/home">
        <Home/>
      </Route>
      <Route  path = "/login">
        <Login/>
      </Route> 
      <Route  path = "/profile/:username">
         <Profile/>
      </Route> 
      <Route path = "/work">
        <Work/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
