// NAV HIDDEN
var posInicial1=0;
window.onscroll=function(){
	var navLi = document.getElementById('navegador').getElementsByTagName('a');
	var navDiv = document.getElementById('navegador').getElementsByTagName('div');
	if (window.pageYOffset > posInicial1) {
		navegador.style.backgroundColor="#FFF";
		animacionLi(navLi,navDiv);
// solo para la pagina index.html
	if (document.title=="World") {
// Imagenes redes sociales se agrandan cuando scroll va de 400 a 950 px
		if (window.pageYOffset > 400 && window.pageYOffset < 950) {
			for(i=0;i<document.getElementById('socialMedia').getElementsByTagName('li').length;i++){
				document.getElementById('socialMedia').getElementsByTagName('li')[i].style.margin="0 3vw";
				document.getElementById('socialMedia').getElementsByTagName('li')[i].style.transition="1.5s";
				document.getElementById('socialMedia').getElementsByTagName('li')[i].style.width="7vw";
			}
			
		}else{
			for(i=0;i<document.getElementById('socialMedia').getElementsByTagName('li').length;i++){
				document.getElementById('socialMedia').getElementsByTagName('li')[i].style.margin="0 1vw";
				document.getElementById('socialMedia').getElementsByTagName('li')[i].style.width="4vw";
				document.getElementById('socialMedia').getElementsByTagName('li')[i].style.transition="2s";
			}
		}
	
		}
	}else{
		navegador.style.backgroundColor="transparent";
		posInicial(navLi,navDiv);
	}
}

// Funcion activada cuando escroll sea diferente a 0
function animacionLi(li,navDiv){
// Navegador se apmlia cuando la barraScroll sea diferente a 0
	for(i=0 ;i<li.length;i++ ){
			li[i].style.color="#606060";
			li[i].style.margin="1vh 2vw";
			li[i].style.transition="1.5s";
			li[i].style.fontSize="calc(11px + 1vw)";
		}
// Color div que subraya cada li del navegador
	for(i=0 ;i<navDiv.length;i++ ){
		navDiv[i].style.backgroundColor="#53A7FD";
	}
}

// Funcion activada cuando es crol sea 0
function posInicial(li,navDiv){
	if (document.title=="World"){
// Navegador se reduce cuando la barraScroll sea 0
		for(i=0 ;i<li.length;i++ ){
			li[i].style.color="#ffffff";
			li[i].style.margin="0";
			li[i].style.transition="1.5s";
			li[i].style.fontSize="calc(8px + 1vw)";
		}
// Color div que subraya cada li del navegador
		for(i=0 ;i<navDiv.length;i++ ){
			navDiv[i].style.backgroundColor="#ffffff";
		}
	}
// Nueva posicion inicial del menu cuando esta en guides.HTML
	if (document.title=="Guides"){
		for(i=0 ;i<li.length;i++ ){
			li[i].style.color="#606060";
			li[i].style.margin="0";
			li[i].style.transition="1.5s";
			li[i].style.fontSize="calc(8px + 1vw)";
		}
		for(i=0 ;i<navDiv.length;i++ ){
			navDiv[i].style.backgroundColor="#53A7FD";
		}
	}

	

}
// aparicion del los texstos anclados a los articulos 2 y 3
function japon(aparecer){
	aparecer.style.opacity="1";

}
function japon1(desaparecer){
	desaparecer.style.opacity="0";
}
// aparicion i desapaicion de la descripcion en los articulos situados en guides.html
function desaparecer(article){
	article.getElementsByTagName('div')[0].classList.remove('unhover');
	article.getElementsByTagName('div')[0].classList.add('hover');
}
function aparecer(article){
	article.getElementsByTagName('div')[0].classList.add('unhover');
	article.getElementsByTagName('div')[0].classList.remove('hover');
}

// Galeria de imagenes

