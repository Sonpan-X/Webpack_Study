function SideBar() {
  var dom = document.getElementById('root');
  var sidebar = document.createElement('div');
  sidebar.innerHTML="我是sidebar";
  dom.append(sidebar);
}

module.exports={
  SideBar
 }