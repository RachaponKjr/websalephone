import { Container, VStack } from '@chakra-ui/react'
import React from 'react'
import ProductComponent from './_components/ProductComponent'
import BoxProductComponent from './_components/BoxProductComponent'
import ItemProductComponent from './_components/ItemProductComponent'

const SalePage = () => {
  return (
    <>
      <Container maxW={'container.xl'} mb={{base:'5rem',md:'54px'}} mt={{base:'10rem',md:'54px'}}>
        <VStack spacing={"4rem"}>
          <ProductComponent headText={'โทรศัพท์'}>
            <BoxProductComponent headText={'สินค้าขายดี'}>
              {Array.from({ length: 4 }).map((_, index) => (
                <>
                  <ItemProductComponent />
                </>
              ))}
            </BoxProductComponent>
            <BoxProductComponent headText={'IPHONE'}>
              {Array.from({ length: 4 }).map((_, index) => (
                <>
                  <ItemProductComponent />
                </>
              ))}
            </BoxProductComponent>
            <BoxProductComponent headText={'Android'}>
              {Array.from({ length: 4 }).map((_, index) => (
                <>
                  <ItemProductComponent />
                </>
              ))}
            </BoxProductComponent>
          </ProductComponent>
          <ProductComponent headText={'สายชาร์จ'} >
            <BoxProductComponent headText={'IPHONE'}>
              {Array.from({ length: 4 }).map((_, index) => (
                <>
                  <ItemProductComponent />
                </>
              ))}
            </BoxProductComponent>
            <BoxProductComponent headText={'Android'}>
              {Array.from({ length: 4 }).map((_, index) => (
                <>
                  <ItemProductComponent />
                </>
              ))}
            </BoxProductComponent>
          </ProductComponent>
        </VStack>
      </Container>
    </>
  )
}

export default SalePage