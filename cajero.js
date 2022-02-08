var caja=[];
var div=0, papeles=0;
var guardar=[];
var botoncito=document.getElementById('boton');
var res=document.getElementById('res');
var espacio=document.getElementById('espacio');
var dinero;
var imagenes=[];
const nuevo = document.createElement('button');
imagenes["100"]="100.png";
imagenes["50"]="50.png";
imagenes["20"]="20.png";
imagenes["10"]="10.png";
imagenes["5"]="5.png";
imagenes["1"]="1.png";


  botoncito.addEventListener("click",activarBoton);
  nuevo.addEventListener("click",reload);



class Billete
  {
    constructor(v, c)
    {
        this.valor=v;
        this.cantidad=c;
        this.imagen= new Image;
        this.imagen.src=imagenes[this.valor];
    }
}//clase


    caja.push(new Billete(100,20));
    caja.push(new Billete(50,20));
    caja.push(new Billete(20,30));
    caja.push(new Billete(10,10));
    caja.push(new Billete(5,10));

function activarBoton()
{
  var t=document.getElementById("dinerito");
  dinero=parseInt(t.value);
  for (var p of caja)
    {
      if (dinero>0)
      {
        div=Math.floor(dinero/p.valor);
        if (div>p.cantidad)
        {
          papeles=p.cantidad;
        }
        else
        {
          papeles=div;
        }
        guardar.push(new Billete(p.valor,papeles,p.imagen));
        dinero=dinero-(p.valor*papeles);
        p.cantidad=p.cantidad-papeles;

            console.log(dinero);

      } // if dinero >0 1
    } // for

      if (dinero>0)
        {
          res.innerHTML= "Soy un cajero malo y puedo darte esa cantidad :(";
        }
        else
        {
          espacio.innerHTML= espacio.innerHTML+"Gracias por Utilizar nuestro ATM. Por favor finaliza tu transacción al retirar tus billetes: </br>" + "</br>";
            for (var e of guardar)
              {
                if (e.cantidad>0)
                {
                res.innerHTML= res.innerHTML+ e.cantidad+" Billetes de $" + e.valor + "</br>" ;
                document.body.appendChild(e.imagen);
                }
              }
              nuevo.type = 'button';
              nuevo.innerText = 'Finalizar Transacción';
              document.body.appendChild(nuevo);
        }
}

function reload()
{
  var elements = document.getElementById("dinerito").value="";

  res.innerHTML="</br>"
  espacio.innerHTML="</br>"
  document.body.removeChild(nuevo);
  for (var e of guardar)
    {
      document.querySelector("div.user-panel.main img[src=imagenes[e.valor]");
    }
  dinero=0;
  papeles=0;
  div=0;
  guardar=[];
  }
