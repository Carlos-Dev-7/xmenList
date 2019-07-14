class LogicCards {
    static f(cardsPerPage, currentPage, results) {
        // Displaying current results
        const rangeForPage = currentPage * cardsPerPage;
        const firstNextResult = rangeForPage - cardsPerPage;
        const currentTodos = results.slice(firstNextResult, rangeForPage);

        const renderTodos = currentTodos.map((todo, index) => {
            return <List key={index} className="list">{todo}</List>;
        });
    }
}

export default LogicCards;