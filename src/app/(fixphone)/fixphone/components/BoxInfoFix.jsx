import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const BoxInfoFix = () => {
    return (
        <>
            <Box>
                {/* หัวเรื่อง */}
                <Text as={'h3'} fontWeight={'bold'} fontSize={{base:'24px',md:'32px'}} my={'28px'} textAlign={'center'} textColor={"#7F3A8A"}>
                    วิธีการส่งซ่อมโทรศัพท์
                </Text>
                <Box w={{base:'100%',md:'70%'}} px={{base:3,md:'0'}} mx={{base:'0',md:'auto'}}>
                    {/* ข้อความ */}
                    <Grid templateColumns={'repeat(2,1fr)'} rowGap={'2rem'} columnGap={{base:'1rem',md:'2rem'}}>
                        <GridItem sx={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'start', alignItems: 'center' }}>
                            <Image src={'/fix-img/customer-service.png'} width={100} height={100} alt='' />
                            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                <Text as={'h4'} fontWeight={'bold'} fontSize={{base:'14px',md:'20px'}} textAlign={'center'} textColor={"#7F3A8A"}>
                                    1. โทรเบอร์ติดต่อ
                                </Text>
                                <Text as={'p'} textAlign={'center'} fontSize={{base:'11px',md:'16px'}} textColor={'#324054'}>
                                    เล่าอาการเสียของโทรศัพท์ ได้ที่เบอร์นี้ได้เลย
                                    XXX-XXX-XXXX
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem sx={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'start', alignItems: 'center' }}>
                            <Image src={'/fix-img/approved.png'} width={100} height={100} alt='' />
                            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                <Text as={'h4'} fontWeight={'bold'} fontSize={{base:'14px',md:'20px'}} textAlign={'center'} textColor={"#7F3A8A"}>
                                    2. ประเมินราคาซ่อม
                                </Text>
                                <Text as={'p'} textAlign={'center'} fontSize={{base:'11px',md:'16px'}} textColor={'#324054'}>
                                    ทางร้านจะแจ้งราคาโดยประมาณ ให้เราทราบ
                                    เพื่อให้เราตัดสินใจก่อนส่งซ่อม
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem sx={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'start', alignItems: 'center' }}>
                            <Image src={'/fix-img/give-money.png'} width={100} height={100} alt='' />
                            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                <Text as={'h4'} fontWeight={'bold'} fontSize={{base:'14px',md:'20px'}} textAlign={'center'} textColor={"#7F3A8A"}>
                                    3. ยืนยันการซ่อม
                                </Text>
                                <Text as={'p'} textAlign={'center'} fontSize={{base:'11px',md:'16px'}} textColor={'#324054'}>
                                    เมื่อตกลงที่จะส่งซ่อมกันแล้ว
                                    ทางร้านจะแจ้งที่อยู่ให้เรา
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem sx={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'start', alignItems: 'center' }}>
                            <Image src={'/fix-img/delivery.png'} width={100} height={100} alt='' />
                            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                <Text as={'h4'} fontWeight={'bold'} fontSize={{base:'14px',md:'20px'}} textAlign={'center'} textColor={"#7F3A8A"}>
                                    4. ส่งของผ่านขนส่ง
                                </Text>
                                <Text as={'p'} textAlign={'center'} fontSize={{base:'11px',md:'16px'}} textColor={'#324054'}>
                                    เราก็สามารถ ใช้บริการ แอพต่าง ๆ
                                    เรียกให้มารับโทรศัพท์ของเราไปซ่อมได้ทันที
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem sx={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'start', alignItems: 'center' }}>
                            <Image src={'/fix-img/file.png'} width={100} height={100} alt='' />
                            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                <Text as={'h4'} fontWeight={'bold'} fontSize={{base:'14px',md:'20px'}} textAlign={'center'} textColor={"#7F3A8A"}>
                                    5. สรุปค่าใช้จ่าย
                                </Text>
                                <Text as={'p'} textAlign={'center'} fontSize={{base:'11px',md:'16px'}} textColor={'#324054'}>
                                    หลังจากซ่อมเสร็จ ทางร้านจะสรุปค่าใช้จ่ายให้
                                    แล้วหลังจากชำระค่าบริการเสร็จ
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem sx={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'start', alignItems: 'center' }}>
                            <Image src={'/fix-img/booking.png'} width={100} height={100} alt='' />
                            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                <Text as={'h4'} fontWeight={'bold'} fontSize={{base:'14px',md:'20px'}} textAlign={'center'} textColor={"#7F3A8A"}>
                                    6. ส่งเครื่องกับคืนลูกค้า
                                </Text>
                                <Text as={'p'} textAlign={'center'} fontSize={{base:'11px',md:'16px'}} textColor={'#324054'}>
                                    ทางร้านจะส่งเครื่องกลับมาให้คุณได้ทันที
                                </Text>
                            </Box>
                        </GridItem>
                    </Grid>
                    <Flex flexDirection={'column'} mt={'32px'} mb={'24px'} gap={'4px'} justifyContent={'center'} alignItems={'center'}>
                        <Text as={'h6'} fontSize={{base:'12px',md:'20px'}} textAlign={'center'} textColor={'#7F3A8A'} fontWeight={'bold'}>หรือสามารถทักข้อความเพื่อมาสอบถามกับเราได้เลย</Text>
                        <Box display={'flex'} gap={'16px'}>
                            <Flex flexDirection={'row'} alignItems={'center'} gap={'16px'}>
                                {/* icons */}
                                <Box w={{base:'14px',md:"18px"}} h={{base:'14px',md:"18px"}}>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="#2A353D" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M14 6.83185C15.4232 7.43624 16.5638 8.57677 17.1682 10M14.654 2C18.1912 3.02076 20.9791 5.80852 22 9.34563" stroke="#2A353D" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </Box>
                                <Text as={'h6'} fontSize={{base:'10px',md:'16px'}}>0923456789</Text>
                            </Flex>
                            <Flex flexDirection={'row'} alignItems={'center'} gap={'16px'}>
                                {/* icons */}
                                <Box w={{base:'14px',md:"18px"}} h={{base:'14px',md:"18px"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="line"><g><path d="M30 13.14a1 1 0 0 0-1 1 8.66 8.66 0 0 1-.18 1.67 1.36 1.36 0 0 0 0 .2 7.1 7.1 0 0 1-.82 2.25 10.77 10.77 0 0 1-2.79 3.33 43.64 43.64 0 0 1-8.76 5.85l.17-.85A1.76 1.76 0 0 0 15 24.48c-6.44-.57-11.29-5-11.29-10.34C3.69 8.4 9.37 3.72 16.34 3.72a13.3 13.3 0 0 1 10.85 5.06 1 1 0 0 0 1.62-1.18 15.32 15.32 0 0 0-12.47-5.88c-8.08 0-14.65 5.57-14.65 12.42 0 6.3 5.52 11.56 12.88 12.31L14 29.08a1 1 0 0 0 .37 1 1 1 0 0 0 .61.21 1 1 0 0 0 .45-.11 49.34 49.34 0 0 0 11-7.06 12.55 12.55 0 0 0 3.24-3.89 8.75 8.75 0 0 0 1.1-3.08s0-.08 0-.12a10.64 10.64 0 0 0 .23-1.89 1 1 0 0 0-1-1Z"></path><path d="M7 11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2H8v-4a1 1 0 0 0-1-1zm5 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-2 0zm7 0v2.15l-2.22-2.77a1 1 0 0 0-1.11-.32A1 1 0 0 0 15 12v5a1 1 0 0 0 2 0v-2.15l2.22 2.78A1 1 0 0 0 20 18a1 1 0 0 0 .33-.06A1 1 0 0 0 21 17v-5a1 1 0 0 0-2 0zm7 1a1 1 0 0 0 0-2h-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-2v-.5h2a1 1 0 0 0 0-2h-2V13z"></path></g></svg>
                                </Box>
                                <Text as={'h6'} fontSize={{base:'10px',md:'16px'}}>test.exe</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default BoxInfoFix