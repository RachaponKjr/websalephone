import { Box, Button, Container, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const DashboardPage = () => {
    return (
        <>
            {/* <Container maxW={'container.xl'}> */}
            <Flex flexDirection={'column'} gap={4} mb={{base:"2rem",md:8}} mt={{base:"10rem",md:4}} px={4} >
                <Flex gap={4}>
                <Button size={'lg'} bg={'#7F3A8A'} color={'#FFFFFF'}>Table สมัครสมาชิก</Button>
                <Button size={'lg'} bg={'#7F3A8A'} color={'#FFFFFF'} textTransform={'uppercase'}>Export</Button>
                </Flex>
                <TableContainer>
                    <Table variant='striped' colorScheme='gray'>
                        <Thead bg={'#7F3A8A'}>
                            <Tr>
                                <Th color={'white'} fontSize={'13px'}>ชื่อ</Th>
                                <Th color={'white'} fontSize={'13px'}>นามสกุล</Th>
                                <Th color={'white'} fontSize={'13px'}>บัตรประชาชน</Th>
                                <Th color={'white'} fontSize={'13px'}>Email</Th>
                                <Th color={'white'} fontSize={'13px'}>Phone</Th>
                                <Th color={'white'} fontSize={'13px'}>Customer</Th>
                                <Th color={'white'} fontSize={'13px'}>Date-Regis</Th>
                                <Th color={'white'} fontSize={'13px'}>ยอมรับ1</Th>
                                <Th color={'white'} fontSize={'13px'}>ยอมรับ2</Th>
                                <Th color={'white'} fontSize={'13px'}>ยอมรับ3</Th>
                                <Th color={'white'} fontSize={'13px'}>ยอมรับ4</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <>
                                    <Tr key={index}>
                                        <Td>UserTest</Td>
                                        <Td>UserTest</Td>
                                        <Td>0000000000000</Td>
                                        <Td>test@gmail.com</Td>
                                        <Td>0999999999</Td>
                                        <Td>Y</Td>
                                        <Td>21/2/2024</Td>
                                        <Td>ยินยอม</Td>
                                        <Td>ยินยอม</Td>
                                        <Td>ยินยอม</Td>
                                        <Td>ยินยอม</Td>
                                    </Tr>
                                </>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
            {/* </Container> */}
        </>
    )
}

export default DashboardPage