import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const InfoProductComponent = () => {
  const dataText = [
    {
      headText: 'หมวดหมู่',
      Text: 'TunTun Mobile>ขายโทรศัพท์>สายชาร์จ'
    },
    {
      headText: 'ประเภทของสินค้า',
      Text: 'สายชาร์จโทรศัพท์'
    },
    {
      headText: 'ระยะเวลาการรับประกัน',
      Text: '12 เดือน'
    },
    {
      headText: 'คลังสินค้า',
      Text: '108 ชิ้น'
    },
    {
      headText: 'ส่งจาก',
      Text: 'ปธุมธานี'
    },
  ]
  return (
    <>
      <Flex flexDirection={'column'} spacing={8} m={4} p={{base:4,md:8}} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
        <Box>
          <Text as={'h6'} fontSize={{base:16,md:'20px'}} fontWeight={'bold'}>ข้อมูลเฉพาะของสินค้า</Text>
        </Box>
        <Flex flexDirection={'column'} gap={3} mt={2}>
          {dataText.map((item, index) => (
            <>
              <Flex>
                <Box minW={{base:'7rem',md:'15rem'}}>
                  <Text as={'h6'} fontSize={{base:'10px',md:'16px'}} color={'#8F8F8F'}>{item.headText}</Text>
                </Box>
                <Box>
                  <Text as={'span'} fontSize={{base:'8px',md:'16px'}} fontWeight={'bold'} color={'#8F8F8F'}>{item.Text}</Text>
                </Box>
              </Flex>
            </>
          ))}
        </Flex>
      </Flex>
    </>
  )
}

export default InfoProductComponent