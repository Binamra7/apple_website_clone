import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './components/pages/Sidebar';
import Footer from './components/pages/Footer';

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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
