import React from "react"
import FullWidthSection from "../../../Layout/FullWidthSection"
import arrowDown from "../../../../images/arrow-down.svg"
import styled from "styled-components"

const ArrowStyles = styled(FullWidthSection)`
  display: flex;
  justify-content: center;
  align-items: center;

  .arrow {
    max-height: 14rem;
  }
  @media ${props => props.theme.breakpoints.s} {
  }
  @media ${props => props.theme.breakpoints.m} {
    .arrow {
      max-height: 18rem;
    }
  }
  @media ${props => props.theme.breakpoints.l} {
    .arrow {
      max-height: 35rem;
    }
  }
`

function ArrowDivider() {
  return (
    <ArrowStyles>
      <img className="arrow" src={arrowDown} alt="arrow down" />
    </ArrowStyles>
  )
}

export default ArrowDivider
