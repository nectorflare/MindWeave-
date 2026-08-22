import React, { useRef, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useToast,
} from '@chakra-ui/react';
import { MdCloudUpload, MdFileDownload } from 'react-icons/md';
import Card from 'components/card/Card';

export default function BulkUploadSchools() {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { success, failed, errors }
  const toast = useToast();

  const handleFile = (file) => {
    if (!file) return;
    const validTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];
    if (!validTypes.includes(file.type)) {
      toast({ title: 'Please upload a valid Excel file', status: 'error' });
      return;
    }
    setFileName(file.name);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleUpload = () => {
    if (!fileName) {
      toast({ title: 'Please select a file first', status: 'warning' });
      return;
    }
    setLoading(true);
    // 🔹 Dummy upload — replace with real API call:
    // const formData = new FormData(); formData.append("file", file);
    // await fetch("/api/schools/bulk-upload", { method: "POST", body: formData })
    setTimeout(() => {
      setLoading(false);
      setResult({
        total: 25,
        success: 22,
        failed: 3,
        errors: [
          { row: 5, message: 'Duplicate School Code: SCH1023' },
          { row: 11, message: 'Invalid Email format' },
          { row: 19, message: 'Missing required field: Pincode' },
        ],
      });
      toast({ title: 'Bulk upload processed', status: 'success' });
    }, 1200);
  };

  const handleDownloadSample = () => {
    // 🔹 Replace with actual sample file link
    toast({ title: 'Downloading sample template...', status: 'info' });
  };

  return (
    <Card p="24px" mt="24px">
      <Heading size="md" mb="16px">
        Bulk Upload Schools
      </Heading>

      <Box
        border="2px dashed"
        borderColor={dragActive ? 'brand.500' : 'gray.300'}
        borderRadius="12px"
        p="30px"
        textAlign="center"
        bg={dragActive ? 'gray.50' : 'transparent'}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        cursor="pointer"
        onClick={() => fileInputRef.current.click()}
      >
        <Icon as={MdCloudUpload} w="40px" h="40px" color="brand.500" mb="8px" />
        <Text fontWeight="600">
          {fileName
            ? fileName
            : 'Drag & drop Excel file here, or click to browse'}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Supported formats: .xlsx, .xls
        </Text>
        <input
          type="file"
          accept=".xlsx,.xls"
          ref={fileInputRef}
          hidden
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </Box>

      <HStack mt="16px" spacing="12px">
        <Button
          leftIcon={<Icon as={MdCloudUpload} />}
          colorScheme="brand"
          isLoading={loading}
          onClick={handleUpload}
        >
          Upload
        </Button>
        <Button
          leftIcon={<Icon as={MdFileDownload} />}
          variant="outline"
          onClick={handleDownloadSample}
        >
          Download Sample Excel
        </Button>
      </HStack>

      {result && (
        <VStack align="stretch" mt="24px" spacing="12px">
          <HStack spacing="16px">
            <Badge colorScheme="blue" p="6px 10px" borderRadius="8px">
              Total: {result.total}
            </Badge>
            <Badge colorScheme="green" p="6px 10px" borderRadius="8px">
              Success: {result.success}
            </Badge>
            <Badge colorScheme="red" p="6px 10px" borderRadius="8px">
              Failed: {result.failed}
            </Badge>
          </HStack>

          {result.errors.length > 0 && (
            <Table size="sm" mt="8px">
              <Thead>
                <Tr>
                  <Th>Row</Th>
                  <Th>Error</Th>
                </Tr>
              </Thead>
              <Tbody>
                {result.errors.map((err, idx) => (
                  <Tr key={idx}>
                    <Td>{err.row}</Td>
                    <Td color="red.500">{err.message}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </VStack>
      )}
    </Card>
  );
}
