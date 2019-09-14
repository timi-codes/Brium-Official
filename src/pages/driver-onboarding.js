import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import MultiStep from '@components/multistep';
import { ButtonArrow, UploadIcon } from '@components/icons';
import { Layout, Input } from '@components';
import { theme, media, mixins, Main } from '@styles';
import { Link } from 'gatsby';

const { colors } = theme;

const MainContainer = styled(Main)`
  ${'' /* ${mixins.sidePadding}; */}
`;

const TypeContainer = styled.div`
  background-color: white;
  margin: 1rem 0;
  border: 1px solid ${colors.blue};
  display: grid;
  grid-template-columns: 1fr 5rem;
  border-radius: 0.2rem;
  ${media.phablet`
  grid-template-columns: 1fr 4rem;
  `}
`;

const TextContainer = styled.div`
  padding: 1.5rem 1rem 1.5rem 2rem;
  ${media.phablet`
    padding: 1rem 0.4rem 1rem 1rem;
  `}
`;

const TextSmallContainer = styled.div`
  padding: 1rem 1rem 1rem 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
`;

const Caption = styled.p`
  font-size: 1vw;
  margin: 0.6rem 0;
  margin-right: 1.2rem;
  color: ${colors.blueGrey};
  a {
    color: ${colors.blue};
  }
  a:hover {
    text-decoration: underline;
  }
  ${media.bigDesktop`
    font-size: 13px;
  `};
  ${media.tablet`
    max-width: 90%;
    font-size: 18px;
  `};
  ${media.phablet`
    font-size: 0.7rem;
    max-width: 100%;
  `};
`;

const SubCaption = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: ${colors.blueGrey};
  ${media.phablet`
  font-size: 0.9rem;
  max-width: 100%;
`};
`;

const ArrowContainer = styled.button`
  background-color: ${colors.blue};
  border: none;
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 auto;
`;

const IconUpload = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 0 auto;
`;

const Button = styled(Link)`
  ${mixins.bigButton};
  padding-left: 18px;
  padding-right: 20px;
  width: 100%;
  text-align: center;
  margin-top: 1.2rem;

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

const InputLayout = styled.div`
  margin-top: 1.5rem;
