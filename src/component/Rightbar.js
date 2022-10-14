import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/system'

export const Rightbar = () => {
  const [contDown, setContDown] = useState(null);
  const iauction = require("iauction")

  iauction({
      countdownInMin: 1,
      startDate: "2022/10/14 22:30:00",
      endDate: "2022/10/14 22:45:00",
      callback: (time) => setContDown(time),
  });

  return (
    <Box 
        flex={1} 
        p={2} 
        sx={{
            display: {
                xs:"none", sm: "block",
                backgroundColor:'#ffffff'
            }
        }}
    >
        <p>{JSON.stringify(contDown)}</p>
    </Box>
  )
}
