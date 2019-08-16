export default function counter(){
  var oDiv = document.createElement('div');
  oDiv.innerHTML = 0;
  oDiv.onclick = function(){
    oDiv.innerHTML = parseInt(oDiv.innerHTML,10)+1;
  }
  document.body.appendChild(oDiv);
}