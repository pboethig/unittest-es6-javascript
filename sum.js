
import Test2 from './Test2.js';

class Test extends Test2
{
    constructor(x, y) {

        super();
    }

    sum() {
        return this.x + this.y;
    }
}

export default Test;