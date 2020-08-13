import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import {
  Box,
  Flex,
  Stack,
  Text
} from '@chakra-ui/core';
import { Link } from 'gatsby';
import { theme, mixins, media } from '@styles';


const { colors, fonts } = theme;

import {
  IconGooglePlay,
  IconAppStore,
} from '@components/icons';


const Button = styled(Link)`
  ${mixins.bigButton};
  padding-left: 18px;
  padding-right: 20px;
  width: 100%;
  text-align: center;
`;


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
    <Flex color="#363636" width="100%">
      <Flex>
        <Box p="1.5rem" width="100%">
            <Stack color="#363636">
              <Text fontSize="1.1rem" fontWeight={700}>Driver Training Video</Text>
              <Text fontSize="1rem" lineHeight="1.5rem" color="#6A7781">Brium is a Transport Company with the aims to provide superior value to customers with meaningful, measurable value, efficient and comprehensive services, excellent treatment and the highest standards of quality and safety since August 2015.</Text>
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
              <Text fontSize="1rem" lineHeight="1.5rem" color="#6A7781">Brium is a Transport Company with the aims to provide superior value to customers with meaningful, measurable value, efficient and comprehensive services, excellent treatment and the highest standards of quality and safety since August 2015.</Text>
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
            <Text fontSize="1rem" lineHeight="1.5rem" color="#6A7781">Brium is a Transport Company with the aims to provide superior value to customers with meaningful, measurable value, efficient and comprehensive services, excellent treatment and the highest standards of quality and safety since August 2015. Brium is a Transport Company with the aims to provide superior value to customers with meaningful, measurable value, efficient and comprehensive services, excellent treatment and the highest standards of quality and safety since August 2015. Brium is a Transport Company with the aims to provide superior value to customers with meaningful, measurable value, efficient and comprehensive services, excellent treatment and the highest standards of quality and safety since August 2015.</Text>
          </Stack>
        </Box>
        <Stack direction="column" alignSelf="flex-start" spacing={8} mt="15rem" ml="2.5rem">
          <IconGooglePlay />
          <Box my="-15px"/>
          <IconAppStore />
          <Box my="-15px"/>
          <Button>FAQ</Button>
        </Stack>
      </Flex>
    </Flex>
  )
};


export default GuidesPanel;
