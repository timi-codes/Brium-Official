import React from 'react';
import {
  Text,
  Grid
} from '@chakra-ui/core';



const TableHeader = ({ items }) => {
  return (
    <Grid gridTemplateColumns={`repeat(${items.length}, 1fr)`} backgroundColor="#DFEAF8" px="2rem"  py="1rem" width="100%" color="#1470DB">
      {
        items.map((item) => (<Text fontSize="14px" fontWeight={600} textAlign="center">{item}</Text>))
      }
    </Grid>
  )
}

export default TableHeader
