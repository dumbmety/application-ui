import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import Home from '../components/Home'
import NotFound from '../components/Home/NotFound'
import Navbar from '../components/Elements/Navbar'

import changeTheme from '../helpers/changeTheme'

const App = () => {
  useEffect(() => changeTheme(), [])

  return (
    <SimpleBar className="h-screen">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/navbar" component={Navbar} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </SimpleBar>
  )
}

export default App
