import React from "react"
import HeroStyles from "./style"
import { Button } from "../../../shared/styles"
import Logo from "./Logo"

function Hero() {
  return (
    <HeroStyles>
      <Logo></Logo>
      <HeroStyles.Buttons sd={2} ed={6} sm={4} em={8} sl={5} el={11}>
        <Button>Join the community</Button>
        <Button light>Visit the library</Button>
      </HeroStyles.Buttons>
    </HeroStyles>
  )
}

export default Hero
