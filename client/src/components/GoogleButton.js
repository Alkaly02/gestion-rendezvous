import React from 'react'
import {FcGoogle} from 'react-icons/fc'

const GoogleButton = ({children}) => {
    const linkStyle = {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        padding: '0.4rem 1rem',
        // backgroundColor: 'yellow',
        border: '1px solid gray',
        textDecoration: 'none',
        fontSize: '1.2rem',
        marginTop: '1.5rem',
        maxWidth: '300px',
        margin: '1rem auto'
    }
    const spanStyle = {
        marginLeft: '1rem',
        fontSize: '1.2rem',
        textAlign: 'start'
    }
  return (
    <a style={linkStyle} href="http://localhost:5001/api/auth/google"><FcGoogle size={30}/><span style={spanStyle}>{children}</span></a>
  )
}

export default GoogleButton