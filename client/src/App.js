import Header from "./components/Header";
 import { Routes, Route, Navigate } from 'react-router-dom';
  import Post from "./pages/Post";
import Login from "./pages/Login";
import Register from "./pages/Register";
    import CreatePost from "./pages/CreatePost";
  //  import BlogUpdate from "./pages/UpdateBlog";
  //  import BlogDetails from "./pages/BlogDetails";
   import Home from "./pages/Home";

function App() {
  return (
    <div>
      <>
       
      <Header></Header>


       <Routes>
      <Route path="/home" element={<Home />} />
            <Route path="/all-post" element={<Post />} />
             {/*  <Route path="/blog-details/:id" element={<BlogDetails />} />
             <Route path="/blog-update/:id" element={<BlogUpdate />} />*/}
       <Route path="/create-post" element={<CreatePost />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes> 
      </>
    </div>
  );
}

export default App;