import React from 'react'
import {Button, Card, CardContent, Grid, Typography } from '@mui/material'
import HeaderImg from "../img/header.png";
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <Card sx={{ minWidth: 275 ,marginBottom:'20px',backgroundColor:'#ffffff',color:'white',alignItems:'center'}}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <img src={HeaderImg} width="100%"/>
                    </Grid>
                    <Grid item xs={12}  sm={9}>
                    <Box sx={{alignItems:"center"}}>
                        <Typography variant='h3' color="text.primary" sx={{margin:0}}>
                            Care for hemophilia
                        </Typography>
                        <Typography variant='h5' sx={{color:'red',margin:0}}>
                            Early Detection, Saving Generation
                        </Typography>
                        <Link to="/assessment"><Button variant="contained" size="small" color='error' sx={{marginTop:'10px'}}>Take self assessment</Button></Link>
                    </Box>
                   </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}
