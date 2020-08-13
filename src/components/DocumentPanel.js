import React from 'react';
import {
  Flex,
  Stack,
  IconButton,
  Text,

} from '@chakra-ui/core';
import { MdFileUpload } from 'react-icons/md';

const DocumentPanel = () => {
  return (
      <Flex alignItems="center">
      <Stack as={Flex} spacing={10} color="#363636" alignItems="center">
          <Text fontSize="1rem" lineHeight="1.5rem" textAlign="center">We’re legally required to ask for some documents to sign you up as driver. Document scans and quality photos are accepted</Text>
          <Flex width="390px" roundedLeft="5px" roundedRight="0px" border="1px solid #DCE5E7" justifyContent="space-between" backgroundColor="white">
            <Flex  height="3rem" fontSize="16px" alignItems="center" pl="1.5rem" >Driver’s License*</Flex>
          <IconButton
              as={Flex}
            justifyContent="center"
            rounded="0px"
            aria-label="Search database"
            height="3rem"
            width="4rem"
            backgroundColor="#1470DB"
            color="white"
            fontSize="20px"
            p="13px"
            icon={MdFileUpload}
            _hover={{ backgroundColor: "#1064C7" }}
            />
        </Flex>

        <Flex alignItems="center" flexDirection="column" width="390px">
        <Flex width="390px" roundedLeft="5px" roundedRight="0px" border="1px solid #DCE5E7" justifyContent="space-between" backgroundColor="white">
            <Flex  height="3rem" fontSize="16px" alignItems="center" pl="1.5rem" >Tint Permit</Flex>
          <IconButton
              as={Flex}
            justifyContent="center"
            rounded="0px"
            aria-label="Search database"
            height="3rem"
            width="4rem"
            backgroundColor="#1470DB"
            color="white"
            fontSize="20px"
            p="13px"
            icon={MdFileUpload}
            _hover={{ backgroundColor: "#1064C7" }}
            />
        </Flex>
        <Text fontSize="1rem" lineHeight="1.5rem" mt="8px" textAlign="center">Required if the vehicle is tinted. More information at https://npf.gov.ng/tinted.</Text>
        </Flex>
        <Flex alignItems="center" flexDirection="column" width="390px">
        <Flex width="390px" roundedLeft="5px" roundedRight="0px" border="1px solid #DCE5E7" justifyContent="space-between" backgroundColor="white">
            <Flex  height="3rem" fontSize="16px" alignItems="center" pl="1.5rem" >Profile Picture*</Flex>
          <IconButton
              as={Flex}
            justifyContent="center"
            rounded="0px"
            aria-label="Search database"
            height="3rem"
            width="4rem"
            backgroundColor="#1470DB"
            color="white"
            fontSize="20px"
            p="13px"
            icon={MdFileUpload}
            _hover={{ backgroundColor: "#1064C7" }}
            />
        </Flex>
        <Text fontSize="1rem" lineHeight="1.5rem" mt="8px" textAlign="center">You agree that brium or a trusted vendor may collect and process your photos with technology that allows us to verify your identity</Text>
        </Flex>
        </Stack>
      </Flex>
  )
};


export default DocumentPanel;
