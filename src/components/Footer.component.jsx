import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/logoUP.png"

const Footer = () => {
    return (
        <>
            <Box width={{ base: '90%', lg: '70%' }} margin={'auto'} mt={10}>
                <Image src={Logo} margin={'auto'} width={{base: 150, lg: 300}} borderRadius={10}/>
            </Box>
            <Box mt={10} mb={10}>
                <Heading textAlign={'center'} as='h2' size='2xl'>
                    Unipensiones
                </Heading>
                <Heading textAlign={'center'} as='h3' size='md'>
                    Una comunidad de estudiantes que comparten el mismo viaje que tú
                </Heading>
            </Box>
            <Text p={5} bg={'teal'} color={'white'} textAlign={'center'}>
                Hecho con 😎 por puro talento Unimagdalena
            </Text>
        </>
    )
}

export default Footer