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
		if (x==0 && x<6) {
			for(i=0;i<document.getElementById('mainS').getElementsByTagName('div').length;i++){
				document.getElementById('mainS').getElementsByTagName('div')[i].getElementsByTagName('img')[0].src='img/streetArt/img'+(x+i)+'.jpg';
				document.getElementById('mainS').getElementsByTagName('div')[i].getElementsByTagName('img')[0].dataset.lugar = imagenes[x+i][0];
				document.getElementById('mainS').getElementsByTagName('div')[i].getElementsByTagName('img')[0].dataset.fecha = imagenes[x+i][1];
			
		}


		}
		if (x==6) {
			document.getElementById('mainS').getElementsByTagName('div')[4].getElementsByTagName('img')[0].src='img/streetArt/img0.jpg';
			document.getElementById('mainS').getElementsByTagName('div')[4].getElementsByTagName('img')[0].dataset.lugar = imagenes[0][0];
			document.getElementById('mainS').getElementsByTagName('div')[4].getElementsByTagName('img')[0].dataset.fecha = imagenes[0][1];

		}
		if (x==7) {
			document.getElementById('mainS').getElementsByTagName('div')[3].getElementsByTagName('img')[0].src='img/streetArt/img0.jpg';
			document.getElementById('mainS').getElementsByTagName('div')[4].getElementsByTagName('img')[0].src='img/streetArt/img1.jpg';
			document.getElementById('mainS').getElementsByTagName('div')[3].getElementsByTagName('img')[0].dataset.lugar = imagenes[0][0];
			document.getElementById('mainS').getElementsByTagName('div')[3].getElementsByTagName('img')[0].dataset.fecha = imagenes[0][1];
			document.getElementById('mainS').getElementsByTagName('div')[4].getElementsByTagName('img')[0].dataset.lugar = imagenes[1][0];
			document.getElementById('mainS').getElementsByTagName('div')[4].getElementsByTagName('img')[0].dataset.fecha = imagenes[1][1];
		}
		if (x==8) {
			for(i=0;i<3;i++){
				document.getElementById('mainS').getElementsByTagName('div')[i+2].getElementsByTagName('img')[0].src='img/streetArt/img'+i+'.jpg';
				document.getElementById('mainS').getElementsByTagName('div')[i+2].getElementsByTagName('img')[0].dataset.lugar = imagenes[i][0];
				document.getElementById('mainS').getElementsByTagName('div')[i+2].getElementsByTagName('img')[0].dataset.fecha = imagenes[i][1];
			}
		}
		if (x==9) {
			for(i=0;i<4;i++){
				document.getElementById('mainS').getElementsByTagName('div')[i+1].getElementsByTagName('img')[0].src='img/streetArt/img'+i+'.jpg';
				document.getElementById('mainS').getElementsByTagName('div')[i+1].getElementsByTagName('img')[0].dataset.lugar = imagenes[i][0];
				document.getElementById('mainS').getElementsByTagName('div')[i+1].getElementsByTagName('img')[0].dataset.fecha = imagenes[i][1];
				alert('x = 9');
			}
		}
		if (x>9) {
			x=0;
			for(i=0;i<document.getElementById('mainS').getElementsByTagName('div').length;i++){
				document.getElementById('mainS').getElementsByTagName('div')[i].getElementsByTagName('img')[0].src='img/streetArt/img'+(x+i)+'.jpg';
				document.getElementById('mainS').getElementsByTagName('div')[i].getElementsByTagName('img')[0].dataset.lugar = imagenes[x+i][0];
				document.getElementById('mainS').getElementsByTagName('div')[i].getElementsByTagName('img')[0].dataset.fecha = imagenes[x+i][1];
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
	for (let i = 0; i < imagenes.length; i++) {
		imagenes[i][2]='img/streetArt/img'+i+'.jpg';
	}
	function agrandar(element){

		var imagenActual=0;
		for (var i = 0; i < imagenes.length; i++) {
			if (imagenes[i].src == element.src) {
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
		localidadImg.innerHTML= element.dataset.lugar;
		var fechaImg = document.createElement('span');
		fechaImg.innerHTML= element.dataset.fecha;
		figureImagen.appendChild(localidadImg);
		figureImagen.appendChild(fechaImg);
	// insertar figure como hijo de body 
		document.body.appendChild(figure);
	}
}
	



