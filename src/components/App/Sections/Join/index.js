import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { Button } from "../../../shared/styles"
import Text from "./Text.js"

const JoinStyles = styled(FullWidthSection)`
  /* min-height: var(--sectionHeight); */
  padding: var(--sectionPadding);
`

const JoinButtonStyles = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.breakpoints.m} {
    flex-direction: row;
  }
`

function Join() {
  return (
    <JoinStyles>
      <Text></Text>
      <JoinButtonStyles sd={2} ed={6} sm={4} em={8} sl={5} el={11}>
        <Button>Join the community</Button>
        <Button alternate>Visit the Library</Button>
      </JoinButtonStyles>
    </JoinStyles>
  )
}

export default Join
