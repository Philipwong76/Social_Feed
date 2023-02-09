import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar className='TopNav'>
      <Container>
        <Navbar.Brand className='Font'>
            <h3 className='NameItem1'>Social</h3> <h3 className='NameItem2'>Feed</h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;