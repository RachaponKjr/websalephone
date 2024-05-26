'use client'
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

// css import
// import '../_styles/swiper.css'
// Import Swiper styles
import 'swiper/css';
import { Box, Flex, Text } from '@chakra-ui/react';


const SwiperSlidePhone = () => {
  const nextRef = React.useRef(null)
  const prevRef = React.useRef(null)
  const itemlength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


  useEffect(() => {
    const swiper = document.querySelector('.swiper').swiper;
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.destroy(); // Necessary to re-initialize the navigation buttons
    swiper.navigation.init();
    swiper.navigation.update();
  },[])

  // debug
  // console.log(nextRef, prevRef)
  return (
    <>
      <Box w={'full'} h={'full'} position={'relative'}>
        {/* ปุ่มเลื่อนซ้าย */}
        <Box ref={prevRef} zIndex={2} cursor={'pointer'} display={{base:'none',lg:'flex'}} justifyContent={'center'} alignItems={'center'} w={{lg:12,xl:14}} h={{lg:12,xl:14}} bg={'#7F3A89'} position={'absolute'} rounded={'full'} border={'2px solid white'} top={'50%'} transform={'translateY(-50%)'} left={'-8'}>
          <svg width="16" height="16" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6.99805L12 0.0698433L12 13.9262L0 6.99805Z" fill="white" />
          </svg>
        </Box>
        {/* ปุ่มเลื่อนขวา */}
        <Box ref={nextRef} zIndex={2} cursor={'pointer'} display={{base:'none',lg:'flex'}} justifyContent={'center'} alignItems={'center'}  w={{lg:12,xl:14}} h={{lg:12,xl:14}} bg={'#7F3A89'} position={'absolute'} rounded={'full'} border={'2px solid white'} top={'50%'} transform={'translateY(-50%)'} right={'-8'}>
          <svg width="16" height="16" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7L0 13.9282L0 0.0717969L12 7Z" fill="white" />
          </svg>
        </Box>
        <Swiper
          // spaceBetween={50}
          loop={true}
          slidesPerView={4}
          slidesPerGroup={4}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current
          }}
          modules={[Navigation]}
          breakpoints={{
            0: {
              spaceBetween: 5,
            },
            768: {
              spaceBetween: 5,
            }
          }}
          style={{ width: '100%', height: '100%',zIndex:0 }}
        >
          {/* loop item ออกมา */}
          {itemlength.map((item, index) => (
            <>
              <SwiperSlide>
                <Flex flexDirection={'column'} justifyContent={'start'} alignItems={'center'} w={'full'} h={'full'}>
                  <Box w={'full'} h={'80%'} position={'relative'} boxShadow={'sm'}>
                    {/* ป้ายประหยัด */}
                    <Box position={'absolute'} px={2} py={1} w={'max-content'} bg={'#004331'} top={4}>
                      <Text color={'white'} fontSize={{base:6,md:12}} fontWeight={'bold'}>ประหยัด ฿ 14,210</Text>
                    </Box>
                  </Box>
                  {/* ปุ่มเพิ่มสินค้า */}
                  <Box w={{base:'100%',lg:'max-content'}} h={'max-content'} bg={'#7E3A89'} px={{lg:4,xl:6}} mt={{base:0,md:2,lg:0}} py={{base:1,md:2}} rounded={{base:'none',md:'md'}} position={'relative'} top={{base:0,lg:-2}}>
                    <Text color={'white'} textAlign={'center'} fontSize={{base:10,md:14,lg:14,xl:18}} fontWeight={'bold'}>หยิบลงตะกร้า</Text>
                  </Box>
                </Flex>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </Box>
    </>
  )
}

export default SwiperSlidePhone