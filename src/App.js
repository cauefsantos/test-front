import logo from './logo.svg';
import './App.css';

import { 
  AppBar,
  Box,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { ReposController } from './components/repos/repos.controller';
import { useRef, useState } from 'react';


export default function SearchAppBar() {

  const ref = useRef('')
  const [user, setUser] = useState(ref.current.value)

  const handleSubmit = event => { // troca de parâmetro de busca na API
    setUser(ref.current.value)
    event.preventDefault()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fidu
          </Typography>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            onSubmit={handleSubmit}
          >

            <InputBase sx={{ ml: 1, flex: 1 }}
              placeholder="Procure alguém"
              inputProps={{ 'aria-label': 'Procure alguém' }} 
              inputRef={ref} />
          </Paper>
        </Toolbar>
      </AppBar>

      <ReposController user={user} setUser={setUser} />
    </Box>
  );
}
