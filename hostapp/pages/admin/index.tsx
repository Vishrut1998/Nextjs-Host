import React from 'react'
import dynamic from 'next/dynamic'

const RemoteApp = dynamic(() => import('remote/App'))

const AdminLandinPage = () => {
  return (
    <div>
      <RemoteApp/>
    </div>
  )
}

export default AdminLandinPage
