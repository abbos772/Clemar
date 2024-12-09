import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs";
const AdminPage = () => {
  return (
    <div>
        <h1>Tamom</h1>
        <a href="https://www.instagram.com/thenameisabbos/">
          <BsInstagram/> Gooo
        </a>
        <Link to={'/'}>
        <h1>BACK</h1>
        </Link>
    </div>
  )
}

export default AdminPage