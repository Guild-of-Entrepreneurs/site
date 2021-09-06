import Row from "../../../Layout/Row"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"

const HeroStyles = styled(FullWidthSection)`
  --sectionHeight: 100vh;

  min-height: var(--sectionHeight);
  width: 100%;

  background: var(--black);

  align-content: center;
`

const Buttons = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.breakpoints.l} {
    flex-direction: row;
  }
`

HeroStyles.Buttons = Buttons

export default HeroStyles
