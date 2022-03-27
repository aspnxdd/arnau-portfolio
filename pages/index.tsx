import type { NextPage } from "next";
import { Box } from "@fower/react";
import { useRouter } from "next/router";
import {
  GitHub,
  Mail,
  Heart,
  Home as HomeIcon,
  Server,
  Linkedin,
  Link,
  Tool
} from "react-feather";
import { composeAtom } from "@fower/core";
import { useState, FC, useEffect } from "react";
import { styled } from "@fower/styled";
import { keyframes } from "@fower/core";
import Head from 'next/head'


const fadeIn = keyframes({
  from: {
    opacity: 0,
  },

  to: {
    opacity: 1,
  },
});
const Hr = styled("hr");
const A = styled("a");
const H2 = styled("h2");



composeAtom("text-link", {
  textLG: true,
  "mt-1rem": true,
  flex: true,
  "red300--hover": true,
  transitionAll: true,
  easeInOut: true,
  " duration-300": true,
  "ml-1rem": true,
  "gap-1rem": true,
  "white--dark": true,
  "red300--hover--dark": true,
  "cursorPointer":true
});

interface Project {
  name: string;
  description: string;
  href?: string;
  tags: Array<string>;
  github: string;
}

const ProjectWindow: FC<Project> = ({
  name,
  description,
  href,
  tags,
  github,
}) => {
  
  if (name){
  
    return (
      <Box
        w-24rem--md
        w="90vw"
        roundedLarge
        bg--dark="#505274"
        bgAmber100
        white--dark
        textSM
        p2
        flex
        column
        cursorAuto
        css={{
       
          animation: `${fadeIn} 500ms ease-in-out`,
        }}
      >
        <H2 style={{ margin: 0, display: "flex", gap: "1rem" }} animatePulse >
          {name}{" "}
          {href && (
            <A href={href} amber300--hover transitionAll easeInOut duration-300>
              <Link />{" "}
            </A>
          )}
          <A href={github} amber300--hover transitionAll easeInOut duration-300>
            <GitHub />
          </A>
        </H2>
        <Hr borderAmber300 border w="70%" left0 relative mb8 ml0 />
        {description}
        <Box mt4 flex row columnGap={4} textXS>
          {tags.map((tag) => (
            <Box key={tag} roundedLarge px2 bgWhite--dark gray700--dark bgAmber300>
              {tag.toUpperCase()}
            </Box>
          ))}
        </Box>
      </Box>
    )}
  else {
    return <></>;
  }
};

const Home: NextPage = () => {
  const { route } = useRouter();
  console.log(route)
  const [projectSelected, setProjectSelected] = useState<Project>({
    name: "",
    description: "",
    href: "",
    github: "",
    tags: [],
  });
  const scrollToBottom = () => { 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'

    }); 
  }; 

  useEffect(() => {
    if(projectSelected.name) scrollToBottom();
  }, [projectSelected])

  return (
    <>
    <Head>
      <title>Arnau Espin</title>

     
      </Head>
   
    <Box
      flex
      column
      alignContent="center"
      justifyContent="center"
      overflowHidden--lg
      textLeft
      w="100%"
      minH="100vh"
      pl44--md
      pl4
      pt12--md
      pt20
      pb4
      fontBold
      gap-4rem
      bg--dark="hsl(226, 23%, 11%)"
      white--dark
    >
      <Box gray800 text4XL white--dark animateBounce >
        {route === "/" ? "/about" : route }
      </Box>
      <Box maxW-50rem>
        I am an electronics engineer who totally moved to software development,
        web development and lately blockchain technology development. I am quite
        profficient at JavaScript/TypeScript ✔ and lately I am diving into the
        Rust programming language 🦀.
      </Box>
      <Box grid gridTemplateColumns-2--lg gridTemplateColumns-1 gap-3rem>
        <Box flex column rowGap={20}>
          <Box gray800 text3XL flex column white--dark>
            Contact
            <Box as="a" href="https://github.com/aspnxdd" text-link>
              <GitHub /> Github
            </Box>
            <Box as="a" href="mailto:arnauespin@gmail.com" text-link>
              <Mail />
              e-mail
            </Box>
            <Box
              as="a"
              href="https://www.linkedin.com/in/arnau-espin-23789980/"
              text-link
            >
              <Linkedin />
              Linkedin
            </Box>
          </Box>

          <Box>
            <Box gray800 text3XL flex column white--dark>
              Projects
              <Box>
                <Box
                  text-link
                  onClick={() =>
                    setProjectSelected({
                      name: "Solana NFT Floor Price",
                      description: `This webapp uses data fetching from the main NFT marketplaces in Solana ecosystem. Periodically every hour it
                      fetches data from the API from Solanart, DigitalEyes and Magic Eden NFT marketplaces, saves it in a mongo
                      database and then rendered on the frontend using server-side rendering (SSR) by NextJS.`,
                      tags: [
                        "NextJS (React)",
                        "MongoDB",
                        "Redis",
                        "Styled Comp.",
                      ],
                      href: "https://nftfloorprice.art",
                      github:
                        "https://github.com/aspnxdd/solana-nft-floorprice",
                    })
                  }
                >
                  <Heart /> Solana NftFloorPrice
                </Box>
                <Box
                  text-link
                  onClick={() =>
                    setProjectSelected({
                      name: "Nft Floor Price API",
                      description: `First project written in Rust. Built with actix-web crate, mongoDB and redis.`,
                      tags: ["mongoDB", "Rust", "Redis"],
                      github: "https://github.com/aspnxdd/nft_floor_price_api/",
                    })
                  }
                >
                  <Server /> Solana NftFloorPrice API (Rust)
                </Box>
                <Box
                  text-link
                  onClick={() =>
                    setProjectSelected({
                      name: "Hotel Simulator Solidity",
                      description: `This webapp aims to simulate what would be booking a room in an hotels portal through Solidity smart contracts
                  deployed on an EVM blockchain like Matic (Mumbai) in this case. Hotel owners can create their hotel and
                  customers can book rooms there`,
                      tags: [
                        "NextJS (React)",
                        "Solidity",
                        "web3js",
                        "Tailwind CSS",
                      ],
                      href: "https://hotel.nftfloorprice.art/",
                      github:
                        "https://github.com/aspnxdd/hotel-simulator-solidity/",
                    })
                  }
                >
                  <HomeIcon />
                  Hotel Simulator Solidity
                </Box>
                <Box
                  text-link
                  onClick={() =>
                    setProjectSelected({
                      name: "Rust JSON extract macro",
                      description: `This macro reduces boilerplate when using serde_json::Value variants when trying to get into a nested property.
                      `,
                      tags: [
                        "Rust",
                        "Serde",
                        "macro",
                  
                      ],
                      github:
                        "https://github.com/aspnxdd/json-extract-macro",
                    })
                  }
                >
                  <Tool />
                  Rust JSON extract macro
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <ProjectWindow
            name={projectSelected.name}
            description={projectSelected.description}
            href={projectSelected.href}
            tags={projectSelected.tags}
            github={projectSelected.github}
          />
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Home;
