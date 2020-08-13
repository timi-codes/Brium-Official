import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Flex,
  Link,
  Text,
  Grid
} from '@chakra-ui/core';
import FilterMenu from './FilterMenu';
import TableHeader from './TableHeader';


const header = [ "Date", "Contact", "Via", "Reward", "Invite Status"]
const data = [
  {
    "date": "12, August 2020",
    "contact": "tejumoladavid@gmail.com",
    "via": "email",
    "reward": "10,000",
    "status": "pending"
  },
  {
    "date": "12, August 2020",
    "contact": "tejumoladavid@gmail.com",
    "via": "email",
    "reward": "10,000",
    "status": "pending"
  },
  {
    "date": "12, August 2020",
    "contact": "tejumoladavid@gmail.com",
    "via": "facebook",
    "reward": "10,000",
    "status": "pending"
  },
]

const TrackInvitePanel = () => {
  return (
    <Flex  color="#363636" width="100%" direction="column">
      <Box width="100%" backgroundColor="white" p="1.5rem">
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <FilterMenu>Pending</FilterMenu>
          <FilterMenu>10</FilterMenu>
        </Flex>
      </Box>
      <TableHeader items={header} />
      <Box backgroundColor="white" pb="2rem" px="1rem">
      {
          data.map((item) => (
          <Flex direction="column" borderBottom="1px dashed #DCE5E7">
            <Grid gridTemplateColumns="repeat(5, 1fr)" gap="1rem" px="2rem" py="1.5rem" width="100%" color="#363636" key={`${item.date}`}>
                <Text fontSize="14px" fontWeight={600} textAlign="center">{item.date}</Text>
                <Text fontSize="14px" fontWeight={600} textAlign="center">{item.contact}</Text>
                <Text fontSize="14px" fontWeight={600} textAlign="center">{item.via}</Text>
                <Text fontSize="14px" fontWeight={600} textAlign="center">{item.reward}</Text>
                <Link href={item.link} fontSize="14px" fontWeight={600} color="#0C9B09" textAlign="center" textDecoration="underline" >{item.status}</Link>
            </Grid>
          </Flex>
        ))
        }
      </Box>
    </Flex>
  )
};


export default TrackInvitePanel;
