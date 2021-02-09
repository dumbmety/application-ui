import React from 'react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import Header from '../components/common/Header'
import Gallery from '../components/common/Gallery/Gallery'

const App = () => {
  return (
    <SimpleBar className="h-screen">
      <div className="container mx-auto py-12 text-gray-800">
        <Header />
        <Gallery />
      </div>
    </SimpleBar>
  )
}

export default App
