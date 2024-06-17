import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const BoxProductComponent = ({ headText, children }) => {
    return (
        <>
            <Flex flexDirection={'column'} gap={'32px'} w={'full'}>
                <Flex justifyContent={'center'}>
                    <Box px={'3rem'} py={{base:'0.5rem',md:'1rem'}} rounded={{base:'8px',lg:'28px'}} bg={'#7F3A8A'}>
                        <Text as={'h4'} fontSize={{base:'18px',md:'24px',lg:'32px'}} fontWeight={'bold'} textColor={'#FFFFFF'}>{headText}</Text>
                    </Box>
                </Flex>
                <Flex px={{base:'0rem',md:'4rem'}}>
                    <Grid p={'1rem'} templateColumns={{base:'repeat(4,1fr)',lg:'repeat(5,1fr)'}} gap={{base:'0.5rem',md:'1rem'}} w={'full'} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
                        {/* ITEM PRODUCT */}
                        {children}
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}

export default BoxProductComponent