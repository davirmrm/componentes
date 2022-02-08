export const amdToDate = v => {
  if(!v) {
    return null;
  }
  let parts = v.split('-');
  return `${parts[2]}/${parts[1]}/${parts[0]}`
}
