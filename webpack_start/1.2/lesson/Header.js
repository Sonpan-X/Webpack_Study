function Header() {
  var dom = document.getElementById('root');
  var header = document.createElement('div');
  header.innerHTML="我是header";
  dom.append(header);
}

module.exports={
  Header
 }