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

// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Box,
//   IconButton,
// } from "@mui/material";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";

// const Blog = () => {
//   // State to hold blog posts
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [name, setName] = useState("");
//   const [place, setPlace] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);

//   const addBlogPost = () => {
//     if (name && place && description && image) {
//       const newPost = {
//         name,
//         place,
//         description,
//         image: URL.createObjectURL(image),
//       };
//       setBlogPosts([...blogPosts, newPost]);
//       // Reset fields
//       setName("");
//       setPlace("");
//       setDescription("");
//       setImage(null);
//     }
//   };

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" component="h1" gutterBottom>
//         Family Vlog
//       </Typography>

//       {/* Blog Post Input Form */}
//       <Box marginBottom={4}>
//         <Typography variant="h5" gutterBottom>
//           Write Your Daily Life Vlog
//         </Typography>
//         <TextField
//           label="Your Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <TextField
//           label="Place"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={place}
//           onChange={(e) => setPlace(e.target.value)}
//         />
//         <TextField
//           label="Description"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={4}
//           margin="normal"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           accept="image/*"
//           style={{ display: "none" }}
//           id="image-upload"
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//         />
//         <label htmlFor="image-upload">
//           <IconButton color="primary" component="span">
//             <PhotoCamera />
//           </IconButton>
//         </label>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={addBlogPost}
//           style={{ marginTop: "20px" }}
//         >
//           Add Vlog
//         </Button>
//       </Box>

//       {/* Display Blog Posts */}
//       {blogPosts.map((post, index) => (
//         <Card key={index} style={{ marginBottom: "20px" }}>
//           <CardContent>
//             <Typography variant="h5">{post.name}</Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               {post.place}
//             </Typography>
//             <Typography variant="body1" paragraph>
//               {post.description}
//             </Typography>
//             {post.image && (
//               <img
//                 src={post.image}
//                 alt="Blog"
//                 style={{ maxWidth: "100%", height: "auto" }}
//               />
//             )}
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
  Grid,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/system";

const Background = styled("div")({
  backgroundImage: 'url("https://imgs.search.brave.com/6yt5jL9VmUgZGYxxDwRjdcdBXix1VhQkOeeJ3LSsSlk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODYw/ODg3NTI4L3Bob3Rv/L3doYXRzLXlvdXIt/c3RvcnktY29uY2Vw/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SG12VWRmUGwt/cFJ0c3BlUmdFdXFL/bGRXcHVFazQ3UFNH/dmtINGowNkVGUT0")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  padding: "40px 0",
});

const StyledCard = styled(Card)({
  marginBottom: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  padding: "10px",
});

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
    <Background>
      <Container
        maxWidth="md"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Family Vlog
        </Typography>

        {/* Blog Post Input Form */}
        <Box marginBottom={4}>
          <Typography variant="h5" gutterBottom>
            Write Your Daily Life Vlog
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Place"
                variant="outlined"
                fullWidth
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
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
                Upload Image
              </label>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            onClick={addBlogPost}
            style={{ marginTop: "20px" }}
            fullWidth
          >
            Add Vlog
          </Button>
        </Box>

        {/* Display Blog Posts */}
        {blogPosts.map((post, index) => (
          <StyledCard key={index}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {post.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                {post.place}
              </Typography>
              <Typography variant="body1" paragraph>
                {post.description}
              </Typography>
              {post.image && (
                <img
                  src={post.image}
                  alt="Blog"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "5px",
                  }}
                />
              )}
            </CardContent>
          </StyledCard>
        ))}
      </Container>
    </Background>
  );
};

export default Blog;
