import Row from "../../../Layout/Row"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"

const HeroStyles = styled(FullWidthSection)`
  /* --sectionHeight: 100vh; */

  // Offset
  margin-bottom: 30rem;

  /* min-height: var(--sectionHeight); */
  width: 100%;

  background: var(--black);

  align-content: center;
  position: relative;

  .human {
    position: absolute;
    top: 50%;
    z-index: 100;

    &--left {
      left: 5%;
    }

    &--right {
      right: 5%;
    }
  }

  // Separator
  .custom-shape-divider-top-1631165560 {
    position: absolute;
    bottom: -126px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1631165560 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 126px;
  }

  .custom-shape-divider-top-1631165560 .shape-fill {
    fill: #292929;
  }
`

const Buttons = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-top: calc(max(-200px, -20vw));

  @media ${props => props.theme.breakpoints.l} {
    flex-direction: row;
  }
`

HeroStyles.Buttons = Buttons

export default HeroStyles
