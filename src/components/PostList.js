import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

function PostList() {
  return (
    <Paper className="post-list">
      <Typography variant="h4">Post List</Typography>
      <List>
        <ListItem className="post-item">
          <ListItemText primary="First Post" secondary="2023-05-17" />
        </ListItem>
        <ListItem className="post-item">
          <ListItemText primary="Second Post" secondary="2023-05-18" />
        </ListItem>
        <ListItem className="post-item">
          <ListItemText primary="Third Post" secondary="2023-05-19" />
        </ListItem>
      </List>
    </Paper>
  );
}

export default PostList;
