// function *select(){
//   yield 1
//   yield 2
// }

// let it = select()
// console.log(it.next());

function *gen(){
    yield 'sports';
    yield 'coocking';
    }
  
  let obj = {
    [Symbol.iterator]:gen
  }
  
  for(let element of obj){
    console.log(element)
  }


  function *gen1(end){
    for(let i=0;i<end;i++){
        try{
            yield i;
        }catch(e){
            console.log(e)
        }
    }
  }

  let it = gen1(3);
  console.log(it.next())
  console.log(it.next())
  console.log(it.throw('error occured'))
  console.log(it.next())
  console.log(it.next())
