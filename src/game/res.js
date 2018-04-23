

export default function(name) {


    let r = {};
    let count = 0;

    r.name = name;

    r.increment = function(val) {
        count += val;
    }

    r.getCount = function() {
        return count;
    }

    r.update = function(delta) {
        this.increment(delta);
    }

    return r;
}

