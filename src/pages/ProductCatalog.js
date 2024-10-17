import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  TextField,
  Button,
  Modal,
  Box,
} from "@mui/material";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result); // Set the base64 image string
      };
      reader.readAsDataURL(file); // Convert the file to base64 string
    }
  };

  const addProduct = () => {
    if (productName && productImage && productDescription && productPrice) {
      const newProduct = {
        name: productName,
        price: productPrice,
        imageUrl: productImage,
        description: productDescription,
      };
      setProducts([...products, newProduct]);
      // Clear input fields after adding
      setProductName("");
      setProductPrice(0);
      setProductImage("");
      setProductDescription("");
    }
  };

  // Dummy product data with images
  const dummyProducts = [
    {
      name: "Smart Light",
      price: 50,
      imageUrl: "https://via.placeholder.com/300?text=Smart+Light",
      description: "A smart light bulb that can be controlled remotely.",
    },
    {
      name: "Smart Thermostat",
      price: 120,
      imageUrl: "https://via.placeholder.com/300?text=Smart+Thermostat",
      description: "An intelligent thermostat that optimizes energy usage.",
    },
    {
      name: "Smart Lock",
      price: 200,
      imageUrl: "https://via.placeholder.com/300?text=Smart+Lock",
      description: "A smart lock that can be controlled from your smartphone.",
    },
    {
      name: "Smart Camera",
      price: 150,
      imageUrl: "https://via.placeholder.com/300?text=Smart+Camera",
      description: "A surveillance camera that can be accessed remotely.",
    },
  ];

  // Combine products or always show dummy products along with user-added products
  const displayProducts = [...dummyProducts, ...products];

  const handleBuyNow = (product) => {
    setCart([...cart, product]);
    setModalProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalProduct(null);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Product Catalog
      </Typography>

      {/* Form to add new product */}
      <TextField
        label="Product Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <TextField
        label="Product Price"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(Number(e.target.value))}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ margin: "10px 0" }}
      />
      <TextField
        label="Product Description"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={2}
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={addProduct}
      >
        Add Product
      </Button>

      {/* Grid to display products */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {displayProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.imageUrl}
              />
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography>${product.price}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleBuyNow(product)}
                  style={{ marginTop: "10px" }}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for confirmation */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">
            {modalProduct ? `${modalProduct.name} will be delivered soon!` : ""}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseModal}
            sx={{ marginTop: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>

      {/* Display cart */}
      {cart.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h5">Cart:</Typography>
          {cart.map((item, index) => (
            <Typography key={index}>
              {item.name} - ${item.price}
            </Typography>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ProductCatalog;
