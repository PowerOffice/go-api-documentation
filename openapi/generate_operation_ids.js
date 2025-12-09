#!/usr/bin/env node

/**
 * Script to generate unique operationIds for all endpoints in swagger.json
 * operationIds are used by Swagger UI for creating URL fragments/anchors
 * 
 * Usage: node generate_operation_ids.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate a unique operationId based on path, method, and tags.
 * 
 * @param {string} path - The endpoint path (e.g., "/OutgoingInvoice/{id}")
 * @param {string} method - The HTTP method (get, post, put, delete, etc.)
 * @param {string[]} tags - List of tags from the operation
 * @returns {string} A camelCase operationId
 */
function generateOperationId(path, method, tags = []) {
  // Use the first tag if available, otherwise derive from path
  let base = tags && tags.length > 0 
    ? tags[0] 
    : path
        .replace(/^\//,'')                    // Remove leading slash
        .replace(/\{[^}]+\}/g, '')           // Remove {param}
        .replace(/\//g, '_');                // Replace slashes with underscores

  // Create camelCase name
  const parts = base.split('_').filter(p => p.length > 0);
  let operationId = parts[0] || '';
  
  for (let i = 1; i < parts.length; i++) {
    operationId += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
  }

  // Method prefix mapping
  const methodMap = {
    'get': 'Get',
    'post': 'Create',
    'put': 'Update',
    'patch': 'Patch',
    'delete': 'Delete',
    'head': 'Head',
    'options': 'Options'
  };

  const methodPrefix = methodMap[method.toLowerCase()] || method.charAt(0).toUpperCase() + method.slice(1);

  // Check if path contains an ID parameter
  if (/\{id\}|\/\{id\}/.test(path)) {
    if (method.toLowerCase() === 'get') {
      return `${operationId}ById`;
    } else if (method.toLowerCase() === 'delete') {
      return `Delete${operationId}`;
    } else if (method.toLowerCase() === 'put') {
      return `Update${operationId}`;
    }
  }

  // For list endpoints
  if (method.toLowerCase() === 'get' && operationId && !operationId.endsWith('id')) {
    return `Get${operationId}`;
  }

  return `${methodPrefix}${operationId}`;
}

/**
 * Read swagger.json, add operationIds to all operations, and write back.
 * 
 * @param {string} swaggerFile - Path to the swagger.json file
 */
function addOperationIds(swaggerFile) {
  try {
    console.log(`Processing: ${swaggerFile}`);

    // Read the swagger file
    const data = fs.readFileSync(swaggerFile, 'utf8');
    const spec = JSON.parse(data);

    let operationIdsAdded = 0;
    let operationIdsSkipped = 0;

    // Iterate through all paths and operations
    const paths = spec.paths || {};
    
    for (const [pathKey, pathItem] of Object.entries(paths)) {
      for (const [method, operation] of Object.entries(pathItem)) {
        // Skip non-operation keys
        if (method.startsWith('x-') || method === 'parameters') {
          continue;
        }

        if (typeof operation === 'object' && operation !== null) {
          // Check if operationId already exists
          if (operation.operationId) {
            operationIdsSkipped++;
            console.log(`  Skipped ${method.toUpperCase()} ${pathKey} - already has operationId: ${operation.operationId}`);
          } else {
            const tags = operation.tags || [];
            const operationId = generateOperationId(pathKey, method, tags);
            operation.operationId = operationId;
            operationIdsAdded++;
            console.log(`  Added operationId: ${method.toUpperCase()} ${pathKey} -> ${operationId}`);
          }
        }
      }
    }

    // Write back to file
    fs.writeFileSync(swaggerFile, JSON.stringify(spec, null, 2) + '\n', 'utf8');

    console.log(`\n✓ Complete!`);
    console.log(`  - ${operationIdsAdded} operationIds added`);
    console.log(`  - ${operationIdsSkipped} operationIds already existed`);
    console.log(`  - File saved: ${swaggerFile}`);

  } catch (error) {
    console.error(`Error processing swagger file: ${error.message}`);
    process.exit(1);
  }
}

// Main execution
const swaggerPath = path.join(__dirname, 'swagger.json');

if (!fs.existsSync(swaggerPath)) {
  console.error(`Error: ${swaggerPath} not found`);
  process.exit(1);
}

addOperationIds(swaggerPath);
