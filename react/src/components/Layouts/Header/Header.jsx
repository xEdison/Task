import React, { Children } from 'react'
import './Header.css'
export const Header = ({children}) => {
  return (
    <header>{children}</header>
  )
}
