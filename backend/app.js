import express from 'express';

const app = express();
const PORT = 5173

app.get( "/", function(request, response)  {
    response.json({ message: "Hola Mundo" });
})

app.listen(PORT, () => console.log(`Server funcionando ${PORT}`));  