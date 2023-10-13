export function obtenerDatosPromise() {
return new Promise((resolve) =>{
    setTimeout(() => {
        resolve({ data: 'datos importantes' });
    }, 2000)
})
}