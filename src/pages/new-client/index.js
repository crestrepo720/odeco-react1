import React, { useState } from 'react';

import { useHistory } from "react-router-dom";

import ClientForm from '../../components/ClientForm';

import ClientService from '../../services/ClientService';

export default function NewClient() {
  const initialData = {
    razon_social: '',
    direccion: '',
    nit: '',
    email: ''
  };

  const history = useHistory();

  const [client, setClient] = useState(initialData);

  const saveClient = (clientToSave) => {
    ClientService.create(clientToSave)
      .then(response => {
        alert('Cliente creado correctamente');
        setClient(initialData);
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ClientForm handleAdd={saveClient} />
  );
}