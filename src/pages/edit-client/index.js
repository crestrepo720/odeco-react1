import React, { useState, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import ClientForm from '../../components/ClientForm';

import ClientService from '../../services/ClientService';

export default function EditClient() {
  const initialData = {
    names: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    school: '',
    grade: ''
  };

  const { id } = useParams();
  const history = useHistory();

  const [client, setClient] = useState(initialData);

  useEffect(() => {
    findClient();
  }, []);

  const findClient = () => {
    ClientService.get(id)
      .then(response => {
        setClient(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateClient = (clientToEdit) => {
    ClientService.update(clientToEdit._id, clientToEdit)
      .then(response => {
        alert('Cliente actualizado correctamente');
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ClientForm editiing currentClient={client} handleEdit={updateClient}/>
  );
}