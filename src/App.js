import { Container } from 'react-bootstrap';
import './css/App.css';
import Navbar from './Navbar';
import Home from './Home';
import Booking from './Booking';
import Menu from './Menu';
import OurStory from './OurStory';
import Contact from './Contact';
import Footer from './Footer';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes /* switch replaced by routes in ver 6 */ } from 'react-router-dom';
import SignIn from './SignIn';

function App() {
  return (
      <Router>
        <Container>
          <Navbar/>
            <Routes>
              <Route exact path='/' element={ <Home/> } />
              <Route exact path='/booking' element={ <Booking/> } />
              <Route exact path='/menu' element={ <Menu/> } />
              <Route exact path='/our_story' element={ <OurStory/> } />
              <Route exact path='/contact' element={ <Contact/> } />
              <Route path="*" element={<NotFound/>}/>
              <Route exact path='/signin' element={<SignIn/>} />
            </Routes>
          <Footer></Footer>
        </Container>
      </Router>
  );
}

export default App;