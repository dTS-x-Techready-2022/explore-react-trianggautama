import { Alert, Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {useState} from 'react'
import Header from './Header'
import HeaderImg from "../img/header.png";


export const Feed = () => {
    const [symptoms, setSymptoms] = useState( [
        {
         text:'Pendarahan pada persendian.',
         img:'https://care4blood.ulm.ac.id/frontTemplate/img/icon/ikon%206.png'
        },
        {
         text:'Pendarahan ke dalam kulit (yang memar)',
         img:'https://care4blood.ulm.ac.id/frontTemplate/img/icon/ikon%205.png'
        },
        {
         text:'Pendarahan pada mulut dan gusi',
         img:'https://care4blood.ulm.ac.id/frontTemplate/img/icon/ikon%202.png'
        },
        {
         text:'Keluar darah setelah sunat',
         img:'https://care4blood.ulm.ac.id/frontTemplate/img/icon/ikon%203.png'
        },
        {
         text:'Pendarahan setelah disuntik',
         img:'https://care4blood.ulm.ac.id/frontTemplate/img/icon/ikon%205.png'
        },
        {
         text:'mimisan yang sulit dihentikan.',
         img:'https://care4blood.ulm.ac.id/frontTemplate/img/icon/ikon%201.png'
        },
       ]);
  return (
    <Box 
        flex={4} 
        p={2} 
        sx={{
            display: {
                backgroundColor:'#f0eded'
            }
        }}
    >   
        <Header />
        <Card sx={{marginBottom:'20px'}}>
            <CardContent>
                <Typography variant="h5" sx={{marginBottom:'10px'}}>What id Hemophilia ?</Typography>
                <Typography variant="body1" align='justify'>
                    Hemophilia is usually an inherited bleeding disorder in which the blood does not clot properly. This can lead to spontaneous bleeding as well as bleeding following injuries or surgery. Blood contains many proteins called clotting factors that can help to stop bleeding. People with hemophilia have low levels of either factor VIII (8) or factor IX (9). The severity of hemophilia that a person has is determined by the amount of factor in the blood. The lower the amount of the factor, the more likely it is that bleeding will occur which can lead to serious health problems.
                </Typography>
            </CardContent>
        </Card>
        <Typography variant='h5' align='center'>Sign and Symptoms</Typography>
        <Grid container spacing={3}>
            {symptoms.map((item,index) => {
            return (
                <Grid item xs={6} sm={2} align='center'>
                        <img src={item.img} width="80%"/>
                        <Typography align='center' variant='span'>{item.text}</Typography>
                </Grid>
            )
            })}
        </Grid>
        <Card variant="filled" severity="error" sx={{marginTop:'20px',backgroundColor:'#faa5a5'}}>
            <CardContent>
                <Stack direction="row" spacing={0} justifyContent="space-between" alignItems="center">
                    <Typography variant="body1" sx={{color:'#ffffff'}}>Think you might be affected?,Try our simple self assesment to find out what you need to do.</Typography>
                    <Button variant="contained" sx={{marginTop:'10px',backgroundColor:'#ffffff',color:'red'}}>Check now</Button>
                </Stack>
            </CardContent>
        </Card>
        <Typography variant="body1" align="center" sx={{marginTop:'20px',marginBottom:'10px'}}>
            @copyright 2022
        </Typography>
    </Box>
  )
}
