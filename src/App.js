import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import Navbar from './componants/Navbar';
import Footer from './componants/Footer';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sign-up'>
            <SignUpPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
