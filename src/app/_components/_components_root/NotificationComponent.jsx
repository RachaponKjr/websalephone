import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const NotificationComponent = ({ text, isShow }) => {
  return (
    <>
      {/* center */}
      <Flex justifyContent={'center'} gap={4} flexDirection={'column'} alignItems={'center'} position={'fixed'} top={"50%"} left={"50%"} transform={'translate(-50%,-50%)'} zIndex={999} w={'35rem'} h={'20rem'}>
        <Flex justifyContent={'center'} gap={4} p={8} flexDirection={'column'} alignItems={'center'} rounded={'xl'} bg={'#FAFAFA'} boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'} transitionDuration={'0.5s'}>
          <Box w={'7rem'} h={'7rem'}>
            <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="#7F3A8A" />
              <rect x="14" y="42.1544" width="12.46" height="26.1982" rx="2" transform="rotate(-45 14 42.1544)" fill="white" />
              <rect x="37.3555" y="55.9532" width="12.46" height="39.7997" rx="2" transform="rotate(-135 37.3555 55.9532)" fill="white" />
            </svg>
          </Box>
          <Text as={'h6'} fontSize={'28px'} fontWeight={'bold'}>{text}</Text>
        </Flex>
      </Flex>
    </>
  )
}

export default NotificationComponent