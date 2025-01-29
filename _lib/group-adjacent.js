// algorithmn copied from https://rlaanemets.com/post/show/group-array-by-adjacent-elements-in-javascript
function groupAdjacent(array, cb) {
  return array.reduce((prev, cur) => {
    if (prev.length > 0) {
      const group = prev[prev.length - 1];
      const last = group[group.length - 1];
      if (cb(last, cur)) {
        group.push(cur);
      } else {
        prev.push([cur]);
      }
    } else {
      prev.push([cur]);
    }
    return prev;
  }, []);
}

export default groupAdjacent;
