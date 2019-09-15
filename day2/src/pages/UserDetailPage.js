import React, { Fragment, useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'

const UserDetailPage = (props) => {
  const [user, setUser] = useState(null)
  const { userId } = props.match.params
  useEffect(() => {
    const getUserDetail = async (id) => {
      const response = await fetch(`http://localhost:8000/users/${id}`)
      const data = await response.json()
      setUser(data)
    }
    getUserDetail(userId)
  }, [userId])
  if (!user) {
    return (
      <h3>User id: {userId} not found</h3>
    )
  }
  return (
    // <h1>User Detail, UserId: {props.match.params.userId}</h1>
    <Fragment>
      <PageTitle title="User detail" />
      <h1>User detail, userId: {userId}</h1>
      <h3>ID: {user.id}</h3>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Role: {user.role}</h3>
      <h3>Active: {user.active ? 'Yes' : 'No'}</h3>
    </Fragment>
  )
}
export default UserDetailPage
