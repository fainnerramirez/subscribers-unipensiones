import { Box, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/logoUP.png"

const Navbar = () => {
    return (
        <Box p={10}>
            <HStack spacing={10}>
                <Image src={Logo} width={50} height={50} borderRadius={10}/>
                <Heading size={'lg'}>Unipensiones</Heading>
            </HStack>
        </Box>
    )
}

export default Navbar