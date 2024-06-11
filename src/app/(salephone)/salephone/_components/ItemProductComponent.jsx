import { Box, Flex, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const ItemProductComponent = () => {
    return (
        <>
            <GridItem display={'flex'} flexDirection={'column'} gap={'8px'}>
                {/* รูปภาพ */}
                <Box bg={'#FAFAFA'} w={'full'} h={'15rem'}>

                </Box>
                {/* ปุ่ม */}
                <Flex justifyContent={'center'} cursor={'pointer'} alignItems={'center'} rounded={'xl'} bg={'#7F3A8A'} py={3}>
                    <Text as={'span'} textColor={'white'} fontSize={'20px'} fontWeight={'bold'}>หยิบลงตะกร้า</Text>
                </Flex>
            </GridItem>
        </>
    )
}

export default ItemProductComponent