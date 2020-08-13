import React from 'react';
import {
  Box,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Divider,
  Text,
  IconButton
} from '@chakra-ui/core';


import { GoChevronRight, GoChevronLeft } from 'react-icons/go';




const PaymentSystemPanel = () => {
  return (
      <Flex alignItems="center" color="#363636" width="100%" direction="column">
        <Box width="100%" backgroundColor="white" p="1.5rem" borderBottom="1px solid #DCE5E7">
          <Flex width="100%" justifyContent="space-between">
            <Box>
              <Text fontSize="12px">TOTAL EARNINGS</Text>
              <Text fontWeight={700} fontSize="2rem" lineHeight="2rem">₦0.00</Text>
            </Box>
            <Stack isInline alignItems="center">
              <IconButton p="10px" aria-label="Search database" icon={GoChevronLeft} width="2.6rem" height="2.6rem" fontWeight="bold" backgroundColor="#DFEAF8" rounded="0"/>
              <Text fontSize="15px" px="0.5rem" fontWeight={500}>May 6 - 13, 2019</Text>
              <IconButton p="10px" aria-label="Search database" icon={GoChevronRight} width="2.6rem" height="2.6rem" backgroundColor="#DFEAF8" rounded="0"/>
            </Stack>
          </Flex>

          <Divider width="100%" border="1px dashed #DCE5E7" my="1rem"  backgroundColor="transparent"/>

          <Flex backgroundColor="white" width="100%">
            <Box mr="3rem">
              <Text fontWeight={700} fontSize="1.5rem" lineHeight="2rem">100</Text>
              <Text fontSize="12px">COMPLETED TRIPS</Text>
            </Box>
            <Box mr="3rem">
              <Text fontWeight={700} fontSize="1.5rem" lineHeight="2rem">100</Text>
              <Text fontSize="12px">ONLINE HOURS</Text>
            </Box>
            <Box mr="3rem">
              <Text fontWeight={700} fontSize="1.5rem" lineHeight="2rem">0</Text>
              <Text fontSize="12px">DRIVER CANCELLATION</Text>
            </Box>
          </Flex>
        </Box>
        <Box width="100%" backgroundColor="white" py="1.5rem" px="2rem" mt="1.5rem" borderBottom="1px solid #DCE5E7">
          <Text color="#1470DB" fontWeight={700} fontSize="1.1rem" mb="1.7rem">Weekly Summary</Text>
          <Flex>
            <Box mr="3.5rem">
              <Text fontSize="16px" fontWeight="bold">Previous Balance</Text>
              <Text fontSize="14px" mt="5px" color="#6A7781">This is your End of Week Balance carried forward from the previous week. It shows how much Brium owed you or how much you owed Brium before this week started.</Text>
            </Box>
            <Text fontWeight={700} fontSize="1.5rem" lineHeight="2rem">₦0.00</Text>
          </Flex>
          <Divider width="100%" border="1px dashed #DCE5E7" my="1.6rem" backgroundColor="transparent" />
          <Flex>
            <Box mr="3.5rem">
              <Text fontSize="16px" fontWeight="bold">Current Balance</Text>
              <Text fontSize="14px" mt="5px" color="#6A7781">This amount shows how much Brium owes you or how much you owe so far this week. Check your transaction details for more information.</Text>
            </Box>
            <Text fontWeight={700} fontSize="1.5rem" lineHeight="2rem">₦0.00</Text>
          </Flex>
          <Divider width="100%" border="1px dashed #DCE5E7" my="1.6rem" backgroundColor="transparent" />
          <Flex>
            <Box mr="3.5rem">
              <Text fontSize="16px" fontWeight="bold">Current Balance</Text>
              <Text fontSize="14px" mt="5px" color="#6A7781">This amount shows how much Brium owes you or how much you owe so far this week. Check your transaction details for more information.</Text>
            </Box>
            <Text fontWeight={700} fontSize="1.5rem" lineHeight="2rem">₦0.00</Text>
          </Flex>

        </Box>
      </Flex>
  )
};


export default PaymentSystemPanel;
