import { AbsoluteCenter, Box, Button, Divider, FormHelperText, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightAddon, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { Tweet } from "react-tweet"
import Details from '../components/Details.component';
import CounterApp from '../components/CounterApp.component';
import { FcGoogle } from "react-icons/fc";

const HomePage = () => {
    return (
        <Box mt={100}>
            <Box width={{ base: "100%", md: "80%", lg: "50%" }} margin={'auto'}>
                <Text
                    bgGradient='linear(to-l, #1CB5E0, #000046)'
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
                <HStack spacing={20} justifyContent={'center'} flexDir={{ base: 'column', md: 'row' }}>
                    <Box width={{ base: '80%', lg: '20%' }}>
                        <InputGroup size={{ base: 'lg' }}>
                            <InputLeftElement pointerEvents='none'>
                                <MdOutlineEmail color={'#000046'} fontSize={{ base: 24, md: 24}}/>
                            </InputLeftElement>
                            <Input
                                type='email'
                                borderColor={'transparent'}
                                boxShadow={'inset 0 0 0 1px #fff, 0 0 0 4px #fff, 1px -1px 30px #1CB5E0, -3px 3px 30px #4e4376;'}
                                color={'#000046'}
                                placeholder='tucorreo@sitio.com'
                                size={{ base: 'md', lg: 'lg' }}
                                focusBorderColor='#000046'
                                _placeholder={{ opacity: 1, color: 'gray.500' }}
                            />
                        </InputGroup>
                        <Box mt={5} justifyContent={'center'} alignItems={'center'}>
                            <Button
                                width={'full'}
                                bgGradient='linear(to-l, #1CB5E0, #000046)'
                                color={'#fff'}
                                size='lg'
                                _hover={{
                                    bgGradient: 'linear(to-l, #000046, #1CB5E0)'
                                }}
                            >
                                Notifícame
                            </Button>
                            <Box padding={1} marginTop={10} display={{base: 'block', md: 'none'}}>
                                <Text textAlign={'center'}>Ó tambien</Text>
                                <Divider />
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Text display={{base: 'none', md: 'block'}}>Ó tambien</Text>
                        <Button
                            size='lg'
                            colorScheme='blue'
                            variant='outline'
                            leftIcon={<FcGoogle />}>Suscríbete con Google</Button>
                    </Box>
                </HStack>
            </Box>
            <Box>
                <Details />
            </Box>
        </Box>
    )
}

export default HomePage;