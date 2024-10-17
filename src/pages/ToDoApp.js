// // src/pages/ToDoApp.js
// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, List, ListItem } from '@mui/material';

// const ToDoApp = () => {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState('');

//   const addTask = () => {
//     setTasks([...tasks, task]);
//     setTask('');
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" component="h1" gutterBottom>To-Do List</Typography>
//       <TextField
//         label="New Task"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <Button variant="contained" color="primary" fullWidth onClick={addTask}>
//         Add Task
//       </Button>
//       <List>
//         {tasks.map((t, index) => (
//           <ListItem key={index}>{t}</ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default ToDoApp;

// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, List, ListItem, Box } from '@mui/material';

// const ToDoApp = () => {
//   const [tasks, setTasks] = useState([]);
//   const [name, setName] = useState('');
//   const [work, setWork] = useState('');
//   const [deadline, setDeadline] = useState('');

//   const addTask = () => {
//     if (name && work && deadline) {
//       const newTask = { name, work, deadline };
//       setTasks([...tasks, newTask]);
//       setName('');
//       setWork('');
//       setDeadline('');
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" component="h1" gutterBottom>To-Do List</Typography>

//       {/* Name Field */}
//       <TextField
//         label="Name"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       {/* Work Field */}
//       <TextField
//         label="Work"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={work}
//         onChange={(e) => setWork(e.target.value)}
//       />

//       {/* Deadline Field */}
//       <TextField
//         label="Deadline"
//         type="date"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         InputLabelProps={{
//           shrink: true,
//         }}
//         value={deadline}
//         onChange={(e) => setDeadline(e.target.value)}
//       />

//       {/* Add Task Button */}
//       <Button variant="contained" color="primary" fullWidth onClick={addTask}>
//         Add Task
//       </Button>

//       {/* List of Tasks */}
//       <List>
//         {tasks.map((task, index) => (
//           <ListItem key={index}>
//             <Box>
//               <Typography variant="h6">{task.name}</Typography>
//               <Typography variant="body1">Work: {task.work}</Typography>
//               <Typography variant="body2">Deadline: {task.deadline}</Typography>
//             </Box>
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default ToDoApp;

// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   List,
//   ListItem,
//   Box,
//   Modal,
//   Checkbox,
//   Card,
//   CardContent,
//   IconButton,
//   Grid,
// } from "@mui/material";
// import { CheckCircleOutline, RadioButtonUnchecked } from "@mui/icons-material";

// const ToDoApp = () => {
//   const [tasks, setTasks] = useState([]);
//   const [name, setName] = useState("");
//   const [work, setWork] = useState("");
//   const [deadline, setDeadline] = useState("");
//   const [openModal, setOpenModal] = useState(false);

//   const addTask = () => {
//     if (name && work && deadline) {
//       const newTask = { name, work, deadline, completed: false };
//       setTasks([...tasks, newTask]);
//       setName("");
//       setWork("");
//       setDeadline("");
//       setOpenModal(true);
//     }
//   };

//   const handleTaskCompletion = (index) => {
//     const updatedTasks = tasks.map((task, i) => {
//       if (i === index) {
//         return { ...task, completed: !task.completed };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   };

//   const handleCloseModal = () => setOpenModal(false);

//   return (
//     <Container
//       maxWidth="md"
//       style={{
//         marginTop: "30px",
//         backgroundImage: "url(https://source.unsplash.com/1600x900/?nature)",
//         backgroundSize: "cover",
//         padding: "40px",
//         borderRadius: "15px",
//         boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
//       }}
//     >
//       <Typography
//         variant="h4"
//         component="h1"
//         gutterBottom
//         align="center"
//         style={{ color: "white", fontWeight: "bold" }}
//       >
//         To-Do List
//       </Typography>

//       {/* Name Field */}
//       <TextField
//         label="Name"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         InputProps={{ style: { backgroundColor: "white" } }}
//         InputLabelProps={{ style: { color: "black" } }}
//         style={{ marginBottom: "15px" }}
//       />

