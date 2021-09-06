import styled from "styled-components"
import { motion } from "framer-motion"

const Row = styled(motion.div)`
  grid-column-start: ${props => (props.sd ? props.sd : "1")};
  grid-column-end: ${props => (props.ed ? props.ed : "4")};
  grid-row: ${props => (props.rd ? props.rd : "auto")};

  @media ${props => props.theme.breakpoints.s} {
    grid-column-start: ${props => (props.ss ? props.ss : props.sd)};
    grid-column-end: ${props => (props.es ? props.es : props.ed)};
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column-start: ${props => (props.sm ? props.sm : "1")};
    grid-column-end: ${props => (props.em ? props.em : "8")};
    grid-row: ${props => (props.rm ? props.rm : "auto")};
  }

  @media ${props => props.theme.breakpoints.l} {
    grid-column-start: ${props => (props.sl ? props.sl : "1")};
    grid-column-end: ${props => (props.el ? props.el : "12")};
    grid-row: ${props => (props.rl ? props.rl : "auto")};
  }
`

export default Row
