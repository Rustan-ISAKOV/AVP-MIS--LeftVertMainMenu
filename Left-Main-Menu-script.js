function menuInit() {
	var dropdown = document.getElementById("dropdown-item");
	var dropdown2 = document.getElementById("dropdown-item2");
  	var dropdown3 = document.getElementById("dropdown-item3");

	var submenu = document.getElementById("submenu");
	var submenu2 = document.getElementById("submenu2");
  	var submenu3 = document.getElementById("submenu3");


	dropdown.onmouseover = popOutMenu;
	dropdown.onmouseout = hideDropdown;
	dropdown2.onmouseover = popOutMenu2;
	dropdown2.onmouseout = hideDropdown2;
	dropdown3.onmouseover = popOutMenu3;
	dropdown3.onmouseout = hideDropdown3;  

	submenu.onmouseover = popOutMenu;
	submenu.onmouseout = hideDropdown;
	submenu2.onmouseover = popOutMenu2;
	submenu2.onmouseout = hideDropdown2;
	submenu3.onmouseover = popOutMenu3;
	submenu3.onmouseout = hideDropdown3;  
}

function popOutMenu () {
	submenu.className = "show-submenu";
}

function hideDropdown () {
	submenu.className = "hide-submenu";
}

function popOutMenu2 () {
	submenu2.className = "show-submenu2";
}

function hideDropdown2 () {
	submenu2.className = "hide-submenu2";
}

function popOutMenu3 () {
	submenu3.className = "show-submenu3";
}

function hideDropdown3 () {
	submenu3.className = "hide-submenu3";
}
