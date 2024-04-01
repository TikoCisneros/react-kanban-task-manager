import { ChakraProvider } from '@chakra-ui/react';

import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Modals from './components/Modals';

function App() {
  return (
    <ChakraProvider>
      <MainLayout>
        <Dashboard />
      </MainLayout>
      <Modals />
    </ChakraProvider>
  );
}

export default App;
