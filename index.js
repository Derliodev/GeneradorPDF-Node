const express = require('express'), 
          app = express(), 
          pdf = require('express-pdf'),
          path = require('path')
          

app.use(pdf)

// Genera PDF desde un template
app.use('/pdfFromHTML', function(req, res){
    res.pdfFromHTML({
        filename: 'generated.pdf',
        html: path.resolve(__dirname, './template.html'),
        
    });
});

// Generar pdf con codigo
app.use('/pdfFromHTMLString', function(req, res){
    res.pdfFromHTML({
        filename: 'generated.pdf',
        htmlContent: '<html><body><h1>Genera PDF desde Codigo String</h1></body></html>',
        
    });
});

// Mostrar un pdf generado
app.use('/pdf', function(req, res){
    res.pdf(path.resolve(__dirname, './generated.pdf'));
})

app.listen(3000)