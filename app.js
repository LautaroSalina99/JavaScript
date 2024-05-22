const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formulario.html'));
});

app.get('/formulario', (req, res) => {
    const input1 = req.query.input1;
    const input2 = req.query.input2;

    const responseHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formulario con Bootstrap</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container mt-5">
                <h2>Formulario con Bootstrap</h2>
                <form class="row" action="/formulario" method="get">
                    <div class="col-md-4 bg-danger">
                        <label for="input1">Input 1</label>
                        <input type="text" class="form-control" id="input1" name="input1" placeholder="Ingresa algo" value="${input1 || ''}">
                    </div>
                    <div class="col-md-4">
                        <label for="input2">Input 2</label>
                        <input type="text" class="form-control" id="input2" name="input2" placeholder="Ingresa algo" value="${input2 || ''}">
                    </div>
                    <div class="col-md-4 offset-md-8">
                        <button type="submit" class="btn btn-primary btn-block">Enviar</button>
                    </div>
                </form>
                <div class="mt-3">
                    <p><strong>Input 1:</strong> ${input1 ? `<strong>${input1}</strong>` : ''}</p>
                    <p><strong>Input 2:</strong> ${input2 ? `<strong>${input2}</strong>` : ''}</p>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </body>
        </html>
    `;
    
    res.send(responseHtml);
});

const port = 3001; // Cambia el puerto a 3001
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});