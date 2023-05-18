import React, { } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');


  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    alert("Logout SuccesFully");
    navigate('/login')
  }

  return (
    <Navbar style={{ margin: "5px" }} bg="light" expand="lg">
      <Navbar.Brand href="#home">Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <ul className="navbar-nav">
            <li style={{ margin: '20px' }} className="nav-item">
              <Link to='/'>
                Home
              </Link>
            </li>

            <li style={{ margin: '20px' }} className="nav-item">
              <Link to='/addCategory'>
                AddCategory
              </Link>
            </li>

            <li style={{ margin: '20px' }} className="nav-item">
              <Link to='/addBlog'>
                AddBlog
              </Link>
            </li>
            {token && token !== null ?
              <>
                <button>Welcome: {userName}</button>
                <button onClick={handleLogOut} >Logout</button>
              </>
              :
              <>
                <li style={{ margin: '20px' }} className="nav-item">
                  <Link to='/register'>
                    Register
                  </Link>
                </li>
                <li style={{ margin: '20px' }} className="nav-item">
                  <Link to='/login'>
                    Login
                  </Link>
                </li>
              </>}
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
