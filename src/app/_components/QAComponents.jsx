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
                <Grid gridTemplateColumns={{ base: 'repeat(1,minmax(0,1fr))', md: 'repeat(2,minmax(0,1fr))' }} gap={{ base: 10, md: 16 }} w={'full'}>
                    <GridItem >
                        <Flex gap={2}>
                            {/* รูปภาพ */}
                            <Box w={{ base: '6rem', lg: '6rem' }} aspectRatio={'1/1'}>
                                {/* <Image src={'/imgs/QA-imgs/approved.png'} alt={'logo'} fill style={{ objectFit: 'contain' }} /> */}
                                <svg width="100%" height="100%" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.5 21.4375V10.75C31.5 7.5997 31.5 6.02456 30.8869 4.8213C30.3476 3.76289 29.4871 2.90238 28.4287 2.36309C27.2254 1.75 25.6503 1.75 22.5 1.75H10.5C7.3497 1.75 5.77456 1.75 4.5713 2.36309C3.51289 2.90238 2.65238 3.76289 2.11309 4.8213C1.5 6.02456 1.5 7.5997 1.5 10.75V30.25C1.5 33.4003 1.5 34.9754 2.11309 36.1787C2.65238 37.2371 3.51289 38.0976 4.5713 38.6369C5.77456 39.25 7.3497 39.25 10.5 39.25H16.5M20.25 18.625H9M12.75 26.125H9M24 11.125H9M21.1875 33.625L24.9375 37.375L33.375 28.9375" stroke="#7F3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Box>
                            <Box flexGrow={1}>
                                {/* หัวข้อ */}
                                <Text fontSize={{ base: 20, md: 24 }} fontWeight={'bold'}>ขั้นตอนง่าย</Text>
                                {/* คำอธิบาย */}
                                <Text fontSize={12} color={'#8F8F8F'}>ขายโทรศัพท์ได้ง่ายๆราบรื่น ตั้งแต่การตรวจสอบสภาพโทรศัพท์ฟรี ไปจนถึงการบริการถึงบ้านที่สะดวกรวดเร็วที่สุด</Text>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem >
                        <Flex gap={2}>
                            {/* รูปภาพ */}
                            <Box w={{ base: '11rem', lg: '6rem' }} aspectRatio={'1/1'} position={'relative'}>
                                {/* <Image src={'/imgs/QA-imgs/protection.png'} alt={'logo'} fill style={{ objectFit: 'contain' }} /> */}
                                <svg width="100%" height="100%" viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 25.1879V13.9379M10.875 19.5629H22.125M31.5 20.5004C31.5 29.7038 21.4613 36.3974 17.8087 38.5283C17.3936 38.7705 17.1861 38.8916 16.8932 38.9544C16.6658 39.0031 16.3342 39.0031 16.1068 38.9544C15.8139 38.8916 15.6064 38.7705 15.1913 38.5283C11.5387 36.3974 1.5 29.7038 1.5 20.5004V11.5334C1.5 10.0343 1.5 9.2848 1.74518 8.6405C1.96176 8.07132 2.31372 7.56345 2.77061 7.1608C3.2878 6.705 3.98962 6.44182 5.39326 5.91546L15.4466 2.14544C15.8364 1.99927 16.0313 1.92618 16.2318 1.8972C16.4097 1.8715 16.5903 1.8715 16.7682 1.8972C16.9687 1.92618 17.1636 1.99927 17.5534 2.14544L27.6067 5.91546C29.0104 6.44182 29.7122 6.705 30.2294 7.1608C30.6863 7.56345 31.0382 8.07132 31.2548 8.6405C31.5 9.2848 31.5 10.0343 31.5 11.5334V20.5004Z" stroke="#7F3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </Box>
                            <Box flexGrow={1}>
                                {/* หัวข้อ */}
                                <Text fontSize={{ base: 20, md: 24 }} fontWeight={'bold'}>เชื่อถือได้และปลอดภัย</Text>
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
                        <Flex gap={2}>
                            {/* รูปภาพ */}
                            <Box w={{ base: '7rem', lg: '6rem' }} aspectRatio={'1/1'} position={'relative'}>
                                {/* <Image src={'/imgs/QA-imgs/tap.png'} alt={'logo'} fill style={{ objectFit: 'contain' }} /> */}
                                <svg width="100%" height="100%" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 28C1.25 32.1421 4.60786 35.5 8.75 35.5H16.25C20.3921 35.5 23.75 32.1421 23.75 28C23.75 23.8579 20.3921 20.5 16.25 20.5H8.75C4.60786 20.5 1.25 17.1421 1.25 13C1.25 8.85786 4.60786 5.5 8.75 5.5H16.25C20.3921 5.5 23.75 8.85786 23.75 13M12.5 1.75V39.25" stroke="#7F3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </Box>
                            <Box flexGrow={1}>
                                {/* หัวข้อ */}
                                <Text fontSize={{ base: 20, md: 24 }} fontWeight={'bold'}>ราคาที่ดีที่สุดสำหรับคุณ</Text>
                                {/* คำอธิบาย */}
                                <Text fontSize={12} color={'#8F8F8F'}>เรายุติธรรมกับราคาที่มอบให้แก่ลูกค้า เรารับประกันว่าคุณจะขายโทรศัพท์และ
                                    อุปกรณ์ต่างๆได้มูลค่าสูงที่สุด โดยมีระบบประเมิณราคาภายใน 1 นาที</Text>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem >
                        <Flex gap={0}>
                            {/* รูปภาพ */}
                            <Box w={{ base: '7rem', lg: '6rem' }} inset={-2} aspectRatio={'1/1'} position={'relative'}>
                                {/* <Image src={'/imgs/QA-imgs/give-money.png'} alt={'logo'} fill style={{ objectFit: 'contain' }} /> */}
                                <svg width="100%" height="100%" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.3678 13.6597C22.2945 14.4249 20.9811 14.875 19.5625 14.875C15.9381 14.875 13 11.9369 13 8.3125C13 4.68813 15.9381 1.75 19.5625 1.75C21.9119 1.75 23.9729 2.98453 25.1322 4.84027M9.25 35.6634H14.1443C14.7824 35.6634 15.4167 35.7393 16.0353 35.8912L21.2067 37.1479C22.3288 37.4213 23.4977 37.4478 24.6315 37.2276L30.3493 36.1152C31.8598 35.821 33.2492 35.0977 34.3381 34.0384L38.3835 30.1032C39.5388 28.9813 39.5388 27.1608 38.3835 26.037C37.3434 25.0252 35.6964 24.9113 34.5196 25.7693L29.8049 29.2091C29.1297 29.7027 28.3081 29.9684 27.4631 29.9684H22.9103L25.8082 29.9683C27.4416 29.9683 28.7647 28.6812 28.7647 27.0923V26.5171C28.7647 25.1978 27.8417 24.0474 26.5264 23.7285L22.0536 22.6408C21.3257 22.4642 20.5803 22.375 19.8309 22.375C18.0219 22.375 14.7473 23.8728 14.7473 23.8728L9.25 26.1717M35.5 10.1875C35.5 13.8119 32.5619 16.75 28.9375 16.75C25.3131 16.75 22.375 13.8119 22.375 10.1875C22.375 6.56313 25.3131 3.625 28.9375 3.625C32.5619 3.625 35.5 6.56313 35.5 10.1875ZM1.75 25.375L1.75 36.25C1.75 37.3001 1.75 37.8251 1.95436 38.2262C2.13413 38.579 2.42096 38.8659 2.77377 39.0456C3.17485 39.25 3.6999 39.25 4.75 39.25H6.25C7.3001 39.25 7.82515 39.25 8.22623 39.0456C8.57904 38.8659 8.86587 38.579 9.04564 38.2262C9.25 37.8251 9.25 37.3001 9.25 36.25V25.375C9.25 24.3249 9.25 23.7999 9.04564 23.3988C8.86587 23.046 8.57904 22.7591 8.22623 22.5794C7.82515 22.375 7.3001 22.375 6.25 22.375L4.75 22.375C3.6999 22.375 3.17485 22.375 2.77377 22.5794C2.42096 22.7591 2.13413 23.046 1.95436 23.3988C1.75 23.7999 1.75 24.3249 1.75 25.375Z" stroke="#7F3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </Box>
                            <Box flexGrow={1}>
                                {/* หัวข้อ */}
                                <Text fontSize={{ base: 20, md: 24 }} fontWeight={'bold'}>ชำระเงินด่วน</Text>
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