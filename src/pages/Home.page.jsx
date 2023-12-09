import { AbsoluteCenter, Box, Button, Divider, FormHelperText, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightAddon, List, ListIcon, ListItem, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { MdCheckCircle, MdOutlineEmail } from "react-icons/md"
import { Tweet } from "react-tweet"
import Details from '../components/Details.component';
import CounterApp from '../components/CounterApp.component';
import { FcGoogle } from "react-icons/fc";
import Preambulo from '../components/Preambulo.component';
import FooterComponent from '../components/Footer.component';
import { RiMedalFill } from "react-icons/ri";
import Navbar from '../components/Navbar.component';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Box>
                <Stack flexDir={{ base: 'column', lg: 'row' }} width={'90%'} margin={'auto'}>
                    <Box width={{ base: "90%", md: "80%", lg: "50%" }} margin={'auto'}>
                        <Heading
                            as='h2'
                            size='3xl'
                            textAlign={'left'}
                        >
                            Unipensiones será lanzado dentro de poco
                        </Heading>
                        <Heading as='h4' size='md' width={{base: '100%', lg: '70%'}}>
                            <br />
                            <span>Estamos a punto de lanzarla y recibirás una invitación exclusiva en tu correo
                                electrónico para que seas el primero en explorar increíbles
                                pensiones universitarias.</span>
                            <br />
                            <span>
                                ¡No te pierdas la oportunidad de ser parte de Unipensiones, la plataforma definitiva para descubrir pensiones universitarias!
                            </span>
                            <span>🥳</span>
                        </Heading>
                    </Box>
                    <Box marginTop={20} width={{base: '100%', lg: '50%'}}>
                        <VStack spacing={10} className='card-glass' width={{base: '100%', lg: '50%'}} height={600} margin={'auto'}>
                            <Box mt={2}>
                                <List spacing={3}>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='#7df256' />
                                        Ser notificado
                                    </ListItem>
                                </List>
                            </Box>
                            <Box textAlign={'center'} margin={0}>
                                <Heading as="h1" size={'2xl'} mb={1}>
                                    ¿Interesado?
                                </Heading>
                                <Text width={'90%'} margin={'auto'}>
                                    Reciba una notificación por correo electrónico tan pronto como esté listo para usted
                                </Text>
                            </Box>
                            <Box textAlign={'center'} margin={0}>
                                <Heading
                                    as={'h3'}
                                    size={'lg'}
                                    noOfLines={1}
                                    bgGradient='linear(to-l, #61F4DE, #3E48D5)'
                                    bgClip='text'
                                    fontSize='2xl'
                                    fontWeight='extrabold'>

                                    <span style={{ color: "#000" }}>Acceso</span> prioritario
                                </Heading>
                                <Text width={'90%'} margin={'auto'}>
                                    Únete a la lista de espera para ser uno de los primeros en obtener un acceso
                                </Text>
                            </Box>
                            <Box>
                                <InputGroup size={{ base: 'lg' }}>
                                    <InputLeftElement pointerEvents='none'>
                                        <MdOutlineEmail color={'#000046'} fontSize={{ base: 24, md: 24 }} />
                                    </InputLeftElement>
                                    <Input
                                        type='email'
                                        borderColor={'transparent'}
                                        boxShadow={'inset 0 0 0 1px #fff, 0 0 0 4px #fff, 1px -1px 30px #1CB5E0, -3px 3px 30px #4e4376;'}
                                        color={'#000046'}
                                        placeholder='Tu correo aquí'
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
                                </Box>
                            </Box>
                            <Box m={0} p={0} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'} color={'gray.400'}>
                                <Button textAlign={'center'} leftIcon={<RiMedalFill />} color={'gray.400'}>Unipensiones</Button>
                                <Text textAlign={'center'} width={'90%'} margin={'auto'}>
                                    Una comunidad de estudiantes que comparten el mismo viaje que tú
                                </Text>
                            </Box>
                        </VStack>
                    </Box>
                </Stack>
                <Box>
                    <Details />
                </Box>
                <Box>
                    <Preambulo />
                </Box>
            </Box>
            <Box>
                <FooterComponent />
            </Box>
        </>
    )
}

export default HomePage;