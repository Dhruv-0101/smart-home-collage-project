// // src/pages/Blog.js
// import React from 'react';
// import { Container, Typography, Card, CardContent } from '@mui/material';

// const Blog = () => {
//   // Dummy data, you can fetch from an API
//   const blogPosts = [
//     { title: "Smart Home Automation", content: "Exploring the latest in smart home tech..." },
//     { title: "Top 5 Smart Devices", content: "A rundown of the top smart home devices..." },
//   ];

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" component="h1" gutterBottom>Blog</Typography>
//       {blogPosts.map((post, index) => (
//         <Card key={index} style={{ marginBottom: '20px' }}>
//           <CardContent>
//             <Typography variant="h5">{post.title}</Typography>
//             <Typography>{post.content}</Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </Container>
//   );
// };

// export default Blog;

import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Blog = () => {
  // State to hold blog posts
  const [blogPosts, setBlogPosts] = useState([]);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const addBlogPost = () => {
    if (name && place && description && image) {
      const newPost = {
        name,
        place,
        description,
        image: URL.createObjectURL(image),
      };
      setBlogPosts([...blogPosts, newPost]);
      // Reset fields
      setName("");
      setPlace("");
      setDescription("");
      setImage(null);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Family Vlog
      </Typography>

      {/* Blog Post Input Form */}
      <Box marginBottom={4}>
        <Typography variant="h5" gutterBottom>
          Write Your Daily Life Vlog
        </Typography>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Place"
          variant="outlined"
          fullWidth
          margin="normal"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="image-upload"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="image-upload">
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <Button
          variant="contained"
          color="primary"
          onClick={addBlogPost}
          style={{ marginTop: "20px" }}
        >
          Add Vlog
        </Button>
      </Box>

      {/* Display Blog Posts */}
      {blogPosts.map((post, index) => (
        <Card key={index} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5">{post.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.place}
            </Typography>
            <Typography variant="body1" paragraph>
              {post.description}
            </Typography>
            {post.image && (
              <img
                src={post.image}
                alt="Blog"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Blog;
