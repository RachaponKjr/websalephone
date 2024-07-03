'use client'
import { Box, Button, Checkbox, Container, Flex, Grid, GridItem, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ItemInCart from './_components/ItemInCart'
import GridItems from './_components/GridItems'
import Image from 'next/image'

const CartPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  return (
    <>
      <Container maxW={'container.xl'} mt={{base:'12rem',md:0}}>
        <Flex m={{base:0,md:4}} p={{base:4,md:8}} flexDirection={'column'} gap={6} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
          {/* Item In Cart */}
          <ItemInCart />
          <ItemInCart />
        </Flex>
        <Flex ref={finalRef} justifyContent={'flex-end'} alignItems={{base:'center',md:'end'}} gap={6} mt={{base:'1rem',md:'4rem'}}>
          <Text as={'h6'} fontSize={{base:'16px',md:'24px'}} fontWeight={'bold'}>รวมสินค้าทั้งหมด</Text>
          <Text as={'h6'} fontSize={{base:'24px',md:'36px'}} fontWeight={'bold'} color={'#7F3A8A'}>฿39</Text>
          <Button bg={'#7F3A8A'} color={'white'} h={{base:'2.5rem',md:'3rem'}} w={{base:'6rem',md:'13rem'}} onClick={onOpen}>ซื้อสินค้า</Button>
        </Flex>
      </Container>
      <Box w={'full'} h={'4px'} bg={'#7F3A8A'} my={4}></Box>
      <Container maxW={'container.xl'} mt={{base:'0',md:'4rem'}} mb={'2rem'}>
        <Flex m={{base:0,md:4}} p={{base:2,lg:8,xl:12}} flexDirection={'column'} gap={6} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
          <Text as={'h5'} fontSize={'24px'} fontWeight={'bold'} textAlign={'center'}>สินค้าที่คุณอาจชื่นชอบ</Text>
          <Grid templateColumns={'repeat(4,1fr)'} gap={{base:1,lg:6}}>
            <GridItems />
            <GridItems />
            <GridItems />
            <GridItems />
          </Grid>
        </Flex>
      </Container>
      <ModalInfomation isOpen={isOpen} onClose={onClose} finalRef={finalRef} />
    </>
  )
}

