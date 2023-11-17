const products = [

{
    id:'1',
    name: 'Celular Apple iPhone 11 128GB',
    price: 2099,
    category:'celular',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/18673445_1?wid=1500&hei=1500&qlt=70',
    stock: 25,
    description: 'Una pantalla liquid Retina de 6,1 pulgadas y el vidrio más resistente jamás usado en un smartphone'
},

{
    id:'2',
    name: 'Apple iPhone 14 128GB',
    price: 3799,
    category: 'celular',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/19983093_1?wid=1500&hei=1500&qlt=70',
    stock: 25,
    description: 'Principal de 12 Mpx, Ultra gran angular de 12 Mpx'
},

{
    id:'3',
    name: 'Apple iPhone 14 128GB',
    price: 3799,
    category: 'celular',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/19983093_1?wid=1500&hei=1500&qlt=70',
    stock: 25,
    description: 'Principal de 12 Mpx, Ultra gran angular de 12 Mpx'
},

{
    id:'4',
    name: 'Apple iPhone 14 128GB',
    price: 3799,
    category: 'celular',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/19983093_1?wid=1500&hei=1500&qlt=70',
    stock: 25,
    description: 'Principal de 12 Mpx, Ultra gran angular de 12 Mpx'
},


{
    id:'5',
    name: 'Apple iPhone 14 128GB',
    price: 3799,
    category: 'celular',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/19983093_1?wid=1500&hei=1500&qlt=70',
    stock: 25,
    description: 'Principal de 12 Mpx, Ultra gran angular de 12 Mpx'
},

{
    id:'6',
    name: 'Samsung Galaxy Tab S6 Lite 128GB - 10.4" Gris',
    price: 1099,
    category: 'tablet',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/19818164_1?wid=1500&hei=1500&qlt=70',
    stock: 20,
    description: 'Modelo="SM-P613NZAKPEO"'
},

{
    id:'7',
    name: 'Computadora ryzen 7 5700g ram 16gb ssd 1TB monitor 27 full hd',
    price: 5099,
    category: 'computadora',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_124087489_3846830_1?wid=1500&hei=1500&qlt=70',
    stock: 20,
    description: 'Modelo="SM-P613NZAKPEO"'
},
{
    id:'8', //258-317
    name: 'Computadora ryzen 7 5700g ram 16gb ssd 1TB monitor 27 full hd',
    price: 1099,
    category: 'computadora',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_124087489_3846830_1?wid=1500&hei=1500&qlt=70',
    stock: 20,
    description: 'Modelo="SM-P613NZAKPEO"'
}

,
{
    id:'9',
    name: 'Computadora ryzen 7 5700g ram 16gb ssd 1TB monitor 27 full hd',
    price: 1099,
    category: 'juegosps5',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_124087489_3846830_1?wid=1500&hei=1500&qlt=70',
    stock: 20,
    description: 'Modelo="SM-P613NZAKPEO"'
},
{
    id:'10',
    name: 'Computadora ryzen 7 5700g ram 16gb ssd 1TB monitor 27 full hd',
    price: 1099,
    category: 'computadora',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_124087489_3846830_1?wid=1500&hei=1500&qlt=70',
    stock: 20,
    description: 'Modelo="SM-P613NZAKPEO"'
}
]   

export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 500)
            })
}
       
export const getProductById = (productId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id === productId))
            }, 500)
            })
       
}


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    });
}

