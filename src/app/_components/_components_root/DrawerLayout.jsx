import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Link, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const DrawerLayOut = ({ placement, onClose, isOpen }) => {
    return (
        <>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent sx={{ width: "250px !important", position: "relative" }}>
                    <DrawerBody>
                        <Flex flexDirection={'column'} w={'full'} h={'100%'}>
                            {/* ปุ่มเปิดปิด */}
                            <Box position={'absolute'} right={-5} top={12} w={'3rem'} h={'3rem'} bg={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'full'} cursor={'pointer'} onClick={onClose}>
                                <Box w={'18px'} h={'18px'}>
                                    <svg width="100%" height="100%" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75 16.5L1.25 9L8.75 1.5" stroke="#7F3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Box>
                            </Box>
                            {/* ชื่อ เว็บไซต์ */}
                            <Text as={'h1'} color={'#7F3A8A'} fontSize={20} fontWeight={'bold'} my={'3rem'}>TunTun Mobile</Text>
                            <Flex flexDirection={'column'} gap={2} w={'full'}>
                                <Flex flexDirection={'column'} gap={2} w={'full'}>
                                    {/* ขายโทรศัพท์ */}
                                    <Flex bg={'#7F3A8A'} alignItems={'center'} gap={2} p={2} rounded={'lg'} w={'full'}>
                                        <Box w={'18px'} h={'18px'}>
                                            <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.25 1.5V2.55C11.25 2.97004 11.25 3.18006 11.1683 3.34049C11.0963 3.48161 10.9816 3.59635 10.8405 3.66825C10.6801 3.75 10.47 3.75 10.05 3.75H7.95C7.52996 3.75 7.31994 3.75 7.15951 3.66825C7.01839 3.59635 6.90365 3.48161 6.83175 3.34049C6.75 3.18006 6.75 2.97004 6.75 2.55V1.5M6.15 16.5H11.85C12.6901 16.5 13.1101 16.5 13.431 16.3365C13.7132 16.1927 13.9427 15.9632 14.0865 15.681C14.25 15.3601 14.25 14.9401 14.25 14.1V3.9C14.25 3.05992 14.25 2.63988 14.0865 2.31901C13.9427 2.03677 13.7132 1.8073 13.431 1.66349C13.1101 1.5 12.6901 1.5 11.85 1.5H6.15C5.30992 1.5 4.88988 1.5 4.56901 1.66349C4.28677 1.8073 4.0573 2.03677 3.91349 2.31901C3.75 2.63988 3.75 3.05992 3.75 3.9V14.1C3.75 14.9401 3.75 15.3601 3.91349 15.681C4.0573 15.9632 4.28677 16.1927 4.56901 16.3365C4.88988 16.5 5.30992 16.5 6.15 16.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Box>
                                        <Text as={'h6'} textColor={'white'} fontWeight={'bold'}>ขายโทรศัพท์</Text>
                                    </Flex>
                                    {/* ซ่อมโทรศัพท์ */}
                                    <Flex  alignItems={'center'} gap={2} p={2} rounded={'lg'} w={'full'}>
                                        <Box w={'18px'} h={'18px'}>
                                            <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.25 1.5V2.55C11.25 2.97004 11.25 3.18006 11.1683 3.34049C11.0963 3.48161 10.9816 3.59635 10.8405 3.66825C10.6801 3.75 10.47 3.75 10.05 3.75H7.95C7.52996 3.75 7.31994 3.75 7.15951 3.66825C7.01839 3.59635 6.90365 3.48161 6.83175 3.34049C6.75 3.18006 6.75 2.97004 6.75 2.55V1.5M6.15 16.5H11.85C12.6901 16.5 13.1101 16.5 13.431 16.3365C13.7132 16.1927 13.9427 15.9632 14.0865 15.681C14.25 15.3601 14.25 14.9401 14.25 14.1V3.9C14.25 3.05992 14.25 2.63988 14.0865 2.31901C13.9427 2.03677 13.7132 1.8073 13.431 1.66349C13.1101 1.5 12.6901 1.5 11.85 1.5H6.15C5.30992 1.5 4.88988 1.5 4.56901 1.66349C4.28677 1.8073 4.0573 2.03677 3.91349 2.31901C3.75 2.63988 3.75 3.05992 3.75 3.9V14.1C3.75 14.9401 3.75 15.3601 3.91349 15.681C4.0573 15.9632 4.28677 16.1927 4.56901 16.3365C4.88988 16.5 5.30992 16.5 6.15 16.5Z" stroke="#7F3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Box>
                                        <Text as={'h6'} textColor={'white'} color={'#7F3A8A'} fontWeight={'bold'}>ซ่อมโทรศัพท์</Text>
                                    </Flex>
                                    {/* เกี่ยวกับเรา */}
                                    <Flex  alignItems={'center'} gap={2} p={2} rounded={'lg'} w={'full'}>
                                        <Box w={'18px'} h={'18px'}>
                                            <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.25 1.5V2.55C11.25 2.97004 11.25 3.18006 11.1683 3.34049C11.0963 3.48161 10.9816 3.59635 10.8405 3.66825C10.6801 3.75 10.47 3.75 10.05 3.75H7.95C7.52996 3.75 7.31994 3.75 7.15951 3.66825C7.01839 3.59635 6.90365 3.48161 6.83175 3.34049C6.75 3.18006 6.75 2.97004 6.75 2.55V1.5M6.15 16.5H11.85C12.6901 16.5 13.1101 16.5 13.431 16.3365C13.7132 16.1927 13.9427 15.9632 14.0865 15.681C14.25 15.3601 14.25 14.9401 14.25 14.1V3.9C14.25 3.05992 14.25 2.63988 14.0865 2.31901C13.9427 2.03677 13.7132 1.8073 13.431 1.66349C13.1101 1.5 12.6901 1.5 11.85 1.5H6.15C5.30992 1.5 4.88988 1.5 4.56901 1.66349C4.28677 1.8073 4.0573 2.03677 3.91349 2.31901C3.75 2.63988 3.75 3.05992 3.75 3.9V14.1C3.75 14.9401 3.75 15.3601 3.91349 15.681C4.0573 15.9632 4.28677 16.1927 4.56901 16.3365C4.88988 16.5 5.30992 16.5 6.15 16.5Z" stroke="#7F3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Box>
                                        <Text as={'h6'} textColor={'white'} color={'#7F3A8A'} fontWeight={'bold'}>เกี่ยวกับเรา</Text>
                                    </Flex>
                                </Flex>
                                {/* ##### */}
                                <Flex  alignItems={'center'} gap={2} p={2} rounded={'lg'} w={'full'} my={'2rem'}>
                                    <Box w={'18px'} h={'18px'}>
                                        <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.25 1.5V2.55C11.25 2.97004 11.25 3.18006 11.1683 3.34049C11.0963 3.48161 10.9816 3.59635 10.8405 3.66825C10.6801 3.75 10.47 3.75 10.05 3.75H7.95C7.52996 3.75 7.31994 3.75 7.15951 3.66825C7.01839 3.59635 6.90365 3.48161 6.83175 3.34049C6.75 3.18006 6.75 2.97004 6.75 2.55V1.5M6.15 16.5H11.85C12.6901 16.5 13.1101 16.5 13.431 16.3365C13.7132 16.1927 13.9427 15.9632 14.0865 15.681C14.25 15.3601 14.25 14.9401 14.25 14.1V3.9C14.25 3.05992 14.25 2.63988 14.0865 2.31901C13.9427 2.03677 13.7132 1.8073 13.431 1.66349C13.1101 1.5 12.6901 1.5 11.85 1.5H6.15C5.30992 1.5 4.88988 1.5 4.56901 1.66349C4.28677 1.8073 4.0573 2.03677 3.91349 2.31901C3.75 2.63988 3.75 3.05992 3.75 3.9V14.1C3.75 14.9401 3.75 15.3601 3.91349 15.681C4.0573 15.9632 4.28677 16.1927 4.56901 16.3365C4.88988 16.5 5.30992 16.5 6.15 16.5Z" stroke="#7F3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Box>
                                    <Text as={'h6'} textColor={'white'} color={'#7F3A8A'} fontWeight={'bold'}>กลับไปยังหน้าแรก</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        {/* <Flex flexDirection={'column'} h={'100%'} justifyContent={'space-between'}>
                            <Flex color={"#7F3A8A"} flexDirection={'column'} gap={6}>
                            <Flex flexDirection={'column'} gap={2}>
                                    <Link href='/solephone' borderBottom={"2px solid #DADADA"} py={2} _hover={{ textDecoration: "none", fontWeight: "700" }}>
                                        ขายโทรศัพท์
                                    </Link>
                                    <Link href='/fixphone' borderBottom={"2px solid #DADADA"} py={2} _hover={{ textDecoration: "none", fontWeight: "700" }}>
                                        ซ่อมโทรศัพท์
                                    </Link>
                                    <Link href='/about' borderBottom={"2px solid #DADADA"} py={2} _hover={{ textDecoration: "none", fontWeight: "700" }}>
                                        เกี่ยวกับเรา
                                    </Link>
                                </Flex>
                                <Link href='/' display={'flex'} alignItems={'center'} gap={2} _hover={{ textDecoration: "none", fontWeight: "700" }}>
                                    <Box w={18} h={18}>
                                        <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_255_3698)">
                                                <path d="M6.749 16.5L6.56102 13.8683C6.45996 12.4535 7.58054 11.25 8.999 11.25C10.4175 11.25 11.538 12.4535 11.437 13.8683L11.249 16.5" stroke="#7F3A8A" stroke-width="1.5" />
                                                <path d="M1.76354 9.91009C1.49878 8.18718 1.3664 7.32573 1.69212 6.56203C2.01785 5.79834 2.74052 5.27582 4.18585 4.2308L5.26574 3.45C7.06372 2.15 7.96271 1.5 9 1.5C10.0373 1.5 10.9363 2.15 12.7343 3.45L13.8141 4.2308C15.2595 5.27582 15.9821 5.79834 16.3079 6.56203C16.6336 7.32573 16.5012 8.18718 16.2365 9.91009L16.0107 11.3793C15.6353 13.8217 15.4477 15.0429 14.5717 15.7714C13.6958 16.5 12.4152 16.5 9.85411 16.5H8.14589C5.58475 16.5 4.30418 16.5 3.42825 15.7714C2.55232 15.0429 2.36465 13.8217 1.98932 11.3793L1.76354 9.91009Z" stroke="#7F3A8A" stroke-width="1.5" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_255_3698">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Box>
                                    <Text as={"h6"} >กลับไปยังหน้าแรก</Text>
                                </Link>
                            </Flex>
                            <Flex flexDirection={'column'} gap={4}>
                                <Flex flexDirection={'row'} alignItems={'center'} gap={2}>
                                    <Box>
                                        <Image src={"/line.png"} alt='line' width={24} height={24} />
                                    </Box>
                                    <Text as={"h5"}>test.exe</Text>
                                </Flex>
                                <Flex flexDirection={'row'} alignItems={'center'} gap={2}>
                                    <Box w={6} h={6}>
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.09178 11.9379C2.06475 10.1471 1.56885 8.68476 1.26984 7.20247C0.827607 5.0102 1.83964 2.8687 3.51618 1.50226C4.22475 0.92474 5.03702 1.12205 5.45602 1.87376L6.40197 3.57081C7.15175 4.91594 7.52664 5.5885 7.45228 6.30155C7.37792 7.0146 6.87233 7.59534 5.86115 8.75683L3.09178 11.9379ZM3.09178 11.9379C5.17056 15.5626 8.43284 18.8267 12.0618 20.9079M12.0618 20.9079C13.8526 21.9349 15.3149 22.4308 16.7972 22.7298C18.9895 23.1721 21.131 22.16 22.4974 20.4835C23.0749 19.7749 22.8776 18.9627 22.1259 18.5437L20.4289 17.5977C19.0837 16.8479 18.4112 16.473 17.6981 16.5474C16.9851 16.6218 16.4043 17.1273 15.2428 18.1385L12.0618 20.9079Z" stroke="#7F3A8A" stroke-width="1.5" stroke-linejoin="round" />
                                            <path d="M14.166 6.4015C15.7079 7.05625 16.9435 8.29183 17.5982 9.83366M14.8745 1.16699C18.7065 2.27281 21.7267 5.29289 22.8327 9.12475" stroke="#7F3A8A" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>
                                    </Box>
                                    <Text as={"h5"}>0923456789</Text>
                                </Flex>
                            </Flex>
                        </Flex> */}
                    </DrawerBody>
                </DrawerContent>
            </Drawer >
        </>
    )
}

export default DrawerLayOut