//       {/* Work Field */}
//       <TextField
//         label="Work"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={work}
//         onChange={(e) => setWork(e.target.value)}
//         InputProps={{ style: { backgroundColor: "white" } }}
//         InputLabelProps={{ style: { color: "black" } }}
//         style={{ marginBottom: "15px" }}
//       />

//       {/* Deadline Field */}
//       <TextField
//         label="Deadline"
//         type="date"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         InputLabelProps={{ shrink: true, style: { color: "black" } }}
//         value={deadline}
//         onChange={(e) => setDeadline(e.target.value)}
//         InputProps={{ style: { backgroundColor: "white" } }}
//         style={{ marginBottom: "15px" }}
//       />

//       {/* Add Task Button */}
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         onClick={addTask}
//         style={{ marginTop: "20px", padding: "10px" }}
//       >
//         Add Task
//       </Button>

//       {/* Modal for Successful Task Addition */}
//       <Modal
//         open={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby="task-added-modal"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           style={{
//             backgroundColor: "white",
//             padding: "20px",
//             borderRadius: "10px",
//           }}
//         >
//           <Typography id="task-added-modal" variant="h6">
//             To-Do Added Successfully!
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleCloseModal}
//             style={{ marginTop: "10px" }}
//           >
//             Close
//           </Button>
//         </Box>
//       </Modal>

//       {/* List of Pending Tasks */}
//       <Typography variant="h5" style={{ marginTop: "30px", color: "white" }}>
//         Pending Tasks
//       </Typography>
//       <List>
//         {tasks
//           .filter((task) => !task.completed)
//           .map((task, index) => (
//             <Card
//               key={index}
//               variant="outlined"
//               style={{ marginBottom: "15px", backgroundColor: "#f5f5f5" }}
//             >
//               <CardContent>
//                 <ListItem>
//                   <Checkbox
//                     icon={<RadioButtonUnchecked />}
//                     checkedIcon={<CheckCircleOutline />}
//                     onChange={() => handleTaskCompletion(index)}
//                   />
//                   <Box>
//                     <Typography variant="h6">{task.name}</Typography>
//                     <Typography variant="body1" color="textSecondary">
//                       Work: {task.work}
//                     </Typography>
//                     <Typography variant="body2">
//                       Deadline: {task.deadline}
//                     </Typography>
//                   </Box>
//                 </ListItem>
//               </CardContent>
//             </Card>
//           ))}
//       </List>

//       {/* List of Completed Tasks */}
//       <Typography variant="h5" style={{ marginTop: "30px", color: "white" }}>
//         Completed Tasks
//       </Typography>
//       <List>
//         {tasks
//           .filter((task) => task.completed)
//           .map((task, index) => (
//             <Card
//               key={index}
//               variant="outlined"
//               style={{ marginBottom: "15px", backgroundColor: "#e0e0e0" }}
//             >
//               <CardContent>
//                 <ListItem>
//                   <Checkbox
//                     icon={<RadioButtonUnchecked />}
//                     checkedIcon={<CheckCircleOutline />}
//                     checked={task.completed}
//                     onChange={() => handleTaskCompletion(index)}
//                   />
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       style={{ textDecoration: "line-through" }}
//                     >
//                       {task.name}
//                     </Typography>
//                     <Typography variant="body1" color="textSecondary">
//                       Work: {task.work}
//                     </Typography>
//                     <Typography variant="body2">
//                       Deadline: {task.deadline}
//                     </Typography>
//                   </Box>
//                 </ListItem>
//               </CardContent>
//             </Card>
//           ))}
//       </List>

//       {/* Message when no pending tasks */}
//       {tasks.filter((task) => !task.completed).length === 0 && (
//         <Typography
//           variant="h6"
//           align="center"
//           style={{ marginTop: "20px", color: "white" }}
//         >
//           No pending tasks. Enjoy your day!
//         </Typography>
//       )}
//     </Container>
//   );
// };

