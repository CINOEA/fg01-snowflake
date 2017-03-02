var canvas = document.createElement('canvas'); 
canvas.style.position = 'fixed'; 
canvas.style.top = '0px'; 
canvas.style.left = '0px'; 
canvas.style.zIndex = '-10'; 
canvas.width = document.body.offsetWidth; 
canvas.height = window.innerHeight; 
document.body.insertBefore(canvas, document.body.firstChild);
var N = 0;
var lineLenght = 200;
var sky = canvas.getContext('2d');
var deg = Math.PI / 180;
function leg(n,len){
	sky.save();
	if(n == 0)
	{
		sky.lineTo(len, 0);
	}
	else {
		sky.scale(1/3,1/3);
		leg(n-1,len);
		sky.rotate(60*deg);
		leg(n-1,len);
		sky.rotate(-120*deg);
		leg(n-1,len);
		sky.rotate(60*deg);
		leg(n-1,len);
	}
	sky.restore();
	sky.translate(len,0);
}

function drawFlake(x, y, len, n, stroke, fill) { 
	sky.save();
	sky.strokeStyle = stroke; 
	sky.fillStyle = fill; 
	sky.beginPath(); 
	sky.translate(x, y); 
	sky.moveTo(0, 0);
	leg(n, len);
	sky.rotate(-120*deg);
	leg(n, len);
	sky.rotate(-120*deg);
	leg(n, len);
	sky.closePath(); 
	sky.fill(); 
	sky.stroke(); 
	sky.restore(); 
}

function inputN() {
		sky.clearRect(0,0,canvas.width,canvas.height);
		if(isNaN(parseInt(document.getElementById("LL").value))==false){
			lineLenght = Math.abs(parseInt(document.getElementById("LL").value));
			//canvas.height = lineLenght*2;//Думал что будет неплохая идея, но не стал усложнять себе задачу
			//canvas.width = lineLenght*2;
		}
		if(isNaN(parseInt(document.getElementById("inputN").value))==false)
			N = Math.abs(parseInt(document.getElementById("inputN").value))-1;
		else {
			alert("НЕОБХОДИМО ВВЕСТИ ЧИСЛЕННОЕ ЗНАЧЕНИЕ N\nЗНАЧЕНИЕ N БУДЕТ ИСТАЛКОВАНО КАК ЕДИНИЦА");
			N = 0;
		}
		if(N!=(-1))
			drawFlake((canvas.width-lineLenght)/2,(canvas.height+(lineLenght*2)/3)/2,lineLenght,N,"black","white");
		else
			alert("N ЗАФИКСИРОВАННО КАК НОЛЬ");
}
