import { useState, useEffect } from 'react';
import {
  Card,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Grid,
  useToast,
  Text,
  Spinner,
  Box,
} from '@chakra-ui/react';

// 👇 Default values — will be fetched from API later
const DEFAULT_CONTACT_INFO = {
  email: 'info@mindweavefoundation.com',
  phone: '+91 95400 08894',
  workingHours: 'Mon - Sat (9:00 AM - 6:00 PM)',
  closedDay: 'Sunday - Closed',
  address: 'Rohini Sector 21, Delhi, India - 110086',
};

export default function UpdateContactUs() {
  const [formData, setFormData] = useState(DEFAULT_CONTACT_INFO);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      setLoading(true);

      // 👇 CURRENT: loading from localStorage
      const saved = localStorage.getItem('contactInfo');
      await new Promise((resolve) => setTimeout(resolve, 300));
      setFormData(saved ? JSON.parse(saved) : DEFAULT_CONTACT_INFO);

      // 👇 LATER (when backend is ready): remove above lines and use this
      // const res = await fetch('/api/contact-info');
      // const data = await res.json();
      // setFormData(data);
    } catch (err) {
      toast({
        title: 'Failed to load contact information',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = async () => {
    console.log('Contact Info Data:', formData);
    if (!formData.email || !formData.phone || !formData.address) {
      toast({
        title: 'Please fill all required fields',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      setSaving(true);

      // 👇 CURRENT: saving to localStorage (works only in same browser/domain)
      localStorage.setItem('contactInfo', JSON.stringify(formData));
      await new Promise((resolve) => setTimeout(resolve, 500));

      // 👇 LATER (when backend is ready): remove above line and use this
      // await fetch('/api/contact-info', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      toast({
        title: 'Contact information saved successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Failed to save contact information',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" py="40px">
        <Spinner size="lg" />
      </Box>
    );
  }

  return (
    <Card p="24px">
      <Text fontSize="xl" fontWeight="bold" mb="20px">
        Update Contact Us Page
      </Text>

      <VStack spacing="20px" align="stretch">
        <Grid templateColumns="1fr 1fr" gap="20px">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="info@example.com"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+91 XXXXX XXXXX"
            />
          </FormControl>
        </Grid>

        <Grid templateColumns="1fr 1fr" gap="20px">
          <FormControl>
            <FormLabel>Working Hours</FormLabel>
            <Input
              value={formData.workingHours}
              onChange={(e) => handleChange('workingHours', e.target.value)}
              placeholder="Mon - Sat (9:00 AM - 6:00 PM)"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Closed Day</FormLabel>
            <Input
              value={formData.closedDay}
              onChange={(e) => handleChange('closedDay', e.target.value)}
              placeholder="Sunday - Closed"
            />
          </FormControl>
        </Grid>

        <FormControl isRequired>
          <FormLabel>Office Address</FormLabel>
          <Textarea
            rows={3}
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="Full office address"
          />
        </FormControl>

        <Button
          colorScheme="brand"
          isLoading={saving}
          onClick={handleSave}
          alignSelf="flex-end"
        >
          Save Changes
        </Button>
      </VStack>
    </Card>
  );
}
