import { ChakraProvider } from '@chakra-ui/react';

import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ChakraProvider>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
