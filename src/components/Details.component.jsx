import React from "react";
import { Box, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Tweet } from "react-tweet";
import Features from "./Features.component";
import PensionStudents from "../assets/pensionstudents.jpeg";

const Details = () => {
  return (
    <>
      <Text
        bgGradient="linear(to-l, #1CB5E0, #000046)"
        bgClip="text"
        fontSize={{ base: "3xl", lg: "3xl" }}
        fontWeight="extrabold"
        textAlign={"center"}
        mt={{ base: 5, md: 10 }}
        pt={4}
        pb={6}
      >
        <span style={{ color: "#000" }}>¿Porqué </span> Unipensiones{" "}
        <span style={{ color: "#000" }}>?</span>
      </Text>
      <HStack
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Box width={{ base: "full", lg: "50%" }}>
          <Features />
        </Box>
        <Box
          pl={{ base: 4, md: 0 }}
          pr={{ base: 4, md: 0 }}
          width={{ base: "full", md: "90%", lg: "25%" }}
        >
          <Image src={PensionStudents} borderRadius={"lg"}></Image>
        </Box>
      </HStack>
    </>
  );
};

export default Details;
