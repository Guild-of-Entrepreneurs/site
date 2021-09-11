import Row from "../../../Layout/Row"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"

const HeroStyles = styled(FullWidthSection)`
  /* --sectionHeight: 100vh; */

  // Offset
  margin-bottom: 15rem;

  /* min-height: var(--sectionHeight); */
  width: 100%;

  background: var(--black);

  align-content: center;
  position: relative;

  img {
    transition: var(--cubeTransition);
  }

  .human,
  .plant {
    transform: scale(1);

    &:hover {
      transform: scale(1.05);
    }
  }

  .plant {
    position: absolute;
    right: 0;
    top: 50%;
    z-index: 99;
    max-width: 75px;
  }

  .human {
    position: absolute;
    top: 70%;
    z-index: 100;
    max-width: 20rem;

    &--left {
      left: 0;
      display: none;
    }

    &--right {
      right: 0;
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

  @media ${props => props.theme.breakpoints.s} {
    margin-bottom: 20rem;
    .human {
      top: 65%;
      max-width: 30rem;
    }
    .plant {
      top: 40%;
      right: 5%;
      max-width: 11rem;
    }
  }
  @media ${props => props.theme.breakpoints.m} {
    margin-bottom: 25rem;
    .plant {
      top: 25%;
      right: 5%;
      max-width: 15rem;
    }
    .human {
      top: 50%;
      max-width: 40rem;

      &--left {
        display: block;
      }
    }
  }

  @media ${props => props.theme.breakpoints.l} {
    margin-bottom: 30rem;
    .human {
      max-width: 100%;
      &--left {
        left: 5%;
      }
      &--right {
        right: 5%;
      }
    }

    .plant {
      max-width: 25rem;
      top: 10%;
      right: 10%;
    }
  }
`

const Buttons = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-top: calc(max(-200px, -20vw));
  z-index: 5;

  @media ${props => props.theme.breakpoints.l} {
    flex-direction: row;
  }
`

HeroStyles.Buttons = Buttons

export default HeroStyles
