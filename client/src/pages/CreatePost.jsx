import { useState } from "react";
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
 import axios from "axios";

const CreatePost = () => {

  const [inputs, setInputs] = useState({
   
    title: "",
    description: "",
   
    author: "",
   
    
  });
 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await axios.post("http://localhost:8001/api/v1/post/create-post", {
      title: inputs.title,
      description: inputs.description,
     
      author: inputs.author,
      
    });
    if (data?.data?.success) { 
      alert("Post Created successfully");
      setInputs({
        title: "",
        description: "",
       
        author: "",
       
      });
      
     // navigate("/blogs");
    }
  } catch (error) {
    console.log(error);
  }
};




  return (
    <>   

      <div style={{ marginTop: "30px",  marginLeft: "500px" }}>
      <Typography variant="h5" gutterBottom>
      Title:
      </Typography>
      </div>

      <div style={{ marginTop: "-75px", marginLeft: "610px" }}>
<TextField
         
            value={inputs.title}
            name="title"
            margin="normal"
            type={"text"}
            required
            onChange={handleChange}
          />
      </div>


      <div style={{ marginTop: "10px",  marginLeft: "430px" }}>
      <Typography variant="h5" gutterBottom>
      Description:
      </Typography>
      </div>
       <div style={{ marginTop: "-45px", marginLeft: "610px" }}>
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
       fullWidth 
      id="description"
      name="description"
      multiline  
      rows={4}  
      value={inputs.description} 
      onChange={handleChange} />
    </Box>
      </div>


     
      <div style={{ marginTop: "20px",  marginLeft: "470px" }}>
      <Typography variant="h5" gutterBottom>
      Author:
      </Typography>
      </div>
      <div style={{ marginTop: "-67px", marginLeft: "610px" }}>
<TextField
           
            value={inputs.author}
            name="author"
            margin="normal"
            type={"text"}
            required
            onChange={handleChange}
          />
      </div>



     


<div style={{ marginLeft: "690px", marginTop: "-20px" }}>
      <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          </div>
    </>

  );
};

export default CreatePost;