import React from 'react';
import './App.css';

import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            route: 'page1',
        }
    }
    onRouteChange = (route) => {
        this.setState({ route: route });
    }
    render() {
        const { route } = this.state;
        return (
            <div className="App">
                <h1>Welcome to splitting code with React and Parcel</h1>
                {route === 'page1' ? <Page1 onRouteChange={this.onRouteChange} /> : null}
                {route === 'page2' ? <Page2 onRouteChange={this.onRouteChange} /> : null}
                {route === 'page3' ? <Page3 onRouteChange={this.onRouteChange} /> : null}
            </div>
        );
    }
}

export default App;