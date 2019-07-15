class LogicHero {
    static currentCards(results, currentPage, cardsPerPage) {
        // Displaying current results
        const rangeForPage = currentPage * cardsPerPage;
        const firstNextResult = rangeForPage - cardsPerPage;
        const currentTodos = results.slice(firstNextResult, rangeForPage);
        return currentTodos;
    }
}

export default LogicHero;