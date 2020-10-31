import React, { useState, useEffect } from 'react';

export default function ClientForm({ currentClient, editiing, handleEdit, handleAdd }) {
  const initialData = {
    razon_social: '',
    direccion: '',
    nit: '',
    email: ''
  };

  const [client, setClient] = useState(initialData);

  useEffect(() => {
    if (currentClient) {
      setClient(currentClient);
    }
  }, [currentClient])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setClient({ ...client, [name]: value });
    console.log(client);
  };

  return (
    <div className="submit-form">

      <div>
        <div className="form-group">
          <label htmlFor="razon_social">Razon Social</label>
          <input
            type="text"
            className="form-control"
            id="razon_social"
            required
            value={client.razon_social}
            onChange={handleInputChange}
            name="razon_social"
          />
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Direccion</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            required
            value={client.direccion}
            onChange={handleInputChange}
            name="direccion"
          />
        </div>

        <div className="form-group">
          <label htmlFor="nit">Nit</label>
          <input
            type="text"
            className="form-control"
            id="nit"
            required
            value={client.nit}
            onChange={handleInputChange}
            name="nit"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            value={client.email}
            onChange={handleInputChange}
            name="email"
          />
        </div>
        {
          editiing ? (
            <button onClick={() => handleEdit(client)} className="btn btn-success">
              Editar
            </button>
          ) : (
              <button onClick={() => handleAdd(client)} className="btn btn-success">
                Agregar
              </button>
            )
        }
      </div>
    </div>
  );
}