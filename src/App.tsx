import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Contexts
import useUi from './contexts/ui/useUi';

// Pages
import Profile from './pages/profile';
import Opps from './pages/opps';
import Opp from './pages/opp';
import Feed from './pages/feed';
import Login from './pages/login';
import Register from './pages/register';

// Utils
import GlobalCss from './utils/globalCss';

const App: React.FC = () => {
    const { theme } = useUi();

    return (
        <ThemeProvider theme={theme}>
            <GlobalCss />
            <Router>
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Route exact path="/" component={Opps} />
                    <Route path="/opportunity/:id" component={Opp} />
                    <Route path="/feed" component={Feed} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
