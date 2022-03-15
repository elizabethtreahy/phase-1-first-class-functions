
const spy = chai.spy();
function receivesAFunction (spy) {
  return spy();
}

receivesAFunction(spy);


function returnsANamedFunction() {
  function hello() {};
  return hello;
}

 function returnsAnAnonymousFunction() {

   return ()=>{};
 }
