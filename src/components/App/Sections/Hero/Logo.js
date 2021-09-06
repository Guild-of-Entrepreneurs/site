import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Row from "../../../Layout/Row"

const LogoStyles = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;
`

function Logo() {
  return (
    <LogoStyles sd={2} ed={6} sm={3} em={9} sl={3} el={13}>
      <Link>
        <h1>
          <StaticImage
            src="../../../../images/cropped-logo.png"
            // height={300}
            // width={300}
            alt="logo"
          ></StaticImage>
        </h1>
      </Link>
    </LogoStyles>
  )
}

export default Logo
