/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import About from "./about"
import Technologies from "./technologies"
import Introuduction from "./introuduction"
import Contact from "./contact"
import Experience from "./experience"
import Degree from "./degree"

import "./layout.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle='Title' />
        <Introuduction/>
        <About />
        <Technologies/>
        <Experience/>
        <Degree/>
        <Contact />
        <Footer />
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
