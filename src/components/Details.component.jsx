import React from 'react'
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { Tweet } from "react-tweet";
import Features from './Features.component';

const Details = () => {
    return (
        <>
            <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize={{ base: '3xl', lg: '3xl' }}
                fontWeight='extrabold'
                textAlign={'center'}
                mt={{base: 5, md: 10}}
            >
                <span style={{ color: "#000" }}>¿Porqué </span> Unipensiones <span style={{ color: '#000' }}>?</span>
            </Text>
            <Stack flexDir={{ base: 'column', lg: 'row' }} spacing={50}>
                <Box mt={10}>
                    <Features />
                </Box>
                <Box pl={4} pr={4}>
                    <Tweet id="1731020418276851845" />
                </Box>
            </Stack>
        </>
    )
}

export default Details;