`;

const SelectType = () => (
  <>
    <Title>Please choose how you would like to partner with Brium</Title>
    <SubCaption>
      Brium offers the best ride hailing service. Its a delightful experience
      with us
    </SubCaption>
    <TypeContainer>
      <TextContainer>
        <SubTitle>Partner Driver</SubTitle>
        <Caption>
          You own or are planning to purchase a vehicle(s) and will drive
          yourself but might also employ others to drive your vehicles(s). You
          want to start your own business on a proven platform.
        </Caption>
      </TextContainer>
      <ArrowContainer>
        <Icon>
          <ButtonArrow />
        </Icon>
      </ArrowContainer>
    </TypeContainer>
    <TypeContainer>
      <TextContainer>
        <SubTitle>Non-owner Driver</SubTitle>
        <Caption>
          You don’t currently have access to a vehicle. You want to be employed
          as a driver by one of Brium’s partners and drive for them on the
          Brium’s platform.
        </Caption>
      </TextContainer>
      <ArrowContainer>
        <Icon>
          <ButtonArrow />
        </Icon>
      </ArrowContainer>
    </TypeContainer>
  </>
);

const ProfileDetails = () => (
  <>
    <TypeContainer>
      <TextSmallContainer>
        <SubTitle>Profile Pictures*</SubTitle>
      </TextSmallContainer>
      <ArrowContainer>
        <IconUpload>
          <UploadIcon />
        </IconUpload>
      </ArrowContainer>
    </TypeContainer>
    <Caption>
      You agree that brium or a trusted vendor may collect and process your
      photos with technology that allows us to verify your identity.
    </Caption>
    <TypeContainer>
      <TextSmallContainer>
        <SubTitle>Car Image</SubTitle>
      </TextSmallContainer>
      <ArrowContainer>
        <IconUpload>
          <UploadIcon />
        </IconUpload>
      </ArrowContainer>
    </TypeContainer>
    <Caption>
      Kindly provide us a clear image of your car if you have a car you want to
      ride with on brium or skip if you dont have one.
    </Caption>
    <InputLayout>
      <Input
        type="text"
        placeholder="10088888888988888388388"
        borderRadius="2px"
        name="National ID"
        description="Your national ID number or NIM number"
        border={`1px solid ${colors.blue}`}
      />
    </InputLayout>
    <InputLayout>
      <Input
        type="text"
        placeholder="ABC234567"
        borderRadius="2px"
        name="Driver License"
        description="License number on your Driver’s documents"
        border={`1px solid ${colors.blue}`}
      />
    </InputLayout>
    <Caption>
      Your national ID and license details will be keep private.
    </Caption>
    <Button>CONTINUE</Button>
  </>
);

const UploadDocuments = () => (
  <>
    <Title>Please upload your documents</Title>
    <SubCaption>
      We’re legally required to ask for some documents to sign you up as driver.
      Document scans and quality photos are accepted
    </SubCaption>
    <TypeContainer>
      <TextSmallContainer>
        <SubTitle>Driver&apos;s License*</SubTitle>
      </TextSmallContainer>
      <ArrowContainer>
        <IconUpload>
          <UploadIcon />
        </IconUpload>
      </ArrowContainer>
    </TypeContainer>
    <TypeContainer>
      <TextSmallContainer>
        <SubTitle>Tint Permit</SubTitle>
      </TextSmallContainer>
      <ArrowContainer>
        <IconUpload>
          <UploadIcon />
        </IconUpload>
      </ArrowContainer>
    </TypeContainer>
    <Caption>
      Required if the vehicle is tinted. More information at
      <Link to="https://npf.gov.ng/tinted">https://npf.gov.ng/tinted.</Link>
    </Caption>
    <Button>CONTINUE</Button>
  </>
);

const PaymentDetails = () => {
  const [selectedOption, selectOption] = useState('');

  const options = [
    { value: 'Individual', label: 'Individual' },
    { value: 'Corporate', label: 'Corporate' }
  ];

  const handleChange = option => {
    selectOption(option);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: `1px dotted ${colors.blue}`,
      color: state.isSelected ? `${colors.white}` : `${colors.blue}`,
      padding: 20
    }),
    control: styles => ({
      ...styles,
      border: `1px solid ${colors.blue}`,
      borderRadius: '2px',
      padding: `9px`,
      backgroundColor: 'transparent',
      fontSize: '1rem'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: `${colors.blue}`
    })
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        placeholder="Select Billing Type"
      />
      <InputLayout>
        <Input
          type="text"
          placeholder="Enter Home Address"
          borderRadius="2px"
          name="Home Address"
          border={`1px solid ${colors.blue}`}
        />
      </InputLayout>
      <InputLayout>
        <Input
          type="text"
          placeholder="e.g John Snow"
          borderRadius="2px"
          name="Bank Account Holder Name"
          border={`1px solid ${colors.blue}`}
        />
      </InputLayout>
      <InputLayout>
        <Input
          type="text"
          placeholder="e.g 0222010772"
          borderRadius="2px"
          name="Bank Account Number"
          border={`1px solid ${colors.blue}`}
        />
      </InputLayout>
      <InputLayout>
        <Input
          type="text"
          placeholder="e.g GUARANTEE TRUST BANK"
          borderRadius="2px"
          name="Bank Name or BIC/Swift"
          border={`1px solid ${colors.blue}`}
        />
      </InputLayout>
      <br />
      <Button>FINISH</Button>
    </div>
  );
};

const steps = [
  { name: 'Driver Types', component: <SelectType /> },
  { name: 'Profile Details', component: <ProfileDetails /> },
  { name: 'Upload Documents', component: <UploadDocuments /> },
  { name: 'Payment Details', component: <PaymentDetails /> }
];

const DriverOnboardingPage = () => {
  return (
    <Layout>
      <MainContainer>
        <MultiStep steps={steps} />
      </MainContainer>
    </Layout>
  );
};

export default DriverOnboardingPage;
