import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "components/Navbar";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

import { Box } from "@fower/react";

import { keyframes } from "@fower/core";
const fadeIn = keyframes({
  from: {
    opacity: 0,
  },

  to: {
    opacity: 1,
  },
});
const moveIn = keyframes({
  from: {
    transform: "translateX(-160px)",
  },

  to: {
    transform: "translateX(0px)",
  },
});
const moveOut = keyframes({
  from: {
    transform: "translateX(160px)",
  },

  to: {
    transform: "translateX(0px)",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuHidden, setMenu] = useState(false);

  return (
    <Box
      overflowHidden
      bg--dark="hsl(226, 23%, 11%)"
      style={{ display: "flex", flexDirection: "row" }}
      css={{
        animation: `${fadeIn} 150ms ease-in-out`,
      }}
    >
      <Navbar isMenuHidden={isMenuHidden} />
      <Box
        absolute
        top0
        zIndex={99}
        white--dark
        black
        transitionColors
        easeInOut
        duration-200
        p6
        left0
        flex
        cursorPointer
        red300--hover
        red300--hover--dark
        style={
          !isMenuHidden
            ? { marginLeft: "10rem", animation: `${moveIn} 400ms ease-in-out` }
            : { marginLeft: "0rem", animation: `${moveOut} 400ms ease-in-out` }
        }
        onClick={() => setMenu(!isMenuHidden)}
      >
        {isMenuHidden ? <ArrowRight /> : <ArrowLeft />} Menu
      </Box>
      <Box
        h="100%"
        style={
          !isMenuHidden
            ? { marginLeft: "10rem", animation: `${moveIn} 400ms ease-in-out` }
            : { marginLeft: "0rem", animation: `${moveOut} 400ms ease-in-out` }
        }
      >
        <Component {...pageProps} />
      </Box>
    </Box>
  );
}

export default MyApp;
