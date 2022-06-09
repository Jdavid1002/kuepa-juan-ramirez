import React from 'react'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return ( 
    <Switch>
      <Layout>
        <Route exact path="/kuepa-juan-ramirez/" component={Dashboard} />
        <Route exact path="/" component={Dashboard} />
      </Layout>
    </Switch>
  );
}

export default App;
