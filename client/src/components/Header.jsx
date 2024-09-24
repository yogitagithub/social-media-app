import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/Store";


const Header = () => {
  
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [value, setValue] = useState();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
       alert("Logout Successfull");
      navigate("/home");
      //localStorage.clear(); 
    } catch (error) {
      console.log(error);
    }
  };

  // const handleBlogsClick = () => {
  //   if (!isLogin) {
  //     alert("Please login first to view blogs.");
  //   } else {
  //     navigate("/blogs");
  //   }
  // };


  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
         
            

          <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/home"
                >
                  Social Media Application
                </Button>


                {/* <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                 
                  onClick={handleBlogsClick}
                >
                Blogs
                </Button> */}

           {isLogin && ( 
            <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >

<Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                   to="/all-post"
                //  onClick={handleBlogsClick}
                >
                All Post
                </Button>

               


                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/create-post"
                >
                Create Post
                </Button>

              
              </Tabs>
            </Box>
           )} 


          <Box display={"flex"} marginLeft="auto">
             {!isLogin && ( 
              <>




                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
         )} 
             {isLogin && ( 
              <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>
                Logout
              </Button>
            )} 
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;