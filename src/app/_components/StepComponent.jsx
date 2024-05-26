import React from 'react'
import Image from "next/image";
import { Box, Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";

const StepComponent = () => {
  return (
    <>
      {/* step เเสดงขั้นตอนต่างๆ */}
      <Flex mt={{base:'11rem',md:8}} mb={8} w={"full"} h={"max-content"} justifyContent={"center"} gap={10} px={2}>
        <Grid templateColumns={'repeat(4,minmax(0,1fr))'} gap={{base:8,md:20,lg:28}} w={{base:'full',md:"max-content"}} justifyContent={"center"}>
          {/* ขั้นตอนที่ 1 */}
          <GridItem position={'relative'}>
            <Flex flexDir={'column'} alignItems={'center'} gap={2}>
              {/* รูปภาพ */}
              <Box w={{base:'3rem',md:'5rem',lg:'6rem'}} display={'flex'} justifyContent={'center'} aspectRatio={'1/1'} position={'relative'}>
                <Box w={{base:'1.8rem',md:'3rem'}} >
                <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.451172" width="13.72" height="23.6552" rx="3" fill="#7F3A8A" />
                  <circle cx="7.54777" cy="21.7626" r="0.946207" fill="white" />
                  <rect x="5.6543" y="0.946289" width="3.78483" height="0.473103" rx="0.236552" fill="white" />
                </svg>
                </Box>
              </Box>
              <Text textAlign={'center'} fontSize={{base:12,md:16}}>
                ระบุโทรศัพท์<br />
                ของคุณ
              </Text>
            </Flex>
            <Box position={'absolute'} top={{base:'8',md:'10',lg:'12'}} right={{base:-5,md:-10,lg:-16}}>
              <svg width="15" height="15" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.82617 3.8278L0.148931 7.10555V0.55004L5.82617 3.8278Z" fill="#7F3A8A" />
              </svg>
            </Box>
          </GridItem>
          {/* ขั้นตอนที่ 2 */}
          <GridItem position={'relative'}>
            <Flex flexDir={'column'} alignItems={'center'} gap={2}>
              {/* รูปภาพ */}
              <Box w={{base:'3rem',md:'5rem',lg:'6rem'}} aspectRatio={'1/1'} position={'relative'} bgImage={'./imgs/step-imgs/note.png'} bgRepeat={'no-repeat'} bgSize={'contain'} bgPosition={'center'}>
              </Box>
              <Text textAlign={'center'} fontSize={{base:12,md:16}}>
                ระบุสภาพ<br />
                การใช้งาน
              </Text>
            </Flex>
            <Box position={'absolute'} top={{base:'8',md:'10',lg:'12'}} right={{base:-5,md:-10,lg:-16}}>
              <svg width="15" height="15" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.82617 3.8278L0.148931 7.10555V0.55004L5.82617 3.8278Z" fill="#8F8F8F" />
              </svg>
            </Box>
          </GridItem>
          {/* ขั้นตอนที่ 3 */}
          <GridItem position={'relative'}>
            <Flex flexDir={'column'} alignItems={'center'} gap={2}>
              {/* รูปภาพ */}
              <Box w={{base:'3rem',md:'5rem',lg:'6rem'}} aspectRatio={'1/1'} position={'relative'} bgImage={'./imgs/step-imgs/calendar.png'} bgRepeat={'no-repeat'} bgSize={'contain'} bgPosition={'center'}>
              </Box>
              <Text textAlign={'center'} fontSize={{base:12,md:16}}>
                นัดหมาย<br />
                ขายสินค้า
              </Text>
            </Flex>
            <Box position={'absolute'} top={{base:'8',md:'10',lg:'12'}} right={{base:-5,md:-10,lg:-16}}>
              <svg width="15" height="15" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.82617 3.8278L0.148931 7.10555V0.55004L5.82617 3.8278Z" fill="#8F8F8F" />
              </svg>
            </Box>
          </GridItem>
          {/* ขั้นตอนที่ 4 */}
          <GridItem position={'relative'}>
            <Flex flexDir={'column'} alignItems={'center'} gap={2}>
              {/* รูปภาพ */}
              <Box w={{base:'3rem',md:'5rem',lg:'6rem'}} aspectRatio={'1/1'} position={'relative'} bgImage={'./imgs/step-imgs/handshake.png'} bgRepeat={'no-repeat'} bgSize={'contain'} bgPosition={'center'}>
              </Box>
              <Text textAlign={'center'} fontSize={{base:12,md:16}}>
                เจอกัน<br/>
                ที่นัดพบ
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}

export default StepComponent