import React, { useState } from 'react';
import useInput from '@hooks/useInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { navigateTo } from 'gatsby'
import axios from 'axios';
import Select from 'react-select';
import styled from 'styled-components';
import MultiStep from '@components/multistep';
import { Layout, Input } from '@components';
import { theme, media, mixins, Main } from '@styles';
import { storeList, removeList } from '@utils';

const { colors } = theme;

toast.configure()

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
    dropdownIndicator: (provided) => ({
      ...provided,
      color: `${colors.blue}`
    })
};

const FleetManagementOnboardingPage = () => {

  const [current, setCurrent] = useState(0);
  
  const StepOne = () => {
    const { value: name, bind: bindName} = useInput('');
    const { value:address, bind:bindAddress } = useInput('');
    const { value:phone, bind:bindPhone} = useInput('');
    const { value:email, bind:bindEmail} = useInput('');
    const [loading, setLoading] = useState(false);

      
    const onSubmit = async () => {
      if (name && name !== '' && address && address !== '' 
        && phone && phone !== '' &&
        email && email !== '') {
        if (validateEmail(email)) { 
            setLoading(true);
            const data = {
                fullname: name,
                address: address,
                gender: 'Not Applicable',
                maritalStatus: 'Not Applicable',
                occupation: 'Not Applicable',
                typeOfBusiness: 'Not Applicable',
                vehicleMake: 'Not Applicable',
                vehicleYearMan: 'Not Applicable',
                insuranceCompany: 'Not Applicable',
                insuranceClaimPeriod: 'Not Applicable',
                enrollmentReason: 'Not Applicable',
                phone,
                email,
                preferredContact: 'Not Applicable',
                howHearAboutUs: 'Not Applicable',
            }

            try {
                await axios.post('https://us-central1-briumapp.cloudfunctions.net/fleetManagementReg', data);
                setLoading(false);
                navigateTo('/success');
            } catch (error) {
                console.log('===>', error.response);
            }
        } else {
            toast.error('Enter a valid email address');
        }
      } else {
        toast.error('Kindly provide all informations to continue');
      }
    };

    const validateEmail = (emailAddress) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailAddress).toLowerCase());
    }
      
    return (
        <>
            <SubCaption>
            * For corporate services, please contact Brium Office or fill the form below:
            </SubCaption>
            <InputLayout>
                <Input
                {...bindName}
                type="text"
                placeholder="e.g John lee"
                borderRadius="2px"
                name="Company Name"
                border={`1px solid ${colors.blue}`}
                />
            </InputLayout>
            <InputLayout>
                <Input
                type="text"
                placeholder="e.g 123, johnson street, Sabo, Yaba"
                borderRadius="2px"
                name="Address"
                border={`1px solid ${colors.blue}`}
                {...bindAddress}
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

             <Button onClick={onSubmit} disabled={loading}>{ loading ? 'LOADING.....' : 'SUBMIT' }</Button>
        </>
    )};
  
  const steps = [
    { name: 'Company Details', component: <StepOne /> },
  ];

  return (
    <Layout>
      <MainContainer>
        <MultiStep steps={steps} currStep={current} />}
        <ToastContainer />
      </MainContainer>
    </Layout>
  );
};

export default FleetManagementOnboardingPage;
