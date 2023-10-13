import fs from 'node:fs/promises';

export async function leerArchivos() {
    console.time('leerArchivos')
    const [a,b,c] = await Promise.all([
        fs.readFile('live-coding/01-node-callbacks-promises/archivo1.txt', 'utf8'),
        fs.readFile('live-coding/01-node-callbacks-promises/archivo2.txt', 'utf8'),
        fs.readFile('live-coding/01-node-callbacks-promises/archivo3.txt', 'utf8'),
    ])
    console.timeEnd('leerArchivos')
    return `${a} ${b} ${c}`
}

leerArchivos();
