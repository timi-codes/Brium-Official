import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {
  Box,
  Flex,
  Stack,
  Text,
  Select,
  Textarea
} from '@chakra-ui/core';
import { theme, mixins, media } from '@styles';
const { colors, fonts } = theme;


const Button = styled(Link)`
  ${mixins.bigButton};
  padding-left: 18px;
  padding-right: 20px;
  width: 100%;
  text-align: center;
`;

const MapContainer = styled.div`
  grid-column: 1/-1;
  grid-row: 1 / 2;
  ${media.phablet`
    display: none;
  `};
`;


const AnyReactComponent = ({ text }) => <div>{text}</div>;


const defaultProps = {
  center: {
    lat: 6.4391401,
    lng: 3.4291935
  },
  zoom: 16
};

const EstimatorMap = props => {
  const { center, zoom } = props;

  return (
    <MapContainer style={{ height: '330px', width: '600px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAdW0SflTY4CQPSVIeEF_J4LupTyPeeag0' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </MapContainer>
  );
};

const ContactPanel = () => {
  return (
    <Flex  color="#363636" width="100%" direction="column">
      <Flex width="100%" p="1.5rem">
        <Stack color="#363636">
          <Text fontSize="1.1rem" fontWeight={700}>Office Address</Text>
          <EstimatorMap {...defaultProps} />
          <Text fontSize="1.1rem" fontWeight={700} mt="3rem">Open a Ticket</Text>
          <Text fontSize="1rem" lineHeight="1.5rem" color="#6A7781">We are always here to serve you. Kindly open a ticket and we will get back to you as soon possible</Text>
          <Select placeholder="Select a subject" mt="1.5rem">
            <option value="option1">Resend Receipt</option>
            <option value="option2">Rider Left an Item</option>
            <option value="option3">Reporting an accident or Violent Behavior </option>
          </Select>
          <Textarea
            placeholder="Add your message"
            size="sm"
            resize="none"
            height="150px"
          />
          <Button>Submit</Button>
        </Stack>
        <Box ml="3rem">
          <Stack color="#363636" mt="1.5rem">
            <Text fontSize="1.1rem" fontWeight={700}>Support</Text>
            <Text fontSize="1rem" lineHeight="1.5rem">support@brium.africa</Text>
          </Stack>

          <Stack color="#363636" mt="1.5rem">
            <Text fontSize="1.1rem" fontWeight={700}>Office Hours</Text>
            <Text fontSize="1rem" lineHeight="1.5rem">Monday - Friday : 9am - 5pm</Text>
          </Stack>

          <Stack color="#363636" mt="1.5rem">
            <Text fontSize="1.1rem" fontWeight={700}>Hello</Text>
            <Text fontSize="1rem" lineHeight="1.5rem">hello@brium.africa</Text>
          </Stack>

          <Stack color="#363636" mt="1.5rem">
            <Text fontSize="1.1rem" fontWeight={700}>Mobile Number</Text>
            <Text fontSize="1rem" lineHeight="1.5rem">+2348092748664</Text>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  )
};

export default ContactPanel;
