import React from 'react'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <SwaggerUI
        url={`${window.location.origin}/openapi/swagger.json`}
        docExpansion="list"
        defaultModelsExpandDepth={-1}
        displayRequestDuration={true}
        filter={true}
        tryItOutEnabled={false}
        persistAuthorization={true}
      />
    </div>
  )
}

export default App
