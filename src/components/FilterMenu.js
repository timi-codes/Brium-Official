import React from 'react';
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
  IconButton,
  Flex
} from '@chakra-ui/core';
import { GoChevronDown } from 'react-icons/go';




const FilterMenu = ({ children }) => {
  return (
    <Menu width="3rem">
      <MenuButton backgroundColor="white" border="1.2px solid #DFEAF8" _hover={{ backgroundColor: "white"}} _focus={{ backgroundColor: "white",  outline: 0  }}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="15px" px="1.5rem" fontWeight={500} >{children}</Text>
          <IconButton aria-label="Search database" color="#1470DB" icon={GoChevronDown} width="2.6rem" height="2.6rem" fontWeight="bold" backgroundColor="#DFEAF8" rounded="0"/>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Cop</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem as="a" href="#">
          Attend a Workshop
        </MenuItem>
      </MenuList>
    </Menu>
  )
}


export default FilterMenu;
