import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box, Link } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const backgroundImageUrl = 'url(https://tse4.mm.bing.net/th?id=OIP.RKpQ7POM04FZ21yO_uN7xAHaDV&pid=Api&P=0&h=180)';

const LoginForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Decrease the height of the box
        backgroundSize: 'cover',
        backgroundImage: backgroundImageUrl,
      }}
    >
      <Card sx={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
              Login
            </Typography>
          </Box>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{ color: 'white', mb: 2 }}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{ color: 'white', mb: 2, borderRadius: '5px' }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
              <Checkbox sx={{ color: 'white' }} />
              <Typography sx={{ color: 'white' }}>Remember me</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'white', ml: 2 }}>
            <Link to="/forgot-password" sx={{ color: 'white', textDecoration: 'underline', cursor: 'pointer', '&:hover': { cursor: 'pointer' } }}>Forgot Password ?</Link>

            </Typography>
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 5, backgroundColor: 'white', color: 'black' }}
          >
            Login
          </Button>
          <Typography variant="body2" sx={{ color: 'white', textAlign: 'center', mt: 2 }}>
            Don't have an account? 
            <Link to="/register" sx={{ color: 'white', textDecoration: 'underline', cursor: 'pointer', ml: 1 }}>Register</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginForm;
