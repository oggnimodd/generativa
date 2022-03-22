export const rowsFromArray = (arr, cols, pattern) => {
  // Special case for scribble
  cols = pattern === 'scribble' ? cols - 2 : cols;

  const collectRows = [];

  let oneRow = [];
  for (let i = 0; i < arr.length; i += 1) {
    oneRow.push(arr[i]);

    if(oneRow.length === cols) {
      collectRows.push(oneRow);
      oneRow = [];
    }
  }

  return collectRows;
};
