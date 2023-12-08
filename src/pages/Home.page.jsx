import { AbsoluteCenter, Box, Button, Divider, FormHelperText, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightAddon, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { Tweet } from "react-tweet"
import Details from '../components/Details.component';
import CounterApp from '../components/CounterApp.component';
import { FcGoogle } from "react-icons/fc";
import Preambulo from '../components/Preambulo.component';

const HomePage = () => {
    return (
        <Box mt={10}>
            <Box width={{ base: "90%", md: "80%", lg: "50%" }} margin={'auto'}>
                <Text
                    bgGradient='linear(to-l, #1CB5E0, #000046)'
                    bgClip='text'
                    fontSize={{ base: 'xl', lg: '3xl' }}
                    fontWeight='extrabold'
                    textAlign={'center'}
                >
                    <Text fontSize={{ base: '2xl', md: '3xl' }}>¿Cansado de caminar horas para buscar una pension universitaria?</Text>
                </Text>
                <Heading as='h4' size='md'>
                    <br />
                    <span>Obtén acceso prioritario a nuestra plataforma. </span>
                    <span>Estamos a punto de lanzarla y recibirás una invitación exclusiva en tu correo
                        electrónico para que seas el primero en explorar increíbles
                        pensiones universitarias.</span>
                    <br />
                    <span>
                        ¡No te pierdas la oportunidad de ser parte de Unipensiones, la plataforma definitiva para descubrir pensiones universitarias!
                    </span>
                </Heading>
            </Box>
            <Box marginTop={20}>
                <HStack spacing={20} justifyContent={'center'} flexDir={{ base: 'column', md: 'row' }}>
                    <Box width={{ base: '80%', lg: '20%' }}>
                        <InputGroup size={{ base: 'lg' }}>
                            <InputLeftElement pointerEvents='none'>
                                <MdOutlineEmail color={'#000046'} fontSize={{ base: 24, md: 24 }} />
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
                                Notifícame cuando esté listo
                            </Button>
                            <Box p={0} marginTop={10} display={{ base: 'block', md: 'none' }}>
                                <Text textAlign={'center'}>Ó tambien</Text>
                                <Divider />
                            </Box>
                        </Box>
                    </Box>
                    <Box p={0} m={0}>
                        <Text m={0} p={0} display={{ base: 'none', md: 'block' }}>Ó tambien</Text>
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
            <Box>
                <Preambulo />
            </Box>
        </Box>
    )
}

export default HomePage;