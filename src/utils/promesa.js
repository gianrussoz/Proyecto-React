let hayProductos = true;

const promesaProductos = (tiempo, contenido) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hayProductos) {
                resolve(contenido);
            } else {
                reject("No hay productos");
            }
        }, tiempo);
    });
};

export default promesaProductos;