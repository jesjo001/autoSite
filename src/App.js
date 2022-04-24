import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home/Home'
import NewHome from './pages/home/NewHome'
import Navbar from './pages/navs/Navbar'
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/"> 
            {/* <Home/> */}
            <NewHome />
          </Route>
        </Switch>
      </div>  

    </Router>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  margin: 0px;
  padding: 0px;
  height: auto;
  margin-left: 0px;
  margin-top: -10px;
`
