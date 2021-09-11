import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { Button } from "../../../shared/styles"
import Text from "./Text.js"
import join from "../../../../images/join.svg"

const JoinStyles = styled(FullWidthSection)`
  /* min-height: var(--sectionHeight); */
  padding: var(--sectionPadding);
  overflow-x: hidden;

  img {
    min-width: 120rem;
  }
`

const JoinButtonStyles = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.breakpoints.l} {
    flex-direction: row;
  }
`

const ImageWrapper = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  img {
    transition: var(--cubeTransition);
    transform: scale(1);

    &:hover {
      transform: scale(1.05);
    }
  }
`

function Join() {
  return (
    <JoinStyles>
      <Text></Text>
      <JoinButtonStyles sd={2} ed={6} sm={4} em={8} sl={5} el={11}>
        <Button href="https://members.guildofentrepreneurs.com/member/sign_up/">
          Join the community
        </Button>
        <Button
          alternate
          href="https://www.notion.so/The-Guild-Library-31cd4b22614d4c6c885202cb0ff3c60e"
        >
          Visit the Library
        </Button>
      </JoinButtonStyles>
      <ImageWrapper sd={1} ed={7} sm={1} em={11} sl={1} el={15}>
        <img src={join} alt="people running" />
      </ImageWrapper>
    </JoinStyles>
  )
}

export default Join
