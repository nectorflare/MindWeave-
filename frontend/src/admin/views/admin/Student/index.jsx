import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import AddStudentForm from './components/AddStudentForm';
import BulkUploadStudents from './components/BulkUploadStudents';
import AllStudents from './components/AllStudents';
export default function Student() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Tabs variant="enclosed" colorScheme="brand">
        <TabList>
          <Tab>All Students</Tab>
          <Tab>Add Student</Tab>
          <Tab>Bulk Upload Students</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AllStudents />
          </TabPanel>
          <TabPanel px="0">
            <AddStudentForm />
          </TabPanel>
          <TabPanel px="0">
            <BulkUploadStudents />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
