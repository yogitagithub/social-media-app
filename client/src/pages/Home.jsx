import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
    <div style={{ marginTop: "50px"}}>
    <div style={{ marginLeft: "100px"}}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.biztechafrica.com/wp-content/uploads/2023/11/New-Emerging-Technologies.webp"
        title="Tech Trends"
      />
      <CardContent>
        <div style={{ marginLeft: "40px" }}>
        <Typography gutterBottom variant="h5" component="div">
        Tech Trends Today
        </Typography></div>
       
      </CardContent>
     
    </Card>
    </div></div>


    <div style={{ 
         marginTop: "-220px", 
         }}>

    <div style={{ marginLeft: "500px"}}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://miro.medium.com/v2/resize:fit:750/0*u2pXeKcB2E7XbAYj.jpg"
        title=" Healthy"
      />
      <CardContent>
      <div style={{ marginLeft: "40px" }}>
        <Typography gutterBottom variant="h5" component="div">
        Healthy Living Guide
        </Typography>
        </div>
      </CardContent>
     
    </Card>
    </div></div>

    <div style={{ marginTop: "-220px" }}>

    <div style={{ marginLeft: "910px"}}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.littlepassports.com/wp-content/uploads/2021/06/03fbbc96-ecohomes-blog-1800x890-v2.jpg"
        title=" Eco-Friendly"
      />
      <CardContent>
      <div style={{ marginLeft: "40px" }}>
        <Typography gutterBottom variant="h5" component="div">
        Eco-Friendly Home
        </Typography>
       </div>
      </CardContent>
     
    </Card>
    </div></div>

    <div style={{ marginTop: "40px" }}>
    <div style={{ marginLeft: "920px"}}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://mileandsmile.wordpress.com/wp-content/uploads/2015/02/6a00e553aa0b188834017c3161603a970b-400wi.jpg"
        title="Travel Diaries"
      />
      <CardContent>
      <div style={{ marginLeft: "40px" }}>
        <Typography gutterBottom variant="h5" component="div">
        Travel Diaries
        </Typography>
       </div>
      </CardContent>
     
    </Card>
    </div></div>
    


    <div style={{ marginTop: "-220px" }}>
    <div style={{ marginLeft: "500px"}}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://miro.medium.com/v2/resize:fit:1400/1*erJ0g2DE1RX8like4RQOlg.png"
        title="Coding"
      />
      <CardContent>
      <div style={{ marginLeft: "40px" }}>
        <Typography gutterBottom variant="h5" component="div">
        Coding Chronicles
        </Typography>
       </div>
      </CardContent>
     
    </Card>
    </div></div>


    <div style={{ marginTop: "-220px" }}>
    <div style={{ marginLeft: "100px"}}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://ecorner.stanford.edu/wp-content/uploads/sites/2/2016/07/eCorner_Education2-960x540.jpg"
        title="Entrepreneur's Toolkit"
      />
      <CardContent>
      <div style={{ marginLeft: "40px" }}>
        <Typography gutterBottom variant="h5" component="div">
        Entrepreneur's Toolkit
        </Typography>
       </div>
      </CardContent>
     
    </Card>
    </div></div>


        </>
    
  );
};

