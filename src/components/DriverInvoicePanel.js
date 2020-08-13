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


const header = [ "Invoice No", "Date", "Due Date", "Total Sum", "PDF"]
const data = [
  {
    "no": "N-092928",
    "date": "26,May 2019",
    "dueDate": "26,May 2019",
    "sum": "2,000",
    "link": "https://www.google.com"
  },
  {
    "no": "N-092928",
    "date": "26,May 2019",
    "dueDate": "26,May 2019",
    "sum": "5,400",
    "link": "https://www.google.com"
  },
  {
    "no": "N-092928",
    "date": "26,May 2019",
    "dueDate": "26,May 2019",
    "sum": "15,000",
    "link": "https://www.google.com"
  }
]

const DriverInvoicePanel = () => {
  return (
    <Flex  color="#363636" width="100%" direction="column">
      <Box width="100%" backgroundColor="white" p="1.5rem">
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <FilterMenu>May 2019</FilterMenu>
          <Text fontSize="15px">Here you can see the list of invoices issued to you by Brium.</Text>
          <FilterMenu>10</FilterMenu>
        </Flex>
      </Box>
      <TableHeader items={header} />
      <Box backgroundColor="white" pb="2rem" px="1rem">
      {
          data.map((item) => (
          <Flex direction="column" borderBottom="1px dashed #DCE5E7">
            <Grid gridTemplateColumns="repeat(5, 1fr)" gap="1rem" px="2rem" py="1.5rem" width="100%" color="#363636" key={`${item.date}`}>
              <Text fontSize="14px" fontWeight={600} textAlign="center">{item.no}</Text>
              <Text fontSize="14px" fontWeight={600} textAlign="center">{item.date}</Text>
              <Text fontSize="14px" fontWeight={600} textAlign="center">{item.dueDate}</Text>
              <Text fontSize="14px" fontWeight={600} textAlign="center">{item.sum}</Text>
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


export default DriverInvoicePanel;
