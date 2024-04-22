import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import data from "../data.json";
import '../App.css';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const incrementIndex = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(incrementIndex, 2000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <Container>
      <img
        src={data[currentImageIndex].tours[0].image}
        alt={data[currentImageIndex].name}
        style={{ width: "100%", height: "auto", marginTop: 20 }}
      />
      {/* Scrolling News Section */}
      <Box className="paper">
        <Box sx={{ marginTop: '5px', fontSize: '18px', fontWeight: 600, color: 'gray' }}>
          NEWS |
        </Box>
        <Box className="scrolling-text">
          {"When you change your thoughts, remember to also change your world."}
        </Box>
      </Box>
      {/* Our Expertise Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'gray', fontSize: '24px', fontWeight: 'bold' }}>
          AREA OF EXPERTISE
        </Typography>
        {/* Additional text */}
        <Typography variant="body1">
          Musale construction has been a connoisseur of infrastructure development for the last 29 years! Our focus on excellence and precision has allowed us to revolutionise the construction industry.
          <br />
          <br />
          We take pride in being one of the oldest and most efficient companies in the construction industry and have unlocked many achievements in the stellar journey of twenty nine years.  Musale Construction has become a symbol of trust and innovation in the construction industry.
          <br />
          <br />
          Our operation domains can be classified into two major fields: Construction contract business and the second is the development of roads and highway networks across the country. We offer EPC services for reputed clients specialising in the roads and highways sector, including long stretch highways, dam,irrigation,Transport material supply, 2 stone crusher , 3 Petrol pump and a vivid range of building and other civil construction projects. The second branch of our business concerning the development of roads and highway projects is currently working on the hybrid annuity model ("HAM") basis (the "Annuity Business"), and through our Subsidiaries completed build, operate, transfer ("BOT") annuity projects.
        </Typography><br></br><br></br>
        {/* Expertise items */}
        <Grid container spacing={4}>
          {expertiseData.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{ border: "1px solid #ccc", padding: 2 }}>
                {/* Expertise image */}
                <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                <Typography variant="h5" gutterBottom>
                  {item.title}
                </Typography>
                <Typography>{item.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

// Data for Our Expertise section
const expertiseData = [
  {
    title: "Road Projects",
    description: "We specialize in creating modern and responsive web applications using the latest technologies.",
    image: "https://tse4.mm.bing.net/th?id=OIP.FZ2KPqr1ijwi8taAZsq55wHaE8&pid=Api&P=0&h=180"
  },
  {
    title: "Dam Projects",
    description: "Our team is experienced in developing cross-platform mobile applications that provide a seamless user experience.",
    image: "https://tse2.mm.bing.net/th?id=OIP.ypop8cyrDE91GYIDaXaC0AHaE7&pid=Api&P=0&h=180"
  },
  {
    title: "Irrigation Projects",
    description: "We design user interfaces that are intuitive, engaging, and visually appealing, ensuring a positive user experience.",
    image: "https://tse4.mm.bing.net/th?id=OIP.5wAfoU1wO8mIGVGEYStbBgHaEc&pid=Api&P=0&h=180"
  },
  {
    title: "Transport Material Supply",
    description: "We design user interfaces that are intuitive, engaging, and visually appealing, ensuring a positive user experience.",
    image: "https://tse2.mm.bing.net/th?id=OIP.b6_3ak0IhMYgV-VuOaZxYQHaD4&pid=Api&P=0&h=180"
  },
  
];

