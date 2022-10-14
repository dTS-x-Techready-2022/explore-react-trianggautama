import { Box } from '@mui/system'
import React from 'react'

export const Rightbar = () => {
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
        Rightbar
    </Box>
  )
}
