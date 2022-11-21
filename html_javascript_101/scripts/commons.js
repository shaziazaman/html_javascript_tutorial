function createHeader(base_path){
    header_content =  "<header><a href='" + base_path + "/index.html'><h2>Home</h2></a></header>"
    document.getElementById("header").innerHTML = header_content
}

function createFooter(){
    footer_content = "<footer>Copyright &copy; Shazia Zaman</footer>";
    document.getElementById("footer").innerHTML = footer_content
}
function redirectAlert(){
	alert("Leaving Personal page. You will be redirected to selected website.")
}
