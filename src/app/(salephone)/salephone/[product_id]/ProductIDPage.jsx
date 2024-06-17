import React from 'react'
import ProductInfoComponent from './_components/ProductInfoComponent'
import { Box, Container } from '@chakra-ui/react'
import InfoProduct from './_components/InfoProductComponent'
import InfoProductComponent from './_components/InfoProductComponent'
import NotificationComponent from '@/app/_components/_components_root/NotificationComponent'

const ProductIDPage = () => {
  return (
    <>
      <Box mb={{base:'5rem',md:8}} mt={{base:'10rem',md:8}}>
        <Container maxW={'container.xl'}>
          <ProductInfoComponent />
        </Container>
        {/* Divider */}
        <Box w={'full'} h={'3px'} bg={'#7F3A8A'} ></Box>
        <Container maxW={'container.xl'}>
          <InfoProductComponent />
        </Container>
      </Box>
    </>
  )
}

export default ProductIDPage