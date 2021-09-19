import React from "react"
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
          <img src={logo} alt="logo" />
        </h1>
      </Link>
    </LogoStyles>
  )
}

export default Logo
