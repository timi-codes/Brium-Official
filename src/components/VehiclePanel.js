import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Flex,
  Stack,
  Divider,
  FormLabel,
  Input,
  FormControl,
  Image,
  Text,
} from '@chakra-ui/core';
import { CarIcon } from '@components/icons';
import { Link } from 'gatsby';
import { theme, mixins } from '@styles';


const { colors, fonts } = theme;


const Button = styled(Link)`
  ${mixins.bigButton};
  padding-left: 18px;
  padding-right: 20px;
  width: 85%;
  text-align: center;
  svg {
    width: 30px;
    height: 14px;
    margin-left: 20px;
    filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.57)) !important;
  }

  svg path {
    fill: ${colors.darkGrey} !important;
  }
`;


const Car = () => {
  return (
    <Box backgroundColor="#E3EDF8" width="14rem" rounded="5px" color="#363636" p="1rem" mr="2rem">
      <Text fontSize="14px" textAlign="right" fontWeight={600}>2015</Text>
      <Flex direction="column" alignItems="center">
        <Image src={CarIcon}  width="4rem" height="4rem" my="1.1rem"/>
        <Text fontWeight={600}>AM General</Text>
        <Text my="0.6rem" fontSize="16px" fontWeight={600}>MV-1</Text>
        <Box border="2px dashed #BDCBDB" py="5px" px="1.2rem" mb="1.5rem">NG7483-EPE</Box>
      </Flex>
    </Box>
  )
}


const VehiclePanel = () => {
  return (
    <Flex>
      <Box alignItems="center" justifyContent="center">
        <Stack as={Flex} isInline spacing={20} >
          <Car />
          <Car/>
          <Car/>
        </Stack>

        <Divider width="100%" border="2px dashed #DCE5E7" my="3rem" />

        <Stack color="#363636">
          <Text fontSize="1.2rem" fontWeight={700}>Add New Vehicle</Text>
          <Text fontSize="1rem" lineHeight="1.5rem" color="#6A7781">Add a new vehicle. Note that before vehicle can be use for ride. You will need to visit one of our verification centers for inspections.</Text>
          <Stack spacing={20} isInline mt="26px">
              <FormControl>
                <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" >Make*</FormLabel>
                <Input type="email" id="email" placeholder="AM General" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
              </FormControl>
              <FormControl>
                  <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636">Model*</FormLabel>
                      <Input type="number" id="email" placeholder="MY20YE" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
              </FormControl>
          </Stack>

          <Stack spacing={20} isInline mt="26px">
              <FormControl>
                  <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" >Year*</FormLabel>
                      <Input type="email" id="email" placeholder="2020" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
              </FormControl>
              <FormControl>
                  <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636">Plate Number*</FormLabel>
                      <Input type="number" id="email" placeholder="EPE-4739-JHS" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
              </FormControl>
          </Stack>

          <Stack spacing={20} isInline mt="26px">
              <FormControl>
                <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" >Vehicle Color*</FormLabel>
                <Input type="email" id="email" placeholder="Red" borderColor="#DCE5E7"  border="1px solid #DCE5E7" width="20rem" backgroundColor="white" color="#363636"/>
            </FormControl>
            <FormControl width="80%">
              <FormLabel htmlFor="email" mb="6px" fontSize="15px" color="#363636" ></FormLabel>
              <Button>+ ADD VEHICLE</Button>
            </FormControl>
          </Stack>

        </Stack>

      </Box>

    </Flex>
  )
};



export default VehiclePanel;
