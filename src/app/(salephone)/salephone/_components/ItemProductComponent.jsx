import { Box, Flex, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const ItemProductComponent = () => {
    return (
        <>
            <GridItem display={'flex'} flexDirection={'column'} gap={'8px'}>
                {/* รูปภาพ */}
                <Box bg={'#FAFAFA'} w={'full'} h={{base:'4rem',md:'10rem',lg:'12rem',xl:'15rem'}}>

                </Box>
                {/* ปุ่ม */}
                <Flex justifyContent={'center'} cursor={'pointer'} alignItems={'center'} rounded={{base:'2px',md:'8px',lg:'xl'}} bg={'#7F3A8A'} py={{base:1,md:3}}>
                    <Text as={'span'} textColor={'white'} fontSize={{base:'8px',md:'18px',lg:'20px'}} fontWeight={'bold'}>หยิบลงตะกร้า</Text>
                </Flex>
            </GridItem>
        </>
    )
}

export default ItemProductComponent