import React from 'react';
import { Layout, EstimatorCard, Nav, BasicSection } from '@components';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { media, Main } from '@styles';

const MainContainer = styled(Main)`
  ${'' /* ${mixins.sidePadding}; */}
`;

const CardView = styled.div`
  width: 350px;
  background-color: white;
  border-radius: 10px;
  padding: 30px 30px 30px 30px;
  -webkit-box-shadow: 5px 4px 6px rgba(98, 95, 95, 0.14);
  box-shadow: 5px 4px 6px rgba(98, 95, 95, 0.14);
  position: relative;
  left: 0 !important;
  grid-column: 1/2;
  grid-row: 1 / 2;
  margin: 110px 0px 40px 50px;
  ${media.phablet`
    margin: 0 auto;
    margin-top: 90px;
    position: relative;
    box-shadow: none;
  `};
`;

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  ${media.phablet`
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    &:first-child {
      display: none;
    }
  `};
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
    <MapContainer style={{ height: '600px', width: '100%' }}>
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

const FareEstimatorPage = () => (
  <Layout>
    <MainContainer>
      <Nav showBg primaryBtn />
      <TopContainer>
        <EstimatorMap {...defaultProps} />
        <CardView>
          <EstimatorCard />
        </CardView>
      </TopContainer>
      <BasicSection />
    </MainContainer>
  </Layout>
);

export default FareEstimatorPage;
