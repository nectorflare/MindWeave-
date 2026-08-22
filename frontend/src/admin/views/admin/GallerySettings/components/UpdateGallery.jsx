import { useState, useEffect, useRef } from 'react';
import {
  Card,
  Text,
  Button,
  SimpleGrid,
  Box,
  Image,
  IconButton,
  Input,
  VStack,
  useToast,
  Spinner,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  useDisclosure,
} from '@chakra-ui/react';
import { MdDelete, MdCloudUpload, MdEdit } from 'react-icons/md';

export default function UpdateGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [pendingFiles, setPendingFiles] = useState([]); // files jinka caption abhi dena hai
  const [captionDrafts, setCaptionDrafts] = useState({});
  const fileInputRef = useRef(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = () => {
    try {
      setLoading(true);

      // 👇 CURRENT: loading from localStorage
      const saved = localStorage.getItem('galleryImages');
      setImages(saved ? JSON.parse(saved) : []);

      // 👇 LATER (when backend is ready): replace with
      // const res = await fetch('/api/gallery');
      // const data = await res.json();
      // setImages(data);
    } catch (err) {
      toast({
        title: 'Failed to load gallery images',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  // Step 1: files select hote hi caption modal khulega
  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    try {
      const previews = await Promise.all(
        files.map(async (file) => ({
          id: Date.now() + Math.random(),
          file,
          src: await fileToBase64(file),
          name: file.name,
        })),
      );

      setPendingFiles(previews);
      const initialCaptions = {};
      previews.forEach((p) => (initialCaptions[p.id] = 'MindWeave Foundation'));
      setCaptionDrafts(initialCaptions);
      onOpen();
    } catch (err) {
      toast({
        title: 'Failed to read selected files',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleCaptionChange = (id, value) => {
    setCaptionDrafts((prev) => ({ ...prev, [id]: value }));
  };

  // Step 2: confirm hone pe images + captions save honge
  const handleConfirmUpload = () => {
    console.log('Pending Files:', pendingFiles);
    console.log('Captions:', captionDrafts);
    try {
      setUploading(true);

      const newImages = pendingFiles.map((p) => ({
        id: p.id,
        src: p.src,
        name: p.name,
        text: captionDrafts[p.id]?.trim() || 'MindWeave Foundation',
      }));

      const updatedImages = [...images, ...newImages];
      setImages(updatedImages);

      // 👇 CURRENT: save to localStorage
      localStorage.setItem('galleryImages', JSON.stringify(updatedImages));

      // 👇 LATER (when backend is ready): send via FormData with captions
      // const formData = new FormData();
      // pendingFiles.forEach((p) => {
      //   formData.append('images', p.file);
      //   formData.append('captions', captionDrafts[p.id]);
      // });
      // await fetch('/api/gallery/upload', { method: 'POST', body: formData });

      toast({
        title: `${newImages.length} image(s) uploaded successfully`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      setPendingFiles([]);
      setCaptionDrafts({});
      onClose();
    } catch (err) {
      toast({
        title: 'Upload failed. Try smaller images or fewer at once.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setUploading(false);
    }
  };

  const handleCancelUpload = () => {
    setPendingFiles([]);
    setCaptionDrafts({});
    onClose();
  };

  const handleDelete = (id) => {
    const updatedImages = images.filter((img) => img.id !== id);
    setImages(updatedImages);
    localStorage.setItem('galleryImages', JSON.stringify(updatedImages));

    // 👇 LATER: await fetch(`/api/gallery/${id}`, { method: 'DELETE' });

    toast({
      title: 'Image removed',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  // Existing image ka caption edit karna
  const handleEditCaption = (id, currentText) => {
    const newText = window.prompt('Edit caption for this image:', currentText);
    if (newText === null) return; // cancel

    const updatedImages = images.map((img) =>
      img.id === id
        ? { ...img, text: newText.trim() || 'MindWeave Foundation' }
        : img,
    );
    setImages(updatedImages);
    localStorage.setItem('galleryImages', JSON.stringify(updatedImages));

    // 👇 LATER: await fetch(`/api/gallery/${id}`, { method: 'PUT', body: JSON.stringify({ text: newText }) });

    toast({
      title: 'Caption updated',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  if (loading) {
    return (
      <Center py="40px">
        <Spinner size="lg" />
      </Center>
    );
  }

  return (
    <Card p="24px">
      <VStack align="stretch" spacing="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            Update Gallery
          </Text>

          <Button
            leftIcon={<MdCloudUpload />}
            colorScheme="brand"
            onClick={() => fileInputRef.current.click()}
          >
            Upload Images
          </Button>
          <Input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={handleFileSelect}
            display="none"
          />
        </Box>

        {images.length === 0 ? (
          <Center py="60px" color="gray.400">
            <Text>No images uploaded yet</Text>
          </Center>
        ) : (
          <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing="16px">
            {images.map((img) => (
              <Box
                key={img.id}
                position="relative"
                borderRadius="12px"
                overflow="hidden"
                boxShadow="sm"
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  w="100%"
                  h="140px"
                  objectFit="cover"
                />

                {/* Caption overlay */}
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  bg="blackAlpha.700"
                  px="8px"
                  py="6px"
                >
                  <Text color="white" fontSize="xs" noOfLines={1}>
                    {img.text}
                  </Text>
                </Box>

                <IconButton
                  icon={<MdEdit />}
                  size="sm"
                  colorScheme="blue"
                  position="absolute"
                  top="6px"
                  right="42px"
                  borderRadius="full"
                  onClick={() => handleEditCaption(img.id, img.text)}
                  aria-label="Edit caption"
                />
                <IconButton
                  icon={<MdDelete />}
                  size="sm"
                  colorScheme="red"
                  position="absolute"
                  top="6px"
                  right="6px"
                  borderRadius="full"
                  onClick={() => handleDelete(img.id)}
                  aria-label="Delete image"
                />
              </Box>
            ))}
          </SimpleGrid>
        )}
      </VStack>

      {/* Caption input modal — upload ke turant baad */}
      <Modal isOpen={isOpen} onClose={handleCancelUpload} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent maxH="80vh" overflowY="auto">
          <ModalHeader>Add Captions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="16px" align="stretch">
              {pendingFiles.map((p) => (
                <Box key={p.id} display="flex" gap="12px" alignItems="center">
                  <Image
                    src={p.src}
                    alt={p.name}
                    boxSize="70px"
                    objectFit="cover"
                    borderRadius="8px"
                  />
                  <FormControl>
                    <FormLabel fontSize="sm" mb="4px">
                      {p.name}
                    </FormLabel>
                    <Input
                      size="sm"
                      value={captionDrafts[p.id] || ''}
                      onChange={(e) =>
                        handleCaptionChange(p.id, e.target.value)
                      }
                      placeholder="Enter caption text"
                    />
                  </FormControl>
                </Box>
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" mr="12px" onClick={handleCancelUpload}>
              Cancel
            </Button>
            <Button
              colorScheme="brand"
              isLoading={uploading}
              onClick={handleConfirmUpload}
            >
              Save Images
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}
