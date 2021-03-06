import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavbar from '../Components/Shared/MainNavbar/MainNavbar';
import DashboardBookingList from './Dashboard/DashboardBookingList';
import PageHome from './PageHome/PageHome';
import PageHomeDetails from './PageHomeDetails/PageHomeDetails';

const Main = () => {
    return (
        <>
            <Router>
                <MainNavbar />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <PageHome />
                        </Route>
                        <Route exact path="/home-details">
                            <PageHomeDetails />
                        </Route>
                        {/* Dashboard */}
                        <Route exact path="/dashboard">
                            <DashboardBookingList />
                        </Route>
                    </Switch>
                </main>
            </Router>

        </>
    );
};

export default Main;