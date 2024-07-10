const app = require('expreess');

const PORT = 3000;


const users = [
    {
        id:1,
        username:"jesusg"
    },
    {
        id:2,
        username:"panchito"
    }
];

app.use("/users",(req,res) => {
    res.json(users);
});

app.use("/users/:id",(req,res) =>{
    const {id} = req.params;
    const user = users.find(user => user.id  == id);

    res.json(user);
});

app.listen(PORT,() => {
    console.log("Servidor corriendo en el puerto"+PORT);
});