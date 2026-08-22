import { useState, useEffect } from 'react';
import {
  Card,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  Text,
  Box,
} from '@chakra-ui/react';

// 👇 Dummy data - baad me API se replace karenge
const DUMMY_SCHOOLS = [
  {
    id: 1,
    schoolName: 'Mindweave Public School',
    schoolCode: 'MPS001',
    address: 'Sector 12, Delhi',
  },
  {
    id: 2,
    schoolName: 'Sunrise Academy',
    schoolCode: 'SA002',
    address: 'MG Road, Bangalore',
  },
  {
    id: 3,
    schoolName: 'Green Valley School',
    schoolCode: 'GVS003',
    address: 'Civil Lines, Lucknow',
  },
];

export default function AllSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      setLoading(true);

      // 👇 ABHI: dummy data
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSchools(DUMMY_SCHOOLS);

      // 👇 BAAD ME: jab backend/API ready ho jaye, upar wali 2 lines hata kar ye use karo:
      // const res = await fetch('/api/schools');
      // const data = await res.json();
      // setSchools(data.schools || data);
    } catch (err) {
      setError('Schools load nahi ho paye');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" py="40px">
        <Spinner size="lg" />
      </Box>
    );
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return (
    <Card p="20px">
      <Text fontSize="xl" fontWeight="bold" mb="16px">
        All Schools
      </Text>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>School Name</Th>
              <Th>School Code</Th>
              <Th>Address</Th>
            </Tr>
          </Thead>
          <Tbody>
            {schools.length === 0 ? (
              <Tr>
                <Td colSpan={3} textAlign="center">
                  Koi school nahi mila
                </Td>
              </Tr>
            ) : (
              schools.map((school) => (
                <Tr key={school.id}>
                  <Td>{school.schoolName}</Td>
                  <Td>{school.schoolCode}</Td>
                  <Td>{school.address}</Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}
