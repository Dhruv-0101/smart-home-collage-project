// // src/pages/ExpenseTracker.js
// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   List,
//   ListItem,
// } from "@mui/material";

// const ExpenseTracker = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [amount, setAmount] = useState(0);
//   const [description, setDescription] = useState("");

//   const addExpense = () => {
//     setExpenses([...expenses, { description, amount }]);
//     setAmount(0);
//     setDescription("");
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" component="h1" gutterBottom>
//         Expense Tracker
//       </Typography>
//       <TextField
//         label="Description"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <TextField
//         label="Amount"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         onClick={addExpense}
//       >
//         Add Expense
//       </Button>
//       <List>
//         {expenses.map((exp, index) => (
//           <ListItem key={index}>
//             {exp.description}: ${exp.amount}
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default ExpenseTracker;


import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expense"); // Expense or Income

  // Totals for income, expense, and savings
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  const totalSavings = totalIncome - totalExpense;

  const addTransaction = () => {
    if (name && description && amount) {
      const newTransaction = { name, description, amount: parseFloat(amount), type };
      setTransactions([...transactions, newTransaction]);
      setName("");
      setDescription("");
      setAmount(0);
      setType("expense");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Family Expense Tracker
      </Typography>

      {/* Name Field */}
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Description Field */}
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Amount Field */}
      <TextField
        label="Amount"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* Type Selection (Income/Expense) */}
      <Box marginY={2}>
        <FormLabel component="legend">Type</FormLabel>
        <RadioGroup
          row
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel value="income" control={<Radio />} label="Income" />
          <FormControlLabel value="expense" control={<Radio />} label="Expense" />
        </RadioGroup>
      </Box>

      {/* Add Transaction Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={addTransaction}
      >
        Add Transaction
      </Button>

      {/* Transactions List */}
      <Typography variant="h6" component="h2" marginTop={3}>
        Transactions
      </Typography>
      <List>
        {transactions.map((trans, index) => (
          <ListItem key={index}>
            <Box>
              <Typography variant="body1">
                <strong>{trans.name}</strong> - {trans.description} ({trans.type === "income" ? "+" : "-"}${trans.amount})
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Display Totals */}
      <Box marginTop={3}>
        <Typography variant="h6">Summary</Typography>
        <Typography variant="body1">Total Income: ${totalIncome}</Typography>
        <Typography variant="body1">Total Expense: ${totalExpense}</Typography>
        <Typography variant="body1">
          <strong>Total Savings: ${totalSavings}</strong>
        </Typography>
      </Box>
    </Container>
  );
};

export default ExpenseTracker;
