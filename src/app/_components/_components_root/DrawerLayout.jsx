'use client'
import { border, Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const DrawerLayOut = ({ placement, onClose, isOpen }) => {
    const pathName = usePathname()
    const route = useRouter()
    console.log(pathName)
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
                            <Text as={'h1'} color={'#7F3A8A'} fontSize={20} fontWeight={'bold'} my={'3rem'} textAlign={'center'}>TunTun Mobile</Text>
                            <Flex flexDirection={'column'} gap={2} w={'full'}>
                                <Flex flexDirection={'column'} gap={2} w={'full'}>
                                    {/* ขายโทรศัพท์ */}
                                        <Flex onClick={() => route.push('/salephone')} bg={pathName === '/salephone' ? '#7F3A8A' : 'white'} alignItems={'center'} gap={2} p={2} rounded={'lg'} w={'full'} >
                                            <Box w={'20px'} h={'20px'}>
                                                <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.25 1.5V2.55C11.25 2.97004 11.25 3.18006 11.1683 3.34049C11.0963 3.48161 10.9816 3.59635 10.8405 3.66825C10.6801 3.75 10.47 3.75 10.05 3.75H7.95C7.52996 3.75 7.31994 3.75 7.15951 3.66825C7.01839 3.59635 6.90365 3.48161 6.83175 3.34049C6.75 3.18006 6.75 2.97004 6.75 2.55V1.5M6.15 16.5H11.85C12.6901 16.5 13.1101 16.5 13.431 16.3365C13.7132 16.1927 13.9427 15.9632 14.0865 15.681C14.25 15.3601 14.25 14.9401 14.25 14.1V3.9C14.25 3.05992 14.25 2.63988 14.0865 2.31901C13.9427 2.03677 13.7132 1.8073 13.431 1.66349C13.1101 1.5 12.6901 1.5 11.85 1.5H6.15C5.30992 1.5 4.88988 1.5 4.56901 1.66349C4.28677 1.8073 4.0573 2.03677 3.91349 2.31901C3.75 2.63988 3.75 3.05992 3.75 3.9V14.1C3.75 14.9401 3.75 15.3601 3.91349 15.681C4.0573 15.9632 4.28677 16.1927 4.56901 16.3365C4.88988 16.5 5.30992 16.5 6.15 16.5Z" stroke={pathName === '/salephone' ? 'white' : '#7F3A8A'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Box>
                                            <Text as={'h6'} textColor={pathName === '/salephone' ? 'white' : '#7F3A8A'}  fontWeight={'bold'}>ขายโทรศัพท์</Text>
                                        </Flex>
                                    {/* ซ่อมโทรศัพท์ */}
                                        <Flex onClick={() => route.push('/fixphone')} bg={pathName === '/fixphone' ? '#7F3A8A' : 'white'} alignItems={'center'} gap={2} p={2} rounded={'lg'} w={'full'} >
                                            <Box w={'20px'} h={'20px'}>
                                                <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke={pathName === '/fixphone' ? 'white' : '#7F3A8A'} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14.0455 11.0455C13.9547 11.2511 13.9276 11.4792 13.9677 11.7004C14.0078 11.9216 14.1133 12.1257 14.2705 12.2864L14.3114 12.3273C14.4382 12.4539 14.5387 12.6043 14.6074 12.7699C14.676 12.9354 14.7113 13.1128 14.7113 13.292C14.7113 13.4712 14.676 13.6487 14.6074 13.8142C14.5387 13.9798 14.4382 14.1302 14.3114 14.2568C14.1847 14.3836 14.0343 14.4842 13.8688 14.5528C13.7032 14.6214 13.5258 14.6568 13.3466 14.6568C13.1674 14.6568 12.9899 14.6214 12.8244 14.5528C12.6589 14.4842 12.5085 14.3836 12.3818 14.2568L12.3409 14.2159C12.1802 14.0587 11.9761 13.9533 11.7549 13.9132C11.5338 13.8731 11.3056 13.9001 11.1 13.9909C10.8983 14.0773 10.7264 14.2208 10.6052 14.4038C10.4841 14.5867 10.4191 14.8011 10.4182 15.0205V15.1364C10.4182 15.498 10.2745 15.8449 10.0188 16.1006C9.76305 16.3563 9.4162 16.5 9.05455 16.5C8.69289 16.5 8.34604 16.3563 8.09031 16.1006C7.83458 15.8449 7.69091 15.498 7.69091 15.1364V15.075C7.68563 14.8493 7.61258 14.6305 7.48126 14.4468C7.34993 14.2632 7.16641 14.1234 6.95455 14.0455C6.7489 13.9547 6.52078 13.9276 6.2996 13.9677C6.07842 14.0078 5.87433 14.1133 5.71364 14.2705L5.67273 14.3114C5.54608 14.4382 5.39569 14.5387 5.23015 14.6074C5.0646 14.676 4.88716 14.7113 4.70795 14.7113C4.52875 14.7113 4.35131 14.676 4.18576 14.6074C4.02022 14.5387 3.86983 14.4382 3.74318 14.3114C3.6164 14.1847 3.51582 14.0343 3.44719 13.8688C3.37857 13.7032 3.34325 13.5258 3.34325 13.3466C3.34325 13.1674 3.37857 12.9899 3.44719 12.8244C3.51582 12.6589 3.6164 12.5085 3.74318 12.3818L3.78409 12.3409C3.94128 12.1802 4.04672 11.9761 4.08682 11.7549C4.12693 11.5338 4.09985 11.3056 4.00909 11.1C3.92266 10.8983 3.77915 10.7264 3.59623 10.6052C3.4133 10.4841 3.19895 10.4191 2.97955 10.4182H2.86364C2.50198 10.4182 2.15513 10.2745 1.8994 10.0188C1.64367 9.76305 1.5 9.4162 1.5 9.05455C1.5 8.69289 1.64367 8.34604 1.8994 8.09031C2.15513 7.83458 2.50198 7.69091 2.86364 7.69091H2.925C3.15068 7.68563 3.36955 7.61258 3.55316 7.48126C3.73677 7.34993 3.87662 7.16641 3.95455 6.95455C4.04531 6.7489 4.07238 6.52078 4.03228 6.2996C3.99217 6.07842 3.88673 5.87433 3.72955 5.71364L3.68864 5.67273C3.56185 5.54608 3.46127 5.39569 3.39265 5.23015C3.32402 5.0646 3.2887 4.88716 3.2887 4.70795C3.2887 4.52875 3.32402 4.35131 3.39265 4.18576C3.46127 4.02022 3.56185 3.86983 3.68864 3.74318C3.81528 3.6164 3.96568 3.51582 4.13122 3.44719C4.29676 3.37857 4.47421 3.34325 4.65341 3.34325C4.83261 3.34325 5.01006 3.37857 5.1756 3.44719C5.34114 3.51582 5.49154 3.6164 5.61818 3.74318L5.65909 3.78409C5.81978 3.94128 6.02387 4.04672 6.24505 4.08682C6.46623 4.12693 6.69435 4.09985 6.9 4.00909H6.95455C7.15621 3.92266 7.32819 3.77915 7.44934 3.59623C7.57048 3.4133 7.63549 3.19895 7.63636 2.97955V2.86364C7.63636 2.50198 7.78003 2.15513 8.03576 1.8994C8.2915 1.64367 8.63834 1.5 9 1.5C9.36166 1.5 9.7085 1.64367 9.96424 1.8994C10.22 2.15513 10.3636 2.50198 10.3636 2.86364V2.925C10.3645 3.1444 10.4295 3.35876 10.5507 3.54168C10.6718 3.72461 10.8438 3.86812 11.0455 3.95455C11.2511 4.04531 11.4792 4.07238 11.7004 4.03228C11.9216 3.99217 12.1257 3.88673 12.2864 3.72955L12.3273 3.68864C12.4539 3.56185 12.6043 3.46127 12.7699 3.39265C12.9354 3.32402 13.1128 3.2887 13.292 3.2887C13.4712 3.2887 13.6487 3.32402 13.8142 3.39265C13.9798 3.46127 14.1302 3.56185 14.2568 3.68864C14.3836 3.81528 14.4842 3.96568 14.5528 4.13122C14.6214 4.29676 14.6568 4.47421 14.6568 4.65341C14.6568 4.83261 14.6214 5.01006 14.5528 5.1756C14.4842 5.34114 14.3836 5.49154 14.2568 5.61818L14.2159 5.65909C14.0587 5.81978 13.9533 6.02387 13.9132 6.24505C13.8731 6.46623 13.9001 6.69435 13.9909 6.9V6.95455C14.0773 7.15621 14.2208 7.32819 14.4038 7.44934C14.5867 7.57048 14.8011 7.63549 15.0205 7.63636H15.1364C15.498 7.63636 15.8449 7.78003 16.1006 8.03576C16.3563 8.2915 16.5 8.63834 16.5 9C16.5 9.36166 16.3563 9.7085 16.1006 9.96424C15.8449 10.22 15.498 10.3636 15.1364 10.3636H15.075C14.8556 10.3645 14.6412 10.4295 14.4583 10.5507C14.2754 10.6718 14.1319 10.8438 14.0455 11.0455Z" stroke={pathName === '/fixphone' ? 'white' : '#7F3A8A'} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Box>
                                            <Text as={'h6'} textColor={pathName === '/fixphone' ? 'white' : '#7F3A8A'} fontWeight={'bold'}>ซ่อมโทรศัพท์</Text>
                                        </Flex>
                                    {/* เกี่ยวกับเรา */}
                                        <Flex onClick={() => route.push('/about')} bg={pathName === '/about' ? '#7F3A8A' : 'white'} alignItems={'center'} gap={2} p={2} rounded={'lg'} w={'full'} >
                                            <Box w={'20px'} h={'20px'}>
                                                <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke={pathName === '/about' ? 'white' : '#7F3A8A'} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Box>
                                            <Text as={'h6'} textColor={pathName === '/about' ? 'white' : '#7F3A8A'} fontWeight={'bold'}>เกี่ยวกับเรา</Text>
                                        </Flex>
                                </Flex>
                                {/* ##### */}
                                    <Flex onClick={() => route.push('/')} alignItems={'center'} gap={2} p={2} rounded={'lg'} w={'full'} my={'1rem'} >
                                        <Box w={'20px'} h={'20px'}>
                                            <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.749 16.5L6.56102 13.8683C6.45996 12.4535 7.58054 11.25 8.999 11.25C10.4175 11.25 11.538 12.4535 11.437 13.8683L11.249 16.5" stroke="#7F3A8A" />
                                                <path d="M1.76354 9.91009C1.49878 8.18718 1.3664 7.32573 1.69212 6.56203C2.01785 5.79834 2.74052 5.27582 4.18585 4.2308L5.26574 3.45C7.06372 2.15 7.96271 1.5 9 1.5C10.0373 1.5 10.9363 2.15 12.7343 3.45L13.8141 4.2308C15.2595 5.27582 15.9821 5.79834 16.3079 6.56203C16.6336 7.32573 16.5012 8.18718 16.2365 9.91009L16.0107 11.3793C15.6353 13.8217 15.4477 15.0429 14.5717 15.7714C13.6958 16.5 12.4152 16.5 9.85411 16.5H8.14589C5.58475 16.5 4.30418 16.5 3.42825 15.7714C2.55232 15.0429 2.36465 13.8217 1.98932 11.3793L1.76354 9.91009Z" stroke="#7F3A8A" strokeLinejoin="round" />
                                            </svg>
                                        </Box>
                                        <Text as={'h6'} textColor={'white'} color={'#7F3A8A'} fontWeight={'bold'}>กลับไปยังหน้าแรก</Text>
                                    </Flex>
                            </Flex>
                            {/* Divider */}
                            <Box h={'2px'} w={'full'} bg={'#7F3A8A'}></Box>
                            <Flex px={"8px"} flexDirection={'column'}>
                                <Text as={'h6'} color={'#7F3A8A'} fontWeight={'bold'} my={'0.5rem'}>ติดต่อเรา</Text>
                                <Flex flexDirection={'column'} gap={1}>
                                    <Flex alignItems={'center'} gap={2} rounded={'lg'} w={'full'} >
                                        <Box w={'18px'} h={'18px'}>
                                            <svg width="100%" height="100%" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.53834 4.79557C4.91534 5.58078 5.42927 6.31671 6.08012 6.96756C6.73098 7.61842 7.46691 8.13234 8.25212 8.50934C8.31966 8.54177 8.35343 8.55799 8.39616 8.57044C8.54802 8.61471 8.73449 8.58291 8.8631 8.49082C8.89929 8.46491 8.93025 8.43395 8.99217 8.37203C9.18154 8.18266 9.27622 8.08797 9.37144 8.02607C9.7305 7.79261 10.1934 7.79261 10.5525 8.02607C10.6477 8.08798 10.7424 8.18266 10.9317 8.37203L11.0373 8.47758C11.3252 8.76545 11.4691 8.90938 11.5473 9.06396C11.7028 9.37139 11.7028 9.73445 11.5473 10.0419C11.4691 10.1965 11.3252 10.3404 11.0373 10.6283L10.9519 10.7136C10.665 11.0005 10.5216 11.144 10.3266 11.2535C10.1102 11.3751 9.77407 11.4625 9.52586 11.4617C9.30218 11.4611 9.14931 11.4177 8.84357 11.3309C7.20048 10.8645 5.65004 9.98462 4.35655 8.69113C3.06306 7.39765 2.18313 5.8472 1.71678 4.20411C1.63 3.89837 1.58661 3.7455 1.58594 3.52182C1.5852 3.27362 1.67261 2.93752 1.79417 2.72112C1.90372 2.5261 2.04716 2.38266 2.33404 2.09578L2.41942 2.01039C2.70729 1.72253 2.85122 1.5786 3.0058 1.50041C3.31323 1.34491 3.67629 1.34491 3.98372 1.50041C4.1383 1.5786 4.28223 1.72253 4.5701 2.01039L4.67565 2.11595C4.86502 2.30532 4.95971 2.4 5.02161 2.49522C5.25507 2.85428 5.25507 3.31718 5.02161 3.67625C4.95971 3.77146 4.86502 3.86614 4.67565 4.05551C4.61373 4.11743 4.58277 4.14839 4.55686 4.18458C4.46477 4.31319 4.43297 4.49966 4.47724 4.65152C4.4897 4.69426 4.50591 4.72803 4.53834 4.79557Z" stroke="#7F3A8A" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </Box>
                                        <Text as={'h6'} textColor={'white'} color={'#7F3A8A'} fontWeight={'bold'} fontSize={'14px'}>Tel: 091-234-5678</Text>
                                    </Flex>
                                    <Flex alignItems={'center'} gap={2} rounded={'lg'} w={'full'} >
                                        <Box w={'18px'} h={'18px'}>
                                            <svg width="100%" height="100%" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.0625 6.5H4.06792M6.5 6.5H6.50542M8.9375 6.5H8.94292M6.5 11.375C9.19239 11.375 11.375 9.19239 11.375 6.5C11.375 3.80761 9.19239 1.625 6.5 1.625C3.80761 1.625 1.625 3.80761 1.625 6.5C1.625 7.14845 1.75161 7.76734 1.98145 8.33328C2.02544 8.44159 2.04743 8.49575 2.05725 8.53953C2.06685 8.58235 2.07036 8.61404 2.07036 8.65793C2.07037 8.70279 2.06222 8.75166 2.04593 8.8494L1.72474 10.7766C1.6911 10.9784 1.67428 11.0793 1.70558 11.1523C1.73297 11.2161 1.78386 11.267 1.84772 11.2944C1.92069 11.3257 2.0216 11.3089 2.22341 11.2753L4.1506 10.9541C4.24834 10.9378 4.29721 10.9296 4.34207 10.9296C4.38596 10.9296 4.41765 10.9332 4.46047 10.9428C4.50425 10.9526 4.55841 10.9746 4.66672 11.0186C5.23266 11.2484 5.85155 11.375 6.5 11.375ZM4.33333 6.5C4.33333 6.64958 4.21208 6.77083 4.0625 6.77083C3.91292 6.77083 3.79167 6.64958 3.79167 6.5C3.79167 6.35042 3.91292 6.22917 4.0625 6.22917C4.21208 6.22917 4.33333 6.35042 4.33333 6.5ZM6.77083 6.5C6.77083 6.64958 6.64958 6.77083 6.5 6.77083C6.35042 6.77083 6.22917 6.64958 6.22917 6.5C6.22917 6.35042 6.35042 6.22917 6.5 6.22917C6.64958 6.22917 6.77083 6.35042 6.77083 6.5ZM9.20833 6.5C9.20833 6.64958 9.08708 6.77083 8.9375 6.77083C8.78792 6.77083 8.66667 6.64958 8.66667 6.5C8.66667 6.35042 8.78792 6.22917 8.9375 6.22917C9.08708 6.22917 9.20833 6.35042 9.20833 6.5Z" stroke="#7F3A8A" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </Box>
                                        <Text as={'h6'} textColor={'white'} color={'#7F3A8A'} fontWeight={'bold'} fontSize={'14px'}>Line: test.exe</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer >
        </>
    )
}

export default DrawerLayOut