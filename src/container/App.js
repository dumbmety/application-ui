import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Home from '../components/Home/Home';
import NotFound from '../components/Home/NotFound';

export default function App() {
  return (
    <SimpleBar className="h-screen">
      <Helmet>
        <title>Application UI</title>
      </Helmet>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </SimpleBar>
  );
}
