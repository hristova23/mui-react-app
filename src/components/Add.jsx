import React, { useState } from 'react'
import { Add as AddIcon, EmojiEmotions, InsertPhoto, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'

function Add() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip onClick={e=>setOpen(true)}
        title="Add" 
        sx={{
          position:"fixed", 
          bottom:20, 
          left:{xs:"calc(50% - 25px)", md:20}
        }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display:"flex", justifyContent:"center", alignItems:"center"}}
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" textAlign="center" color="gray">Create post</Typography>
          <Box display="flex" alignItems="center" marginBottom="20px" gap={"10px"}>
            <Avatar alt="Emma" src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <Typography fontWeight={500} variant="span">Emma</Typography>
          </Box>
          <TextField
            sx={{width:"100%"}}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind..."
            variant="standard"
          />
          <Stack direction="row" spacing={1} mt={2} mb={3}>
            <EmojiEmotions color="primary"/>
            <InsertPhoto color="secondary"/>
            <VideoCameraBack color="success"/>
            <PersonAdd color="error"/>
          </Stack>
          <Button fullWidth variant="contained">Post</Button>
        </Box>
      </Modal>
    </>
  )
}

export default Add