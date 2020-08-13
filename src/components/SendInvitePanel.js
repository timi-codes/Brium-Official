import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Flex,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Button as BB
} from '@chakra-ui/core';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { mixins } from '@styles';


const Button = styled(BB)`
  ${mixins.bigButton};
  padding: 0 26px;
  text-align: center;
  height: 2.5rem;
  text-align: center;
  font-size: 14px;
  background-color: #FBB837
`;

const SendInvitePanel = () => {
  return (
    <Flex  color="#363636" width="100%" direction="column">
      <Box width="100%" p="1.5rem">
      <Stack color="#363636">
          <Text fontSize="1.1rem" fontWeight={700}>Invite with your code</Text>
          <Text fontSize="1rem" lineHeight="1.5rem" color="#6A7781">Send our friends your unique invite code or share with them via a tweet or share on facebook</Text>
          <Stack spacing={8} isInline mt="26px">
              <FormControl>
                  <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" >Copy code from here</FormLabel>
                  <Input type="email" id="email" placeholder="CHSG407" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" >Tweet or Share</FormLabel>
              <Stack isInline spacing={4}>
                <IconButton p="13px"aria-label="Search database" icon={FaTwitter} width="2.6rem" height="2.6rem" fontWeight="bold" backgroundColor="#DFEAF8" rounded="0"/>
                <IconButton p="13px" aria-label="Search database" icon={FaFacebookF} width="2.6rem" height="2.6rem" fontWeight="bold" backgroundColor="#DFEAF8" rounded="0"/>
              </Stack>
              </FormControl>
          </Stack>
        </Stack>
        <Stack color="#363636" mt="4rem">
          <Text fontSize="1.1rem" fontWeight={700}>Invite via email</Text>
          <Text fontSize="1rem" lineHeight="1.5rem" color="#6A7781">Send our friends your unique invite by sending it to their email address</Text>
          <Stack spacing={8} isInline mt="26px">
            <Input type="email" id="email" placeholder="tejumoladavid@gmail.com" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
            <Button >SEND</Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  )
};


export default SendInvitePanel;
