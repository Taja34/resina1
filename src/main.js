let data = {
  "categorias":[{

      "nombre":"Pisos",
      "opciones":[{
          "nombre":"dos colores",
          "imagen":"./src/img/pisos/dos colores/muestra.jpeg",
          "opcions":[{
              "nombre":"marmoleo",
              "imagen":"./img/pisos/dos colores/pisos1.jpeg",
              "imagen2":"./img/pisos/dos colores/pisos2.jpeg",
              "imagen3":"./img/pisos/dos colores/pisos3.jpeg",
              "imagen4":"./img/pisos/dos colores/pisos4.jpeg",
              "precio":20000
                          }]
      },
  {
      "nombre":"tres colores",
      "imagen":"./img/pisos/tres colores/muestra.jpeg",
      "opcions":[{
          "nombre":"marmoleo",
          "imagen":"./img/pisos/tres colores/pisos1.jpeg",
          "imagen2":"./img/pisos/tres colores/pisos2.jpeg",
          "imagen3":"./img/pisos/tres colores/pisos3.jpeg",
          "imagen4":"./img/pisos/tres colores/pisos4.jpeg",
          "precio":2000
                      }]
  }]
        
  },{

      "nombre":"Mesas",
      "opciones":[
  {
      "nombre":"dos colores",
      "imagen":"./img/mesas/dos colores/muestra.jpeg",
      "opcions":[{
          "nombre":"marmoleo",
          "imagen":"./img/pisos/dos colores/pisos1.jpeg",
          "imagen2":"./img/pisos/dos colores/pisos2.jpeg",
          "imagen3":"./img/pisos/dos colores/pisos3.jpeg",
          "imagen4":"./img/pisos/dos colores/pisos4.jpeg",
          "precio":2000
                      }]
  },{
      "nombre":"tres colores",
      "imagen":"./img/mesas/dos colores/muestra.jpeg",
      "opcions":[{
          "nombre":"marmoleo",
          "imagen:":"./img/pisos/tres colores/pisos1.jpeg",
          "imagen2":"./img/pisos/tres colores/pisos2.jpeg",
          "imagen3":"./img/pisos/tres colores/pisos3.jpeg",
          "imagen4":"./img/pisos/tres colores/pisos4.jpeg",
          "precio":2000
                      }]
  }]
        
  },{

      "nombre":"Mesones",
      "opciones":[{
          "nombre":"dos colores",
          "imagen":"./img/mesones/dos colores/muestra.jpeg",
          "opcions":[{
              "nombre":"marmoleo",
              "imagen":"./img/pisos/dos colores/pisos1.jpeg",
              "imagen2":"./img/pisos/dos colores/pisos2.jpeg",
              "imagen3":"./img/pisos/dos colores/pisos3.jpeg",
              "imagen4":"./img/pisos/dos colores/pisos4.jpeg",
              "precio":2000
                          }]
      },
  {
      "nombre":"dos colores",
      "imagen":"./img/mesones/tres colores/muestra.jpeg",
      "opcions":[{
          "nombre":"marmoleo",
          "imagen":"./img/pisos/dos colores/pisos1.jpeg",
          "imagen2":"./img/pisos/dos colores/pisos2.jpeg",
          "imagen3":"./img/pisos/dos colores/pisos3.jpeg",
          "imagen4":"./img/pisos/dos colores/pisos4.jpeg",
          "precio":2000
                      }]
  }]
        
  },{

      "nombre":"Paredes",
      "opciones":[{
          "nombre":"dos colores",
          "imagen":"./img/paredes/dos colores/muestra.jpeg",
          "opcions":[{
              "nombre":"marmoleo",
              "imagen":"./img/pisos/dos colores/pisos1.jpeg",
              "imagen2":"./img/pisos/dos colores/pisos2.jpeg",
              "imagen3":"./img/pisos/dos colores/pisos3.jpeg",
              "imagen4":"./img/pisos/dos colores/pisos4.jpeg",
              "precio":2000
                          }]
      },
  {
      "nombre":"tres colores",
      "imagen":"./img/paredes/tres colores/muestra.jpeg",
      "opcions":[{
          "nombre":"marmoleo",
          "imagen":"./img/pisos/tres colores/pisos1.jpeg",
          "imagen2":"./img/pisos/tres colores/pisos2.jpeg",
          "imagen3":"./img/pisos/tres colores/pisos3.jpeg",
          "imagen4":"./img/pisos/tres colores/pisos4.jpeg",
          "precio":2.000
                      }]
  }]
        
  }]


}
let favoritos = JSON.parse(localStorage.getItem("favoritospage")) || [];
let dataFiltered =[]
let contcards = document.getElementById('cont-cards')
let selectType = document.getElementById('selectType');
let selectSatus = document.getElementById('selectSatus');
let search = document.getElementById('search')
let btnSearch = document.getElementById('btnSearch') 
let contador = 0
let resultado1=[]
let precio = 0

 
  let renderOptions = () =>{
    console.log(data)
    dataFiltered =data.categorias
    
    console.log(dataFiltered)
contcards.innerHTML='';
    dataFiltered.forEach((element)=>{
    contcards.innerHTML +=`
    <div class="category" id="${element.nombre}">
    <h3>${element.nombre}</h3>
  
    <p></p>
  </div>
        `
    }
    )
}
renderOptions()
function agregarPuntosDeMil(numero) {
  return numero.toLocaleString();
}

