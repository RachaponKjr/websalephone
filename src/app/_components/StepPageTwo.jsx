import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const StepPageTwo = () => {
    return (
        <>
            <Box w={'full'} h={'full'} p={2} mb={24}>
                <Flex flexDirection={'column'} w={'full'} h={'full'} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
                    <Box p={4}>
                        {/* ส่วนกล่อง การรักษาความปลอดภัย */}
                        <Flex flexDirection={'column'} w={'full'} h={'full'} bg={'#E7D8F7'} border={'2px solid #7F3A8A'} rounded={'lg'} py={4} gap={4}>
                            {/* Text หัวข้อของการรักษาความปลอดภัย */}
                            <Flex borderLeft={'3px solid #7F3A8A'} alignItems={'center'} p={2} gap={2}>
                                <Box>
                                    <svg width="25" height="25" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.49938 1.41699C5.36887 1.41699 3.98745 2.84711 2.3537 3.36838C1.6894 3.58033 1.35726 3.68631 1.22284 3.8357C1.08841 3.98509 1.04905 4.2034 0.970329 4.64C0.127917 9.31207 1.9692 13.6315 6.36044 15.3127C6.83226 15.4933 7.06816 15.5837 7.5017 15.5837C7.93524 15.5837 8.17113 15.4933 8.64292 15.3127C13.0339 13.6315 14.8734 9.31206 14.0308 4.64C13.952 4.20332 13.9126 3.98498 13.7782 3.83559C13.6437 3.68619 13.3116 3.58028 12.6473 3.36844C11.013 2.84722 9.62997 1.41699 7.49938 1.41699Z" stroke="#2A353D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.5 4.95898L7.5 6.37565" stroke="#2A353D" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </Box>
                                <Text as={'h4'} fontSize={'14px'} fontWeight={'bold'}>การรักษาความปลอดภัยของ Apple</Text>
                            </Flex>
                            {/* ข้อความของการรักษาความปลอดภัย */}
                            <Flex flexDirection={'column'} px={4} gap={4}>
                                <Box>
                                    <Text as={'h6'} fontSize={'12px'}>
                                        Ipad หากทำการลบข้อมูลการตั้งค่าของเครื่อง จะหมดปัญหาความเสี่ยงเกี่ยวกับการรั่วไหล
                                        ของข้อมูลเครื่อง เพราะฉะนั้นผู้ใช้สามารถวางใจในการขายสินค้าโทรศัพท์ให้แก่ทางบริษัท
                                    </Text>
                                </Box>
                                <Box>
                                    <Text as={'h6'} fontSize={'12px'}>
                                        1 ไฟล์แต่ละไฟล์ในIpadจะมีการเข้ารหัสแบบสร้างขึ้นเองและจะได้รับการจัดเก็บอย่างปลอดภัย
                                        ในฮาทร์ดิสก์ของ Ipad
                                    </Text>
                                </Box>
                                <Box>
                                    <Text as={'h6'} fontSize={'12px'}>
                                        2 หากผู้ใช้ทำการลบข้อมูลและคืนการตั้งค่าเดิมทั้งหมดเทียบเท่ากับการลบไฟล์ทั้งหมด
                                        ในIpad  จะไม่มี โอกาสในการกู้ข้อมูลและการตั้งค่าคืนกลับมา
                                    </Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    {/* ส่วนกล่องสำหรับเลือก รูปแบบสินค้า */}
                    <Flex flexDirection={'column'} gap={4}>
                        {/* ส่วนหัวข้อของสำหรับเลือก รูปแบบสินค้า */}
                        <Box borderLeft={'3px solid #7F3A8A'} h={'24px'} display={'flex'} alignItems={'center'}>
                            <Text as={'h3'} ml={2} fontWeight={'bold'} fontSize={13}>ระบุข้อมูลการขาย iPhone iPhone 11 128 GB</Text>
                        </Box>
                        {/* Accordion เปิด เลือก รายการ */}
                        <Accordion allowToggle display={'flex'} flexDirection={'column'} gap={3} border={'0px solid white'} px={2}>
                            {/* Item ของ Accordion 1 */}
                            <AccordionItem bg={'#EFEFEF'} rounded={'lg'}>
                                <AccordionButton _expanded={{ bg: 'transparent'}}>
                                    <Box as='span' flex='1' textAlign='left' fontSize={'14px'}>1. Model</Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex gap={4} flexWrap={'wrap'}>
                                        <Box bg={'#E7D8F7'} border={'2px solid #7F3A8A'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เครื่องไทย TH</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>Model ZP 14,15 Series</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เครื่องนอกโมเดลอื่น</Text>
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Item ของ Accordion 2*/}
                            <AccordionItem bg={'#EFEFEF'} rounded={'lg'}>
                                <AccordionButton _expanded={{ bg: 'transparent'}}>
                                    <Box as='span' flex='1' textAlign='left' fontSize={'14px'}>2. ประกัน</Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex gap={4} flexWrap={'wrap'}>
                                        <Box bg={'#E7D8F7'} border={'2px solid #7F3A8A'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือมากกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือน้อยกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>หมดประกัน</Text>
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Item ของ Accordion 3*/}
                            <AccordionItem bg={'#EFEFEF'} rounded={'lg'}>
                                <AccordionButton _expanded={{ bg: 'transparent'}}>
                                    <Box as='span' flex='1' textAlign='left' fontSize={'14px'}>3. สภาพตัวเครื่อง</Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex gap={4} flexWrap={'wrap'}>
                                        <Box bg={'#E7D8F7'} border={'2px solid #7F3A8A'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือมากกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือน้อยกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>หมดประกัน</Text>
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Item ของ Accordion 4*/}
                            <AccordionItem bg={'#EFEFEF'} rounded={'lg'}>
                                <AccordionButton _expanded={{ bg: 'transparent'}}>
                                    <Box as='span' flex='1' textAlign='left' fontSize={'14px'}>4. สภาพหน้าจอ</Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex gap={4} flexWrap={'wrap'}>
                                        <Box bg={'#E7D8F7'} border={'2px solid #7F3A8A'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือมากกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือน้อยกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>หมดประกัน</Text>
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Item ของ Accordion 5*/}
                            <AccordionItem bg={'#EFEFEF'} rounded={'lg'}>
                                <AccordionButton _expanded={{ bg: 'transparent'}}>
                                    <Box as='span' flex='1' textAlign='left' fontSize={'14px'}>5. สภาพตัวเครื่อง</Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex gap={4} flexWrap={'wrap'}>
                                        <Box bg={'#E7D8F7'} border={'2px solid #7F3A8A'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือมากกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือน้อยกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>หมดประกัน</Text>
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Item ของ Accordion 6*/}
                            <AccordionItem bg={'#EFEFEF'} rounded={'lg'}>
                                <AccordionButton _expanded={{ bg: 'transparent'}}>
                                    <Box as='span' flex='1' textAlign='left' fontSize={'14px'}>6. อุปกรณ์เสริม (กล่อง, หูฟัง, สายชาร์จ, หัวชาร์จ)</Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex gap={4} flexWrap={'wrap'}>
                                        <Box bg={'#E7D8F7'} border={'2px solid #7F3A8A'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือมากกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือน้อยกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>หมดประกัน</Text>
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Item ของ Accordion 7*/}
                            <AccordionItem bg={'#EFEFEF'} rounded={'lg'}>
                                <AccordionButton _expanded={{ bg: 'transparent'}}>
                                    <Box as='span' flex='1' textAlign='left' fontSize={'14px'}>7. ปัญหาด้านการใช้งาน (เลือกได้มากกว่า 1 ข้อ)</Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex gap={4} flexWrap={'wrap'}>
                                        <Box bg={'#E7D8F7'} border={'2px solid #7F3A8A'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือมากกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>เหลือน้อยกว่า 4เดือน</Text>
                                        </Box>
                                        <Box bg={'#ffffff'} border={'2px solid #8F8F8F'} px={4} py={1} rounded={'md'}>
                                            <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>หมดประกัน</Text>
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
                    {/* ปุ่มประเมิณราคา */}
                    <Flex justify={'center'} my={'2rem'}>
                        <Button bg={'#7F3A89'} color={'white'} w={'15rem'} rounded={'lg'}>ประเมิณราคา</Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default StepPageTwo