import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './components/pages/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar/>
        <Switch>
           {/* <Route path="/" exact component={Home}/>
          <Route path="/contacts" exact component={Contacts}/>
          <Route path="/about-me" exact component={About me}/> */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
