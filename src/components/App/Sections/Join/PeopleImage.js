import peopleImage from "../../../../images/people-lining-up.svg"
import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row.js"

const PeopleImageStyle = styled(Row)``

const PeopleImage = () => (
  <PeopleImageStyle>
    <peopleImage />
  </PeopleImageStyle>
)

export default PeopleImage
