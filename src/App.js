import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, Text, Flex, VStack, Divider, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, FormControl, FormLabel, Input } from '@chakra-ui/react';

function PostList() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', author: 'John Doe', date: 'May 18, 2023', content: 'hello world!' },
    { id: 2, title: 'Second Post', author: 'Jane Smith', date: 'May 19, 2023', content: 'hello there' },
    { id: 3, title: 'Third Post', author: 'Michael Johnson', date: 'May 20, 2023', content: 'hey!' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostAuthor, setNewPostAuthor] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewPostTitle('');
    setNewPostAuthor('');
    setNewPostContent('');
  };

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      title: newPostTitle,
      author: newPostAuthor,
      date: new Date().toLocaleDateString(),
      content: newPostContent,
    };

    setPosts([...posts, newPost]);
    handleCloseModal();
  };

  return (
    <VStack spacing={4} align="stretch">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <Button colorScheme="teal" onClick={handleOpenModal} alignSelf="flex-end">
        글쓰기
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>새로운 게시물 작성</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>제목</FormLabel>
              <Input value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>작성자</FormLabel>
              <Input value={newPostAuthor} onChange={(e) => setNewPostAuthor(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>내용</FormLabel>
              <Input value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleAddPost} isDisabled={!newPostTitle || !newPostAuthor || !newPostContent}>
              추가하기
            </Button>
            <Button colorScheme="gray" ml={2} onClick={handleCloseModal}>
              취소
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
}

function PostItem({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="#FFFFFF">
      <Heading as="h3" size="md" mb={2}>
        {post.title}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={2}>
        By {post.author} on {post.date}
      </Text>
      <Divider />
      <Button colorScheme="teal" onClick={handleOpenModal}>
        Read More
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{post.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{post.content}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Box bgGradient="linear(to bottom, #FFFFFF, #D2E1FF)">
        <Flex justify="center" align="center" h="100vh">
          <Box w="400px">
            <Heading
              as="h1"
              mb={4}
              textAlign="center"
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              fontFamily="Roboto, sans-serif">
              Board
            </Heading>
            <PostList />
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;