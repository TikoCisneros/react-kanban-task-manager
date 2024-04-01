import { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
