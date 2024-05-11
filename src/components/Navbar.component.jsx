import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Logo from "../assets/logoUP.png";
import { getAllSuscriptors } from "../firebase/collections/querys/suscriptores";
import { FcBusinessman } from "react-icons/fc";
import "../styles/glass.css";

const CardsSuscriptors = ({ suscriptor }) => {
  return (
    <Card mt={2}>
      <CardHeader
        className="card-glass"
        bgGradient="linear(to-r, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Box>VIP</Box>
        <Icon
          as={FcBusinessman}
          w={100}
          h={100}
          borderColor={"blue.100"}
          borderWidth={2}
          borderRadius={"full"}
        />
        <Heading size="md" color={"gray.700"}>
          {suscriptor?.email?.split("@")[0]}
        </Heading>
      </CardHeader>
    </Card>
  );
};

const ListSuscriptorButton = ({ suscriptors }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" bg={"#1a2537"}>
        Ver Lista VIP
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Total suscriptores Actual:{" "}
            <span style={{ fontWeight: "bolder" }}>{suscriptors.length}</span>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {suscriptors.map((e, i) => {
              return <CardsSuscriptors key={i} suscriptor={e} />;
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const Navbar = () => {
  const [suscriptors, setSuscriptors] = useState([]);

  useEffect(() => {
    getAllSuscriptors().then((response) => {
      setSuscriptors(response);
    });
  }, []);

  const compararPorNombre = (a, b) => {
    const nombreA = a?.email?.toUpperCase();
    const nombreB = b?.email?.toUpperCase();
    if (nombreA < nombreB) {
      return -1;
    }
    if (nombreA > nombreB) {
      return 1;
    }
    return 0;
  };

  const SuscriptorsOrdenados = suscriptors.sort(compararPorNombre);

  return (
    <HStack
      p={10}
      justifyContent={{ base: "center", md: "space-between" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <HStack spacing={10}>
        <Image src={Logo} width={50} height={50} borderRadius={10} />
        <Heading size={"lg"}>Unipensiones</Heading>
      </HStack>
      <Box>
        <ListSuscriptorButton suscriptors={SuscriptorsOrdenados} />
      </Box>
    </HStack>
  );
};

export default Navbar;