export const ModalInfomation = ({ isOpen, onClose, finalRef }) => {

  return (
    <>
      <Modal size={'2xl'} isCentered ref={finalRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'} fontWeight={'bold'} fontSize={{base:'16px',md:'24px'}} textColor={'#7F3A8A'}>กรุณาระบุข้อมูล เพื่อให้เจ้าหน้าที่ติดต่อกลับ</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex px={{base:'0.5rem',md:'4rem'}} flexDirection={'column'} justifyContent={'center'} gap={{base:'2rem',md:'5rem'}}>
              <Flex gap={'2rem'} mt={4}>
                <Text as={'h6'} w={'5rem'} fontSize={{base:'12px',md:'16px'}}>กรณีเร่งด่วน </Text>
                <Flex gap={5}>
                  <Flex gap={2}>
                    <Box w={{base:4,md:6}} h={{base:4,md:6}}>
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="#2A353D" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M14 6.83185C15.4232 7.43624 16.5638 8.57677 17.1682 10M14.654 2C18.1912 3.02076 20.9791 5.80852 22 9.34563" stroke="#2A353D" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Box>
                    <Text as={'span'} fontSize={{base:'12px',md:'16px'}}>0923456789</Text>
                  </Flex>
                  <Flex gap={2}>
                    <Box w={{base:4,md:6}} h={{base:4,md:6}}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="line"><g><path d="M30 13.14a1 1 0 0 0-1 1 8.66 8.66 0 0 1-.18 1.67 1.36 1.36 0 0 0 0 .2 7.1 7.1 0 0 1-.82 2.25 10.77 10.77 0 0 1-2.79 3.33 43.64 43.64 0 0 1-8.76 5.85l.17-.85A1.76 1.76 0 0 0 15 24.48c-6.44-.57-11.29-5-11.29-10.34C3.69 8.4 9.37 3.72 16.34 3.72a13.3 13.3 0 0 1 10.85 5.06 1 1 0 0 0 1.62-1.18 15.32 15.32 0 0 0-12.47-5.88c-8.08 0-14.65 5.57-14.65 12.42 0 6.3 5.52 11.56 12.88 12.31L14 29.08a1 1 0 0 0 .37 1 1 1 0 0 0 .61.21 1 1 0 0 0 .45-.11 49.34 49.34 0 0 0 11-7.06 12.55 12.55 0 0 0 3.24-3.89 8.75 8.75 0 0 0 1.1-3.08s0-.08 0-.12a10.64 10.64 0 0 0 .23-1.89 1 1 0 0 0-1-1Z"></path><path d="M7 11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2H8v-4a1 1 0 0 0-1-1zm5 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-2 0zm7 0v2.15l-2.22-2.77a1 1 0 0 0-1.11-.32A1 1 0 0 0 15 12v5a1 1 0 0 0 2 0v-2.15l2.22 2.78A1 1 0 0 0 20 18a1 1 0 0 0 .33-.06A1 1 0 0 0 21 17v-5a1 1 0 0 0-2 0zm7 1a1 1 0 0 0 0-2h-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-2v-.5h2a1 1 0 0 0 0-2h-2V13z"></path></g></svg>
                    </Box>
                    <Text as={'span'} fontSize={{base:'12px',md:'16px'}}>0923456789</Text>
                  </Flex>
                </Flex>
              </Flex>
              {/* ที่กรอกข้อมูล */}
              <Flex flexDirection={'column'} gap={6}>
                {/* ชื่อ-นามสกุล */}
                <Flex gap={'2rem'} alignItems={'center'}>
                  <Text as={'h6'} w={'5rem'} fontWeight={'bold'} textAlign={'end'} fontSize={{base:'12px',md:'16px'}}>ข้อมูล</Text>
                  <Input w={'25rem'} size={{base:'sm',md:'md'}} placeholder='ชื่อ-นามสกุล' />
                </Flex>
                {/* ที่อยู่ */}
                <Flex gap={'2rem'} alignItems={'center'}>
                  <Text as={'h6'} w={'5rem'} fontWeight={'bold'} textAlign={'end'} fontSize={{base:'12px',md:'16px'}}>ที่อยู่</Text>
                  <Input w={'25rem'} size={{base:'sm',md:'md'}} placeholder='หากต้องการขายด่วน กรุณาติดต่อ 092-123-4567' />
                </Flex>
                {/* จังหวัด */}
                <Flex gap={'2rem'} alignItems={'start'}>
                  <Text as={'h6'} w={'5rem'} fontWeight={'bold'} textAlign={'end'} fontSize={{base:'12px',md:'16px'}}>จังหวัด</Text>
                  <Grid templateColumns={'repeat(2,1fr)'} gap={6} w={'25rem'}>
                    <GridItem>
                      <Select placeholder='Select option' size={{base:'sm',md:'md'}}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                      </Select>
                    </GridItem>
                    <GridItem>
                      <Select placeholder='Select option' size={{base:'sm',md:'md'}}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                      </Select>
                    </GridItem>
                    <GridItem>
                      <Select placeholder='Select option' size={{base:'sm',md:'md'}}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                      </Select>
                    </GridItem>
                    <GridItem>
                      <Select placeholder='Select option' size={{base:'sm',md:'md'}}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                      </Select>
                    </GridItem>
                  </Grid>
                </Flex>
                {/* เบอร์ติดต่อ */}
                <Flex gap={'2rem'} alignItems={'center'}>
                  <Text as={'h6'} w={'5rem'} fontWeight={'bold'} textAlign={'end'} fontSize={{base:'12px',md:'16px'}}>ที่อยู่</Text>
                  <Input w={'25rem'} size={{base:'sm',md:'md'}} placeholder='หากต้องการขายด่วน กรุณาติดต่อ 092-123-4567' />
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter px={'88px'} display={'flex'} justifyContent={'start'} gap={'2rem'} mb={12} mt={4}>
            <Box minW={'5rem'}>
            </Box>
            <Flex w={{base:'10rem',md:'25rem'}} gap={4}>
              <Button backgroundColor={'#8F8F8F'} color={'white'} mr={3} onClick={onClose} w={'100%'}>
                ยกเลิก
              </Button>
              <Button backgroundColor={'#7F3A8A'} color={'white'} w={'100%'}>ยืนยัน</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


export default CartPage