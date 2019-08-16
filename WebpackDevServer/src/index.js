// console.log('hello world! pingk xpkkkkkkk!!!!!!');
import counter from '../../Hot Module Repalcement/src/counter';
import number from '../../Hot Module Repalcement/src/number';

counter();
number();

if(module.hot){
  module.hot.accept('./number',()=>{
  	document.body.removeChild(document.getElementById('number'));
		number();
  })
}