import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const BoxProductComponent = ({ headText, children }) => {
    return (
        <>
            <Flex flexDirection={'column'} gap={'32px'} w={'full'}>
                <Flex justifyContent={'center'}>
                    <Box px={'3rem'} py={'1rem'} rounded={'28px'} bg={'#7F3A8A'}>
                        <Text as={'h4'} fontSize={'32px'} fontWeight={'bold'} textColor={'#FFFFFF'}>{headText}</Text>
                    </Box>
                </Flex>
                <Flex px={'4rem'}>
                    <Grid p={'1rem'} templateColumns={'repeat(5,1fr)'} gap={'1rem'} w={'full'} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
                        {/* ITEM PRODUCT */}
                        {children}
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}

export default BoxProductComponent