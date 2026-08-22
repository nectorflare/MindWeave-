import React from 'react';
import { Box } from '@chakra-ui/react';
import UpdateContactUs from './components/UpdateContactUs';

export default function ContactUsSettings() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <UpdateContactUs />
    </Box>
  );
}