// export default ToDoApp;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  Box,
  Modal,
  Checkbox,
  Card,
  CardContent,
} from "@mui/material";
import { CheckCircleOutline, RadioButtonUnchecked } from "@mui/icons-material";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [work, setWork] = useState("");
  const [deadline, setDeadline] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const addTask = () => {
    if (name && work && deadline) {
      const newTask = { name, work, deadline, completed: false };
      setTasks([...tasks, newTask]);
      setName("");
      setWork("");
      setDeadline("");
      setOpenModal(true);
    }
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: "30px",
        backgroundImage: "url(https://imgs.search.brave.com/rnOR0wYGR8_pzELtwVUuN6osdfqU-Wnd7NY7yI4B92o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92ZW5u/Z2FnZS13b3JkcHJl/c3MuczMuYW1hem9u/YXdzLmNvbS91cGxv/YWRzLzIwMTgvMDkv/T2ZmaWNlLU1lZXRp/bmctU2ltcGxlLUJh/Y2tncm91bmQtSW1h/Z2UuanBlZw)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        color: "white",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        style={{ fontWeight: "bold" }}
      >
        To-Do List
      </Typography>

      {/* Name Field */}
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputProps={{ style: { backgroundColor: "white" } }}
        InputLabelProps={{ style: { color: "black" } }}
        style={{ marginBottom: "15px" }}
      />

      {/* Work Field */}
      <TextField
        label="Work"
        variant="outlined"
        fullWidth
        margin="normal"
        value={work}
        onChange={(e) => setWork(e.target.value)}
        InputProps={{ style: { backgroundColor: "white" } }}
        InputLabelProps={{ style: { color: "black" } }}
        style={{ marginBottom: "15px" }}
      />

      {/* Deadline Field */}
      <TextField
        // label="Deadline"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true, style: { color: "black" } }}
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        InputProps={{ style: { backgroundColor: "white" } }}
        style={{ marginBottom: "15px" }}
      />

      {/* Add Task Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={addTask}
        style={{ marginTop: "20px", padding: "10px" }}
      >
        Add Task
      </Button>

      {/* Modal for Successful Task Addition */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="task-added-modal"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography
            id="task-added-modal"
            variant="h6"
            style={{ color: "black" }}
          >
            To-Do Added Successfully!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseModal}
            style={{ marginTop: "10px" }}
          >
            Close
          </Button>
        </Box>
      </Modal>

      {/* List of Pending Tasks */}
      <Typography variant="h5" style={{ marginTop: "30px", color: "white" }}>
        Pending Tasks
      </Typography>
      <List>
        {tasks
          .filter((task) => !task.completed)
          .map((task, index) => (
            <Card
              key={index}
              variant="outlined"
              style={{ marginBottom: "15px", backgroundColor: "#f5f5f5" }}
            >
              <CardContent>
                <ListItem>
                  <Checkbox
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircleOutline />}
                    onChange={() => handleTaskCompletion(index)}
                  />
                  <Box>
                    <Typography variant="h6" style={{ color: "black" }}>
                      {task.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Work: {task.work}
                    </Typography>
                    <Typography variant="body2">
                      Deadline: {task.deadline}
                    </Typography>
                  </Box>
                </ListItem>
              </CardContent>
            </Card>
          ))}
      </List>

      {/* List of Completed Tasks */}
      <Typography variant="h5" style={{ marginTop: "30px", color: "white" }}>
        Completed Tasks
      </Typography>
      <List>
        {tasks
          .filter((task) => task.completed)
          .map((task, index) => (
            <Card
              key={index}
              variant="outlined"
              style={{ marginBottom: "15px", backgroundColor: "#e0e0e0" }}
            >
              <CardContent>
                <ListItem>
                  <Checkbox
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircleOutline />}
                    checked={task.completed}
                    onChange={() => handleTaskCompletion(index)}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      style={{ textDecoration: "line-through", color: "black" }}
                    >
                      {task.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Work: {task.work}
                    </Typography>
                    <Typography variant="body2">
                      Deadline: {task.deadline}
                    </Typography>
                  </Box>
                </ListItem>
              </CardContent>
            </Card>
          ))}
      </List>

      {/* Message when no pending tasks */}
      {tasks.filter((task) => !task.completed).length === 0 && (
        <Typography
          variant="h6"
          align="center"
          style={{ marginTop: "20px", color: "white" }}
        >
          No pending tasks. Enjoy your day!
        </Typography>
      )}
    </Container>
  );
};

export default ToDoApp;