let renderCards = (data) =>{
  contcards.innerHTML='';
      data.forEach((element)=>{
        console.log(element.imagen)
      contcards.innerHTML +=`
      <h3 class="subTitulo">${element.nombre}</h3>
      <div class="product" id="${element.nombre}">
    
      <img src="${element.imagen}" class="btnHeart" id="${element.nombre}"  alt="Producto 1">
   
      <p></p>
    </div>
          `
      }
      )
  }
  let renderCardsFocus = (data) =>{
    
    contcards.innerHTML='';
        data.forEach((element)=>{
          
       precio= element.precio
          let precioR = agregarPuntosDeMil(element.precio);
          console.log(precio)

          console.log(precio)
        contcards.innerHTML +=`
        <div class="image-collage" id="${element.nombre}" >
        <img src="${element.imagen}" alt="Imagen 1" onclick="expandImage(this)">
        <img src="${element.imagen2}" alt="Imagen 2" onclick="expandImage(this)">
        <img src="${element.imagen3}" alt="Imagen 2" onclick="expandImage(this)"">
        <img src="${element.imagen4}" alt="Imagen 2" onclick="expandImage(this)"">
        <!-- Agrega más imágenes según sea necesario -->
        <div class="precio">Costo por metro cuadrado ${precioR}</div>
        <input type="number" class="resultado" id="numero2" placeholder="Numero de metros cuadrados" oninput="multiplicador()">
        <div id="resultado" class="precio"></div>
      </div>
     

       
            `
        }
        )
    }
    function multiplicador() {
      var numero1 = precio;
      var numero2 = parseInt(document.getElementById("numero2").value);
      console.log("sa")
      
      var resultado = numero1 * numero2;
   
    
      var numeroFormateado = agregarPuntosDeMil(resultado);
      console.log(numeroFormateado);
      console.log(resultado)
      if (numeroFormateado == NaN) {
        console.log("fo")
      }
      document.getElementById("resultado").innerHTML = "El producto es: " + numeroFormateado;
    }
    
    function toggleZoom(image) {
      image.classList.toggle("zoomed");
    }

    
    
          function buscarEnArray(arr, clave, valor) {
            return arr.find(objeto => objeto[clave] === valor);
          }

    document.addEventListener("click", ({ target }) => {
      console.log({target}.target.innerText)
      let prueba1 = {target}.target.id
   let prueba = {target}.target.innerText 
   console.log(prueba)
   if ( prueba === "Pisos") {
    let resultado = buscarEnArray(dataFiltered, 'nombre', prueba);
     dataFiltered= resultado.opciones
     console.log(dataFiltered)
     renderCards(dataFiltered)
   } if (prueba === "Paredes") {
    let resultado = buscarEnArray(dataFiltered, 'nombre', prueba);
     dataFiltered= resultado.opciones
     renderCards(dataFiltered)
   }
   if (prueba === "Mesas") {
    let resultado = buscarEnArray(dataFiltered, 'nombre', prueba);
     dataFiltered= resultado.opciones
     renderCards(dataFiltered)
   }if (prueba === "Mesones") {
    let resultado = buscarEnArray(dataFiltered, 'nombre', prueba);
     dataFiltered= resultado.opciones
     renderCards(dataFiltered)
   }
   if (prueba1 === "dos colores") {
    console.log(prueba1)
   console.log(resultado1)
   let resultado = buscarEnArray(dataFiltered, 'nombre', prueba1);
    console.log(resultado)
      dataFiltered= resultado.opcions
      renderCardsFocus(dataFiltered)
   }
   if (prueba1 === "tres colores") {
    console.log(resultado1)
    let resultado = buscarEnArray(dataFiltered, 'nombre', prueba1);
    console.log(resultado)
      dataFiltered= resultado.opcions
      renderCardsFocus(dataFiltered)
    }
   if (prueba1 === "flecha") {
    console.log(prueba)
    renderOptions(data.categorias)
    console.log(data)
   }
   
      });
      
      
      function expandImage(image) {
        var expandedImg = document.getElementById("expanded-img");
        expandedImg.src = image.src;
        document.querySelector(".expanded-image").style.display = "flex";
        document.body.style.overflow = "hidden";
      }
  
      function collapseImage() {
        
        document.querySelector(".expanded-image").style.display = "none";
        document.body.style.overflow = "auto";
      }
      