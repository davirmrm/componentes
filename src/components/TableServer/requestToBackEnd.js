import { sortAndFilter } from './sortAndFilter';

export const requestToBackEnd = async (data, params) => {
  const res = await new Promise((resolve, reject) => {
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
    resolve({rowsThisPage, lastRow})
  });
  return [];
  return res;
}