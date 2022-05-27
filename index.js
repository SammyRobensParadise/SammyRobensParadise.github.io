function searchText(value) {
  const listItems = Array.from(document.getElementById('wiki-list').children);
  if (value === '') {
    listItems.forEach(function (listItem) {
      listItem.style.display = 'list-item';
    });
  } else {
    listItems.forEach(function (listItem) {
      const hasText = listItem.innerHTML.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      if (!hasText) {
        listItem.style.display = 'none';
      } else {
        listItem.style.display = 'list-item';
      }
    });
  }
}

function clearSearch() {
  document.getElementById('wiki-search-input').value = '';
  const listItems = Array.from(document.getElementById('wiki-list').children);
  listItems.forEach(function (listItem) {
    listItem.style.display = 'list-item';
  });
}
