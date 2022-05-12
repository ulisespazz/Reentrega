class productos {
    constructor(nombre,producto,precio){
    this.nombre = nombre
    this.producto = producto
    this.precio = precio
    }
     
}
class Carro {
    constructor(total){
    this.carrito = []
    this.total = total
    }
    CarritoAdd(producto) {
        this.carrito.push(producto)
        this.total += producto.precio
    }
    Mostrar(){
        this.carrito.forEach(listado => {
            console.log(listado);
        });
    }
}
const producto1 = new productos("Agua", "Bebida", 60)
const producto2 = new productos("CocaCola", "Bebida", 130)
const producto3 = new productos("Pepsi", "Bebida", 130)
const producto4 = new productos("7up", "Bebida", 120)
const producto5 = new productos("Mirinda", "Bebida", 110)
const producto6 = new productos("Speed", "Bebida", 150)

const producto7 = new productos("Gomitas", "Golosina", 60)
const producto8 = new productos("Caramelos", "Golosina", 60)
const producto9 = new productos("Alfajor", "Golosina", 100)
const producto10 = new productos("Chupetin", "Golosina", 40)
const producto11 = new productos("Chicle", "Golosina", 60) 

const producto12 = new productos("PapasLays", "Snacks", 100)
const producto13 = new productos("Doritos", "Snacks", 120)
const producto14 = new productos("3d", "Snacks", 100)
const producto15 = new productos("Cheetos", "Snacks", 110)
const producto16 = new productos("Pringles", "Snacks", 400)
const carro = new Carro(0)
let productosArray = [producto1, producto2, producto3, producto4, producto5, 
    producto6, producto7, producto8, producto9, producto10, producto11, 
    producto12, producto13, producto14, producto15, producto16]
let nombreArray = []
let seguir = true
let producto
let tipoProducto
const BEBIDAS = { agua:'Agua', cocacola:'Coca-Cola', pepsi:'Pepsi', '7up':'7UP', mirinda:'Mirinda', speed:'Speed' }
const GOLOSINAS = {gomitas:'Gomitas', caramelos:'Caramelos', alfajor:'Alfajor', chupetin:'Chupetin', chicle:'Chicle'}
const SNACKS = {papaslays:'Papas-Lays', doritos:'Doritos', '3d':'3D', cheetos:'Cheetos', pringles:'Pringles'}

while (seguir){
    producto = prompt("Ingrese un Producto. (Bebidas - Golosinas - Snacks)").toLowerCase()
    if(validarProducto() == false){
        while(validarProducto() == false){
            alert("Producto erróneo, ingrese otro.")
            producto = prompt("Ingrese un Producto").toLowerCase()
            validarProducto()
        }
        switchh()
        seguirComprando()
        
    }else{
        switchh()
        seguirComprando()
        
    }
    
}
function switchh(){
    switch (producto){
        case"bebidas":
            tipoProducto = prompt("Elija que tipo de Bebida decea comprar. (Agua - CocaCola - Pepsi - 7up - Mirinda - Speed)").toLowerCase()
            while((tipoProducto!="agua")&&(tipoProducto!="cocacola")&&(tipoProducto!="pepsi")&&(tipoProducto!="7up")&&(tipoProducto!="mirinda")&&(tipoProducto!="speed")){
                alert("Error ingrese una Bebida correcta")
                tipoProducto = prompt("Elija que tipo de Bebida decea comprar. (Agua - CocaCola - Pepsi - 7up - Mirinda - Speed)").toLowerCase()
            }
            alert(`Eligió ${BEBIDAS[tipoProducto]}`)
            total(tipoProducto)
            //productos.ProductosAdd(tipoProducto)
            break
        case"golosinas":
            tipoProducto = prompt("Elija que tipo de Golosina decea comprar. (Gomitas - Caramelos - Alfajor - Chupetin - Chicle)").toLowerCase()
            while((tipoProducto!="gomitas")&&(tipoProducto!="caramelos")&&(tipoProducto!="alfajor")&&(tipoProducto!="chupetin")&&(tipoProducto!="chicle")){
                alert("Error ingrese una Golosina correcta")
                tipoProducto = prompt("Elija que tipo de Golosina decea comprar. (Gomitas - Caramelos - Alfajor - Chupetin - Chicle)").toLowerCase()
            }
            alert(`Eligió ${GOLOSINAS[tipoProducto]}`)
            total(tipoProducto)
            //productos.ProductosAdd(tipoProducto)
            break
        case"snacks":
            tipoProducto = prompt("Elija que tipo de Snacks decea comprar. (PapasLays - Doritos - 3D - Cheetos - Pringles)").toLowerCase()
            while((tipoProducto!="papaslays")&&(tipoProducto!="doritos")&&(tipoProducto!="3d")&&(tipoProducto!="cheetos")&&(tipoProducto!="pringles")){
                alert("Error ingrese un Snack correcto")
                tipoProducto = prompt("Elija que tipo de Snacks decea comprar. (PapasLays - Doritos - 3D - Cheetos - Pringles)").toLowerCase()
            }
            alert(`Eligió ${SNACKS[tipoProducto]}`)
            total(tipoProducto)
            //productos.ProductosAdd(tipoProducto)
            break
    }

}
function validarProducto(){
    if ((producto!="bebidas") && (producto!="golosinas") && (producto!="snacks")){
        return false;
    }else{
        return true;
    }
}

function total(nombre){
    productosArray.forEach(producto =>{
        nombreArray.push(producto.nombre.toLowerCase())
    })
    console.log(nombreArray)
    let indice = nombreArray.indexOf(nombre)
    console.log(indice)

    if (indice != -1){
        carro.CarritoAdd(productosArray[indice])
    }else{
        alert("Producto no encontrado.")
    }
}

function seguirComprando(){
    //condicion para preguntarle al usuario si quiere seguir comprando.
    let condicion = prompt("¿Desea seguir comprando? Si/No").toLowerCase()
    if (condicion == "no"){
        seguir = false;
    }
}

alert('Para ver el carro ir a la consola.')
carro.Mostrar()
alert(`El total de su compra es de $${carro.total}`)
