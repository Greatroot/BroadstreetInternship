
import * as React from "react"

import {GlobalStyle} from "./styles/GlobalStyles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// A smart place to put components used on all pages like the OldHeader and OldFooter.
const Layout = ({ children }) => {

  return (
    <>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout
