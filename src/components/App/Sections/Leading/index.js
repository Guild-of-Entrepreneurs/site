import React from "react"
import styled from "styled-components"

import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { H2 } from "../../../shared/styles/Heading"
import Content from "./Content.js"
import leafLeft from "../../../../images/leaf-left.svg"
import leafRight from "../../../../images/leaf-right.svg"
import arrowDown from "../../../../images/arrow-down.svg"

const LeadingStyles = styled(FullWidthSection)`
  min-height: var(--sectionHeight);
  width: 100%;

  background: var(--white);

  align-content: center;
  text-align: center;

  position: relative;

  margin-bottom: 14rem;

  .arrow {
    position: absolute;
    bottom: -14rem;
    max-height: 14rem;
    // position in the center horizontally
    left: 50%;
    transform: translateX(-50%);
  }

  .leaf {
    position: absolute;
    display: none;
    z-index: 0;

    &--right {
      right: 0;
      top: 30%;
    }

    &--left {
      left: 0;
      top: 75%;
    }
  }

  @media ${props => props.theme.breakpoints.s} {
    .leaf {
      display: block;
      max-width: 12rem;
    }
  }
  @media ${props => props.theme.breakpoints.m} {
    margin-bottom: 18rem;

    .arrow {
      bottom: -18rem;
      max-height: 18rem;
    }
    .leaf {
      max-width: 15rem;
    }
  }
  @media ${props => props.theme.breakpoints.l} {
    margin-bottom: 35rem;

    .arrow {
      bottom: -35rem;
      max-height: 35rem;
    }
    .leaf {
      max-width: 20rem;

      &--left {
        top: 60%;
      }
    }
  }
`

const Headline = styled(Row)``

function Leading() {
  return (
    <LeadingStyles>
      <img className="leaf leaf--right" src={leafRight} alt="leaf right" />
      <img className="leaf leaf--left" src={leafLeft} alt="leaf left" />
      <Headline sd={2} ed={6} sm={1} em={11} sl={1} el={15}>
        <H2>
          If you want to be, are or support entrepreneurs,
          <br />
          <span className="strong">The Guild is for you.</span>
        </H2>
      </Headline>
      <Content
        paragraphHeading="Being an entrepreneur is tough."
        paragraph="We are often in situations where we don't know what to do and we struggle to even know what to Google or who to ask."
      ></Content>
      <Content
        paragraphHeading="We need to support each other."
        paragraph="We believe that entrepreneurship is a powerful force for positive change. To increase the chances of successfully making this change we need help which is best when it comes from fellow entrepreneurs."
      ></Content>
      <img className="arrow" src={arrowDown} alt="arrow down" />
    </LeadingStyles>
  )
}

export default Leading
