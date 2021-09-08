import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Row from "../../../Layout/Row"

const ContentStyles = styled(Row)`
  text-align: center;
  margin-top: 5rem;
  h3 {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .full-paragraph {
    display: none;
  }

  @media ${props => props.theme.breakpoints.m} {
    .full-paragraph {
      display: block;
    }
    .mobile-paragraph {
      display: none;
    }
    margin-top: 14rem;
  }

  @media ${props => props.theme.breakpoints.l} {
    margin-top: 20rem;
  }
`

const Content = ({ paragraph, paragraphHeading }) => (
  <ContentStyles sd={2} ed={6} sm={3} em={9} sl={4} el={12}>
    <h3>{paragraphHeading}</h3>
    <p>{paragraph}</p>
  </ContentStyles>
)

export default Content
