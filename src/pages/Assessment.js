import * as React from 'react';
import { useState,useEffect } from 'react';
import { Button, Card, CardContent, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { Navbar } from '../component/Navbar';
import { Rightbar } from '../component/Rightbar';
import { Sidebar } from '../component/Sidebar';
import axios from "axios";

export default function Home() {
    const [soal, setSoal] = useState(0);
    const [answer, setAnswer] = useState({});

    const fetchSoal = async() => {
        const { data } = await axios.get(`https://care4blood.fk.ulm.ac.id/api/soal/0ddc3c0f-e71b-4e50-8bfe-ed93d48bd57b`);
        setSoal(data.data);
        console.log(data)
    }
    const answerHandler = (answerSelect) => {
        
        setAnswer(prevAnswer => {
            return {...prevAnswer, [answerSelect.soal_id]: answerSelect.id}
        })
    }

    useEffect(() => {
       fetchSoal()
    }, []);

  return (
    <div>
        <Box sx={{flex:1}}>
        <Navbar/>
        <Stack direction="row" spacing={0} justifyContent="space-between">
          <Sidebar />
            <Box 
                    flex={4} 
                    p={2} 
                    sx={{
                        display: {
                            backgroundColor:'#f0eded'
                        }
                    }}
                >  
                <Card>
                    <CardContent>
                        <Typography variant='h6' sx={{marginBottom:'20px'}}>Jawablah soal berikut untuk mengetahui tingkat reisko anda terpapar hemophilia</Typography>

                        {
                            soal != 0 ?
                            soal.map((value,index) => {
                                return (
                                    <Card sx={{marginBottom:'5px'}} key={index}>
                                        <CardContent>
                                            <p>{index+1}. {value.attributes.uraian}</p>
                                            {value.attributes.pilihan.map((value,index)=> {
                                                return (
                                                    <List key={index}>
                                                        <ListItem disablePadding>
                                                            <ListItemButton sx={{backgroundColor: answer[value.soal_id] == value.id ? '#faa5a5' : 'lightgrey'}} onClick={()=> answerHandler(value)}>
                                                            <ListItemText primary={value.uraian_jawaban} />
                                                            </ListItemButton>
                                                        </ListItem>
                                                    </List>
                                                )
                                            })}
                                        </CardContent>
                                    </Card>
                                )
                            })
                            : null
                        }
                    </CardContent>
                </Card>
            </Box>
          <Rightbar/>
        </Stack>
      </Box>
    </div>
  )
}
