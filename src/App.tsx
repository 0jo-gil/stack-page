
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageStack from './components/Stack';
import AppRouter from './router/AppRouter';


const App: React.FC = () => {
  return (
    <Router>
      <PageStack>
        <AppRouter />
      </PageStack>
    </Router>
  );
};

export default App;