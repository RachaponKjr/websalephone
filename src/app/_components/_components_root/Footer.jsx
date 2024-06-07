import { Box, Container, Flex, Grid, GridItem, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Stack spacing={0}>
        <Box w={'full'} h={'max-content'} bg={'#7F3A8A'}>
            <Container maxW='container.xl' h='full'>
                <VStack px={{base: 0, lg: 6}} pt={6} spacing={6} pb={14}>
                    <Text fontSize={'clamp(28px, 3vw, 32px)'} fontWeight={'bold'} color={'white'}>TunTun Mobile ดียังไง?</Text>
                    <Grid templateColumns={{base: 'repeat(2,minmax(0,1fr))', md:'repeat(4,minmax(0,1fr))'}} rowGap={{base:6,md:6}} w={'full'}>
                        <GridItem justifySelf={'center'}>
                            <Flex flexDirection={'column'} gap={4} alignItems={'center'}>
                                {/* รูปภาพ */}
                                <Box position={'relative'} w={{base:'4rem',lg:'4rem'}} aspectRatio={'1/1'}>
                                    <Image src={'/imgs/footer-imgs/accept.png'} alt={'logo'} fill style={{objectFit: 'contain'}} />
                                </Box>
                                {/* คำอธิบาย */}
                                <Flex flexDirection={'column'} gap={1} textAlign={'center'} color={'white'}>
                                    <Text as={'h4'} fontSize={'clamp(18px, 3vw, 24px)'} fontWeight={'bold'}>น่าเชื่อถือ</Text>
                                    <Flex flexDirection={'column'}>
                                        <Text as={'h6'} fontSize={'clamp(12px, 3vw, 14px)'} fontWeight={'regular'}>มีประสบการณ์การรับซื้อ</Text>
                                        <Text as={'h6'} fontSize={'clamp(12px, 3vw, 14px)'} fontWeight={'regular'}>ไม่โกงอย่างแน่นอน</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </GridItem>
                        <GridItem justifySelf={'center'}>
                            <Flex flexDirection={'column'} gap={4} alignItems={'center'}>
                                {/* รูปภาพ */}
                                <Box position={'relative'} w={{base:'4rem',lg:'4rem'}} aspectRatio={'1/1'}>
                                    <Image src={'/imgs/footer-imgs/money.png'} alt={'logo'} fill style={{objectFit: 'contain'}} />
                                </Box>
                                {/* คำอธิบาย */}
                                <Flex flexDirection={'column'} gap={1} textAlign={'center'} color={'white'}>
                                    <Text as={'h4'} fontSize={'clamp(18px, 3vw, 24px)'} fontWeight={'bold'}>สะดวกสบาย</Text>
                                    <Flex flexDirection={'column'}>
                                        <Text as={'h6'} fontSize={'clamp(12px, 3vw, 14px)'} fontWeight={'regular'}>มีพนักงานไปรับสินค้า</Text>
                                        <Text as={'h6'} fontSize={'clamp(12px, 3vw, 14px)'} fontWeight={'regular'}>ถึงบ้านของคุณ</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </GridItem>
                        <GridItem justifySelf={'center'}>
                            <Flex flexDirection={'column'} gap={4} alignItems={'center'}>
                                {/* รูปภาพ */}
                                <Box position={'relative'} w={{base:'4rem',lg:'4rem'}} aspectRatio={'1/1'}>
                                    <Image src={'/imgs/footer-imgs/linechart.png'} alt={'logo'} fill style={{objectFit: 'contain'}} />
                                </Box>
                                {/* คำอธิบาย */}
                                <Flex flexDirection={'column'} gap={1} textAlign={'center'} color={'white'}>
                                    <Text as={'h4'} fontSize={'clamp(18px, 3vw, 24px)'} fontWeight={'bold'}>ให้ราคาสูง</Text>
                                    <Flex flexDirection={'column'}>
                                        <Text as={'h6'} fontSize={'clamp(12px, 3vw, 14px)'} fontWeight={'regular'}>รับซื้อสินค้าในราคาสูง</Text>
                                        <Text as={'h6'} fontSize={'clamp(12px, 3vw, 14px)'} fontWeight={'regular'}>เมื่อเทียบกับเจ้าอื่นๆ</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </GridItem>
                        <GridItem justifySelf={'center'}>
                            <Flex flexDirection={'column'} gap={4} alignItems={'center'}>
                                {/* รูปภาพ */}
                                <Box position={'relative'} w={{base:'4rem',lg:'4rem'}} aspectRatio={'1/1'}>
                                    <Image src={'/imgs/footer-imgs/customer.png'} alt={'logo'} fill style={{objectFit: 'contain'}} />
                                </Box>
                                {/* คำอธิบาย */}
                                <Flex flexDirection={'column'} gap={1} textAlign={'center'} color={'white'}>
                                    <Text as={'h4'} fontSize={'clamp(18px, 3vw, 24px)'} fontWeight={'bold'}>ได้เงินทันที</Text>
                                    <Flex flexDirection={'column'}>
                                        <Text as={'h6'} fontSize={'clamp(12px, 3vw, 14px)'} fontWeight={'regular'}>โอนเงินทันทีเมื่อทำการ</Text>
                                        <Text as={'h6'} fontSize={'clamp(12px, 3vw, 14px)'} fontWeight={'regular'}>ตกลงซื้อขายกันเรียบร้อย</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </GridItem>
                    </Grid>
                </VStack>
            </Container>
        </Box>
       {/* copyright */}
        <Flex alignItems={'center'} justifyContent={'center'} w={'full'} h={'46px'}>
            <Text color={'#7F3A8A'} fontSize={'clamp(12px, 3vw, 14px)'} fontWeight={'bold'}>Copyright © 2024 TunTun Mobile. All rights reserved.</Text>
        </Flex>
    </Stack>
    </>
  )
}

export default Footer