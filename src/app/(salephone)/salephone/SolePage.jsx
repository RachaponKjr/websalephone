import { Container, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ProductComponent from './_components/ProductComponent'
import BoxProductComponent from './_components/BoxProductComponent'
import ItemProductComponent from './_components/ItemProductComponent'

const SolePage = () => {
  return (
    <>
      <Container maxW={'container.xl'} my={'54px'}>
        <VStack spacing={"4rem"}>
          <ProductComponent headText={'โทรศัพท์'}>
            <BoxProductComponent headText={'สินค้าขายดี'}>
              {Array.from({ length: 5 }).map((_, index) => (
                <>
                  <ItemProductComponent />
                </>
              ))}
            </BoxProductComponent>
            <BoxProductComponent headText={'IPHONE'}>
              {Array.from({ length: 5 }).map((_, index) => (
                <>
                  <ItemProductComponent />
                </>
              ))}
            </BoxProductComponent>
            <BoxProductComponent headText={'Android'}>
              {Array.from({ length: 5 }).map((_, index) => (
                <>
                  <ItemProductComponent />
                </>
              ))}
            </BoxProductComponent>
          </ProductComponent>
          <ProductComponent headText={'สายชาร์จ'} >
            <BoxProductComponent headText={'IPHONE'}>
              {Array.from({ length: 5 }).map((_, index) => (
                <>
                  <ItemProductComponent />
                </>
              ))}
            </BoxProductComponent>
            <BoxProductComponent headText={'Android'}>
              {Array.from({ length: 5 }).map((_, index) => (
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

export default SolePage