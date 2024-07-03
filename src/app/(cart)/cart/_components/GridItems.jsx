import { Box, Button, Flex, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const GridItems = () => {
    return (
        <>
            <GridItem boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
                <Box w={'full'} aspectRatio={'1/1'} bg={'#FAFAFA'}>

                </Box>
                <Flex flexDirection={'column'} p={{base:1,md:2}} gap={{base:2,md:4}}>
                    <Text as={'h3'} fontSize={{base:'8px',sm:'10px',md:'14px'}} noOfLines={2}> Lorem ipsum dolor sit.Lorem ipsum dolor sit.</Text>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        {/* ราคา */}
                        <Text as={'span'} textColor={"#F0694D"} fontSize={{base:'10px',sm:'12px',md:'18px',lg:'24px'}}>฿39</Text>
                        <Button bg={'#7F3A8A'} color={'#FFFFFF'} w={{base:'2rem',sm:'4rem',md:'5rem',lg:'6rem'}} h={{base:'1rem',sm:'1.5rem',md:'2rem'}} fontSize={{base:'6px',sm:'8px',md:'10px',lg:'13px'}} rounded={{base:'2px',sm:'4px',md:'4px'}}>หยิบลงตะกร้า</Button>
                    </Flex>
                </Flex>
            </GridItem>
        </>
    )
}

export default GridItems