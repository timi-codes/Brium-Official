import React, { useState } from 'react';
import {
    Flex,
    Box,
    Button,
    Text,
    Tabs,
    TabList,
    Stack,
    TabPanels,
    Tab,
    TabPanel,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    RadioButtonGroup,
} from "@chakra-ui/core";
import { Layout} from '@components';
import {
    IconLogo,
    PersonIcon,
    EarningIcon,
    ReportIcon,
    InviteIcon,
    GuideIcon,
    ContactIcon,
    LogoutIcon,
} from '@components/icons';
import ProfilePanel from '../components/ProfilePanel';
import DocumentPanel from '../components/DocumentPanel';
import VehiclePanel from '../components/VehiclePanel';
import PaymentSystemPanel from '../components/PaymentSystemPanel';
import RiderInvoicePanel from '../components/RiderInvoicePanel';
import DriverInvoicePanel from '../components/DriverInvoicePanel';
import BalanceReportPanel from '../components/BalanceReportPanel';
import TaxReportPanel from '../components/TaxReportPanel';
import TrackInvitePanel from '../components/TrackInvitePanel';
import SendInvitePanel from '../components/SendInvitePanel';
import GuidesPanel from '../components/GuidesPanel'
import ContactPanel from '../components/ContactPanel';

const icons = {
  profile: PersonIcon,
  earnings: EarningIcon,
  reports: ReportIcon,
  invites: InviteIcon,
  guides: GuideIcon,
  contacts: ContactIcon,
  logout: LogoutIcon
};



const tabs = {
  profile: [
    {
      title: 'Profile',
      component: <ProfilePanel />
    },
    {
      title: 'Documents',
      component: <DocumentPanel />
    },
    {
      title: 'Vehicles',
      component: <VehiclePanel />
    }
  ],
  earnings:  [
    {
      title: 'Payment Statement',
      component: <PaymentSystemPanel />
    },
    {
      title: 'Rider Invoice',
      component: <RiderInvoicePanel />
    },
    {
      title: 'Invoices',
      component: <DriverInvoicePanel />
    },
    {
      title: 'Balance Reports',
      component: <BalanceReportPanel />
    },
    {
      title: 'Tax Reports',
      component: <TaxReportPanel />
    },
  ],
  // reports:  [
  //   {
  //     title: 'Balance Reports',
  //     component: <BalanceReportPanel />
  //   },
  //   {
  //     title: 'Tax Reports',
  //     component: <TaxReportPanel />
  //   },
  // ],
  invites:  [
    {
      title: 'Send Invites',
      component: <SendInvitePanel />
    },
    {
      title: 'Track Invites',
      component: <TrackInvitePanel />
    },
  ],
  guides: [],
  contacts: [],
  logout: []
}


const Header = () => {
    return (
        <Flex height="4rem" align="center" justify="space-between"  mx="2rem" color="#363636">
            <Box>
                <Text fontSize="15px" fontWeight={700} mt="1rem" color="#1470DB">
                    <IconLogo />
                    DRIVER
                    </Text>
            </Box>
            <Stack isInline spacing={8}>
                <Button>Help</Button>
                <Menu>
                    <MenuButton as={Button} rightIcon="chevron-down">
                        Timi Tejumola
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem as="a" href="#">
                        Attend a Workshop
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Stack>
        </Flex>
    )
}

const SideNavItem = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    const IconComponent = icons[value]
    return (
      <Button
            ref={ref}
            backgroundColor={isChecked ? "#1470DB" : "#E3EDF8"}
            color={isChecked ? "white" : "#010002"}
            aria-checked={isChecked}
            role="radio"
            isDisabled={isDisabled}
            height="3.2rem"
            rounded={0}
            fontWeight={300}
            leftIcon={()=> <Box mr="1rem"><IconComponent/></Box>}
            display="flex"
            flexDirection="row"
            justifyContent="left"
            px="2rem"
            _hover={{ opacity: 0.9 }}
        _focus={{ border: 0}}
            {...rest}
      />
    );
});

const SideNav = (props) => {

    return (
        <Flex height="34rem" margin={["3rem"]} {...props} isDisabled>
            <RadioButtonGroup
                defaultValue="profile"
                onChange={(val) => {
                  props.setSelectedNavIndex(val)
                  props.setTabIndex(0)
                }}
                display="flex"
                flexDirection="column"
                width="100%"
            >
                <SideNavItem value="profile">Profile</SideNavItem>
                <SideNavItem value="earnings">Earnings</SideNavItem>
                {/* <SideNavItem value="reports">Reports</SideNavItem> */}
                <SideNavItem value="invites">Invites</SideNavItem>
                <SideNavItem value="guides">Guides & Faq</SideNavItem>
                <SideNavItem value="contacts">Support</SideNavItem>
                <SideNavItem value="logout">Logout</SideNavItem>
            </RadioButtonGroup>
        </Flex>
    )
}


const DriverHome = () => {
  const [selectedNavIndex, setSelectedNavIndex] = useState('profile');
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  return (
    <Layout>
      <Header/>
      <Tabs align="center" backgroundColor="#F7FAFE" index={tabIndex} onChange={handleTabsChange}>
        <TabList fontSize="2rem" color="#363636" borderBottom="1px solid #DCE5E7 !important" backgroundColor="white">
          {
            tabs[selectedNavIndex].map((tab) => (
              <Tab
                mr="2rem"
                _focus={{ border: "0px" }}
                borderBottom="3px solid white"
                fontWeight = "500"
                _selected={{ color: "#1470DB", borderBottom: "3px solid #1470DB"}}>
                  <Text py="6px">
                      { tab.title }
                  </Text>
              </Tab>
            ))
          }
        </TabList>
        <TabPanels maxWidth="1350px" display="grid" gridTemplateColumns="20rem 1fr" margin="0 auto" backgroundColor="#F7FAFE">
          {
            tabs[selectedNavIndex].map((tab) => (
              <TabPanel pt="3rem" pr="5rem" pl="2rem" pb="8rem" order={2}>
                { tab.component }
              </TabPanel>
            ))
          }
          {
            selectedNavIndex === 'guides' && <TabPanel pt="3rem" pr="5rem" pl="2rem" pb="8rem" order={2}><GuidesPanel/></TabPanel>
          }
          {
            selectedNavIndex === 'contacts' && <TabPanel pt="3rem" pr="5rem" pl="2rem" pb="8rem" order={2}><ContactPanel/></TabPanel>
          }
          <SideNav tabIndex={0} setSelectedNavIndex={setSelectedNavIndex} setTabIndex={setTabIndex}/>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}


export default DriverHome;
