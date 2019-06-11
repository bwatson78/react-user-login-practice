import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class AppHeader extends React.Component {

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Brand>
          <Link to='/'>Rails React Token Auth</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Link to="/">Home</Link>

            {this.props.appState.pages.map(page =>
                <Link to={'/page/' + page.id}>
                  {page.title}
                </Link>
            )}
          </Nav>
          <Nav>
            {!this.props.appState.jwt &&
              <Link to="/sign-in">
                Sign In
              </  Link>
            }

            {this.props.appState.jwt &&
              <Link to="/sign-out">
                Sign Out
              </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default AppHeader;