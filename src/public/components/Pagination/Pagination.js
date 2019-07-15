import React, { Component } from "react";

// import LogicPagination from "./LogicPagination";
import HeroCards from "../HeroCards";

class Pagination extends Component {
    constructor() {
        super();
        this.state = {
            results: ['a','b','c','d','e','f','g','h','i','j','k','l','m'],
            currentPage: 1,
            cardsPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { results, currentPage, cardsPerPage } = this.state;
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(results.length / cardsPerPage); i++) {
            pageNumbers.push(i);
        }
        
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <ul>
                    {<HeroCards 
                        allItems={results}
                        currentView={currentPage}
                        cardsPerPage={cardsPerPage}
                    />}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}

export default Pagination;