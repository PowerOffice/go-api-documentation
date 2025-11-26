// SimplifySchemaNames.js
// Usage: node SimplifySchemaNames.js ./openapi/swagger.json
// Simplifies verbose .NET type names in OpenAPI schemas
// Example: "One.Common.Api.DataPage`1[[GoApi.Voucher.OutgoingInvoiceVoucher, GoApi, Version=2.59.0.0, Culture=neutral, PublicKeyToken=null]]"
// Becomes: "GoApi.Voucher.OutgoingInvoiceVoucher, GoApi, Version=2.59.0.0"

const fs = require('fs');

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node SimplifySchemaNames.js <swagger.json>');
  process.exit(1);
}

// Read the file
let content = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(content);

/**
 * Simplifies a verbose .NET type name by extracting the actual type and removing unnecessary suffixes.
 *
 * Handles generic type names of the form:
 *   SomeWrapper`1[[ActualType, Assembly, Version=X.X.X.X, Culture=neutral, PublicKeyToken=null]]
 * and non-generic type names with ", Culture=..., PublicKeyToken=...".
 *
 * @param {string} typeName - The .NET type name to simplify.
 * @returns {string} The simplified type name with only the essential type and assembly information.
 */
function simplifyTypeName(typeName) {
  // Pattern: Extract content between [[ and ]], then remove Culture and PublicKeyToken
  // Matches: SomeWrapper`1[[ActualType, Assembly, Version=X.X.X.X, Culture=neutral, PublicKeyToken=null]]
  const genericMatch = typeName.match(/^[^[]+\[\[([^\]]+)\]\]$/);
  
  if (genericMatch) {
    // Extract the inner type
    let innerType = genericMatch[1];
    // Remove ", Culture=neutral, PublicKeyToken=null"
    innerType = innerType.replace(/, Culture=[^,]+, PublicKeyToken=[^\]]+$/, '');
    return innerType;
  }
/**
 * Recursively processes an object to update schema names in $ref values throughout the OpenAPI document.
 * 
 * @param {object} obj - The object to process. This can be any part of the OpenAPI document.
 * @param {Array<string>} [path=[]] - The current traversal path in the object tree, used for recursion and debugging.
 */
  // Also handle non-generic types that might have Culture/PublicKeyToken
  if (typeName.includes('Culture=') || typeName.includes('PublicKeyToken=')) {
    return typeName.replace(/, Culture=[^,]+, PublicKeyToken=[^\]]+$/, '');
  }
  
  return typeName;
}

// Function to recursively process an object and update schema names
function processObject(obj, path = []) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  for (const [key, value] of Object.entries(obj)) {
    if (key === '$ref' && typeof value === 'string') {
      // Process $ref values
      if (value.startsWith('#/components/schemas/')) {
        const schemaName = value.substring('#/components/schemas/'.length);
        const simplifiedName = simplifyTypeName(schemaName);
        if (simplifiedName !== schemaName) {
          obj[key] = '#/components/schemas/' + simplifiedName;
        }
      }
    } else if (typeof value === 'object' && value !== null) {
      processObject(value, [...path, key]);
    }
  }
}

// Rename schema keys in components/schemas
if (json.components && json.components.schemas) {
  const schemas = json.components.schemas;
  const renamedSchemas = {};
  const renameMap = {};

  for (const [oldName, schema] of Object.entries(schemas)) {
    const newName = simplifyTypeName(oldName);
    renameMap[oldName] = newName;
    renamedSchemas[newName] = schema;
  }

  json.components.schemas = renamedSchemas;

  console.log(`Renamed ${Object.keys(renameMap).length} schemas`);
  
  // Show some examples of renamed schemas
  const examples = Object.entries(renameMap)
    .filter(([old, newName]) => old !== newName)
    .slice(0, 5);
  
  if (examples.length > 0) {
    console.log('\nExample renames:');
    examples.forEach(([old, newName]) => {
      console.log(`  - ${old.substring(0, 80)}${old.length > 80 ? '...' : ''}`);
      console.log(`    → ${newName}`);
    });
  }
}

// Update all $ref references throughout the document
processObject(json);

// Write back to file
fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
console.log('\nSchema names simplified successfully.');
