import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  const isBackgroundRed = true;
  return (
    <div className="App" style={{backgroundColor: isBackgroundRed ?'white':'blue',
    }}>
      <Router>
        <div className="btncontent">
        <div>
        <button className="Cbtn">
        <Link to="/createpost"> Create A Post</Link>
        </button>
        </div>
       
        <div>
        <button className="Hbtn">
        <Link to="/"> Home Page</Link>
        </button>
        </div>

        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" exact component={CreatePost} />
        </Switch>
       </Router>
       </div>
  );
}

export default App;