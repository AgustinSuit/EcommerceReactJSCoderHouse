const products = [
    {
        id: "1",
        name: "MSI Radeon RX 570",
        price: "244.900",
        category: "Placas-De-Video",
        img: "https://asset.msi.com/resize/image/global/product/product_0_20190502104732_5cca5a4447649.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        stock: 17,
        description: "Placa de Video MSI RX 570"
    },
    {
        id: "2",
        name: "Crucial DDR4 8GB 2666MHz",
        price: "25.050",
        category: "Memorias-RAM",
        img: "https://fullh4rd.com.ar/img/productos/4/memoria-8gb-ddr4-2666-crucial-0.jpg",
        stock: 9,
        description: "Memoria RAM Crucial"
    },
    {
        id: "3",
        name: "Ryzen 5 5600X",
        price: "225.400",
        category: "Procesadores",
        img: "https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-5-5600x-svideo-ccooler-0.jpg",
        stock: 4,
        description: "Procesador AMD Ryzen 5 5600X"
    },
    {
        id: "4",
        name: "XFX Radeon RX 6700 XT 12GB",
        price: "429.550",
        category: "Placas-De-Video",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_26448_Placa_de_Video_XFX_Radeon_RX_6700_XT_CORE_12GB_GDDR6_SWFT_309_a7c19572-grn.jpg",
        stock: 11,
        description: "Placa de Video RX 6700 XT marca SWFT 309"
    },
    {
        id: "5",
        name: "Ryzen 7 5700X",
        price: "325.500",
        category: "Procesadores",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_31690_Procesador_AMD_Ryzen_7_5700X_4.6GHz_Turbo_AM4_-_No_incluye_Cooler_df22f6d7-grn.jpg",
        stock: 8,
        description: "Procesador AMD Ryzen 7 5700X"
    },
    {
        id: "6",
        name: "Kingston DDR4 8GB 3200MHz Fury Beast CL16",
        price: "30.800",
        category: "Memorias-RAM",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33000_Memoria_Kingston_DDR4_8GB_3200MHz_Fury_Beast_CL16_946d0a56-grn.jpg",
        stock: 14,
        description: "Memoria RAM Kingston Fury"
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