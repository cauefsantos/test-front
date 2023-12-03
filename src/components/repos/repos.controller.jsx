import React, {useEffect, useState} from 'react';

import {ReposView} from './repos.view';

import { UserService } from '../../services/users.services';
import { List, Typography } from '@material-ui/core';

export const ReposController = props => {

  const [repository, setRepository] = useState([])

  useEffect(() => {
    async function searchRepos() {
      const response = await UserService().listRepos(props.user) // chamada da API utilizando parametro passado no App.js
      let responseJson = await response.json()
      setRepository(responseJson)
    }

    searchRepos()

  }, [props.user]);

  return (
    <>
      <Typography variant='h2'>Repositórios de {props.user}</Typography>
      <List>
        {repository.map(repo => ( /* Lista de todos os repositórios retornados no array */
          <ReposView key={repo.id} repoName={repo.name} />
        ))}
      </List>
    </>
  )};
