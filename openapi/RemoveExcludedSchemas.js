// RemoveExcludedSchemas.js
// Usage: node RemoveExcludedSchemas.js ./openapi/swagger.json

const fs = require('fs');

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node RemoveExcludedSchemas.js <swagger.json>');
  process.exit(1);
}

const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const schemas = json.components && json.components.schemas;
if (schemas) {
  for (const key of Object.keys(schemas)) {
    const schema = schemas[key];
    // Remove if schema itself is excluded
    if (
      schema.description &&
      schema.description.trim() === 'Excluded from public API documentation.'
    ) {
      delete schemas[key];
      continue;
    }
    // Remove if any property is excluded
    if (schema.properties) {
      for (const prop of Object.values(schema.properties)) {
        if (
          prop &&
          prop.description &&
          prop.description.trim() === 'Excluded from public API documentation.'
        ) {
          delete schemas[key];
          break;
        }
      }
    }
  }
}

fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
console.log('Excluded schemas removed.');