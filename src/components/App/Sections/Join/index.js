import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Row from "../../../Layout/Row"
import { Button } from "../../../shared/styles"
import Text from "./Text.js"
import PeopleImage from "./PeopleImage.js"

const JoinStyles = styled(FullWidthSection)`
  min-height: var(--sectionHeight);
`

const JoinButtonStyles = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  @media ${props => props.theme.breakpoints.m} {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`

function Join() {
  return (
    <JoinStyles>
      <Text></Text>
      <JoinButtonStyles sd={2} ed={6} sm={3} em={9} sl={5} el={11}>
        <Button>Join the community</Button>
        <Button alt>Visit the Library</Button>
      </JoinButtonStyles>
      <PeopleImage></PeopleImage>
    </JoinStyles>
  )
}

export default Join
