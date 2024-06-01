'use client'
import HambergerIcon from '@/icons/mobile_icons/HambergerIcon'
import ManuActiveIcon from '@/icons/mobile_icons/ManuActiveIcon'
import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import DrawerLayOut from './DrawerLayout'

const NavbarMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <VStack display={{ base: 'block', md: 'none' }} w={'full'} h={'9rem'} top={0} zIndex={2} position={'fixed'} spacing={0} bg={'#7F3A8A'} px={6} pt={8} pb={4} rounded={"0 0 20px 20px"} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} transitionDuration={'0.3s'} overflow={'hidden'}>
                <Flex mb={4} justifyContent={'space-between'} w={'full'} >
                    <Box w={"20%"}></Box>
                    {/* ชื่อ เว็บ */}
                    <Box w={"60%"} textAlign={'center'}>
                        <Text fontSize={'xl'} fontWeight={'bold'} color={'white'}>TunTun Mobile</Text>
                    </Box>
                    {/* icons ต่างๆ */}
                    <Flex w={"20%"} gap={3} justifyContent={"end"} alignItems={"center"}>
                        <Box>
                            <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H10.4474C13.8131 12 14.3249 9.88564 14.9458 6.80181C15.1248 5.91233 15.2144 5.4676 14.999 5.1713C14.7837 4.875 14.371 4.875 13.5455 4.875H3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M5 12L3.03405 2.6362C2.86711 1.96845 2.26714 1.5 1.57884 1.5H0.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M5.66 12H5.35143C4.32891 12 3.5 12.8635 3.5 13.9286C3.5 14.1061 3.63815 14.25 3.80857 14.25H12.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="6.875" cy="15.375" r="1.125" stroke="white" strokeWidth="1.5" />
                                <circle cx="12.125" cy="15.375" r="1.125" stroke="white" strokeWidth="1.5" />
                            </svg>
                        </Box>
                        <Box>
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 8.67504C16.5 12.6374 13.1417 15.8501 9 15.8501C8.51302 15.8507 8.02743 15.8057 7.54906 15.7158C7.20474 15.6512 7.03259 15.6188 6.9124 15.6372C6.79221 15.6556 6.62188 15.7461 6.28124 15.9273C5.3176 16.4398 4.19396 16.6207 3.11333 16.4197C3.52406 15.9145 3.80456 15.3084 3.92833 14.6586C4.00333 14.2611 3.8175 13.875 3.53917 13.5923C2.275 12.3086 1.5 10.5788 1.5 8.67504C1.5 4.71268 4.85833 1.5 9 1.5C13.1417 1.5 16.5 4.71268 16.5 8.67504Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M8.99664 9H9.00336M11.9933 9H12M6 9H6.00673" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Box>
                    </Flex>
                </Flex>
                <Flex h={'2.5rem'} alignItems={'center'} w={'full'} gap={5}>
                    <Box ml={2} w={6} onClick={onOpen}>
                        {/* {open ? <ManuActiveIcon/> : <HambergerIcon/>} */}
                        <HambergerIcon />
                    </Box>
                    <Box display={'flex'} flexGrow={1} h={'full'}>
                        <Input placeholder='ค้นหาสินค้า' h={'full'} rounded={'xl'} bg={'white'} />
                    </Box>
                </Flex>
            </VStack>
            
            <DrawerLayOut placement={'left'} isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default NavbarMobile