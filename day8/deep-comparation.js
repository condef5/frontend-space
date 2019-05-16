function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (
    o1 == null ||
    typeof o1 != 'object' ||
    o2 == null ||
    typeof o2 != 'object'
  )
    return false;

  for (let prop in o2) {
    if (!(prop in o1) || !deepCompare(o1[prop], o2[prop])) return false;
  }

  return Object.keys(o1).length == Object.keys(o2).length;
}

deepCompare({ d: 11, b: {}, b: {} }, { b: {}, d: 11 });
