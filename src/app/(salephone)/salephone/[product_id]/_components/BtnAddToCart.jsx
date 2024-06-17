'use client'
import NotificationComponent from '@/app/_components/_components_root/NotificationComponent'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { CartIcon } from './ProductInfoComponent'

const BtnAddToCart = () => {
    const [isShowNotification, setIsShowNotification] = React.useState(false)
    const ClickAddItem = () => {
        setIsShowNotification(true)
        setTimeout(() => {
            setIsShowNotification(false)
        }, 2000)
    }
    return (
        <>
            <Button onClick={ClickAddItem} size={'lg'} leftIcon={<CartIcon />} _hover={{ bg: '#E7D8F7' }} border={'1px solid #7F3A8A'} bg={'#E7D8F7'} color={'#7F3A8A'}>เพิ่มลงรถเข็น</Button>
            {isShowNotification && <NotificationComponent isShow={isShowNotification} text={'เพิ่มลงตะกร้าเรียบร้อย'} />}
        </>
    )
}

export default BtnAddToCart