import { Box, Button, Flex, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const GridItems = () => {
    return (
        <>
            <GridItem boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
                <Box w={'full'} aspectRatio={'1/1'} bg={'#FAFAFA'}>

                </Box>
                <Flex flexDirection={'column'} px={2} py={2} gap={4}>
                    <Text as={'h3'} fontSize={'14px'} noOfLines={2}> Lorem ipsum dolor sit.Lorem ipsum dolor sit.</Text>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        {/* ราคา */}
                        <Text as={'span'} textColor={"#F0694D"}>฿39</Text>
                        <Button size={'sm'} bg={'#7F3A8A'} color={'#FFFFFF'}>หยิบลงตะกร้า</Button>
                    </Flex>
                </Flex>
            </GridItem>
        </>
    )
}

export default GridItems