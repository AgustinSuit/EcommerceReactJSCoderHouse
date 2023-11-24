const products = [
    {
        id: "1",
        name: "RX 570",
        price: 244.900,
        category: "Placas-De-Video",
        img: "https://asset.msi.com/resize/image/global/product/product_0_20190502104732_5cca5a4447649.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        stock: 17,
        description: "Placa de Video MSI RX 570"
    },
    {
        id: "2",
        name: "Crucial DDR4 8GB 2666MHz",
        price: 25.050,
        category: "Memorias-RAM",
        img: "https://fullh4rd.com.ar/img/productos/4/memoria-8gb-ddr4-2666-crucial-0.jpg",
        stock: 9,
        description: "Memoria RAM Crucial"
    },
    {
        id: "3",
        name: "Ryzen 5 5600X",
        price: 225.400,
        category: "Procesadores",
        img: "https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-5-5600x-svideo-ccooler-0.jpg",
        stock: 9,
        description: "Procesador AMD Ryzen 5 5600X"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
/*
    El find devuelve un solo OBJETO que cumpla la cond, y el filter devuelve un ARRAY de OBJETOS que cumplan la cond
*/

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === productCategory );
            resolve(filteredProducts)
            // resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}