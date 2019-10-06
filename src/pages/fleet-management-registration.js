import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import MultiStep from '@components/multistep';
import { Layout, Input } from '@components';
import { theme, media, mixins, Main } from '@styles';
import { Link } from 'gatsby';

const { colors } = theme;

const MainContainer = styled(Main)`
  ${'' /* ${mixins.sidePadding}; */}
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  margin-top: -2rem;
`;

const SubCaption = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${colors.blueGrey};
  ${media.phablet`
  font-size: 0.9rem;
  max-width: 100%;
`};
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

const SelectContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 1rem;
`;


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

const StepOne = () => {
    const [gender, selectGender] = useState('');
    const [maritalStatus, selectMaritalStatus] = useState('');

    const genderOptions = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
    ];
    
    const maritalOptions = [
        { value: 'Single', label: 'Single' },
        { value: 'Engaged', label: 'Engaged' },
        { value: 'Married', label: 'Married' }
      ];
    
    const handleChange = option => {
        selectGender(option);
        selectMaritalStatus(option);
    };
    
    return (
        <>
            <Title>Requirements</Title>
            <SubCaption>
            * Registeration fees of N10,000<br/>
            * Vehicle Registration Documents (Tinted permit inclusive)<br/>
            * One (1) clear Passport Size Photograph<br/>
            * Means of Identification (Int. Passport, Drivers License or National ID card)<br/>
            </SubCaption>
            <InputLayout>
                <Input
                type="text"
                placeholder="e.g 0222010772"
                borderRadius="2px"
                name="Full Name (Surname first)"
                border={`1px solid ${colors.blue}`}
                />
            </InputLayout>
            <InputLayout>
                <Input
                type="text"
                placeholder="e.g 0222010772"
                borderRadius="2px"
                name="House Address"
                border={`1px solid ${colors.blue}`}
                />
            </InputLayout>
            <SelectContainer>
            <Select
                value={gender}
                onChange={handleChange}
                options={genderOptions}
                styles={customStyles}
                placeholder="Select a Gender"
                />
            </SelectContainer>
            <SelectContainer>
                <Select
                    value={maritalStatus}
                    onChange={handleChange}
                    options={maritalOptions}
                    styles={customStyles}
                    placeholder="Select Marital Status"
                />
            </SelectContainer>
            <Button>CONTINUE</Button>
        </>
    )};

const StepTwo = () => {
    const [selectedMake, selectMakeOption] = useState('');
    const [year, selectMakeYear] = useState('');

    const makeOptions = [
        { value: 'Honda', label: 'Honda' },
        { value: 'Toyota', label: 'Toyota' },
        { value: 'Nissan', label: 'Nissan' },
        { value: 'Hyundai', label: 'Hyundai' }

    ];

    const yearOptions = [
        { value: '2005', label: '2005' },
        { value: '2006', label: '2006' },
        { value: '2007', label: '2007' },
        { value: '2008', label: '2008' },
        { value: '2009', label: '2009' }
    ];
    
    const handleChange = option => {
        selectMakeOption(option);
        selectMakeYear(option)
    };
    return (
        <>
        <InputLayout>
            <Input
            type="text"
            placeholder="e.g Accountant"
            borderRadius="2px"
            name="Occupation"
            border={`1px solid ${colors.blue}`}
            />
        </InputLayout>
        <InputLayout>
            <Input
            type="text"
            placeholder="e.g Bank"
            borderRadius="2px"
            name="Type of Business"
            border={`1px solid ${colors.blue}`}
            />
        </InputLayout>
        <SelectContainer>
            <Select
                value={selectedMake}
                onChange={handleChange}
                options={makeOptions}
                styles={customStyles}
                placeholder="Vehicle Make"
                />
        </SelectContainer>
        <SelectContainer>
            <Select
                value={year}
                onChange={handleChange}
                options={yearOptions}
                styles={customStyles}
                placeholder="Vehicle Year of Manufacture"
            />
        </SelectContainer>
        <InputLayout>
            <Input
            type="text"
            placeholder="Your Answer"
            borderRadius="2px"
            name="Company of Comprehensive issurance cover"
            border={`1px solid ${colors.blue}`}
            />
        </InputLayout>
        <Button>CONTINUE</Button>
      </>
    );
}

const StepThree = () => {
    const [contactOption, selectContactOption] = useState('');
    const [referralOption, selectReferralOption] = useState('');

    const contactOptions = [
        { value: 'Email', label: 'Email' },
        { value: 'Phone', label: 'Phone' },
    ];

    const referralOptions = [
        { value: 'Online Ads', label: 'Online Ads' },
        { value: 'Facebook', label: 'Facebook' },
        { value: 'Instagram', label: 'Instagram' },
    ];
    
    const handleChange = option => {
        selectContactOption(option);
        selectReferralOption(option)
    };

  return (
    <>
        <InputLayout>
            <Input
            type="text"
            placeholder="e.g Accountant"
            borderRadius="2px"
            name="How long does is take your issurance company to pay a claim"
            border={`1px solid ${colors.blue}`}
            />
        </InputLayout>
        <InputLayout>
            <Input
            type="text"
            placeholder="e.g Bank"
            borderRadius="2px"
            name="Please state the reason why you want to enrol your vehicle under Brium Fleet Management"
            border={`1px solid ${colors.blue}`}
            />
          </InputLayout>
          <InputLayout>
            <Input
            type="text"
            placeholder="e.g Bank"
            borderRadius="2px"
            name="Phone Number"
            border={`1px solid ${colors.blue}`}
            />
          </InputLayout>
          <InputLayout>
            <Input
            type="text"
            placeholder="e.g Bank"
            borderRadius="2px"
            name="Email Address"
            border={`1px solid ${colors.blue}`}
            />
        </InputLayout>
        <SelectContainer>
            <Select
                value={contactOption}
                onChange={handleChange}
                options={contactOptions}
                styles={customStyles}
                placeholder="How do you wish to be contacted"
                />
        </SelectContainer>
        <SelectContainer>
            <Select
                value={referralOption}
                onChange={handleChange}
                options={referralOptions}
                styles={customStyles}
                placeholder="How did you hear about us?"
            />
        </SelectContainer>
        <Button>SUBMIT</Button>
    </>
    );
};

const steps = [
  { name: 'Step One', component: <StepOne /> },
  { name: 'Step Two', component: <StepTwo /> },
  { name: 'Complete Registration', component: <StepThree /> },
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
