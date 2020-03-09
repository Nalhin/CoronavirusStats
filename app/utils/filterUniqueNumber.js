export function filterUniqueNumber(a, propertyName) {
  return a.filter(function(item, pos, ary) {
    if (item[propertyName] === 0) {
      return ary[pos + 1][propertyName] !== 0;
    }
    return !pos || item[propertyName] !== ary[pos - 1][propertyName];
  });
}
