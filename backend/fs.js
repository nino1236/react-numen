import fs from 'fs';




const data = fs.readFileSync('./db/db.txt', 'utf-8');

console.log(data)

