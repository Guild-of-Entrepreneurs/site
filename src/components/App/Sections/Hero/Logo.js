import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Row from "../../../Layout/Row"
import logo from "../../../../images/logo.svg"

// console.log(MyLogo)

const LogoStyles = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;

  img {
    max-width: min(600px, 70vw);
    min-width: 300px;
  }
`

function Logo() {
  return (
    <LogoStyles sd={2} ed={6} sm={3} em={9} sl={3} el={13}>
      <Link>
        <h1>
          {/* <MyLogo></MyLogo> */}
          <img src={logo} alt="logo" />
          {/* <StaticImage
            src="../../../../images/cropped-logo.png"
            // height={300}
            // width={300}
            alt="logo"
          ></StaticImage> */}
        </h1>
      </Link>
    </LogoStyles>
  )
}

export default Logo
