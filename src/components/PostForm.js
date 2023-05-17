import React from 'react';
import { Typography, Paper, TextField, Button } from '@mui/material';

function PostForm() {
  return (
    <Paper className="post-form">
      <Typography variant="h4">Create a Post</Typography>
      <form>
        <div>
          <TextField id="title" label="Title" variant="outlined" fullWidth />
        </div>
        <div>
          <TextField
            id="content"
            label="Content"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">Create</Button>
        </div>
      </form>
    </Paper>
  );
}

export default PostForm;
