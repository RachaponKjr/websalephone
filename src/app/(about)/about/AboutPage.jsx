import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <>
            <Container maxW={'containar-xl'} height={'max-content'} mb={'5rem'} mt={{base:"10rem",md:"1rem"}} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'16px'}>
                <Text as={'h4'} textAlign={'center'} fontSize={{base:'20px',sm:'24px',md:'28px'}} fontWeight={'bold'} color={'#324054'}>เกี่ยวกับเรา</Text>
                <Box w={{base:'full',md:'max-content'}} mx={'auto'} bg={'#FAFAFA'} px={{base:0,md:'48px'}} py={'24px'} h={'max-content'} display={'flex'} flexDirection={'column'} alignItems={'center'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}>
                    <Text as={'h4'} fontSize={{base:'25px',sm:'28px',md:'32px'}} textShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'} color={'#7F3A8A'} fontWeight={'bold'}>ติดต่อเรา</Text>
                    {/* ข้อมูล  */}
                    <Flex flexDirection={'column'} mt={'12px'} mb={'24px'} gap={1} textAlign={'center'} color={'#324054'} fontWeight={'bold'} fontSize={{base:'10px',sm:'14px',md:'18px'}}>
                        <Text as={'h6'} textTransform={'uppercase'}>mbk center</Text>
                        <Text as={'h6'}>444 ถ. พญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330</Text>
                        <Flex justifyContent={'center'} alignItems={'center'} gap={3}>
                            {/* เวลาเปิดปิด */}
                            <Flex alignItems={'center'} gap={'4px'}>
                                <Box w={'13px'} h={'13px'} position={'relative'}>
                                    <Image src={'/about-img/clock.png'} alt={'clock'} fill style={{ objectFit: 'contain' }} />
                                </Box>
                                <Text as={'p'} fontSize={{base:'9px',sm:'10px',md:'14px'}}>เปิดบริการ 10.00 น - 19.00 น.       </Text>
                            </Flex>
                            {/* เบอร์ */}
                            <Flex alignItems={'center'} gap={'4px'}>
                                <Box w={'13px'} h={'13px'} position={'relative'}>
                                    <svg width="100%" height="100%" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.04686 6.46894C1.53335 5.57354 1.2854 4.84238 1.1359 4.10124C0.91478 3.0051 1.4208 1.93435 2.25907 1.25113C2.61335 0.96237 3.01948 1.06103 3.22899 1.43688L3.70196 2.2854C4.07685 2.95797 4.2643 3.29425 4.22712 3.65077C4.18994 4.0073 3.93714 4.29767 3.43155 4.87842L2.04686 6.46894ZM2.04686 6.46894C3.08626 8.28131 4.7174 9.91335 6.53187 10.954M6.53187 10.954C7.42728 11.4675 8.15843 11.7154 8.89958 11.8649C9.99571 12.086 11.0665 11.58 11.7497 10.7417C12.0384 10.3875 11.9398 9.98133 11.5639 9.77183L10.7154 9.29886C10.0428 8.92397 9.70656 8.73652 9.35004 8.7737C8.99352 8.81088 8.70314 9.06367 8.1224 9.56926L6.53187 10.954Z" stroke="#2A353D" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M7.58398 3.70075C8.35491 4.02812 8.97271 4.64591 9.30009 5.41683M7.93825 1.0835C9.85423 1.63641 11.3643 3.14645 11.9173 5.06238" stroke="#2A353D" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Box>
                                <Text as={'p'} fontSize={{base:'9px',sm:'10px',md:'14px'}}>0923456789</Text>
                            </Flex>
                            {/* Line */}
                            <Flex alignItems={'center'} gap={'4px'}>
                                <Box w={'13px'} h={'13px'} position={'relative'}>
                                    <Image src={'/about-img/line.png'} alt={'clock'} fill style={{ objectFit: 'contain' }} />

                                </Box>
                                <Text as={'p'} fontSize={{base:'9px',sm:'10px',md:'14px'}}>test.exe</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    {/* รูปภาพ */}
                    <Box w={{base:'80%',sm:'40%',md:'50%'}} mb={'24px'} aspectRatio={{base:'1/1'}} position={'relative'}>
                        <Image src={'/map.png'} alt={'map'} fill style={{ objectFit: 'cover' }} />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default AboutPage