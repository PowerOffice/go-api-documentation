window.onload = function() {
  window.ui = SwaggerUIBundle({
    url: window.location.origin + '/openapi/swagger.json',
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      
    ],
    layout: "StandaloneLayout",
    supportedSubmitMethods: []
  });
};
