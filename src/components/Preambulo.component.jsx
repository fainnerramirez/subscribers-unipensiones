import { Badge, Box, Heading, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import AnfitrionesGIF from "../assets/anfitriones.gif";
import EstudiantesPGN from "../assets/estudiantes.png";
import Estudiantes2PNG from "../assets/estudiantes2.png";
import { MdCheckCircle } from 'react-icons/md';
import "../styles/glass.css"

const Preambulo = () => {
    return (
        <Box width={'90%'} margin={'auto'} mt={10}>
            <Box textAlign={'center'} width={'90%'} margin={'auto'}>
                <Text
                    bgGradient='linear(to-l, #1CB5E0, #000046)'
                    bgClip='text'
                    fontSize={{ base: '3xl', lg: '3xl' }}
                    fontWeight='extrabold'
                    textAlign={'center'}
                    mt={{ base: 5, md: 10 }}
                    pt={4}
                    pb={6}
                >
                    <span style={{ color: "#000" }}>Imágenes de </span> Unipensiones
                </Text>
                <Text fontWeight={'bold'} fontSize={20}>La apariencia de la plataforma puede cambiar
                    en el momento del lanzamiento si así lo considera el equipo de Unipensiones</Text>
            </Box>
            <Box mt={5}>
                <List spacing={3} display={'flex'} justifyContent={'center'} alignItems={'center'} p={10}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' fontSize={24} />
                        En nuestra plataforma, se destacan dos roles fundamentales: <span style={{ fontWeight: 'bold' }}>los anfitriones y los estudiantes</span>
                    </ListItem>
                </List>
                <Box display={'flex'} flexDir={{ base: 'column', lg: 'row' }} alignItems={'center'} borderRadius={10} p={5} className='card-glass'>
                    <Box>
                        <Badge ml={10} variant='subtle' colorScheme='green' borderRadius={'full'} pt={3} pl={5} pr={5} pb={3} fontWeight={'bolder'} fontSize={20}>
                            1
                        </Badge>
                        <Heading ml={3} as='h4' size='md'>
                            Anfitriones
                        </Heading>
                    </Box>
                    <Box p={5}>
                        Los anfitriones son los proveedores de información sobre las pensiones. Su función principal
                        es cargar y actualizar la información relacionada con las pensiones que ofrecen.
                        Esto incluiría detalles sobre las instalaciones, servicios adicionales, políticas,
                        y cualquier cambio en los precios.
                        Los anfitriones son esenciales para mantener actualizada y precisa la información disponible para los estudiantes.
                    </Box>
                </Box>
                <Box mt={20} p={5} className='card-glass' width={{ base: '100%', lg: '70%' }} marginLeft={'auto'} marginRight={'auto'} marginTop={10}>
                    <Image
                        src={AnfitrionesGIF}
                        width={{ base: '100%', lg: '100%' }}
                        margin={'auto'}
                        borderRadius={10} />
                </Box>
            </Box>

            <Box mt={10}>
                <Box display={'flex'} flexDir={{ base: 'column', lg: 'row' }} alignItems={'center'} width={'100%'} borderRadius={10} p={5} className='card-glass'>
                    <Box>
                        <Badge ml={10} variant='subtle' colorScheme='green' borderRadius={'full'} pt={3} pl={5} pr={5} pb={3} fontWeight={'bolder'} fontSize={20}>
                            2
                        </Badge>
                        <Heading ml={3} as='h4' size='md'>
                            Estudiantes
                        </Heading>
                    </Box>
                    <Box p={5}>
                        Los estudiantes son los usuarios que buscan pensiones en la plataforma. Su función principal es explorar la
                        información proporcionada por los anfitriones y tomar decisiones informadas sobre la mejor opción para sus necesidades.
                        Pueden utilizar la plataforma para comparar diferentes pensiones,
                        revisar comentarios y evaluaciones, así como realizar consultas a los anfitriones en caso de
                        necesitar información adicional.
                    </Box>
                </Box>
                <Box mt={20} display={'flex'} flexDir={{ base: 'column', lg: 'row' }} p={5} className='card-glass'>
                    <Box>
                        <Image src={EstudiantesPGN} margin={'auto'} borderRadius={10} height={{ base: '100%', lg: '90%' }} />
                    </Box>
                    <Box mt={{ base: 5, lg: 0 }}>
                        <Image src={Estudiantes2PNG} margin={'auto'} borderRadius={10} height={{ base: '100%', lg: '90%' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Preambulo