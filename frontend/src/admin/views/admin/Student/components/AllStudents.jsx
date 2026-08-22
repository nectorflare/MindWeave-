// import { useState, useEffect } from 'react';
// import {
//   Card,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableContainer,
//   Spinner,
//   Text,
//   Box,
// } from '@chakra-ui/react';

// export default function AllStudents() {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       setLoading(true);
//       // 👇 apna actual API endpoint yahan lagao
//       const res = await fetch('/api/students');
//       const data = await res.json();
//       setStudents(data.students || data); // response shape ke hisab se adjust karo
//     } catch (err) {
//       setError('Students load nahi ho paye');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <Box textAlign="center" py="40px">
//         <Spinner size="lg" />
//       </Box>
//     );
//   }

//   if (error) {
//     return <Text color="red.500">{error}</Text>;
//   }

//   return (
//     <Card p="20px">
//       <Text fontSize="xl" fontWeight="bold" mb="16px">
//         All Students
//       </Text>
//       <TableContainer>
//         <Table variant="simple">
//           <Thead>
//             <Tr>
//               <Th>Student Name</Th>
//               <Th>Roll Number</Th>
//               <Th>School</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {students.length === 0 ? (
//               <Tr>
//                 <Td colSpan={3} textAlign="center">
//                   Koi student nahi mila
//                 </Td>
//               </Tr>
//             ) : (
//               students.map((student) => (
//                 <Tr key={student.id || student._id}>
//                   <Td>{student.name || student.studentName}</Td>
//                   <Td>{student.rollNumber}</Td>
//                   <Td>{student.schoolName}</Td>
//                 </Tr>
//               ))
//             )}
//           </Tbody>
//         </Table>
//       </TableContainer>
//     </Card>
//   );
// }
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
const DUMMY_STUDENTS = [
  {
    id: 1,
    name: 'Aarav Sharma',
    rollNumber: '101',
    schoolName: 'Mindweave Public School',
  },
  {
    id: 2,
    name: 'Diya Verma',
    rollNumber: '102',
    schoolName: 'Mindweave Public School',
  },
  {
    id: 3,
    name: 'Kabir Singh',
    rollNumber: '103',
    schoolName: 'Sunrise Academy',
  },
  {
    id: 4,
    name: 'Ananya Gupta',
    rollNumber: '104',
    schoolName: 'Sunrise Academy',
  },
  {
    id: 5,
    name: 'Vivaan Mehta',
    rollNumber: '105',
    schoolName: 'Green Valley School',
  },
];

export default function AllStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);

      // 👇 ABHI: dummy data (fake delay ke sath, real API jaisa feel dene ke liye)
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStudents(DUMMY_STUDENTS);

      // 👇 BAAD ME: jab backend/API ready ho jaye, upar wali 2 lines hata kar ye use karo:
      // const res = await fetch('/api/students');
      // const data = await res.json();
      // setStudents(data.students || data);
    } catch (err) {
      setError('Students load nahi ho paye');
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
        All Students
      </Text>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Student Name</Th>
              <Th>Roll Number</Th>
              <Th>School</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.length === 0 ? (
              <Tr>
                <Td colSpan={3} textAlign="center">
                  Koi student nahi mila
                </Td>
              </Tr>
            ) : (
              students.map((student) => (
                <Tr key={student.id}>
                  <Td>{student.name}</Td>
                  <Td>{student.rollNumber}</Td>
                  <Td>{student.schoolName}</Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}
