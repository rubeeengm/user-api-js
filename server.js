const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.json());

app.use('/', (req, res) => {
    res.json({
        message: "Hola"
    });
});

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto: ', app.get('port'));
});
