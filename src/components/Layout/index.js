import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

// import Header from "../App/Header"
import GlobalStyles from "../shared/GlobalStyles"
import Grid from "./Grid"
import FullWidthSection from "./FullWidthSection"
import Theme from "../shared/Theme"

const ContentStyles = styled(FullWidthSection)`
  /* margin-top: var(--headerHeight); */
  row-gap: 0;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles></GlobalStyles>
      <Grid gapDefault={0} gapSmall={0} gapMedium={0} gapLarge={0}>
        {/* <Header
          as="header"
          siteTitle={data.site.siteMetadata?.title || `Title`}
        /> */}
        <ContentStyles>{children}</ContentStyles>
        {/* <Footer as="footer"></Footer> */}
      </Grid>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
