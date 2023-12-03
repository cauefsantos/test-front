import React, { useState } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

export const ReposView = props => {
  
  const [repoName, setRepoName] = useState(props.repoName)

  return (
  <ListItem alignItems='center'>
    <ListItemText primary={repoName} />
  </ListItem>
)}