// tiempo de transicion entre imagenes
if (document.title=='World') {
	setInterval("tiempo()",2000);
	var t=true;
	var x=0;
	function tiempo(){
		if (t==true) {
			x++;
			galeria();
		}
	}
	// cambio de imagnes segun el tiempo
	function galeria(){
		if (x==-1) {
			x=9;
		}
		for(i=0;i<document.getElementById('mainS').getElementsByTagName('div').length;i++){
			document.getElementById('mainS').getElementsByTagName('div')[i].getElementsByTagName('img')[0].src='img/streetArt/img'+(x+i)+'.jpg';

		}
		if (x==6) {
			document.getElementById('mainS').getElementsByTagName('div')[4].getElementsByTagName('img')[0].src='img/streetArt/img0.jpg';

		}
		if (x==7) {
			document.getElementById('mainS').getElementsByTagName('div')[3].getElementsByTagName('img')[0].src='img/streetArt/img0.jpg';
			document.getElementById('mainS').getElementsByTagName('div')[4].getElementsByTagName('img')[0].src='img/streetArt/img1.jpg';
		}
		if (x==8) {
			for(i=0;i<3;i++){
				document.getElementById('mainS').getElementsByTagName('div')[i+2].getElementsByTagName('img')[0].src='img/streetArt/img'+i+'.jpg';
			}
		}
		if (x==9) {
			for(i=0;i<4;i++){
				document.getElementById('mainS').getElementsByTagName('div')[i+1].getElementsByTagName('img')[0].src='img/streetArt/img'+i+'.jpg';
			}
		}
		if (x==10) {
			x=0;
			for(i=0;i<document.getElementById('mainS').getElementsByTagName('div').length;i++){
				document.getElementById('mainS').getElementsByTagName('div')[i].getElementsByTagName('img')[0].src='img/streetArt/img'+(x+i)+'.jpg';
			}
		}
	}
	function derecha(){
		x++;
		galeria();
	}
	function izquierda(){
		x--;
		galeria();
	}
	function pausa(){
		t=false;
	}
	function renaudar(){
		t=true;
	}
	// crear Array 
	var imagenes =[ ['Little India - Singapur', '09/07/2016'],
					['Sofia - Bulgaria', '09/07/2016'],
					['Little India-Singapur', '09/07/2016'],
					['Kyoto - Japan','09/07/2016'],
					['Tokyo - Japan','09/07/2016'],
					['Hong-Kong', '09/07/2016'],
					['Pamplona - Navarra','09/07/2016'],
					['Taormina - Italy','09/07/2016'],
					['Valencia','09/07/2016'],
					['Galway - Irlanda','09/07/2016']
					];
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!En funcion de la ruta donde se encuentra la image!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	for (let i = 0; i < imagenes.length; i++) {
		imagenes[i][2]='file:///C:/Users/a8alumno/Documents/ProyectoWeb/ img/streetArt/img'+i+'.jpg';
	}
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!En funcion de la ruta donde se encuentra la image!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	function agrandar(element){
		// alert(element.src);
		var imagenActual=0;
		// alert(imagenes[0][2]);
		// alert(imagenes[0][2].indexOf(element.src));
		for (var i = 0; i < imagenes.length; i++) {
			if (imagenes[i][2] == element.src) {
				imagenActual= i;
				
			}
		}
		
	// creacion figure fixed
		var figure= document.createElement('figure');
		figure.setAttribute('class','pantallacompleta');
	// creacion flecha izquierda
		var contBotonL=document.createElement('figure');
		var	botonL=document.createElement('img');
		contBotonL.setAttribute('class','flechaPC');
		contBotonL.appendChild(botonL);
		botonL.setAttribute('src','img/felcha.png');
		botonL.setAttribute('class','flechasEscala' );
		botonL.onclick= function(){
			imagenActual--;
			if (imagenActual<0) {
				imagenActual=9;
			}
			if (imagenActual>9) {
				imagenActual=0;
			}
			imagen.setAttribute('src','img/streetArt/img'+(imagenActual)+'.jpg');
			localidadImg.innerHTML= imagenes[imagenActual][0];
			fechaImg.innerHTML= imagenes[imagenActual][1];
		}
		figure.appendChild(contBotonL);
	// creacion imagen central
		var imagen = document.createElement('img');
		var figureImagen = document.createElement('figure');
		imagen.setAttribute('src', element.src);
		figureImagen.appendChild(imagen)
		imagen.onclick = function () {figure.remove(); }
		figure.appendChild(figureImagen);
	// creacion flecha derecha
		var contBotonR=document.createElement('figure');
		var	botonR=document.createElement('img');
		contBotonR.appendChild(botonR);
		contBotonR.setAttribute('class','flechaPC');
		botonR.setAttribute('src','img/felcha.png');
		botonR.setAttribute('class','rotate180deg flechasEscala' );
		botonR.onclick= function(){
			imagenActual++;
			if (imagenActual<0) {
				imagenActual=9;
			}
			if (imagenActual>9) {
				imagenActual=0;
			}
			imagen.setAttribute('src','img/streetArt/img'+(imagenActual)+'.jpg');
			localidadImg.innerHTML= imagenes[imagenActual][0];
			fechaImg.innerHTML= imagenes[imagenActual][1];
		}
		figure.appendChild(contBotonR);
		// Span de nombre i fecha
		var localidadImg = document.createElement('span');
		localidadImg.innerHTML= imagenes[imagenActual][0];
		var fechaImg = document.createElement('span');
		fechaImg.innerHTML= imagenes[imagenActual][1];
		figureImagen.appendChild(localidadImg);
		figureImagen.appendChild(fechaImg);
	// insertar figure como hijo de body 
		document.body.appendChild(figure);
		
	}
}



// Seleccion de comidas en relacion a su continente
// 9 articulos en total(0-8)
// Asia(0) 0,3,8
// Europa(1) 1,2,5
// America(2) 4,6,7

function sleccion(n){
	if (n==0) {
		
		for (var i = 0; i < document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article').length; i++) {
				switch (i){
					case (0):case (3):case (8):
					document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article')[i].style.display="initial";
					break;
					default:
					document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article')[i].style.display="none";
					break;
				}
		}
	}
	if (n==1) {
		
		for (var i = 0; i < document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article').length; i++) {
				switch (i){
					case (1):case (2):case (5):
					document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article')[i].style.display="initial";
					break;
					default:
					document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article')[i].style.display="none";
					break;
				}
		}
	}
	if (n==2) {
		
		for (var i = 0; i < document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article').length; i++) {
				switch (i){
					case (4):case (6):case (7):
					document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article')[i].style.display="initial";
					break;
					default:
					document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article')[i].style.display="none";
					break;
				}
		}
	}
	if (n==3) {
		
		for (var i = 0; i < document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article').length; i++) {
				
					document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('article')[i].style.display="initial";
		}
	}



}
	



