export function sortDate(itemArray) {
  itemArray.sort((a, b) => {
    if (a.useByDate < b.useByDate) {
      return -1;
    }
    if (a.useByDate > b.useByDate) {
      return 1;
    }

    return 0;
  });
  return itemArray;
}
