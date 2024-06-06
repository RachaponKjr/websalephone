import { Box, Flex, Grid, GridItem, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const QAComponents = () => {
    return (
        <VStack pb={{ base: 6, md: 24 }} pt={8}>
            <Box my={4}>
                <Text fontSize={'3xl'} fontWeight={'bold'}>ทำไมถึงเลือกเรา</Text>
            </Box>
            <VStack spacing={{ base: 8, md: 20 }} px={{ base: 4, lg: 0 }} py={4} maxW={'100%'} w={'60rem'}>
                <Grid gridTemplateColumns={{base:'repeat(1,minmax(0,1fr))', md:'repeat(2,minmax(0,1fr))'}} gap={{base:10, md:16}} w={'full'}>
                    <GridItem >
                        <Flex>
                            {/* รูปภาพ */}
                            <Box minW={{base:'5rem',lg:'6rem'}} aspectRatio={'1/1'} position={'relative'}>
                                <Image src={'/imgs/QA-imgs/approved.png'} alt={'logo'} fill style={{ objectFit: 'contain' }} />
                            </Box>
                            <Box flexGrow={1}>
                                {/* หัวข้อ */}
                                <Text fontSize={{base:20,md:24}} fontWeight={'bold'}>ขั้นตอนง่าย</Text>
                                {/* คำอธิบาย */}
                                <Text fontSize={12} color={'#8F8F8F'}>ขายโทรศัพท์ได้ง่ายๆราบรื่น ตั้งแต่การตรวจสอบสภาพโทรศัพท์ฟรี ไปจนถึงการบริการถึงบ้านที่สะดวกรวดเร็วที่สุด</Text>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem >
                        <Flex>
                            {/* รูปภาพ */}
                            <Box minW={{base:'5rem',lg:'6rem'}} aspectRatio={'1/1'} position={'relative'}>
                                <Image src={'/imgs/QA-imgs/protection.png'} alt={'logo'} fill style={{ objectFit: 'contain' }} />
                            </Box>
                            <Box flexGrow={1}>
                                {/* หัวข้อ */}
                                <Text fontSize={{base:20,md:24}} fontWeight={'bold'}>เชื่อถือได้และปลอดภัย</Text>
                                {/* คำอธิบาย */}
                                <Text fontSize={12} color={'#8F8F8F'}>เราฝึกอบรมพนักงานผู้ตรวจเช็คทั้งหมด
                                    เพื่อให้แน่ใจว่าพนักงานทำการตรวจสอบ
                                    ที่ละเอียดและรวดเร็วมีการล้างข้อมูลลูกค้า
                                    ป้องกันการถูกโจรกรรมเพื่อความปลอดภัย
                                    และบริการให้กับลูกค้าได้ประทับใจ</Text>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem >
                        <Flex>
                            {/* รูปภาพ */}
                            <Box minW={{base:'5rem',lg:'6rem'}} aspectRatio={'1/1'} position={'relative'}>
                                <Image src={'/imgs/QA-imgs/tap.png'} alt={'logo'} fill style={{ objectFit: 'contain' }} />
                            </Box>
                            <Box flexGrow={1}>
                                {/* หัวข้อ */}
                                <Text fontSize={{base:20,md:24}} fontWeight={'bold'}>ราคาที่ดีที่สุดสำหรับคุณ</Text>
                                {/* คำอธิบาย */}
                                <Text fontSize={12} color={'#8F8F8F'}>เรายุติธรรมกับราคาที่มอบให้แก่ลูกค้า เรารับประกันว่าคุณจะขายโทรศัพท์และ
                                    อุปกรณ์ต่างๆได้มูลค่าสูงที่สุด โดยมีระบบประเมิณราคาภายใน 1 นาที</Text>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem >
                        <Flex>
                            {/* รูปภาพ */}
                            <Box minW={{base:'5rem',lg:'6rem'}} inset={-2} aspectRatio={'1/1'} position={'relative'}>
                                <Image src={'/imgs/QA-imgs/give-money.png'} alt={'logo'} fill style={{ objectFit: 'contain' }} />
                            </Box>
                            <Box flexGrow={1}>
                                {/* หัวข้อ */}
                                <Text fontSize={{base:20,md:24}} fontWeight={'bold'}>ชำระเงินด่วน</Text>
                                {/* คำอธิบาย */}
                                <Text fontSize={12} color={'#8F8F8F'}>เรามีบริการมีมาตราฐาน ซื่อตรงต่อลูกค้า รวดเร็วทันใจรับเงินสดทันทีเมื่อลูกค้าตกลงขายโทรศัพท์และอุปกรณ์กับTunTun</Text>
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </VStack>
        </VStack>
    )
}

export default QAComponents