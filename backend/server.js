import http from "http";

//request el objeto que nos manda el FRONT  cuando hace una peticion. 
//response el objeto que usamos para responder al FRONT a su peticion. 

const PORT = 5173

const app = http.createServer(function (request, response) {
if (request.url === "/")  {
    response.write ("Hola Mundo")
    response.end()
}
if (request.url === "/tuvieja")  { 
    response.write ("Tu vieja es tan vieja que cuando fue al museo de cera, le pidieron su DNI")
    response.end()
}
})


app.listen(PORT, () => console.log(`Server funcionando ${PORT}`))