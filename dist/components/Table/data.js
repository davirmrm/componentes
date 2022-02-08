"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataExample = exports.columnDefExample = exports.localeTxt = exports.columnDef = void 0;
var columnDef = [{
  headerName: 'ID',
  maxWidth: 100,
  valueGetter: 'node.id',
  // posso passar alguma função pra gerar o valor
  cellRenderer: 'loadingRenderer' // Renderizador da célula

}, {
  field: 'athlete',
  minWidth: 150,
  filter: true
}, {
  field: 'age',
  filter: 'agNumberColumnFilter'
}, {
  field: 'country',
  minWidth: 150
}, {
  field: 'year'
}, {
  field: 'date',
  minWidth: 150,
  filter: 'agDateColumnFilter'
}, {
  field: 'sport',
  minWidth: 150
}, {
  field: 'gold'
}, {
  field: 'silver'
}, {
  field: 'bronze'
}, {
  field: 'total'
}];
exports.columnDef = columnDef;
var localeTxt = {
  //  for filter panel
  page: 'Página',
  more: 'Total',
  to: 'a',
  of: 'de',
  next: 'daNexten',
  last: 'daLasten',
  first: 'daFirsten',
  previous: 'daPreviousen',
  loadingOoo: 'daLoading...',
  //  for set filter
  selectAll: 'daSelect Allen',
  searchOoo: 'daSearch...',
  blanks: 'daBlanc',
  //  for number filter and text filter
  filterOoo: 'daFilter...',
  equals: 'daEquals',
  notEqual: 'daNotEqual',
  //  for the date filter
  dateFormatOoo: 'daYyyy-mm-dd',
  //  for number filter
  lessThan: 'daLessThan',
  greaterThan: 'daGreaterThan',
  lessThanOrEqual: 'daLessThanOrEqual',
  greaterThanOrEqual: 'daGreaterThanOrEqual',
  inRange: 'daInRange',
  inRangeStart: 'daTo',
  inRangeEnd: 'daFrom',
  //  for text filter
  contains: 'daContains',
  notContains: 'daNotContains',
  startsWith: 'daStarts dawith',
  endsWith: 'daEnds dawith',
  //  filter conditions
  andCondition: 'daAND',
  orCondition: 'daOR',
  //  filter buttons
  applyFilter: 'daApply',
  resetFilter: 'daReset',
  clearFilter: 'daClear',
  //  the header of the default group column
  group: 'laGroup',
  //  tool panel
  columns: 'laColumns',
  filters: 'laFilters',
  rowGroupColumns: 'laPivot Cols',
  rowGroupColumnsEmptyMessage: 'la drag cols to group',
  valueColumns: 'laValue Cols',
  pivotMode: 'laPivot-Mode',
  groups: 'laGroups',
  values: 'laValues',
  pivots: 'laPivots',
  valueColumnsEmptyMessage: 'la drag cols to aggregate',
  pivotColumnsEmptyMessage: 'la drag here to pivot',
  toolPanelButton: 'la tool panel',
  //  other
  noRowsToShow: ' ',
  enabled: 'laEnabled',
  //  enterprise menu
  pinColumn: 'laPin Column',
  valueAggregation: 'laValue Agg',
  autosizeThiscolumn: 'laAutosize Diz',
  autosizeAllColumns: 'laAutsoie em All',
  groupBy: 'laGroup by',
  ungroupBy: 'laUnGroup by',
  resetColumns: 'laReset Those Cols',
  expandAll: 'laOpen-em-up',
  collapseAll: 'laClose-em-up',
  toolPanel: 'laTool Panelo',
  "export": 'laExporto',
  csvExport: 'laCSV Exportp',
  excelExport: 'laExcel Exporto (.xlsx)',
  excelXmlExport: 'laExcel Exporto (.xml)',
  //  enterprise menu (charts)
  pivotChartAndPivotMode: 'laPivot Chart & Pivot Mode',
  pivotChart: 'laPivot Chart',
  chartRange: 'laChart Range',
  columnChart: 'laColumn',
  groupedColumn: 'laGrouped',
  stackedColumn: 'laStacked',
  normalizedColumn: 'la100% Stacked',
  barChart: 'laBar',
  groupedBar: 'laGrouped',
  stackedBar: 'laStacked',
  normalizedBar: 'la100% Stacked',
  pieChart: 'laPie',
  pie: 'laPie',
  doughnut: 'laDoughnut',
  line: 'laLine',
  xyChart: 'laX Y (Scatter)',
  scatter: 'laScatter',
  bubble: 'laBubble',
  areaChart: 'laArea',
  area: 'laArea',
  stackedArea: 'laStacked',
  normalizedArea: 'la100% Stacked',
  histogramChart: 'laHistogram',
  //  enterprise menu pinning
  pinLeft: 'laPin <<',
  pinRight: 'laPin >>',
  noPin: 'laDontPin <>',
  //  enterprise menu aggregation and status bar
  sum: 'laSum',
  min: 'laMin',
  max: 'laMax',
  none: 'laNone',
  count: 'laCount',
  avg: 'laAverage',
  filteredRows: 'laFiltered',
  selectedRows: 'laSelected',
  totalRows: 'laTotal Rows',
  totalAndFilteredRows: 'laRows',
  //  standard menu
  copy: 'laCopy',
  copyWithHeaders: 'laCopy With Headers',
  ctrlC: 'laCtrl n C',
  paste: 'laPaste',
  ctrlV: 'laCtrl n V',
  //  charts
  pivotChartTitle: 'laPivot Chart',
  rangeChartTitle: 'laRange Chart',
  settings: 'laSettings',
  data: 'laData',
  format: 'laFormat',
  categories: 'laCategories',
  defaultCategory: '(laNone)',
  series: 'laSeries',
  xyValues: 'laX Y Values',
  paired: 'laPaired Mode',
  axis: 'laAxis',
  color: 'laColor',
  thickness: 'laThickness',
  xType: 'laX Type',
  automatic: 'laAutomatic',
  category: 'laCategory',
  number: 'laNumber',
  time: 'laTime',
  xRotation: 'laX Rotation',
  yRotation: 'laY Rotation',
  ticks: 'laTicks',
  width: 'laWidth',
  length: 'laLength',
  padding: 'laPadding',
  chart: 'laChart',
  title: 'laTitle',
  background: 'laBackground',
  font: 'laFont',
  top: 'laTop',
  right: 'laRight',
  bottom: 'laBottom',
  left: 'laLeft',
  labels: 'laLabels',
  size: 'laSize',
  minSize: 'laMinimum Size',
  maxSize: 'laMaximum Size',
  legend: 'laLegend',
  position: 'laPosition',
  markerSize: 'laMarker Size',
  markerStroke: 'laMarker Stroke',
  markerPadding: 'laMarker Padding',
  itemPaddingX: 'laItem Padding X',
  itemPaddingY: 'laItem Padding Y',
  strokeWidth: 'laStroke Width',
  offset: 'laOffset',
  offsets: 'laOffsets',
  tooltips: 'laTooltips',
  callout: 'laCallout',
  markers: 'laMarkers',
  shadow: 'laShadow',
  blur: 'laBlur',
  xOffset: 'laX Offset',
  yOffset: 'laY Offset',
  lineWidth: 'laLine Width',
  normal: 'laNormal',
  bold: 'laBold',
  italic: 'laItalic',
  boldItalic: 'laBold Italic',
  predefined: 'laPredefined',
  fillOpacity: 'laFill Opacity',
  strokeOpacity: 'laLine Opacity',
  histogramBinCount: 'laBin Count',
  columnGroup: 'laColumn',
  barGroup: 'laBar',
  pieGroup: 'laPie',
  lineGroup: 'laLine',
  scatterGroup: 'laScatter',
  areaGroup: 'laArea',
  histogramGroup: 'laHistogram',
  groupedColumnTooltip: 'laGrouped',
  stackedColumnTooltip: 'laStacked',
  normalizedColumnTooltip: 'la100% Stacked',
  groupedBarTooltip: 'laGrouped',
  stackedBarTooltip: 'laStacked',
  normalizedBarTooltip: 'la100% Stacked',
  pieTooltip: 'laPie',
  doughnutTooltip: 'laDoughnut',
  lineTooltip: 'laLine',
  groupedAreaTooltip: 'laGrouped',
  stackedAreaTooltip: 'laStacked',
  normalizedAreaTooltip: 'la100% Stacked',
  scatterTooltip: 'laScatter',
  bubbleTooltip: 'laBubble',
  histogramTooltip: 'laHistogram',
  noDataToChart: 'laNo data available to be charted.',
  pivotChartRequiresPivotMode: 'laPivot Chart requires Pivot Mode enabled.'
};
exports.localeTxt = localeTxt;
var columnDefExample = [{
  headerName: 'Make',
  field: 'make',
  filter: true,
  sortable: true
}, {
  headerName: 'Model',
  field: 'model'
}, {
  headerName: 'Price',
  field: 'price'
}];
exports.columnDefExample = columnDefExample;
var dataExample = [{
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}, {
  make: 'Toyota',
  model: 'Celica',
  price: 35000
}, {
  make: 'Ford',
  model: 'Mondeo',
  price: 32000
}, {
  make: 'Porsche',
  model: 'Boxter',
  price: 72000
}];
exports.dataExample = dataExample;