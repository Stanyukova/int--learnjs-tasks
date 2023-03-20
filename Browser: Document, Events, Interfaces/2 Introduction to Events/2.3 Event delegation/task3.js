// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

grid.addEventListener('click', (event) => {
    if(event.target.tagName !== 'TH') {return}
    let tbody = grid.querySelector('tbody');
    let index = event.target.cellIndex;
    let type = event.target.dataset.type;
    let rows = Array.from(tbody.rows);
    let sortedRows;
    if (type === 'string') {
        sortedRows = rows.sort((rowA, rowB) => rowA.cells[index].textContent.localeCompare(rowB.cells[index].textContent));
    }
    if (type === 'number') {
        sortedRows = rows.sort((rowA, rowB) => rowA.cells[index].textContent - rowB.cells[index].textContent);
    }
    tbody.append(...sortedRows);       
});