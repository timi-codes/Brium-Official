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
} from '@chakra-ui/core';


const ProfilePanel = () => {
  return (
      <Flex alignItems="center">
          <Stack spacing={8}>
              <Stack spacing={20} isInline>
                  <FormControl>
                      <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" > Invite Code</FormLabel>
                          <Input type="email" id="email" placeholder="VGDJFLL" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                  </FormControl>
                  <FormControl>
                      <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636"> Phone Number</FormLabel>
                          <Input type="number" id="email" placeholder="+2348174847684" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                  </FormControl>
              </Stack>
              <FormControl>
                  <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636"> Email Address</FormLabel>
                      <Input type="email" id="email" placeholder="timitejumola@gmail.com" borderColor="#DCE5E7" border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                  <FormHelperText id="email-helper-text" color="#363636" fontSize="1rem" lineHeight="1.5rem" mt="2rem">
                      <Text>Driver and taxi license details. Keep an eye on expiration dates. Incase when license expires. please contact customer support.<Text fontWeight="bold">support@brium.africa</Text></Text>
                  </FormHelperText>
                  </FormControl>

              <Divider width="100%" height="1px" backgroundColor="#DCE5E7" />

              <Stack color="#363636">
                <Text fontSize="1.2rem" fontWeight={700}>Documents</Text>
                <Text fontSize="1rem" lineHeight="1.5rem">Driver and taxi license details. Keep an eye on expiration dates. Incase when license expires. please contact customer support. support@brium.africa</Text>
                <Stack spacing={20} isInline mt="26px">
                  <FormControl>
                    <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" >Driver licence Number</FormLabel>
                      <Input type="email" id="email" placeholder="KUJ02128AA01" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636"> Driver licence Expiration</FormLabel>
                      <Input type="number" id="email" placeholder="3rd, February 2019" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                  </FormControl>
                </Stack>
              </Stack>


              <Divider width="100%" height="1px" backgroundColor="#DCE5E7" />

              <Stack color="#363636">
                  <Text fontSize="1.2rem" fontWeight={700}>Driver Vechicle</Text>
                  <Text fontSize="1rem" lineHeight="1.5rem">Passenger sees this info when they request your ride. Keep an eye on expiration dates. Incase when license expires. please contact customer support. support@brium.africa</Text>
                  <Stack spacing={20} isInline mt="26px">
                      <FormControl>
                          <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" >Model</FormLabel>
                              <Input type="email" id="email" placeholder="Toyota Camry" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                      </FormControl>
                      <FormControl>
                          <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636"> Year</FormLabel>
                              <Input type="number" id="email" placeholder="2016" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                      </FormControl>
                  </Stack>
                  <Stack spacing={20} isInline mt="12px">
                      <FormControl>
                          <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" >Plate Number</FormLabel>
                              <Input type="email" id="email" placeholder="NHID627EPE" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                      </FormControl>
                      <FormControl>
                          <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636">Number of Seats</FormLabel>
                              <Input type="number" id="email" placeholder="5" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                      </FormControl>
                  </Stack>
              </Stack>

              <Divider width="100%" height="1px" backgroundColor="#DCE5E7" />

              <Stack color="#363636">
                  <Text fontSize="1.2rem" fontWeight={700}>Payout Account Information</Text>
                  <Text fontSize="1rem" lineHeight="1.5rem">Passenger sees this info when they request your ride. Keep an eye on expiration dates. Incase when license expires. please contact customer support. support@brium.africa</Text>
                  <Stack spacing={20} isInline mt="26px">
                      <FormControl>
                          <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" >Recipient Name</FormLabel>
                              <Input type="email" id="email" placeholder="Timi Tejumola" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                      </FormControl>
                      <FormControl>
                          <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636">Bank Number</FormLabel>
                              <Input type="number" id="email" placeholder="0222010773" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                      </FormControl>
                  </Stack>
                  <Stack spacing={20} isInline mt="12px">
                      <FormControl>
                          <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" >Bank Name or BIC Swift</FormLabel>
                              <Input type="email" id="email" placeholder="Guarantee Trust Bank" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
                      </FormControl>
                      <Box/>
                  </Stack>
              </Stack>

          </Stack>
      </Flex>
  )
};


export default ProfilePanel;
