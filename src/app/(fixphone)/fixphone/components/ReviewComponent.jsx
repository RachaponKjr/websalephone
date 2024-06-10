import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ReviewComponent = () => {
    return (
        <>
            <Box>
                <Text as={'h3'} fontWeight={'bold'} fontSize={{base:'22px',md:'28px'}} mb={'18px'} mt={'24px'} textAlign={'center'} textColor={"#7F3A8A"}>
                    รีวิวความประทับใจจากลูกค้า
                </Text>
                <Box w={{base:'full',md:'70%'}} px={{base:4,md:0}} mx={{base:0,md:'auto'}}>
                    <Text as={'p'}  textAlign={'center'} fontSize={{base:'10px',md:'14px'}} textColor={'#324054'}>
                        หากใครต้องการขายโทรศัพท์เก่ารุ่นเดิม ๆ เพื่อจุดประสงค์ใดก็ตาม ไม่ว่าเครื่องเก่าของคุณจะตกรุ่นไปนานแค่ไหน เราพร้อมประเมินราคาที่สูงกว่าตามท้องตลาดทั่วไป โดยคุณสามารถตรวจสอบความน่าเชื่อถือของบริการรับซื้อโทรศัพท์ทุกรุ่น
                        ในราคาสูงจากร้านรับซื้อโทรศัพท์ TunTun ได้ที่รีวิวจากลูกค้าจริงด้านล่าง
                    </Text>
                </Box>
                <Box w={'100%'} h={'20rem'}>

                </Box>
            </Box>
        </>
    )
}

export default ReviewComponent