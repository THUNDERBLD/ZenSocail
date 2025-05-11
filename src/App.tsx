import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { UserAuthProvider } from '@/context/userAuthContext';
import router from "./routes"

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <UserAuthProvider>
      <RouterProvider router={router} />;
    </UserAuthProvider>
  );
};

export default App;

