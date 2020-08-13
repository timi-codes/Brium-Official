import React from 'react';
import {
  Box,
  Flex,
  Link,
  Text,
  Grid
} from '@chakra-ui/core';
import FilterMenu from './FilterMenu';
import TableHeader from './TableHeader';


const header = [ "Date", "Pickup Address", "Sum", "Payment Method", "PDF"]
const data = [
  {
  "date": "23,May 2019",
  "address": "1004, Housing Esatate",
  "sum": "2,000",
  "paymentMethod": "Cash",
  "link": "https://www.google.com"
  },
  {
    "date": "26,May 2019",
    "address": "24 Ewekoro Abule Egba",
    "sum": "5,000",
    "paymentMethod": "Debit Card",
    "link": "https://www.google.com"
  },
  {
    "date": "12, August 2020",
    "address": "125, Olumo Oshodi Lagos",
    "sum": "6,530",
    "paymentMethod": "Debit Card",
    "link": "https://www.google.com"
  }
]

const RiderInvoicePanel = () => {
  return (
    <Flex  color="#363636" width="100%" direction="column">
      <Box width="100%" backgroundColor="white" p="1.5rem">
        <Flex width="100%" justifyContent="space-between">
          <FilterMenu>May 2019</FilterMenu>
          <FilterMenu>Payment Method</FilterMenu>
          <FilterMenu>10</FilterMenu>
        </Flex>
      </Box>
      <TableHeader items={header} />
      <Box backgroundColor="white" pb="2rem">
      {
          data.map((item) => (
          <Flex direction="column" borderBottom="1px dashed #DCE5E7">
            <Grid gridTemplateColumns="repeat(5, 1fr)" gap="1rem" px="2rem" py="1.5rem" width="100%" color="#363636" key={`${item.date}`}>
              <Text fontSize="14px" fontWeight={600} textAlign="center">{item.date}</Text>
              <Text fontSize="14px" fontWeight={600} textAlign="center">{item.address}</Text>
              <Text fontSize="14px" fontWeight={600} textAlign="center">{item.sum}</Text>
              <Text fontSize="14px" fontWeight={600} textAlign="center">{item.paymentMethod}</Text>
              <Link href={item.link} fontSize="14px" fontWeight={600} color="#0C9B09" textAlign="center" textDecoration=
              "underline" >Download</Link>
            </Grid>
          </Flex>
        ))
        }
      </Box>
    </Flex>
  )
};


export default RiderInvoicePanel;
