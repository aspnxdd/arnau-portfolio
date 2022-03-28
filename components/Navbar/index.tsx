import React, { FC } from "react";
import { PropsWithChildren } from "react";
import { Box } from "@fower/react";
import { useMode } from "@fower/react";
import { Moon, Sun, Aperture } from "react-feather";
import { keyframes } from "@fower/core";
import { styled } from "@fower/styled";
import Link from "next/link";

const ApertureSVG: FC<Partial<{ className: string }>> = ({ className }) => (
  <Aperture className={className} />
);

const AnimatedAperture = styled(ApertureSVG);

const fadeIn = keyframes({
  from: {
    width: 0,
    transform: "translateX(-244px)",
  },

  to: {
    width: "244px",
    transform: "translateX(0px)",
  },
});
const fadeOut = keyframes({
  "0%": {
    width: "244px",
    transform: "translateX(0px)",
    visibility: "visible",
  },

  "99.9%": {
    visibility: "visible",
    opacity: 100,
  },
  "100%": {
    visibility: "hidden",
    opacity: 0,
    transform: "translateX(-244px)",
  },
});

const NavbarButton: FC<{ text: string }> = ({ text }) => {
  return (
    <Box
      cursorPointer
      p4
      roundedFull
      transitionAll
      easeInOut
      duration-300
      scale-110--hover
      fontBold--hover
    >
      <Link href={`/${text.toLowerCase()}`}>
        <a>{text}</a>
      </Link>
    </Box>
  );
};
export default function Navbar({
  isMenuHidden,
}: PropsWithChildren<{ isMenuHidden: boolean }>) {
  const { mode, setMode } = useMode();
  function toggleMode() {
    setMode(mode === "dark" ? "light" : "dark");
  }
  return (
    <Box
      css={{
        background:
          "linear-gradient(76.3deg,  rgba(44,62,78,1) 12.6%, rgba(69,103,131,1) 82.8% )",
      }}
      style={
        !isMenuHidden
          ? { animation: `${fadeIn} 400ms ease-in-out` }
          : { animation: `${fadeOut} 400ms ease-in-out` }
      }
      h="100vh"
      w60
      p4
      pt12
      text3XL
      column
      m0
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      fixed
      top0
      zIndex={9}
      left0
      visibility={!isMenuHidden ? "visible" : "hidden"}
    >
      <Box
        top6
        absolute
        fontExtrabold
        text6XL
        ml4
        gray800
        flex
        alignItems="flex-end"
      >
        Arnau Espin <AnimatedAperture mb6 mr4 w11 animateSpin />
      </Box>
      <Box textLeft visibility={!isMenuHidden ? "visible" : "hidden"}>
        {/* <NavbarButton text="About" /> */}
        {/* <NavbarButton text="Projects" /> */}
      </Box>
      <Box
        onClick={toggleMode}
        cursorPointer
        outlineNone
        roundedFull
        bottom6
        absolute
      >
        {mode === "dark" ? (
          <Moon color="black" size={48} />
        ) : (
          <Sun color="white" size={48} />
        )}
      </Box>
    </Box>
  );
}
