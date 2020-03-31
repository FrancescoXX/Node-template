const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();

// API DOCUMENTATION AVAILABLE AT http://localhost:3000/api-docs
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerJsDoc({
      swaggerDefinition: {
        info: {
          title: 'Template API',
          description: 'Node - Template API',
          contact: {
            name: 'Dev'
          },
          servers: ['http://localhost:3000']
        }
      },
      apis: ['./routes/users.js'] //add routes
    })
  )
);

// users routes
app.use('/users', require('./routes/users'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
