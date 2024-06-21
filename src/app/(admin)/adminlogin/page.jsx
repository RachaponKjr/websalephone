import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <>
    <Flex flexDirection={'column'} mt={{base:'10rem',md:0}} alignItems={'center'} justifyContent={'center'} gap={8} w={'full'} h={{base:'full',md:'40rem'}}>
        <Box maxW={'full'} w={'30rem'} border={{base:'none',md:'1px solid #7F3A8A'}} rounded={'lg'} p={8} boxShadow={{base:"none",md:"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
            {/* ชื่อ */}
            <Text as={'h6'} textAlign={'center'} fontSize={'32px'} fontWeight={'bold'} my={8} color={'#7F3A8A'}>Admin Login</Text>
            <Flex flexDirection={'column'} gap={4}>
                <Input type={'text'} placeholder='ชื่อผู้ใช้งาน' ></Input>
                <Input type={'password'} placeholder='รหัสผ่าน' ></Input>
            </Flex>
            <Button bg={'#7F3A8A'} size={'lg'} color={'white'} my={8} w={{base:'full',md:'10rem'}}>เข้าสู่ระบบ</Button>
        </Box>
    </Flex>
    </>
  )
}

export default page