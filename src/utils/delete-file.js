const deleteRow = document.querySelectorAll('#excluir abbr img');

deleteRow.forEach(deleteIcon => {
  deleteIcon.addEventListener('click', () => {
    const tableRow = deleteIcon.closest('tr');
    tableRow.parentNode.removeChild(tableRow);
  });
});