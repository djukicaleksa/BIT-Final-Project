import React from 'react';
import './App.css';
import { Home } from './components/HomePage/Home';
import { InfoPage } from './components/InfoPage/InfoPage';
import 'materialize-css'
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from './components/Admin/LoginPage/LoginPage';
import { ReportPage } from './components/Admin/ReportsPage/ReportsPage';
import { CreateReportPage } from './components/Admin/CreateReportPage/CreateReportPage';
import { ErrorBoundary } from './shared/ErrorBoundary';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/info/:id' component={InfoPage} />
          <Route exact path='/admin' component={LoginPage} />
          <Route exact path='/admin/reports' component={ReportPage} />
          <Route exact path='/admin/reports/createreport' component={CreateReportPage} />
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
