import React from "react"
import styled from "styled-components"
import { H4 } from "../../../shared/styles/Heading"

const ContentBlockStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--white);
  width: 100%;
  border-radius: 200px 200px 20px 20px;

  padding: 3rem 3rem;

  height: 45rem;
  max-width: 37rem;

  p {
    margin-top: 2rem;
  }

  img {
    margin-top: -15rem;
    max-height: 28rem;
  }

  @media ${props => props.theme.breakpoints.m} {
    padding: 4rem 5rem;
    /* max-width: 37rem; */
    height: 45rem;
    img {
      // no max height
      max-height: 50rem;
    }
  }

  @media ${props => props.theme.breakpoints.m} {
    padding: 4rem 5rem;
    height: 45rem;
  }
`

const ContentHeading = styled(H4)`
  margin-top: -1.5rem;
`

const ContentBlock = ({ src, title, content }) => {
  return (
    <ContentBlockStyles>
      <img src={src} alt="human" />
      <ContentHeading>{title}</ContentHeading>
      <p>{content}</p>
    </ContentBlockStyles>
  )
}

export default ContentBlock
