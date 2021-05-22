import React from 'react';
import useAuth from './contexts/auth/useAuth';

const App: React.FC = () => {
    const { user } = useAuth();

    return <div className="App">{user}</div>;
};

export default App;
