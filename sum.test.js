/**
 * Created by pboethig on 07.12.16.
 */
import Test from './sum';

test('1 + 2 = 3', ()=>
{
    var inst = new Test(1,2);

    inst.sum()
});

test('1 - 2 = -1', ()=>
{
    var inst = new Test(1,2);

    inst.subst();
});




