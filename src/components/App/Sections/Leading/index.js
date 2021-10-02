import React from "react"
import styled from "styled-components"

import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { H2 } from "../../../shared/styles/Heading"
import Content from "./Content.js"
import leafLeft from "../../../../images/leaf-left.svg"
import leafRight from "../../../../images/leaf-right.svg"

const LeadingStyles = styled(FullWidthSection)`
  width: 100%;

  align-content: center;
  text-align: center;

  position: relative;
  padding: var(--sectionPadding);

  .leaf {
    transition: var(--cubeTransition);

    &:hover {
      transform: scale(1.05);
    }

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
  }
  @media ${props => props.theme.breakpoints.m} {
    /* margin-bottom: 18rem; */

    .leaf {
      display: block;
      max-width: 15rem;
    }
  }
  @media ${props => props.theme.breakpoints.l} {
    /* margin-bottom: 35rem; */

    .leaf {
      max-width: 20rem;

      &--left {
        top: 60%;
      }
    }
  }
`

const Headline = styled(Row)``

function Leading({ data: { primary } }) {
  return (
    <LeadingStyles>
      <img className="leaf leaf--right" src={leafRight} alt="leaf right" />
      <img className="leaf leaf--left" src={leafLeft} alt="leaf left" />
      <Headline sd={2} ed={6} sm={1} em={11} sl={1} el={15}>
        <H2>
          {primary.leading_title.text}
          <br />
          <span className="strong">{primary.leading_title_pt_2.text}</span>
        </H2>
      </Headline>
      <Content
        paragraphHeading={primary.paragraph_1_heading.text}
        paragraph={primary.paragraph_1_content.text}
      ></Content>
      <Content
        paragraphHeading={primary.paragraph_2_heading.text}
        paragraph={primary.paragraph_2_content.text}
      ></Content>
    </LeadingStyles>
  )
}

export default Leading
