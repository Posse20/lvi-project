const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;
const distPath = path.join(__dirname, 'dist/lvi-project');

// Servir archivos estáticos
app.use(express.static(distPath));

// Para cualquier otra ruta, servir index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
