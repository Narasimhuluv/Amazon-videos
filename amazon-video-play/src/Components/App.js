import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cuarousel from './Cuarousel';
import Discover from './Discover';
import DiscoverFour from './DiscoverFour';
import DiscoverOne from './DiscoverOne';
import DiscoverThree from './DiscoverThree';
import DiscoverTv from './DiscoverTv';
import DiscoverTwo from './DiscoverTwo';
import Header from './Header'
import TopRated from './TopRated';
import WeeklyIndividual from './WeeklyIndividual';
import WeekTrending from './WeekTrending';
import {baseURL, API_KEY} from '../utils/index'
import DiscoverTvIndi from './DiscoverTvIndi';
import TopRatedIndi from './TopRatedIndi';
import DiscoverIndi from './DiscoverIndi';
import DiscoverOneIndi from './DiscoverOneIndi';
import DiscoverIndTwo from './DiscoverIndTwo';
import DiscoverIndThree from './DiscoverIndThree';

class App extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){   
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Cuarousel />
                            <WeekTrending />
                            <DiscoverTv />
                            <TopRated />
                            <Discover />
                            <DiscoverOne />
                            <DiscoverTwo />
                            <DiscoverThree />
                            <DiscoverFour />
                        </Route>

                        <Route path="/weekly/:id" exact>
                            <WeeklyIndividual {...this.state}/>
                        </Route>
                        <Route path="/discoverTv/:id" exact>
                            <DiscoverTvIndi {...this.state}/>
                        </Route>
                        <Route path="/top/:id" exact>
                            <TopRatedIndi {...this.state}/>
                        </Route>
                        <Route path="/discover/:id">
                            <DiscoverIndi {...this.state}/>
                        </Route>
                        <Route path="/discoverone/:id">
                            <DiscoverOneIndi {...this.state}/>
                        </Route>
                        <Route path="/discovertwo/:id">
                            <DiscoverIndTwo {...this.state}/>
                        </Route>
                        <Route path="/discoverthree/:id">
                            <DiscoverIndThree {...this.state}/>
                        </Route>
                        <Route path="/discoverfour/:id">
                            <DiscoverIndThree {...this.state}/>
                        </Route>      
                    </Switch>
                </main>
            </div>
        )
    }
}

export default App;
