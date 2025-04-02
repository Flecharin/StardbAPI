import React, {Component} from 'react'

import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import ErrorIndicator from "../error-indicator/error-indicator";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
//import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundary from "../error-boundary";
import { PeoplePage, PlanetsPage, StarshipsPage} from "../pages"
import "./app.css";


export default class App extends Component {

    state = {
        selectedItem: null,
        hasError: false,
        swapiService: new SwapiService()
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header />
                        <RandomPlanet />

                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
