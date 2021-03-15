import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import Home from '../components/Home'
import NotFound from '../components/Home/NotFound'
import Navbar from '../components/Elements/Navbar'

import axios from '../config/axiosComponents'
import changeTheme from '../helpers/changeTheme'

const App = () => {
  const [components, setComponents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    changeTheme()

    axios
      .get('/components.json')
      .then(({ data }) => {
        setIsLoading(false)
        setComponents(Object.values(data))
      })
      .catch(() => setIsLoading(false))
  }, [])

  return (
    <SimpleBar className="h-screen">
      <Helmet>
        <title>Application UI</title>
      </Helmet>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home data={components} loading={isLoading} />}
          />
          <Route path="/navbar" component={Navbar} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </SimpleBar>
  )
}

export default App
