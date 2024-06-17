import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import BoxProductComponent from './BoxProductComponent'
import ItemProductComponent from './ItemProductComponent'

const ProductComponent = ({ headText, children }) => {
    return (
        <>
            <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={{base:'24px',md:'0px'}} w={'full'}>
                <Text as={'h3'} fontSize={{base:'24px',md:'36px',lg:'48px'}} fontWeight={'bold'} textColor={'#324054'}>{headText}</Text>
                {/* ส่วนของสินค้า */}
                <Flex flexDirection={'column'} gap={'32px'} w={'full'}>
                   {children}
                </Flex>
            </Flex>
        </>
    )
}

export default ProductComponent