#!/usr/bin/env node

/**
 * Script to set the servers URL in swagger.json to api.poweroffice.net.
 * This ensures the correct production server URL is always present in the
 * OpenAPI spec, even if swagger.json is regenerated from the backend without it.
 *
 * Usage: node set_server_url.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerPath = path.join(__dirname, 'swagger.json');

if (!fs.existsSync(swaggerPath)) {
  console.error(`Error: ${swaggerPath} not found`);
  process.exit(1);
}

let spec;
try {
  spec = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));
} catch (err) {
  console.error(`Error parsing ${swaggerPath}: ${err.message}`);
  process.exit(1);
}

spec.servers = [{ url: 'https://api.poweroffice.net', description: 'Production server' }];

fs.writeFileSync(swaggerPath, JSON.stringify(spec, null, 2) + '\n', 'utf8');
console.log('Servers URL set to https://api.poweroffice.net');
