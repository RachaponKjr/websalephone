import React from 'react'
import Image from "next/image";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

const StepComponent = () => {
  return (
    <>
    {/* step เเสดงขั้นตอนต่างๆ */}
    <Flex my={8} w={"full"} h={"13rem"} justifyContent={"center"} gap={10}>
          {/* ขั้นตอนที่ 1 */}
          <HStack justifyContent={"center"} spacing={10}>
            <Flex flexDirection={"column"} alignItems={"center"} gap={1}>
            <Box  position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <svg
                  width="50"
                  height="80"
                  viewBox="0 0 29 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="29" height="50" rx="3" fill="#7F3A8A" />
                  <circle cx="15" cy="46" r="2" fill="white" />
                  <rect
                    x="11"
                    y="2"
                    width="8"
                    height="1"
                    rx="0.5"
                    fill="white"
                  />
                </svg>
              </Box>
              <Text
                fontSize={"2xl"}
                fontWeight={"bold"}
                color={"#7F3A8A"}
                textAlign={"center"}
              >
                ระบุโทรศัพท์
                <br />
                ของคุณ
              </Text>
            </Flex>
            <Box position={"relative"} top={-10}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 7L0.5 13.9282L0.5 0.0717969L12.5 7Z"
                  fill="#7F3A8A"
                />
              </svg>
            </Box>
          </HStack>
          {/* ขั้นตอนที่ 2 */}
          <HStack justifyContent={"center"} spacing={10}>
            <Flex flexDirection={"column"} alignItems={"center"} gap={1}>
            <Box  position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Image src="/imgs/step-imgs/note.png" width={80} height={80} alt={'logo'}/>
              </Box>
              <Text
                fontSize={"2xl"}
                fontWeight={"bold"}
                color={"#8F8F8F"}
                textAlign={"center"}
              >
                ระบุสภาพ
                <br /> การใช้งาน
              </Text>
            </Flex>
            <Box position={"relative"} top={-10}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 7L0.5 13.9282L0.5 0.0717969L12.5 7Z"
                  fill="#8F8F8F"
                />
              </svg>
            </Box>
          </HStack>
          {/* ขั้นตอนที่ 3 */}
          <HStack justifyContent={"center"} spacing={10}>
            <Flex flexDirection={"column"} alignItems={"center"} gap={1}>
            <Box w={'100px'} h={'100px'} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Image src="/imgs/step-imgs/calendar.png" width={80} height={80} alt={'logo'}/>
              </Box>
              <Text
                fontSize={"2xl"}
                fontWeight={"bold"}
                color={"#8F8F8F"}
                textAlign={"center"}
              >
                นัดหมาย
                <br /> ขายสินค้า
              </Text>
            </Flex>
            <Box position={"relative"} top={-10}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 7L0.5 13.9282L0.5 0.0717969L12.5 7Z"
                  fill="#8F8F8F"
                />
              </svg>
            </Box>
          </HStack>
          {/* ขั้นตอนที่ 4 */}
          <HStack justifyContent={"center"} spacing={10}>
            <Flex flexDirection={"column"} alignItems={"center"} gap={1}>
            <Box w={'100px'} h={'100px'} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Image src="/imgs/step-imgs/handshake.png" width={80} height={80} alt={'logo'}/>
              </Box>
              <Text
                fontSize={"2xl"}
                fontWeight={"bold"}
                color={"#8F8F8F"}
                textAlign={"center"}
              >
                เจอกัน<br/> ที่นัดพบ
              </Text>
            </Flex>
          </HStack>
        </Flex>
    </>
  )
}

export default StepComponent