import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsersDataContext from '../contexts/UsersDataContext'

const UsersTable = (props) => {
  const { users, search } = useContext(UsersDataContext)
  console.log(search)
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        { users.filter(user => user.role === search || user.name === search)
          .map(user => (
            <tr>
              <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.active ? 'Yes' : 'No'}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default UsersTable
