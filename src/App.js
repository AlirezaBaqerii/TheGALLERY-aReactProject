import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import Navbar from './componants/Navbar';
import Footer from './componants/Footer';
import SignUpPage from './pages/SignUpPage';
import Painting from './pages/Painting';
import About from './pages/About';
import Error from './pages/Error';

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
          <Route path='/artworks/:id'>
            <Painting />
          </Route>

          <Route path='/about'>
            <About />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
