import React from "react";

import ItemDetails from "../item-details";

import { SwapiServiceConsumer } from "../swapi-service-context";

const PersonDetails = ({ itemId }) => {
    return(
        <SwapiServiceConsumer>
            {({ getPerson, getPersonImage }) => {
                return (
                    <ItemDetails
                        itemId={item.id}
                        getData={getPerson}
                        getImageUrl={getPersonImage}
                    >
                        <Record field="gender" label="Gender" />
                        <Record field="eyeColor" label="EyeColor" />
                        <Record field="height" label="Height" />
                        <Record field="birthYear" label="BirthYear" />
                    </ItemDetails>
                );
            }};
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {({ getPlanet, getPlanetImage }) => {
                return (
                    <ItemDetails
                        itemId={itemId}
                        getData={getPlanet}
                        getImageUrl={getPlanetImage}
                    >
                        <Record field="population" label="Population" />
                        <Record field="rotationPeriod" label="Rotation Period" />
                        <Record field="diameter" label="Diameter" />
                    </ItemDetails>
                );
            }}
        </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {({ getStarship, getStarshipImage }) => {
                return (
                    <ItemDetails
                        itemId={itemId}
                        getData={getStarship}
                        getImageUrl={getStarshipImage}
                    >
                        <Record field="model" label="Model" />
                        <Record field="length" label="Length" />
                        <Record field="costInCredits" label="Cost" />
                    </ItemDetails>
                );
            }}
        </SwapiServiceConsumer>
    );
};

export { PersonDetails, PlanetDetails, StarshipDetails };