import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../components/About'

const Layout = ({ children }) => {
  return <Fragment>
     <Nav />
     <Header />
      {children}
      <About />
      <Footer />
      </Fragment>;
};

Layout.propTypes = {};

export default Layout;
