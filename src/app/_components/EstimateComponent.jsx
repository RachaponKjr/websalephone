'use client'
import { Box, Button, Container, Flex, HStack, Select, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useCallback, useEffect } from 'react'
import SwiperSlidePhone from './SwiperSlidePhone'
import Image from 'next/image'

import { data } from '../_data/dataPhone'

const EstimateComponent = ({ nextStep }) => {
    const [mobile, setMobile] = React.useState('')
    const [model, setModel] = React.useState('')

    // debug
    return (
        <>
            <Box w={'full'} h={'max-content'} bg={{ base: "none", lg: '#7F3A8A' }} spacing={0}>
                <Container maxW='container.xl' h='full' px={{ base: 0, lg: "auto" }}>
                    <Flex flexDirection={{ base: 'column-reverse', lg: 'row' }} h={'full'} gap={{ lg: 4, xl: 6 }} pt={{ base: 0, md: 0 }} alignItems={{ base: 'start', md: 'center' }}>
                        <Flex bg={{ base: "#7F3A8A", lg: "none" }} px={{ base: 4, md: 6 }} py={{ base: 4, md: 6, lg: 0 }} w={{ base: '100%', lg: '60%' }} h={'full'} flexDirection={'column'} gap={4} mt={'1rem'} >
                            {/* <Box display={{ base: 'none', lg: 'flex' }} justifyContent={'center'} w={'100%'} h={'max-content'} >
                            <Text color={"#7F3A8A"} bg={'white'} fontSize={{ lg: '24px', xl: '30px' }} fontWeight={'bold'} px={'10'} py={3} rounded={'3xl'}>IPHONE</Text>
                        </Box> */}
                            <Box h={{ base: '10rem', md: "22rem", lg: '16rem', xl: '22rem' }} ml={{ base: 0, lg: 4 }} position={'relative'} rounded={{ base: 'none', lg: 'none' }} p={2}>
                                {/* <SwiperSlidePhone /> */}
                                <Image src={"/banner.jpg"} fill objectFit='contain' objectPosition='center' alt='banner' />
                            </Box>
                        </Flex>
                        <Box w={{ base: '100%', md: '30rem' }} display={'flex'} justifyContent={'center'} px={4}>
                            <Flex boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px;'} py={6} flexDirection={'column'} w={{ base: '100%', lg: '100%' }} my={{ base: 0, md: '1rem' }} gap={8} h={'full'} bg={'white'} rounded={{ base: 'none', md: '3xl' }}>
                                <Text fontSize={{ base: "xl", lg: "xl", xl: '2xl' }} textAlign={'center'} fontWeight={'bold'}>
                                    ประเมินราคาโทรศัพท์ที่ต้องการขาย
                                </Text>
                                <VStack w={'full'} spacing={8} justifyContent={'center'}>
                                    <Box w={'308px'} px={4}>
                                        <Select boxShadow={'lg'} size={'lg'} placeholder='เลือกยี่ห้อโทรศัพท์' onChange={(e) => setMobile(e.target.value)}>
                                            {data.map((item, index) => {
                                                return (
                                                    <option key={index}>{item.name}</option>
                                                )
                                            })}
                                        </Select>
                                    </Box>
                                    <Box w={'308px'} px={4}>
                                        <Select boxShadow={'lg'} size={'lg'} placeholder='เลือกรุ่น' onChange={(e) => setModel(e.target.value)}>
                                            {data.filter(item => item.name === mobile).map((item, _) => {
                                                return (
                                                    item.model.map((item, index) => {
                                                        return (
                                                            <option key={index}>{item.name}</option>
                                                        )
                                                    })
                                                )
                                            })}
                                        </Select>
                                    </Box>
                                    <Box w={'308px'} px={4}>
                                        <Select boxShadow={'lg'} size={'lg'} placeholder='เลือกความจุ'>
                                            {data.filter(item => item.name === mobile).map((item, _) => {
                                                return (
                                                    item.model.filter(item => item.name === model).map((item, index) => {
                                                        return (
                                                            item.memory.map((item, index) => {
                                                                return (
                                                                    <option key={index}>{item.size}</option>
                                                                )
                                                            })
                                                        )
                                                    })
                                                )
                                            })}
                                        </Select>
                                    </Box>
                                    <Box w={{ base: '288px', lg: '288px', xl: '308px' }} h={'3rem'} mt={{ base: 0, md: 6 }} mb={4} px={'2rem'} onClick={() => nextStep(1)}>
                                        <Button w={'full'} h={'full'} bg={'#7F3A8A'} color={'white'} >เริ่มเลย</Button>
                                    </Box>
                                </VStack>
                            </Flex>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default EstimateComponent