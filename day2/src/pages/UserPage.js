import React, { useState, useEffect } from 'react'
import UsersTable from '../components/UsersTable'
import UsersSearchBox from '../components/UsersSearchBox'
import PageTitle from '../components/PageTitle'
import UsersDataContext from '../contexts/UsersDataContext'

const UserPage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  useEffect(() => {
    console.log('fetch data')
    const getUser = async () => {
      setLoading(true)
      const response = await fetch('http://localhost:8000/users')
      const data = await response.json()
      console.log(data)
      setUsers(data)
      setLoading(false)
    }
    getUser()
  }, [])
  if (loading) {
    return (
      <h3>loading. . . .</h3>
    )
  }
  return (
    <UsersDataContext.Provider value={{
      users, loading, search, setSearch,
    }}
    >
      <React.Fragment>
        <PageTitle title="Users" />
        <UsersSearchBox />
        <UsersTable />
      </React.Fragment>
    </UsersDataContext.Provider>
  )
}

export default UserPage
