import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: taskInput }]);
      setTaskInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Task Manager</Text>
        <HStack width="100%">
          <Input placeholder="Enter a task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
          <Button onClick={addTask} colorScheme="teal" leftIcon={<FaPlus />}>
            Add Task
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {tasks.map((task) => (
            <HStack key={task.id} width="100%" justifyContent="space-between" p={2} borderWidth={1} borderRadius="md">
              <Text>{task.text}</Text>
              <Button colorScheme="red" size="sm" onClick={() => deleteTask(task.id)} leftIcon={<FaTrash />}>
                Delete
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
