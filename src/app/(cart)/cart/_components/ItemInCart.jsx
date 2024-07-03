import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const ItemInCart = () => {
    return (
        <>
            <Flex alignItems={{base:'start',lg:'center'}} gap={4} w={'full'}>
                {/* Input chack box */}
                <input className='checkbox_input' type="checkbox" style={{ width: '30px', height: '30px', borderRadius: '10px', background: '#8F8F8F' }} />
                {/* Image Item */}
                <Box minW={{base:'5rem',md:'10rem'}} h={{base:'6rem',md:'13rem'}} bg={'#FAFAFA'}>

                </Box>
                <Flex flexDirection={'column'} alignItems={'start'} gap={2} h={'full'} flexGrow={1}>
                    {/* หัวเรื่อง */}
                    <Text as={'h1'} fontWeight={'bold'} fontSize={{base:'10px',sm:'12px',md:'18px',lg:'24px'}}>สายชาร์จเร็ว สายชาร์จ Micro USB Fast Charging 1M/1.5M/2M</Text>
                    <Box w={'full'} h={'2px'} bg={'#7F3A8A'}></Box>
                    <Flex flexDirection={{base:'column',sm:'row'}} position={'relative'} gap={{base:'1rem',lg:'6rem'}} mt={{base:'8px',md:'8'}} w={'full'}>
                        <Text as={'h6'} fontWeight={'bold'} fontSize={{base:'12px',md:'18px',lg:'24px'}}>จำนวน</Text>
                        <Flex w={'max-content'} h={{base:'2rem',lg:'2.5rem'}}>
                            <Button border={'1px solid #7F3A8A'} roundedRight={'none'} _hover={{ bg: '#7F3A8A', color: 'white' }} bg={'white'} color={'#7F3A8A'} h={'full'}>-</Button>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} borderTop={'1px solid #7F3A8A'} borderBottom={'1px solid #7F3A8A'} h={'full'} w={{base:'3rem',lg:'6rem'}}>
                                <Text as={'h6'} fontSize={{base:'12px',lg:'18px'}} fontWeight={'bold'} color={'#7F3A8A'}>1</Text>
                            </Box>
                            <Button border={'1px solid #7F3A8A'} roundedLeft={'none'} _hover={{ bg: '#7F3A8A', color: 'white' }} bg={'white'} color={'#7F3A8A'} h={'full'}>+</Button>
                        </Flex>
                        <Flex justifyContent={'center'} alignItems={'center'} gap={{base:2,md:0}} flexDirection={{base:'row',md:'column'}} position={'absolute'} right={'0'}>
                            <Text as={'h5'} fontSize={{base:'18px',md:'32px',lg:'42px'}} fontWeight={'bold'} textColor={'#7F3A8A'}>฿39</Text>
                            <Box px={3} py={1} bg={'#7F3A8A'} textColor={'white'} rounded={'lg'}>
                                <Text fontSize={{base:'10px',md:'12px',lg:'16px'}}>ส่วนลด80%</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default ItemInCart