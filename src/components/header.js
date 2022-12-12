import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
<header id="header" className="d-flex flex-column justify-content-center">

<nav id="navbar" className="navbar nav-menu">
  <ul>
	<li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
	<li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
	<li><a href="#skills" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Skills</span></a></li>
	<li><a href="#experience" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Experience</span></a></li>
	<li><a href="#degree" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Education</span></a></li>
	<li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
  </ul>
</nav>

</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
