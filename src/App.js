import { Box, Stack } from '@mui/system';
import * as React from 'react';
import { Feed } from './component/Feed';
import { Navbar } from './component/Navbar';
import { Rightbar } from './component/Rightbar';
import { Sidebar } from './component/Sidebar';

function App() {
  return (
    <div className="App">
      <Box sx={{flex:1}}>
        <Navbar/>
        <Stack direction="row" spacing={0} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar/>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
