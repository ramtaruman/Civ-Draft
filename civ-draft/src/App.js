import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DraftingPage from './components/DraftingPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Common components or layout elements can be included here */}
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/draft" component={DraftingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;