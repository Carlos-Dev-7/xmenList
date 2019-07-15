import React from "react";
import PropTypes from "prop-types";

import LogicHero from "./LogicHero";

const HeroCards = (props) => {
    const currentTodos = LogicHero.currentCards(
        props.allItems,
        props.currentView,
        props.cardsPerPage,
    );
    const renderTodos = currentTodos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
    });
    return renderTodos;
}

HeroCards.propTypes = { 
    allItems: PropTypes.arrayOf(PropTypes.string),
    currentView: PropTypes.number,
    cardsPerPage: PropTypes.number,
}

HeroCards.defaultProps = {
    allItems: [],
    currentView: 0,
    cardsPerPage: 0,
}

export default HeroCards;