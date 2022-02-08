import { sortAndFilter } from './sortAndFilter';

export const requestToBackEnd = (data, params) => {
  const dataAfterSortingAndFiltering = sortAndFilter(
    data,
    params.sortModel,
    params.filterModel
  );
  const rowsThisPage = dataAfterSortingAndFiltering.slice(
    params.startRow,
    params.endRow
  );
  let lastRow = -1;
  if (dataAfterSortingAndFiltering.length <= params.endRow) {
    lastRow = dataAfterSortingAndFiltering.length;
  }
  return {rowsThisPage, lastRow}
}