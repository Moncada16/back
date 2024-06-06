const app = require("./src/server");
const datebase = require("./src/config/datebase");

const port = process.env.PORT || 3000;
datebase().then(
    res=>{
        app.listen(port,`0.0.0.0`, ()=>{
            console.log(`Servidor en el puerto ${port}`);
            });
        // app.listen(3000, ()=>{
        // console.log("Servidor en el puerto 3000");
        // });
});
