import React, { Component } from "react";
import { HashRouter  as Router, Route, Switch } from "react-router-dom";
import TitlePage from './containers/Title-page';
import SearchPage from './containers/Main-page';




class App extends Component {
    render() {
        return (
            <Router>

                    <Switch>
                        <Route path="/" component={TitlePage} exact={true}/>
                        <Route path="/search" component={SearchPage} />

                    </Switch>
            </Router>
        )
    }
}

export default App;
