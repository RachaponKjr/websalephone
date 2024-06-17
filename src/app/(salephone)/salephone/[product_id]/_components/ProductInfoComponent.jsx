import NotificationComponent from '@/app/_components/_components_root/NotificationComponent'
import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import BtnBuy from './BtnAddToCart'
import BtnAddToCart from './BtnAddToCart'

const ProductInfoComponent = () => {
    return (
        <>
            <Flex gap={{ base:2,md:8}} flexDirection={{ base: 'column', md: 'row' }} my={4} mx={{ base: 0, md: 4 }} p={{base:4,md:8}} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
                <Box w={{ base: 'full', md: '40%' }} aspectRatio={'1/1'} bg={'#FAFAFA'}>

                </Box>
                <Flex w={{ base: 'full', md: '60%' }} flexDirection={'column'} gap={2}>
                    <Box w={'full'}>
                        <Text as={'h1'} fontWeight={'bold'} fontSize={{ base: '16px', md: '24px' }} isTruncated>สายชาร์จเร็ว สายชาร์จ Micro USB Fast Charging 1M/1.5M/2M</Text>
                    </Box>
                    {/* Devider */}
                    <Box w={'full'} h={'2px'} bg={'#7F3A8A'}></Box>
                    <Flex flexDirection={{ base: 'row', md: 'row' }} gap={{ base: 2, md: 4 }} alignItems={'center'}>
                        {/* ดาว */}
                        <HStack spacing={2}>
                            {/* Star */}
                            <Flex>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <>
                                        <Box w={4} h={4} key={index}>
                                            <StarIcon />
                                        </Box>
                                    </>
                                ))}
                            </Flex>
                            <Text>4.7</Text>
                        </HStack>
                        <Text as={'h6'} fontSize={{ base: '12px', md: '16px' }}>315 รีวิว</Text>
                        <Text as={'h6'} fontSize={{ base: '12px', md: '16px' }}>1.9 พัน ขายแล้ว</Text>
                    </Flex>
                    {/* ราคา สินค้า */}
                    <Flex flexDirection={'row'} alignItems={{ base: 'flex-start', md: 'center' }} gap={4}>
                        <Flex gap={1} alignItems={'center'}>
                            <Text as={'s'} fontSize={{base:'14px',md:'18px'}} fontWeight={'bold'} color={'#000000'}>฿ 200</Text>
                            <Text as={'h3'} fontSize={{base:'24px',md:'42px'}} color={'#7F3A8A'} fontWeight={'bold'}>฿ 39</Text>
                        </Flex>
                        {/* ส่วนลด */}
                        <Box px={4} py={1} rounded={'lg'} color={'white'} fontSize={'14px'} bg={'#7F3A8A'}>
                            <Text as={'span'}>ส่วนลด 80%</Text>
                        </Box>
                    </Flex>
                    {/* ข้อมูลสินค้า */}
                    <Flex flexDirection={'column'} gap={4} my={{base:0,md:8}}>
                        <Flex w={'full'}>
                            <Box w={'10rem'}>
                                <Text as={'h6'} fontSize={{base:'14px',md:'18px'}} fontWeight={'bold'}>การจัดส่ง</Text>
                            </Box>
                            <HStack spacing={4} w={'full'}>
                                <Text as={'h6'} fontSize={{base:'12',md:'16px'}}>เขตพระนคร, กรุงเทพมหานคร</Text>
                                <Text as={'span'} color={'#8F8F8F'}>฿39</Text>
                            </HStack>
                        </Flex>
                        <Flex w={'full'} alignItems={'center'}>
                            <Box w={'10rem'}>
                                <Text as={'h6'} fontSize={{base:'14px',md:'18px'}} fontWeight={'bold'}>ตัวเลือก</Text>
                            </Box>
                            <HStack spacing={6} w={'full'}>
                                <Button border={'1px solid #7F3A8A'} _hover={{ bg: '#7F3A8A', color: 'white' }} bg={'white'} color={'#7F3A8A'} fontSize={{base:12,md:16}}>1M x1</Button>
                                <Button border={'1px solid #7F3A8A'} _hover={{ bg: '#7F3A8A', color: 'white' }} bg={'white'} color={'#7F3A8A'} fontSize={{base:12,md:16}}>2M x1</Button>
                            </HStack>
                        </Flex>
                        <Flex w={'full'} alignItems={{base:'flex-start',md:'center'}}>
                            <Box w={'10rem'}>
                                <Text as={'h6'} fontSize={{base:'14px',md:'18px'}} fontWeight={'bold'}>จำนวน</Text>
                            </Box>
                            <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{base:2,md:4}} w={'full'} h={{base:'100%',md:'2.5rem'}}>
                                <Flex w={'max-content'} h={'2.5rem'}>
                                    <Button border={'1px solid #7F3A8A'} roundedRight={'none'} _hover={{ bg: '#7F3A8A', color: 'white' }} bg={'white'} color={'#7F3A8A'} h={'full'}>-</Button>
                                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} borderTop={'1px solid #7F3A8A'} borderBottom={'1px solid #7F3A8A'} h={'full'} w={'6rem'}>
                                        <Text as={'h6'} fontSize={{base:12,md:18}} fontWeight={'bold'} color={'#7F3A8A'}>1</Text>
                                    </Box>
                                    <Button border={'1px solid #7F3A8A'} roundedLeft={'none'} _hover={{ bg: '#7F3A8A', color: 'white' }} bg={'white'} color={'#7F3A8A'} h={'full'}>+</Button>
                                </Flex>
                                <Box>
                                    <Text as={'span'} color={'#8F8F8F'} fontSize={{base:12,md:16}}>คงเหลือ 108 ชิ้น</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={{ base: 'column' }} gap={{ base: 2 }} w={'full'} spacing={4} mt={{base:0,md:8}} justifyContent={'center'}>
                        <BtnAddToCart />
                        <Button size={'lg'} border={'1px solid #7F3A8A'} px={10} _hover={{ bg: '#7F3A8A', color: 'white' }} bg={'#7F3A8A'} color={'#FFFFFF'}>ซื้อสินค้า</Button>
                    </Flex>
                </Flex>

            </Flex>
        </>
    )
}


