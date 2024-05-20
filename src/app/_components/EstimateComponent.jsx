import { Box, Button, Container, Flex, HStack, Select, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const EstimateComponent = () => {
    return (
        <Box w={'full'} h={'max-content'} bg={'#7F3A8A'} spacing={0}>
            <Container maxW='container.xl' h='full'>
                <HStack h={'full'} spacing={0} pt={6}>

                    <Flex w={'60%'} h={'full'} bg={'blue'}>

                    </Flex>
                    <Flex pb={4} pt={6} flexDirection={'column'} w={'40%'} gap={8} h={'full'} bg={'white'} roundedTopLeft={'3xl'} roundedTopRight={'3xl'}>
                            <Text fontSize={'2xl'} textAlign={'center'} fontWeight={'bold'}>
                                ประเมินราคาโทรศัพท์ที่ต้องการขาย
                            </Text>
                        <VStack w={'full'} spacing={8} justifyContent={'center'}>
                            <Box w={'308px'} px={4}>
                                <Select boxShadow={'lg'} size={'lg'} placeholder='เลือกยี่ห้อโทรศัพท์'>
                                    <option>โทรศัพท์ที่ต้องการขาย</option>
                                    <option>โทรศัพท์ที่ต้องการขาย</option>
                                    <option>โทรศัพท์ที่ต้องการขาย</option>
                                </Select>
                            </Box>
                            <Box w={'308px'} px={4}>
                                <Select boxShadow={'lg'} size={'lg'} placeholder='เลือกรุ่น'>
                                    <option>โทรศัพท์ที่ต้องการขาย</option>
                                    <option>โทรศัพท์ที่ต้องการขาย</option>
                                    <option>โทรศัพท์ที่ต้องการขาย</option>
                                </Select>
                            </Box>
                            <Box w={'308px'} px={4}>
                                <Select boxShadow={'lg'} size={'lg'} placeholder='เลือกความจุ'>
                                    <option>โทรศัพท์ที่ต้องการขาย</option>
                                    <option>โทรศัพท์ที่ต้องการขาย</option>
                                    <option>โทรศัพท์ที่ต้องการขาย</option>
                                </Select>
                            </Box>
                            <Box w={'308px'} h={'3rem'} px={'2rem'}>
                            <Button w={'full'} h={'full'} bg={'#7F3A8A'} color={'white'}>เริ่มเลย</Button>
                            </Box>
                        </VStack>
                    </Flex>
                </HStack>
            </Container>
        </Box>
    )
}

export default EstimateComponent