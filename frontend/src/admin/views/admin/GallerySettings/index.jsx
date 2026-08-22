import React from 'react';
import { Box } from '@chakra-ui/react';
import UpdateGallery from './components/UpdateGallery';

export default function GallerySettings() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <UpdateGallery />
    </Box>
  );
}
