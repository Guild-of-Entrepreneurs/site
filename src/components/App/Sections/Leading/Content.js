import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row"
import { H4 } from "../../../shared/styles/Heading"

const ContentStyles = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
  h3 {
    font-weight: 700;
  }

  p {
    margin-top: 1rem;
    max-width: 60rem;
  }

  @media ${props => props.theme.breakpoints.m} {
    margin-top: 14rem;
    p {
      margin-top: 2rem;
    }
  }

  @media ${props => props.theme.breakpoints.l} {
    margin-top: 15rem;
    p {
      margin-top: 3rem;
    }
  }
`

const Content = ({ paragraph, paragraphHeading }) => (
  <ContentStyles sd={2} ed={6} sm={3} em={9} sl={4} el={12}>
    <H4>{paragraphHeading}</H4>
    <p>{paragraph}</p>
  </ContentStyles>
)

export default Content
