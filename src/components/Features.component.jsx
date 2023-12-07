import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcApproval
} from 'react-icons/fc'

const Card = ({ heading, description, icon, href }) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px', lg: '400px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}>
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    <Text mt={1} fontSize={'sm'}>
                        {description}
                    </Text>
                </Box>
            </Stack>
        </Box>
    )
}

const Features = () => {
    return (
        <Box p={4} width={{ base: '100%' }}>
            <Stack spacing={10} flexDir={{ base: 'column', md: 'row' }} flexWrap={'wrap'} justifyContent={'center'}>
                <Card
                    heading={'Facilita tu búsqueda'}
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    description={'Facilita tu búsqueda: Explora pensiones universitarias de manera rápida y sencilla. Ahorra tiempo en la búsqueda de alojamiento.'}
                    href={'#'}
                />
                <Card
                    heading={'Variedad de opciones'}
                    icon={<Icon as={FcCollaboration} w={10} h={10} />}
                    description={'Encuentra pensiones que se adapten a tus necesidades y preferencias, ya sea por ubicación, comodidades o precios.'}
                    href={'#'}
                />
                <Card
                    heading={'Transparecia total'}
                    icon={<Icon as={FcDonate} w={10} h={10} />}
                    description={'Nuestra plataforma se basa en la transparencia. Toda la información sobre las pensiones, incluidos los costos y servicios, se presenta de manera clara y directa.'}
                    href={'#'}
                />
                <Card
                    heading={'Compromiso con la calidad'}
                    icon={<Icon as={FcApproval} w={10} h={10} />}
                    description={'Nos esforzamos por ofrecer solo las mejores opciones de alojamiento, garantizando calidad y confort para tu experiencia estudiantil.'}
                    href={'#'}
                />
            </Stack>
        </Box>
    )
}

export default Features;