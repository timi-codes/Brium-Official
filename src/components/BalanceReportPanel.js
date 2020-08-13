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


const header = [ "Report", "PDF"]
const data = [
  {
    "date": "26,May 2019 - 7, Jue 2019",
    "link": "https://www.google.com"
  },
  {
    "date": "26,May 2019 - 7, Jue 2019",
    "link": "https://www.google.com"
  },
  {
    "date": "26,May 2019 - 7, Jue 2019",
    "link": "https://www.google.com"
  },
]

const BalanceReportPanel = () => {
  return (
    <Flex  color="#363636" width="100%" direction="column">
      <Box width="100%" backgroundColor="white" p="1.5rem">
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <FilterMenu>May 2019</FilterMenu>
          <Text fontSize="15px">Here you can see the list of balance reports for recent weeks</Text>
          <FilterMenu>10</FilterMenu>
        </Flex>
      </Box>
      <TableHeader items={header} />
      <Box backgroundColor="white" pb="2rem" px="1rem">
      {
          data.map((item) => (
          <Flex direction="column" borderBottom="1px dashed #DCE5E7">
            <Grid gridTemplateColumns="repeat(2, 1fr)" gap="1rem" px="2rem" py="1.5rem" width="100%" color="#363636" key={`${item.date}`}>
              <Text fontSize="14px" fontWeight={600} textAlign="center">{item.date}</Text>
              <Link href={item.link} fontSize="14px" fontWeight={600} color="#0C9B09" textAlign="center" textDecoration="underline" >Download PDF</Link>
            </Grid>
          </Flex>
        ))
        }
      </Box>
    </Flex>
  )
};


export default BalanceReportPanel;
