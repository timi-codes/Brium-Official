import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import {
  Box,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/core';
import { media } from '@styles';


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
        </Stack>
        <Box ml="2.2rem">
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
