import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import AddSchoolForm from './components/AddSchoolForm';
import BulkUploadSchools from './components/BulkUploadSchools';
import AllSchools from './components/AllSchools';
export default function School() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Tabs variant="enclosed" colorScheme="brand">
        <TabList>
          <Tab>All Schools</Tab>
          <Tab>Add School</Tab>
          <Tab>Bulk Upload Schools</Tab>
        </TabList>
        <TabPanels>
          <TabPanel px="0">
            <AllSchools />
          </TabPanel>
          <TabPanel px="0">
            <AddSchoolForm />
          </TabPanel>
          <TabPanel px="0">
            <BulkUploadSchools />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
