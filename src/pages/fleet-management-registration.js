import React, { useState } from 'react';
import useInput from '@hooks/useInput';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import { navigateTo } from 'gatsby'
import axios from 'axios';
import Select from 'react-select';
import styled from 'styled-components';
import MultiStep from '@components/multistep';
import { Layout, Input } from '@components';
import { theme, media, mixins, Main } from '@styles';
import { storeList, removeList } from '@utils';

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

const Button = styled.button`
  ${mixins.bigButton};
  padding-left: 18px;
  padding-right: 20px;
  width: 100%;
  text-align: center;
  margin-top: 1.2rem;
  outline: none;
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


const FleetManagementOnboardingPage = () => {

  const [current, setCurrent] = useState(0);
  
  const StepOne = () => {
    const [gender, selectGender] = useState(null);
    const [maritalStatus, selectMaritalStatus] = useState(null);
    const { value: name, bind: bindName} = useInput('');
    const { value:address, bind:bindAddress } = useInput('');
  
  
    const genderOptions = [
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' }
    ];
      
    const maritalOptions = [
      { value: 'Single', label: 'Single' },
      { value: 'Engaged', label: 'Engaged' },
      { value: 'Married', label: 'Married' }
    ];
      
    const continueHandler = (e) => {
      if (gender!=null && maritalStatus!=null && name && name !== '' && address && address !== '') {
        storeList({
          name,
          address,
          gender: gender.value,
          status: maritalStatus.value,
          nextStepIndex: 1
        });
        setCurrent(1);
      } else {
        ToastsStore.error('Kindly provide all informations to continue');
      }
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
                {...bindName}
                type="text"
                placeholder="e.g John lee"
                borderRadius="2px"
                name="Full Name (Surname first)"
                border={`1px solid ${colors.blue}`}
                />
            </InputLayout>
            <InputLayout>
                <Input
                type="text"
                placeholder="e.g 123, johnson street, Sabo, Yaba"
                borderRadius="2px"
                name="House Address"
                border={`1px solid ${colors.blue}`}
                {...bindAddress}
                />
            </InputLayout>
            <SelectContainer>
            <Select
                value={gender}
                onChange={(option) =>selectGender(option)}
                options={genderOptions}
                styles={customStyles}
                placeholder="Select a Gender"
                />
            </SelectContainer>
            <SelectContainer>
                <Select
                    value={maritalStatus}
                    onChange={(option) =>selectMaritalStatus(option)}
                    options={maritalOptions}
                    styles={customStyles}
                    placeholder="Select Marital Status"
                />
            </SelectContainer>
            <Button onClick={continueHandler}>CONTINUE</Button>
        </>
    )};
  
  const StepTwo = () => {
      const [selectedMake, selectMakeOption] = useState(null);
    const [year, selectMakeYear] = useState(null);
    const { value:occupation, bind:bindOccupation} = useInput('');
    const { value:business, bind:bindBusiness} = useInput('');
    const { value:issurance, bind:bindInsurance} = useInput('');

  
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

    const continueHandler = (e) => {
      if (selectedMake != null && year != null && occupation && occupation !== '' && business && business !== '' && issurance && issurance !== '') {
        storeList({
          occupation,
          business,
          year: year.value,
          make: selectedMake.value,
          issurance,
          nextStepIndex: 2
        });
        setCurrent(2);
      } else {
        ToastsStore.error('Kindly provide all informations to continue');
      }


    };
      
      return (
          <>
          <InputLayout>
            <Input
              {...bindOccupation}
              type="text"
              placeholder="e.g Accountant"
              borderRadius="2px"
              name="Occupation"
              border={`1px solid ${colors.blue}`}
              />
          </InputLayout>
          <InputLayout>
            <Input
              {...bindBusiness}
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
                  onChange={(option) => selectMakeOption(option)}
                  options={makeOptions}
                  styles={customStyles}
                  placeholder="Vehicle Make"
                  />
          </SelectContainer>
          <SelectContainer>
              <Select
                  value={year}
                  onChange={(option)=>selectMakeYear(option)}
                  options={yearOptions}
                  styles={customStyles}
                  placeholder="Vehicle Year of Manufacture"
              />
          </SelectContainer>
          <InputLayout>
            <Input
              {...bindInsurance}
              type="text"
              placeholder="Your Answer"
              borderRadius="2px"
              name="Company of Comprehensive issurance cover"
              border={`1px solid ${colors.blue}`}
              />
          </InputLayout>
          <Button onClick={continueHandler}>CONTINUE</Button>
        </>
      );
  }
  
  const StepThree = () => {
    const [contactOption, selectContactOption] = useState(null);
    const [referralOption, selectReferralOption] = useState(null);
    const [loading, setLoading] = useState(false);
    const { value: insuranceClaimPeriod, bind:bindInsuranceClaimPeriod} = useInput('');
    const { value:enrollmentReason, bind:bindEnrollmentReason} = useInput('');
    const { value:phone, bind:bindPhone} = useInput('');
    const { value:email, bind:bindEmail} = useInput('');


    const contactOptions = [
        { value: 'Email', label: 'Email' },
        { value: 'Phone', label: 'Phone' },
    ];

    const referralOptions = [
        { value: 'Online Ads', label: 'Online Ads' },
        { value: 'Facebook', label: 'Facebook' },
        { value: 'Instagram', label: 'Instagram' },
    ];

    const validateEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
    
    const onSubmit = async (e) => {
      if (contactOption != null && referralOption != null &&
        insuranceClaimPeriod && insuranceClaimPeriod !== '' &&
        enrollmentReason && enrollmentReason !== '' &&
        phone && phone !== '' &&
        email && email !== '') {
        
        if (validateEmail(email)) { 
          setLoading(true);
          const data = {
            fullname: localStorage.getItem('name'),
            address: localStorage.getItem('address'),
            gender: localStorage.getItem('gender'),
            maritalStatus: localStorage.getItem('status'),
            occupation: localStorage.getItem('occupation'),
            typeOfBusiness: localStorage.getItem('business'),
            vehicleMake: localStorage.getItem('make'),
            vehicleYearMan: localStorage.getItem('year'),
            insuranceCompany: localStorage.getItem('issurance'),
            insuranceClaimPeriod,
            enrollmentReason,
            phone,
            email,
            preferredContact: contactOption.value,
            howHearAboutUs: referralOption.value,
          }

          try {
            const response = await axios.post('https://us-central1-briumapp.cloudfunctions.net/fleetManagementReg', data);
            setLoading(false);
            navigateTo('/success');
            removeList([
              'name',
              'address',
              'gender',
              'status',
              'occupation',
              'make',
              'year',
              'insurance',
              'insuranceClaimPeriod',
              'enrollmentReason',
              'phone',
              'email',
              'preferredContact',
              'howHearAboutUs',
              'nextStepIndex'
            ])
            ToastsStore.success('Hey, it worked !');
          } catch (error) {
            console.log('===>', error.response);
          }
        } else {
          ToastsStore.error('Enter a valid email address');
        }
      }
      else {
        ToastsStore.error('Kindly provide all informations to continue');
      }
    }
  
    return (
      <>
          <InputLayout>
          <Input
            {...bindInsuranceClaimPeriod}
              type="text"
              placeholder="e.g Accountant"
              borderRadius="2px"
              name="How long does is take your issurance company to pay a claim"
              border={`1px solid ${colors.blue}`}
              />
          </InputLayout>
          <InputLayout>
          <Input
              {...bindEnrollmentReason}
              type="text"
              placeholder="e.g Bank"
              borderRadius="2px"
              name="Please state the reason why you want to enrol your vehicle under Brium Fleet Management"
              border={`1px solid ${colors.blue}`}
              />
            </InputLayout>
            <InputLayout>
          <Input
              {...bindPhone}
              type="number"
              placeholder="e.g 08174847684"
              borderRadius="2px"
              name="Phone Number (11 digits)"
              border={`1px solid ${colors.blue}`}
              />
            </InputLayout>
            <InputLayout>
          <Input
              {...bindEmail}
              type="email"
              placeholder="e.g johndoe@gmail.com"
              borderRadius="2px"
              name="Email Address"
              border={`1px solid ${colors.blue}`}
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required
              />
          </InputLayout>
          <SelectContainer>
              <Select
                  value={contactOption}
                  onChange={(option)=>selectContactOption(option)}
                  options={contactOptions}
                  styles={customStyles}
                  placeholder="How do you wish to be contacted"
                  />
          </SelectContainer>
          <SelectContainer>
              <Select
                  value={referralOption}
                  onChange={(option)=>selectReferralOption(option)}
                  options={referralOptions}
                  styles={customStyles}
                  placeholder="How did you hear about us?"
              />
          </SelectContainer>
        <Button onClick={onSubmit} disabled={loading}>{ loading ? 'LOADING.....' : 'SUBMIT' }</Button>
      </>
      );
  };
  
  const steps = [
    { name: 'Step One', component: <StepOne /> },
    { name: 'Step Two', component: <StepTwo /> },
    { name: 'Complete Registration', component: <StepThree /> },
  ];

  return (
    <Layout>
      <MainContainer>
        <MultiStep steps={steps} currStep={current} />
        <ToastsContainer position={ToastsContainerPosition.TOP_RIGHT} lightBackground store={ToastsStore}/>
      </MainContainer>
    </Layout>
  );
};

export default FleetManagementOnboardingPage;
