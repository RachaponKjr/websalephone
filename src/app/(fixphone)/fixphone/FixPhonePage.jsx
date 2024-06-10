import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import BoxInfoFix from './components/BoxInfoFix'
import ReviewComponent from './components/ReviewComponent'

const FixPhonePage = () => {
  return (
    <>
    <Container maxW={'container.lg'}  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        {/* ส่วนหัว */}
        <Box sx={{mt:'80px',mb:'40px'}}>
          <Text as={'h4'} fontSize={'32px'} fontWeight={'bold'} textColor={'#324054'}>ซ่อมโทรศัพท์</Text>
        </Box>
        {/* กล่อง ข้อความ */}
        <Box bg={'#FAFAFA'} rounded={'lg'} w={'full'} mb={'2rem'} shadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}>
          <BoxInfoFix/>
        </Box>
        <Box bg={'#FAFAFA'} rounded={'lg'} w={'full'} mb={'2rem'} shadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}>
          <ReviewComponent/>
        </Box>
    </Container>
    </>
  )
}

export default FixPhonePage