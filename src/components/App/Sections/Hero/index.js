import React from "react"
import HeroStyles from "./style"
import { Button } from "../../../shared/styles"
import Logo from "./Logo"
import heroLeft from "../../../../images/hero-left.svg"
import heroRight from "../../../../images/hero-right.svg"
import plant from "../../../../images/plant.svg"
import { motion } from "framer-motion"

function Hero() {
  return (
    <HeroStyles>
      <Logo></Logo>
      <HeroStyles.Buttons sd={2} ed={6} sm={4} em={8} sl={5} el={11}>
        <Button href="https://members.guildofentrepreneurs.com/member/sign_up/">
          Join the community
        </Button>
        <Button
          href="https://members.guildofentrepreneurs.com/member/sign_up/"
          light
        >
          Visit the library
        </Button>
      </HeroStyles.Buttons>
      <img className="plant" src={plant} alt="plant" />
      <motion.div
        transition={{ duration: 0.8, delay: 0.1 }}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        className="human human--left"
      >
        <img src={heroLeft} alt="left human" />
      </motion.div>
      <motion.div
        transition={{ duration: 0.8, delay: 0.1 }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        className="human human--right"
      >
        <img src={heroRight} alt="right human" />
      </motion.div>
      <div className="custom-shape-divider-top-1631165560">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </HeroStyles>
  )
}

export default Hero
