import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const QAComponents = () => {
    return (
        <VStack pb={{base: 6, md:24}} pt={8}>
            <Box my={4}>
                <Text fontSize={'3xl'} fontWeight={'bold'}>ทำไมถึงเลือกเรา</Text>
            </Box>
            <VStack spacing={{base: 8, md: 20}} px={{base: 4, lg: 0}} py={12} maxW={'100%'} w={'60rem'}>
                <Stack direction={{base: 'column', md: 'row'}} alignItems={{base: 'center', md: 'start'}} spacing={8} maxW={'100%'} w={'60rem'} h={'max-content'}>
                    <Flex gap={{base: 0, lg:4}} maxW={'100%'} w={{base:'100%',sm:"70%",md:'50%'}}  h={'max-content'}>
                        {/* รูปภาพ */}
                        <Flex w={'140px'} h={'120px'} position={'relative'}>
                            <Image src={'/imgs/QA-imgs/approved.png'} alt={'logo'} fill style={{objectFit: 'contain'}} />
                        </Flex>
                        {/* คำอธิบาย */}
                        <Flex flexDirection={'column'} gap={1} justifyContent={'start'} maxW={'100%'} w={'20rem'}>
                            <Text fontSize={{base: '18px', md: '20px'}} fontWeight={'bold'}>ขั้นตอนง่าย</Text>
                            <Text fontSize={{base: '12px', lg: '14px'}} color={'#8F8F8F'}>ขายโทรศัพท์ได้ง่ายๆราบรื่น ตั้งแต่การตรวจสอบสภาพโทรศัพท์ฟรี ไปจนถึงการบริการถึงบ้านที่สะดวกรวดเร็วที่สุด
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex gap={{base: 0, lg:4}} maxW={'100%'} w={{base:'100%',sm:"70%",md:'50%'}} >
                        {/* รูปภาพ */}
                        <Flex maxW={'100%'}  w={'120px'} h={'120px'} position={'relative'}>
                            <Image src={'/imgs/QA-imgs/protection.png'} alt={'logo'} fill style={{objectFit: 'contain'}} />
                        </Flex>
                        {/* คำอธิบาย */}
                        <Flex flexDirection={'column'} gap={1} justifyContent={'start'} maxW={'100%'} w={'70%'}>
                            <Text fontSize={{base: '18px', md: '20px'}} fontWeight={'bold'}>เชื่อถือได้และปลอดภัย</Text>
                            <Text fontSize={{base: '12px', lg: '14px'}} color={'#8F8F8F'}>ขายโทรศัพท์ได้ง่ายๆราบรื่นเราฝึกอบรมพนักงานผู้ตรวจเช็คทั้งหมด
                                เพื่อให้แน่ใจว่าพนักงานทำการตรวจสอบ
                                ที่ละเอียดและรวดเร็วมีการล้างข้อมูลลูกค้า
                                ป้องกันการถูกโจรกรรมเพื่อความปลอดภัย
                                และบริการให้กับลูกค้าได้ประทับใจ
                            </Text>
                        </Flex>
                    </Flex>
                </Stack>
                {/* ส่วนล่าง */}
                <Stack direction={{base: 'column', md: 'row'}} spacing={8} maxW={'100%'} w={'60rem'} h={'max-content'} alignItems={{base: 'center', md: 'start'}}>
                    <Flex gap={{base: 0, lg:4}} maxW={'100%'} w={{base:'100%',sm:"70%",md:'50%'}}  h={'max-content'}>
                        {/* รูปภาพ */}
                        <Flex w={'140px'}  h={'120px'} position={'relative'}>
                            <Image src={'/imgs/QA-imgs/tap.png'} alt={'logo'} fill style={{objectFit: 'contain'}} />
                        </Flex>
                        {/* คำอธิบาย */}
                        <Flex flexDirection={'column'} gap={1} justifyContent={'start'} maxW={'100%'} w={'20rem'}>
                            <Text fontSize={{base: '18px', md: '20px'}} fontWeight={'bold'}>ราคาที่ดีที่สุดสำหรับคุณ</Text>
                            <Text fontSize={{base: '12px', lg: '14px'}} color={'#8F8F8F'}>
                            เรายุติธรรมกับราคาที่มอบให้แก่ลูกค้า เรารับประกันว่าคุณจะขายโทรศัพท์และ
                                อุปกรณ์ต่างๆได้มูลค่าสูงที่สุด โดยมีระบบประเมิณราคาภายใน 1 นาท
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex gap={{base: 0,sm:3, lg:4}} maxW={'100%'} w={{base:'100%',sm:"70%",md:'50%'}} >
                        {/* รูปภาพ */}
                        <Flex  w={'120px'} h={'120px'}  position={'relative'}>
                            <Image src={'/imgs/QA-imgs/give-money.png'} alt={'logo'} fill style={{objectFit: 'contain'}} />
                        </Flex>
                        {/* คำอธิบาย */}
                        <Flex flexDirection={'column'} gap={1} justifyContent={'start'} maxW={'100%'} w={'70%'}>
                            <Text fontSize={{base: '18px', md: '20px'}} fontWeight={'bold'}>ชำระเงินด่วน</Text>
                            <Text fontSize={{base: '12px', lg: '14px'}} color={'#8F8F8F'}>
                            เรามีบริการมีมาตราฐาน ซื่อตรงต่อลูกค้า รวดเร็วทันใจรับเงินสดทันทีเมื่อลูกค้าตกลงขายโทรศัพท์และอุปกรณ์กับTunTun
                            </Text>
                        </Flex>
                    </Flex>
                </Stack>
            </VStack>
        </VStack>
    )
}

export default QAComponents