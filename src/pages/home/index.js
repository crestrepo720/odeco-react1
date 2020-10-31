import React, { useState, useEffect } from 'react';

import Table from '../../components/Table';

import ClientService from '../../services/ClientService';

export default function Home() {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = () => {
    ClientService.getAll()
      .then(response => {
        setClients(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteClient = id => {
    ClientService.remove(id)
      .then(response => {
        setClients(clients.filter(client => client._id !== id));
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="seven columns">
        <h2>Clientes</h2>
      </div>
      <Table data={clients} handleDelete={deleteClient} />
    </>
  );
}