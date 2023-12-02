import { Box, Button, Heading, Input, InputGroup, InputLeftElement, InputRightAddon, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { MdOutlineEmail } from "react-icons/md"

const HomePage = () => {
    return (
        <Box mt={100}>
            <Box width={{ base: "100%", lg: "50%" }} margin={'auto'}>
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize={{ base: '4xl', lg: '6xl' }}
                    fontWeight='extrabold'
                    textAlign={'center'}
                >
                    ¡Unipensiones!
                    <br />
                    <span style={{ color: "#000" }}>Una comunidad de </span>
                    estudiantes <span style={{ color: "#000" }}>que </span>
                    comparten <span style={{ color: "#000" }}>el mismo viaje que</span> tú
                </Text>
            </Box>
            <Box mt={18}>
                <VStack spacing={3} width={{ base: '80%', md: '50%', lg: '20%' }} margin={'auto'}>
                    <InputGroup size={{ base: 'lg' }}>
                        <InputLeftElement pointerEvents='none'>
                            <MdOutlineEmail color={'#FF0080'} fontSize={24}/>
                        </InputLeftElement>
                        <Input
                            type='email'
                            borderColor={'transparent'}
                            boxShadow={'inset 0 0 0 1px #fff, 0 0 0 4px #fff, 1px -1px 30px #7928CA, -3px 3px 30px #FF0080;'}
                            color={'pink.900'}
                            placeholder='tu correo'
                            size={{ base: 'lg', lg: 'lg' }}
                            focusBorderColor='#FF0080'
                            _placeholder={{ opacity: 1, color: 'gray.500' }} />
                    </InputGroup>
                    <Box mt={5}>
                        <Button
                            bgGradient='linear(to-l, #7928CA, #FF0080)'
                            color={'#fff'}
                            size='lg'
                        >Suscribirme</Button>
                    </Box>
                </VStack>
            </Box>
        </Box>
    )
}

export default HomePage;