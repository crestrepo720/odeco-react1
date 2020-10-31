import React from 'react';

import { Link } from 'react-router-dom';

const Table = ({ data, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Razon Social</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map(item => {
            const { _id, razon_social } = item;
            return (
              <tr key={_id}>
                <td>{razon_social}</td>
                <td>
                  <button onClick={() => handleDelete(_id)}>Eliminar</button>
                  <Link to={`/client/${_id}`}>
                    <button>
                      Editar
                    </button>
                  </Link>
                </td>
              </tr>
            )
          })
        ) : (
            <tr>
              <td colSpan={4}>Sin Datos</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default Table;