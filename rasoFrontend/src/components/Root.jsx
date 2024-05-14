import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from './index';

function Root() {
  return (
    <>
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Root
