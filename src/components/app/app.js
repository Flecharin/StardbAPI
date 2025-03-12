import React, {Component} from 'react'

import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'

import './app.css'
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <PeoplePage/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onItemSelected}
                                  getData={ this.swapiService.getAllPlanets}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onItemSelected}
                                  getData={ this.swapiService.getAllStarships}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}
