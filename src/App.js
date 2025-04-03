import React, { Component, lazy, Suspense } from 'react';
import './App.css';

import Page1 from '../components/Page1';

const Page2View = lazy(() => import('../components/Page2'));
const Page3View = lazy(() => import('../components/Page3'));

class App extends Component {
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
        if (this.state.route === 'page1') {
            return <Page1 onRouteChange={this.onRouteChange} />
        } else if (this.state.route === 'page2') {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <Page2View onRouteChange={this.onRouteChange} />
                </Suspense>
            );
        } else {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <Page3View onRouteChange={this.onRouteChange} />
                </Suspense>
            );
        }
    }
}

export default App;