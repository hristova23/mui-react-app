import React from 'react'
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const Rightbar = () => {
  return (
    <Box 
        flex={2} p={2}
        sx={{display: {xs: "none", sm: "block"} }}
    >
      <Box position="fixed">
        <Typography variant='h6' fontWeight={100}>Active Friends</Typography>
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/14318107/pexels-photo-14318107.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/15031643/pexels-photo-15031643.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/9031629/pexels-photo-9031629.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
          <Avatar alt="Victoriya Hristova" src="https://images.pexels.com/photos/15045086/pexels-photo-15045086.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
          <Avatar alt="Roma Toyer" src="https://images.pexels.com/photos/14518569/pexels-photo-14518569.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Posts</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img alt="" src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=400"/>
          </ImageListItem>
          <ImageListItem>
            <img alt="" src="https://images.pexels.com/photos/2122280/pexels-photo-2122280.jpeg?auto=compress&cs=tinysrgb&w=400"/>
          </ImageListItem>
          <ImageListItem>
            <img alt="" src="https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg?auto=compress&cs=tinysrgb&w=400"/>
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/14318107/pexels-photo-14318107.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
            </ListItemAvatar>
            <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Remy Sharp
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                  />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/15031643/pexels-photo-15031643.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
            </ListItemAvatar>
            <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Travis Howard
                      </Typography>
              {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                  />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/9031629/pexels-photo-9031629.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
            </ListItemAvatar>
            <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Agnes Walker
                      </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                  }
                  />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
            </ListItemAvatar>
            <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Agnes Walker
                      </Typography>
                        {' — Hey there?'}
                    </React.Fragment>
                  }
                  />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar