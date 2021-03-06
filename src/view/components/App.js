import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import PurchaseTicketsPage from './pages/PurchaseTicketsPage';
import ExpiredTicketsPage from './pages/ExpiredTicketsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ActiveTicketsPage from './pages/ActiveTicketsPage';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={ActiveTicketsPage}/>
                <Route path='/activeTickets' component={ActiveTicketsPage}/>
                <Route path='/purchaseTickets' component={PurchaseTicketsPage}/>
                <Route path='/expiredTickets' component={ExpiredTicketsPage}/>
                <Route path='/leaderboard' component={LeaderboardPage}/>
            </Router>
        )
    }
}

/*generate will be moved to purchase component*/
/*Book will then be grabbed from mongodb*/

export default App;
