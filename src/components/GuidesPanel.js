import React from 'react';
import ReactPlayer from 'react-player';
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
import { media } from '@styles';


const VideoWrapper = styled.div`
  grid-row: 1/-1;
  grid-column: 1/2;
  height: 400px;
  margin-top: 2rem;
  margin-bottom: 4rem;
  ${media.phablet`
    grid-row: 2;
    grid-column:1;
  `};

  ${media.tablet`
    height: 200px;
  `};
`;

const GuidesPanel = () => {
  return (
    <Flex  color="#363636" width="100%" direction="column">
      <Box width="100%" p="1.5rem">
      <Stack color="#363636">
        <Text fontSize="1.1rem" fontWeight={700}>Driver Training Video</Text>
        <Text fontSize="1rem" lineHeight="1.5rem">Brium is a Transport Company with the aims to provide superior value to customers with meaningful, measurable value, efficient and comprehensive services, excellent treatment and the highest standards of quality and safety since August 2015.</Text>
        </Stack>

        <VideoWrapper>
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://youtu.be/jJM-ZKzFn7A"
          />
        </VideoWrapper>

        <Stack color="#363636">
          <Text fontSize="1.1rem" fontWeight={700}>Best Practice Video</Text>
          <Text fontSize="1rem" lineHeight="1.5rem">Brium is a Transport Company with the aims to provide superior value to customers with meaningful, measurable value, efficient and comprehensive services, excellent treatment and the highest standards of quality and safety since August 2015.</Text>
        </Stack>

        <VideoWrapper>
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://youtu.be/jJM-ZKzFn7A"
          />
        </VideoWrapper>

        <Stack color="#363636">
        <Text fontSize="1.1rem" fontWeight={700}>Tutorials</Text>
        <Text fontSize="1rem" lineHeight="1.5rem">Brium is a Transport Company with the aims to provide superior value to customers with meaningful, measurable value, efficient and comprehensive services, excellent treatment and the highest standards of quality and safety since August 2015. Brium is a Transport Company with the aims to provide superior value to customers with meaningful, measurable value, efficient and comprehensive services, excellent treatment and the highest standards of quality and safety since August 2015. Brium is a Transport Company with the aims to provide superior value to customers with meaningful, measurable value, efficient and comprehensive services, excellent treatment and the highest standards of quality and safety since August 2015.</Text>
      </Stack>
      </Box>
    </Flex>
  )
};


export default GuidesPanel;
