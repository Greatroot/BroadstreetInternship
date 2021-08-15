
import * as React from "react"

import OldHeader from "./OldHeader"
import {GlobalStyle} from "./styles/GlobalStyles";
import OldFooter from "./OldFooter";

// A smart place to put components used on all pages like the OldHeader and OldFooter.
const Layout = ({ children }) => {

  return (
    <>
        <GlobalStyle />
        <OldHeader />
        <main>{children}</main>
        <OldFooter />
    </>
  )
}

export default Layout
