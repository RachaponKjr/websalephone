'use client'
import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const url = usePathname()
    console.log(url)
    return (
        <Box display={{base: 'none', md: 'block'}} h={'115px'} w={"100%"} borderBottom={"3px solid #7F3A8A"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
            <Container maxW='container.xl' h='full'>
                <Stack h='full' direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex flexDirection={'row'} alignItems={'center'} gap={{md: 2, lg: 4}}>
                        {/* รูป logo ร้านค้า */}
                        <Flex flexDirection={'row'} alignItems={'center'} gap={{md:2,lg:4}}>
                            <Box display={'flex'} overflow={'hidden'} position={'relative'} flexDirection={'row'} alignItems={'center'} w={'80px'} h={'80px'} ring={2} ringColor={'#7F3A8A'} rounded={'full'}>
                                <Box w={{md:'4rem',lg:'4rem'}} h={'4rem'} position={'relative'} top={1} left={-2.5} bgImage={'./imgs/navbar-imgs/logo.png'} bgRepeat={'no-repeat'} bgSize={'contain'}></Box>
                                <Box as='h6' position={'absolute'} fontSize={'2xl'} fontWeight={'bold'} left={10} >TM</Box>
                            </Box>
                            <Text as='h1' fontSize={'clamp(18px, 1vw, 32px)'} fontWeight={'bold'} whiteSpace={'nowrap'}>
                                <Link href={'/'} style={{ textDecoration: 'none'}}>
                                TunTun Mobile
                                </Link>
                            </Text>
                        </Flex>
                        <Flex gap={{base: 1, lg: 2}}>
                            {/* Link กดไปหน้าต่าง */}
                            <Box display={'flex'} alignItems={'center'} position={'relative'} fontSize={'clamp(14px, 1vw, 18px)'} w={'max-content'} px={2} h={'2rem'} _before={{ content: '""', position: 'absolute', bottom: 0, left: 0, width: `${url === '/solephone' ? '100%' : '0px'}`,zIndex: -1, backgroundColor: '#7F3A8A',height: '3px',transitionDuration: '0.5s' }} _hover={{_before: {width: '100%'}}}>
                                <Link href={'/solephone'} style={{ textDecoration: 'none'}}>
                                    ขายโทรศัพท์
                                </Link>
                            </Box>
                            <Box display={'flex'} alignItems={'center'}  fontSize={'clamp(14px, 1vw, 18px)'} w={'max-content'} px={2} h={'2rem'} position={'relative'} _before={{ content: '""', position: 'absolute', bottom: 0, left: 0, width: `${url === '/fixphone' ? '100%' : '0px'}`,zIndex: -1, backgroundColor: '#7F3A8A',height: '3px',transitionDuration: '0.5s' }} _hover={{_before: {width: '100%'}}}>
                                <Link href={'/fixphone'} style={{ textDecoration: 'none'}}>
                                    ซ่อมโทรศัพท์
                                </Link>
                            </Box>
                            <Box display={'flex'} alignItems={'center'}  fontSize={'clamp(14px, 1vw, 18px)'} w={'max-content'} px={2} h={'2rem'} position={'relative'} _before={{ content: '""', position: 'absolute', bottom: 0, left: 0, width: `${url === '/about' ? '100%' : '0px'}`,zIndex: -1, backgroundColor: '#7F3A8A',height: '3px',transitionDuration: '0.5s' }} _hover={{_before: {width: '100%'}}}>
                                <Link href={'/about'} style={{ textDecoration: 'none'}}>
                                    เกี่ยวกับเรา
                                </Link>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'} gap={4}>
                        {/* รูป icons */}
                        <Stack flexDir={'row'} spacing={4}>
                            <Box cursor={'pointer'}>
                            <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 15H14.2632C18.7508 15 19.4333 12.1808 20.261 8.06908C20.4998 6.88311 20.6192 6.29013 20.3321 5.89507C20.045 5.5 19.4947 5.5 18.3941 5.5H5" stroke="#7F3A8A" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M7 15L4.37873 2.51493C4.15615 1.62459 3.35618 1 2.43845 1H1.5" stroke="#7F3A8A" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M7.88 15H7.46857C6.10522 15 5 16.1513 5 17.5714C5 17.8081 5.1842 18 5.41143 18H16.5" stroke="#7F3A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="9.5" cy="19.5" r="1.5" stroke="#7F3A8A" strokeWidth="1.5" />
                                <circle cx="16.5" cy="19.5" r="1.5" stroke="#7F3A8A" strokeWidth="1.5" />
                            </svg>
                            </Box>
                            <Box cursor={'pointer'}>
                                <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10.5667C21 15.8499 16.5222 20.1334 11 20.1334C10.3507 20.1343 9.70324 20.0742 9.06542 19.9545C8.60633 19.8682 8.37678 19.8251 8.21653 19.8496C8.05627 19.8741 7.82918 19.9948 7.37499 20.2364C6.09014 20.9197 4.59195 21.161 3.15111 20.893C3.69874 20.2194 4.07275 19.4112 4.23778 18.5448C4.33778 18.0148 4.09 17.5 3.71889 17.1231C2.03333 15.4115 1 13.1051 1 10.5667C1 5.28357 5.47778 1 11 1C16.5222 1 21 5.28357 21 10.5667Z" stroke="#7F3A8A" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M10.9955 11H11.0045M14.991 11H15M7 11H7.00897" stroke="#7F3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Box>
                        </Stack>
                        {/* เบอร์โทร */}
                        <Text as={'p'} fontSize={'clamp(12px, 2vw, 26px)'} fontWeight={'bold'}>091-234-5678</Text>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    )
}

export default Navbar