export const StarIcon = () => {
    return (
        <>
            <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3035 4.59226L20.6499 9.32385C20.9698 9.98251 21.8231 10.6143 22.543 10.7353L26.7959 11.4477C29.5156 11.9047 30.1555 13.8941 28.1957 15.8567L24.8894 19.1903C24.3295 19.7549 24.0228 20.8437 24.1962 21.6233L25.1427 25.75C25.8893 29.0164 24.1695 30.28 21.3031 28.5728L17.3169 26.1936C16.597 25.7635 15.4105 25.7635 14.6772 26.1936L10.691 28.5728C7.83796 30.28 6.10482 29.003 6.85141 25.75L7.79797 21.6233C7.97128 20.8437 7.66465 19.7549 7.10471 19.1903L3.79841 15.8567C1.85196 13.8941 2.47856 11.9047 5.19826 11.4477L9.45112 10.7353C10.1577 10.6143 11.0109 9.98251 11.3309 9.32385L13.6773 4.59226C14.9572 2.02483 17.0369 2.02483 18.3035 4.59226Z" stroke="#7F3A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <mask id="path-2-inside-1_193_1961" fill="white">
                    <path d="M4.025 12.2L11.45 9.40001L16 2.00079L20.9 10.1L28.325 11.5L29.5 14.0008L23.6 20.6L24.95 28.3L23.6 29L15.5 25.5L8.75 29L7 28.0008L8.075 19.2L2 12.9L4.025 12.2Z" />
                </mask>
                <path d="M9.31424 11.9828L9.81424 12.2836L22.1858 -8.28203L21.6858 -8.58281L9.31424 11.9828ZM11.45 9.40001L19.9184 31.8563L27.5959 28.9611L31.8939 21.9716L11.45 9.40001ZM4.025 12.2L11.866 34.883L12.1813 34.774L12.4934 34.6563L4.025 12.2ZM2 12.9L-5.84103 -9.78298L-41.3703 2.49875L-15.2763 29.5593L2 12.9ZM8.075 19.2L31.8979 22.1099L33.2835 10.7668L25.3513 2.54075L8.075 19.2ZM7 28.0008L-16.8229 25.0909L-18.7577 40.9303L-4.90031 48.8426L7 28.0008ZM8.75 29L-3.15031 49.8419L8.19726 56.3211L19.7976 50.3061L8.75 29ZM15.5 25.5L25.0197 3.46877L14.564 -1.04914L4.45239 4.1939L15.5 25.5ZM23.6 29L14.0803 51.0313L24.536 55.5492L34.6476 50.3061L23.6 29ZM24.95 28.3L35.9976 49.6061L51.6304 41.5002L48.5894 24.1554L24.95 28.3ZM23.6 20.6L5.70806 4.60381L-2.04935 13.2806L-0.0394261 24.7446L23.6 20.6ZM29.5 14.0008L47.3919 29.997L57.9725 18.1625L51.2218 3.79474L29.5 14.0008ZM28.325 11.5L50.0468 1.29396L44.8291 -9.811L32.7719 -12.0844L28.325 11.5ZM20.9 10.1L0.365573 22.5233L5.91604 31.6977L16.4531 33.6844L20.9 10.1ZM16 2.00079L36.5344 -10.4225L16.1668 -44.0881L-4.44395 -10.5708L16 2.00079ZM2.98162 -13.0563L-4.44338 -10.2563L12.4934 34.6563L19.9184 31.8563L2.98162 -13.0563ZM-3.81603 -10.483L-5.84103 -9.78298L9.84103 35.583L11.866 34.883L-3.81603 -10.483ZM-15.2763 29.5593L-9.20126 35.8593L25.3513 2.54075L19.2763 -3.75924L-15.2763 29.5593ZM-15.7479 16.2901L-16.8229 25.0909L30.8229 30.9107L31.8979 22.1099L-15.7479 16.2901ZM-4.90031 48.8426L-3.15031 49.8419L20.6503 8.15817L18.9003 7.15895L-4.90031 48.8426ZM19.7976 50.3061L26.5476 46.8061L4.45239 4.1939L-2.29761 7.6939L19.7976 50.3061ZM5.98033 47.5313L14.0803 51.0313L33.1197 6.96877L25.0197 3.46877L5.98033 47.5313ZM34.6476 50.3061L35.9976 49.6061L13.9024 6.99391L12.5524 7.69391L34.6476 50.3061ZM48.5894 24.1554L47.2394 16.4554L-0.0394261 24.7446L1.31057 32.4446L48.5894 24.1554ZM41.4919 36.5962L47.3919 29.997L11.6081 -1.99541L5.70806 4.60381L41.4919 36.5962ZM51.2218 3.79474L50.0468 1.29396L6.6032 21.7061L7.7782 24.2068L51.2218 3.79474ZM32.7719 -12.0844L25.3469 -13.4844L16.4531 33.6844L23.8781 35.0844L32.7719 -12.0844ZM-4.44395 -10.5708L-8.99395 -3.17158L31.8939 21.9716L36.4439 14.5724L-4.44395 -10.5708ZM41.4344 -2.32325L36.5344 -10.4225L-4.53443 14.4241L0.365573 22.5233L41.4344 -2.32325Z" fill="#7F3A8A" mask="url(#path-2-inside-1_193_1961)" />
            </svg>
        </>
    )
}

export const CartIcon = () => {
    return (
        <>
            <Box w={6} h={6}>
                <svg width="100%" height="100%" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3333 20.6667H19.715C25.5114 20.6667 26.393 17.0253 27.4622 11.7143C27.7705 10.1824 27.9247 9.41646 27.5539 8.90617C27.1831 8.39587 26.4723 8.39587 25.0507 8.39587H7.75" stroke="#7F3A8A" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M10.3333 20.6667L6.94749 4.54016C6.65998 3.39014 5.62669 2.58337 4.44129 2.58337H3.22913" stroke="#7F3A8A" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M11.47 20.6667H10.9386C9.17757 20.6667 7.75 22.1538 7.75 23.9882C7.75 24.2939 7.98793 24.5417 8.28143 24.5417H22.6042" stroke="#7F3A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <circle cx="13.5625" cy="26.4792" r="1.9375" stroke="#7F3A8A" stroke-width="1.5" />
                    <circle cx="22.6041" cy="26.4792" r="1.9375" stroke="#7F3A8A" stroke-width="1.5" />
                </svg>
            </Box>
        </>
    )
}

export default ProductInfoComponent