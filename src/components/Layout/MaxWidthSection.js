import styled from "styled-components"
import { motion } from "framer-motion"

// ! BUGGY! DO NOT USE
const MaxWidthSection = styled(motion.section)`
  grid-column: 2 / span 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: max-content;
  gap: ${props => (props.gapDefault ? props.gapDefault : "2rem 2rem")};
  margin: ${props => (props.marginDefault ? props.marginDefault : 0)};

  @media ${props => props.theme.breakpoints.s} {
    gap: ${props => (props.gapSmall ? props.gapSmall : "2rem 2rem")};
    margin: ${props => (props.marginSmall ? props.marginSmall : 0)};
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 2 / span 8;
    grid-template-columns: repeat(8, 1fr);
    gap: ${props => (props.gapMedium ? props.gapMedium : "2rem 2rem")};
    margin: ${props => (props.marginMedium ? props.marginMedium : 0)};
  }

  @media ${props => props.theme.breakpoints.l} {
    grid-column: 2 / span 12;
    grid-template-columns: repeat(12, minmax(auto, 7.2rem));
    gap: ${props => (props.gapLarge ? props.gapLarge : "2rem 2rem")};
    margin: ${props => (props.marginLarge ? props.marginLarge : 0)};
  }
`

export default MaxWidthSection
