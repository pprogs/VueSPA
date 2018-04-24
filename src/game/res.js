export default function(id, name) {
  let r = {};
  let count = 0;

  r.name = name;
  r.id = id;

  r.produce = function(val) {
    count += val;
  };

  r.consume = function(val) {
    if (val > count) {
      return false;
    }
    count -= val;
    return true;
  };

  r.count = function() {
    return count;
  };

  r.update = function(delta) {
    count += r.id;
  };

  return r;
}
