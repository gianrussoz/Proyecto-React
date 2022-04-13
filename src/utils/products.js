const products = [
    {
        id: 0,
        tipo: "Perfume",
        stock: 8,
        desc: " ",
        precio: "$600",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'
    },
    {
        id: 1,
        tipo: "Perfume",
        stock: 7,
        desc: " ",
        precio: "$600",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'
    },
    {id: 2,
        tipo: "Aceite",
        stock: 4,
        desc: " ",
        precio: "$600",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'
    },
    {id: 3,
        tipo: "Perfume",
        stock: 3,
        desc: " ",
        precio: "$600",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'},
    {id: 4,
        tipo: "Aceite",
        stock: 1,
        desc: " ",
        precio: "$950",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'},
    {id: 5,
        tipo: "Aceite",
        stock: 7,
        desc: " ",
        precio: "$950",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'},
    {id: 6,
        tipo: "Perfume",
        stock: 12,
        desc: " ",
        precio: "$950",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'},
    {id: 7,
        tipo: "Crema",
        stock: 13,
        desc: " ",
        precio: "$950",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'},
    {id: 8,
        tipo: "Aceite",
        stock: 22,
        desc: " ",
        precio: "$950",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'
    },
    {id: 9,
        tipo: "Aerosol",
        stock: 33,
        desc: " ",
        precio: "$950",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000' },
    {id: 10,
        tipo: "Aceite",
        stock: 1,
        desc: " ",
        precio: "$950",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'},
    {id: 11,
        tipo: "Aerosol",
        stock: 18,
        desc: " ",
        precio: "$950",
        img: 'https://pedidosfarma.vteximg.com.br/arquivos/ids/181177-400-400/Saphirus-Aromatizador-Textil-Fragancia-Bella-250ml.jpg?v=637485087340370000'}
]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000);
    })
}