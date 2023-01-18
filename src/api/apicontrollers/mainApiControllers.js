const mainApiControll = {
    'inicio': (req,res) => {
        res.send("Bienvenido a ApiBanco");
    },
    'list': (req,res) => {
        res.send('Hey desde ApiController');
    }
}

module.exports = mainApiControll;