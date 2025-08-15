import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import SignInPage from './compenents/SignInPage.jsx'
import Header from './compenents/Header.jsx';
import Dashboard from './compenents/Dashbord.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Header />
        <Dashboard/>
      </SignedIn>
    </>
  );
}

export default App;