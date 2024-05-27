'use client'
import { Box, CircularProgress, Flex, Text,keyframes } from '@chakra-ui/react'
import React from 'react'

const LoadingComponent = () => {
    // สร้าง keyframe animation สำหรับการหมุน
const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;
  return (
    <>
    <Flex w={'full'} h={'full'} position={'fixed'} bgColor={'white'} top={0} left={0} justifyContent={'center'} alignItems={'center'} zIndex={999}>
    {/* loading */}
    <Flex flexDirection={'column'} gap={3}>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box position="relative" display="inline-block" animation={`${spin} 2s linear infinite`}>
        {/* Outer Arc */}
        <CircularProgress
          value={40}
          thickness="12px"
          size="80px"
          trackColor="transparent"
          color="#A186BD"
          capIsRound
          style={{ transform: 'rotate(-60deg)' }}
        />
        {/* Inner Arc */}
        <CircularProgress
          value={40}
          thickness="16px"
          size="40px"
          trackColor="transparent"
          color="gray.200"
          capIsRound
          style={{ position: 'absolute', top: '20px', left: '20px', transform: 'rotate(-60deg)' }}
        />
        {/* Inner Circle */}
        {/* <Box
          position="absolute"
          top="calc(50% - 4px)"
          left="calc(50% - 4px)"
          width="8px"
          height="8px"
          bg="pink.400"
          borderRadius="full"
        /> */}
      </Box>
    </Box>
        {/* Text loading */}
        <Text as={'h6'} textAlign={'center'} position={'relative'} textShadow={'0px 4px 4px rgba(0, 0, 0, 0.35)'} fontSize={'24px'} fontWeight={'bold'} color={'#A186BD'}>Loading</Text>
    </Flex>
    </Flex>
    </>
  )
}

export default LoadingComponent