import React from "react"
import styled from "styled-components"
import { H4 } from "../../../shared/styles/Heading"

const ContentBlockStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: default;

  background: var(--white);
  width: 100%;
  border-radius: 200px 200px 20px 20px;

  padding: 3rem 3rem;

  height: 45rem;
  max-width: 37rem;

  transition: var(--cubeTransition);

  p {
    margin-top: 2rem;
  }

  img {
    margin-top: -15rem;
    max-height: 28rem;
    transition: var(--cubeTransition);
  }

  &:hover {
    box-shadow: var(--e5);
    // move upwards on hover and scale up
    transform: translateY(-10px);

    h4 {
      color: var(--primary);
      transform: scale(1.05);
    }

    img {
      transform: scale(1.02);
    }
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
  transition: var(--cubeTransition);
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
