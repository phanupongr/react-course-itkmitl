import React from 'react'

const ListMenu = (props) => {
  const { items } = props
  const menuItems = items.map(item => <li>{item.title} <a href={item.link} target="_blank">go</a></li>)
  return (
    <ul>
      {menuItems}
    </ul>
  )
}

export default ListMenu
