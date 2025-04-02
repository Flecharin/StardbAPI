import React, {Component} from 'react'

import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import ErrorIndicator from "../error-indicator/error-indicator";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
//import DummySwapiService from "../../services/dummy-swapi-service";
import {
    PersonDetails,
    PersonList,
    PlanetList,
    StarshipList,
} from "../sw-components";
import ErrorBoundary from "../error-boundary";
import Row from "../Row/row";
import StarshipDetails from "../sw-components/starship-details";
import PlanetDetails from "../sw-components/planet-details";
import "./app.css";


export default class App extends Component {

    state = {
        selectedPerson: null,
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

                        <Row left={<PersonList />} right={<PersonDetails itemId={3}/>}/>
                        <Row left={<StarshipList />} right={<StarshipDetails itemId={5}/>}/>
                        <Row left={<PlanetList />} right={<PlanetDetails itemId={8}/>}/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
