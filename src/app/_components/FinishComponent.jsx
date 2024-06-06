import { Box, Flex, Grid, GridItem, Text, space } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const FinishComponent = () => {
    return (
        <>
            <Box mb={16} mx={{ base: 0, md: "auto" }} w={{ base: 'full', xl: "70rem" }} px={{base:4,xl:0}}>
                <Grid templateColumns={{base: 'repeat(1, 1fr)',md:"repeat(2,1fr)",xl: 'repeat(3, 1fr)'}} gap={{base:"20px",xl:'40px'}} bgColor={{ base: "#FAFAFA", md: "#FFFFFF" }}  boxShadow={{base:"rgba(0, 0, 0, 0.16) 0px 1px 4px",md:'none'}} p={{base:"3rem",md:'1rem',xl:"3rem"}}>
                    <GridItem w={'full'} display={"flex"} flexDirection={'column'} bgColor={{ base: "#ffffff", md: "#FAFAFA" }} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} py={6} px={4}>
                        <Flex flexDirection={{ base: "column", md: "row" }} gap={{ base: 0, md: 3 }}>
                            <Flex flexDirection={{base:'row-reverse',md:'row'}} flexGrow={1} gap={4}>
                                {/* รูปภาพสินค้า */}
                                <Box flexGrow={1} aspectRatio={'3/3.5'} position={'relative'}>
                                <Image src="/phone.png" alt="iphone11" fill style={{objectFit:'cover'}}/>
                                </Box>
                                <Flex justifyContent={{ base: 'center', md: 'start' }} flexDirection={'column'} w={'70%'} fontSize={'12px'} h={'4rem'} >
                                    <Text fontWeight={'bold'} fontSize={{ base: '13px', md: '16px' }}>รายการรับฝาก</Text>
                                    <Text fontSize={{ base: '12px', md: '16px' }}>iPhone 11 128 GB</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Box w={'full'} px={{ base: 0, md: 2, lg: 4 }}>
                            <Text as={'p'} fontSize={{ base: '11px', md: '14px' }} textAlign={{base:'start',md:'center'}} mt={{base:2,md:6}}>
                                ไม่มีรอยขีดข่วน/ หน้าจอไม่มีรอย/ แสดงภาพหน้าจอปกติ/ เครื่องไทย TH / หมดประกัน/ อุปกรณ์ครบ/ แบตเตอรี่ ต่ำกว่า 80%/ ระบบสัมผัส/
                            </Text>
                        </Box>
                        <Box display={{ base: 'none', md: 'block' }} w={'full'} h={1} my={4} bg={"#ffffff"}></Box>
                        <Box fontSize={'12px'} fontWeight={'bold'} my={{base:2,md:4}} flexGrow={{ base: 0, md: 1 }} display={'flex'} justifyContent={'end'} alignItems={'center'}>
                            <Text fontSize={{ base: '16px', md: '18px' }}>ยอดรวมสุทธิ : <Text as={'span'} color={'red'}>3,025</Text> บาท</Text>
                        </Box>
                    </GridItem>
                    <GridItem display={'flex'} flexDirection={'column'} colSpan={{base:1,xl:2}} boxShadow={{base:'none',md:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} bgColor={{ base: "none", md: "#FAFAFA" }}>
                        <Box my={6} borderLeft={{ base: 'none', md: '6px solid #7F3A8A' }}>
                            <Text as={'p'} fontSize={{base:"20px",md:'28px'}} fontWeight={'bold'} textAlign={'center'}>
                                ดำเนินการเสร็จสิ้น
                            </Text>
                        </Box>
                        <Flex flexGrow={{base:0,md:1}} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={6}>
                                <Text as={'span'} textAlign={'center'} fontSize={{base:"14px",md:"18px"}}>
                                    โปรดรอเจ้าหน้าที่ติดต่อกลับ<br />
                                    ขอบคุณที่ใช้บริการ TunTun Mobile

                                </Text>
                                <Box w={{base:"70px",md:"100px"}} h={{base:"70px",md:"100px"}}>
                                    <svg width="100%" height="100%" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="55" cy="55" r="55" fill="#7F3A8A" />
                                        <rect x="29" y="58.1543" width="12.46" height="26.1982" rx="2" transform="rotate(-45 29 58.1543)" fill="white" />
                                        <rect x="52.3555" y="71.9531" width="12.46" height="39.7997" rx="2" transform="rotate(-135 52.3555 71.9531)" fill="white" />
                                    </svg>

                                </Box>
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </>
    )
}

export default FinishComponent