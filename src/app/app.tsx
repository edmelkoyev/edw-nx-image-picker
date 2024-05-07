import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styled from 'styled-components';

import ImgPicker from './imgpicker';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, p: 2 }}>WAS Image Picker</Typography>
      </AppBar>
        
      </Box>
      <Box sx={{pt: 10}}>
        <ImgPicker title="Add Image" />
      </Box>
    </StyledApp>
  );
}

export default App;
