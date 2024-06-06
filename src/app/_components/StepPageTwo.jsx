'use client'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const StepPageTwo = ({ nextStep }) => {
    const [select, setSelect] = useState(
        {
            model: null,
            guarantee: null,
            quality: null,
            screen: null,
            display: null,
            accessories: [],
            problems: []
        }
    )
    const menuSelect = [
        {
            id: 1,
            name: 'Model',
            value: 'model',
            type: 'select',
            options: [
                { id: 1, name: 'model', value: 'เครื่องไทย TH' },
                { id: 2, name: 'model', value: 'Model ZP 14,15 Series' },
                { id: 3, name: 'model', value: 'เครื่องนอกโมเดลอื่น' },
            ]
        },
        {
            id: 2,
            name: 'ประกัน',
            value: 'guarantee',
            type: 'select',
            options: [
                { id: 1, name: 'guarantee', value: 'เหลือมากกว่า 4 เดือน' },
                { id: 2, name: 'guarantee', value: 'เหลือน้อยกว่า 4 เดือน' },
                { id: 3, name: 'guarantee', value: 'หมดประกัน' },
            ]
        },
        {
            id: 3,
            name: 'สภาพตัวเครื่อง',
            value: 'quality',
            type: 'select',
            options: [
                { id: 1, name: 'quality', value: 'เครื่องไทย TH' },
                { id: 2, name: 'quality', value: 'Model ZP 14,15 Series' },
                { id: 3, name: 'quality', value: 'เครื่องนอกโมเดลอื่น' },
            ]
        }
        ,
        {
            id: 4,
            name: 'สภาพหน้าจอ',
            value: 'screen',
            type: 'select',
            options: [
                { id: 1, name: 'screen', value: 'เครื่องไทย TH' },
                { id: 2, name: 'screen', value: 'Model ZP 14,15 Series' },
                { id: 3, name: 'screen', value: 'เครื่องนอกโมเดลอื่น' },
            ]
        }
        ,
        {
            id: 5,
            name: 'การแสดงภาพหน้าจอ',
            value: 'display',
            type: 'select',
            options: [
                { id: 1, name: 'display', value: 'เครื่องไทย TH' },
                { id: 2, name: 'display', value: 'Model ZP 14,15 Series' },
                { id: 3, name: 'display', value: 'เครื่องนอกโมเดลอื่น' },
            ]
        }
        ,
        {
            id: 6,
            name: 'อุปกรณ์เสริม (กล่อง, หูฟัง, สายชาร์จ, หัวชาร์จ)',
            value: 'accessories',
            type: 'array',
            options: [
                { id: 1, name: 'accessories', value: 'เครื่องไทย TH' },
                { id: 2, name: 'accessories', value: 'Model ZP 14,15 Series' },
                { id: 3, name: 'accessories', value: 'เครื่องนอกโมเดลอื่น' },
            ]
        }
        ,
        {
            id: 7,
            name: 'ปัญหาด้านการใช้งาน (เลือกได้มากกว่า 1 ข้อ)',
            value: 'problems',
            type: 'array',
            options: [
                { id: 1, name: 'problems', value: 'เครื่องไทย TH' },
                { id: 2, name: 'problems', value: 'Model ZP 14,15 Series' },
                { id: 3, name: 'problems', value: 'เครื่องนอกโมเดลอื่น' },
            ]
        }
    ]

    const toggleFC = (type, key, value, event) => {
        if (type === "array") {
            toggleAddToArray(key, value)
        } else {
            toggleSelect(key, value)
        }
    }
    const toggleSelect = (key, value) => {

        console.log(key, value)
        setSelect((prevSelect) => ({
            ...prevSelect,
            [key]: value,
        }));
    }
    const toggleAddToArray = (key, value,item) => {
        setSelect((prevSelect) => {
            const valueArray = prevSelect[key].includes(value) ? prevSelect[key].filter(item => item !== value) : [...prevSelect[key], value];
            return {
                ...prevSelect,
                [key]: valueArray
            }
        })
    }
    useEffect(() => {
        // console.log(select)
    }, [select])
    return (
        <>
            <Box w={'full'} h={'full'} px={{ base: 2, md: "1rem", lg: "5rem" }} mb={24}>
                <Flex gap={{ base: 0, md: 4 }} flexDirection={{ base: 'column', md: 'row' }} mx={{ base: 0, md: "auto" }} w={{ base: 'full', lg: "60rem" }} h={'full'} boxShadow={{ base: "rgba(0, 0, 0, 0.16) 0px 1px 4px", md: 'none' }}>
                    <Box p={4}>
                        {/* ส่วนกล่อง การรักษาความปลอดภัย */}
                        <Flex flexDirection={'column'} w={'full'} h={{ base: 'full', md: 'max-content' }} bg={'#E7D8F7'} border={'2px solid #7F3A8A'} rounded={'lg'} py={4} gap={4}>
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
                    <Flex flexDirection={{ base: "column", md: "column" }} w={{ base: 'full', md: "770px" }} h={'full'} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
                        {/* ส่วนกล่องสำหรับเลือก รูปแบบสินค้า */}
                        <Flex flexDirection={'column'} gap={4}>
                            {/* ส่วนหัวข้อของสำหรับเลือก รูปแบบสินค้า */}
                            <Box borderLeft={'4px solid #7F3A8A'} h={'24px'} display={'flex'} alignItems={'center'}>
                                <Text as={'h3'} ml={2} fontWeight={'bold'} fontSize={{ base: 12, md: 14, lg: 16 }}>ระบุข้อมูลการขาย iPhone iPhone 11 128 GB</Text>
                            </Box>
                            {/* Accordion เปิด เลือก รายการ */}
                            <Accordion allowToggle display={'flex'} flexDirection={'column'} gap={3} border={'0px solid white'} px={2}>
                                {
                                    menuSelect.map((item, index) => {
                                        let type = item.type;
                                        return (
                                            <>
                                                <AccordionItem bg={'#EFEFEF'} rounded={'lg'}>
                                                    <AccordionButton _expanded={{ bg: 'transparent' }} position={'relative'}>
                                                        <Box as='span' flex='1' textAlign='left' fontSize={'14px'}>{index + 1}. {item.name}</Box>
                                                        {type === "select" ? <Text position={'absolute'} right={10} fontSize={'14px'}>{select[item.value]}</Text> : null}
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                    <AccordionPanel pb={4}>
                                                        <Flex gap={4} flexWrap={'wrap'}>
                                                            {item.options.map((item, index) =>
                                                            (
                                                                <>
                                                                    {/* {chackInArray(item.name, item.value)} */}
                                                                    {type === "select" ?
                                                                        <>
                                                                            <Box
                                                                                key={index}
                                                                                bg={select[item.name] === item.value ? '#E7D8F7' : '#ffffff'}
                                                                                border={select[item.name] === item.value ? '2px solid #7F3A8A' : '2px solid #8F8F8F'}
                                                                                px={4} py={1} rounded={'md'} cursor={'pointer'} _hover={{ bg: '#E7D8F7', border: '2px solid #7F3A8A' }} onClick={() => toggleFC(type, item.name, item.value)}>
                                                                                <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>{item.value}</Text>
                                                                            </Box>
                                                                        </> :
                                                                        <>
                                                                            <Box
                                                                                key={index}
                                                                                // bg={type === "select" ? select[item.name] === item.value ? '#E7D8F7' : '#ffffff' : chackInArray(item.name, item.value) ? '#E7D8F7' : '#ffffff'}
                                                                                bg={select[item.name]?.includes(item.value) ? '#E7D8F7' : '#ffffff'}
                                                                                border={select[item.name]?.includes(item.value) ? '2px solid #7F3A8A' : '2px solid #8F8F8F'}
                                                                                px={4} py={1} rounded={'md'} cursor={'pointer'} _hover={{ bg: '#E7D8F7', border: '2px solid #7F3A8A' }} onClick={(event) => toggleFC(type, item.name, item.value,event)}>
                                                                                <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>{item.value}</Text>
                                                                            </Box>
                                                                        </>
                                                                    }
                                                                    {/* <Box
                                                                        key={index}
                                                                        bg={type === "select" ? select[item.name] === item.value ? '#E7D8F7' : '#ffffff' : chackInArray(item.name, item.value) ? '#E7D8F7' : '#ffffff'}
                                                                        border={type === "select" ? select[item.name] === item.value ? '2px solid #7F3A8A' : '2px solid #8F8F8F' : chackInArray(item.name, item.value) ? '2px solid #7F3A8A' : '2px solid #8F8F8F'}
                                                                        px={4} py={1} rounded={'md'} cursor={'pointer'} _hover={{ bg: '#E7D8F7', border: '2px solid #7F3A8A' }} onClick={() => toggleFC(type, item.name, item.value)}>
                                                                        <Text as={'h6'} fontSize={'13px'} fontWeight={'bold'}>{item.value}</Text>
                                                                    </Box> */}
                                                                </>
                                                            ))}
                                                        </Flex>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </>
                                        )
                                    }
                                    )
                                }
                            </Accordion>
                        </Flex>
                        {/* ปุ่มประเมิณราคา */}
                        <Flex justify={'center'} my={'2rem'}>
                            <Button bg={'#7F3A89'} color={'white'} w={'15rem'} rounded={'lg'} onClick={() => nextStep(2)}>ประเมิณราคา</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default StepPageTwo