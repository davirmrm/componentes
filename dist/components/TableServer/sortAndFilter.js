"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortAndFilter = void 0;

var sortAndFilter = function sortAndFilter(allOfTheData, sortModel, filterModel) {
  return sortData(sortModel, filterData(filterModel, allOfTheData));
};

exports.sortAndFilter = sortAndFilter;

function sortData(sortModel, data) {
  var sortPresent = sortModel && sortModel.length > 0;

  if (!sortPresent) {
    return data;
  }

  var resultOfSort = data.slice();
  resultOfSort.sort(function (a, b) {
    for (var k = 0; k < sortModel.length; k++) {
      var sortColModel = sortModel[k];
      var valueA = a[sortColModel.colId];
      var valueB = b[sortColModel.colId];

      if (valueA == valueB) {
        continue;
      }

      var sortDirection = sortColModel.sort === 'asc' ? 1 : -1;

      if (valueA > valueB) {
        return sortDirection;
      } else {
        return sortDirection * -1;
      }
    }

    return 0;
  });
  return resultOfSort;
}

function filterData(filterModel, data) {
  var filterPresent = filterModel && Object.keys(filterModel).length > 0;

  if (!filterPresent) {
    return data;
  }

  var resultOfFilter = [];

  for (var i = 0; i < data.length; i++) {
    var item = data[i];

    if (filterModel.age) {
      var age = item.age;
      var allowedAge = parseInt(filterModel.age.filter);

      if (filterModel.age.type == 'equals') {
        if (age !== allowedAge) {
          continue;
        }
      } else if (filterModel.age.type == 'lessThan') {
        if (age >= allowedAge) {
          continue;
        }
      } else {
        if (age <= allowedAge) {
          continue;
        }
      }
    }

    if (filterModel.year) {
      if (filterModel.year.values.indexOf(item.year.toString()) < 0) {
        continue;
      }
    }

    if (filterModel.country) {
      if (filterModel.country.values.indexOf(item.country) < 0) {
        continue;
      }
    }

    resultOfFilter.push(item);
  }

  return resultOfFilter;
}