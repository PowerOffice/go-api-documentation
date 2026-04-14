# PowerOffice Go API Documentation

[![Azure Static Web Apps CI/CD](https://github.com/PowerOffice/go-api-documentation/actions/workflows/azure-static-web-apps-gray-stone-017611203.yml/badge.svg)](https://github.com/PowerOffice/go-api-documentation/actions/workflows/azure-static-web-apps-gray-stone-017611203.yml)

## About This Repository

This is an **internal repository** for PowerOffice that hosts the official documentation for the PowerOffice Go API. The repository contains a React-based web application that uses Swagger UI to display and interact with the PowerOffice Go API documentation.

### Purpose

The main purpose of this repository is to:
- Provide interactive API documentation for PowerOffice Go API
- Host OpenAPI/Swagger specifications for the API
- Deploy the documentation automatically to Azure Static Web Apps
- Maintain version-controlled API documentation accessible to internal teams and partners

### Technology Stack

- **Frontend Framework**: React 18 with Vite
- **API Documentation**: Swagger UI React
- **Build Tool**: Vite
- **Deployment**: Azure Static Web Apps
- **CI/CD**: GitHub Actions

## Repository Structure

```
.
├── .github/workflows/       # GitHub Actions workflows
├── src/                     # React application source code
├── openapi/                 # OpenAPI/Swagger specification files
│   ├── swagger.json        # Main OpenAPI specification
│   └── SimplifySchemaNames.cjs  # Script to simplify .NET type names
├── docs/                    # Additional documentation assets
├── index.html              # Main HTML entry point
├── package.json            # Node.js dependencies and scripts
└── vite.config.js          # Vite configuration
```

## How the GitHub Actions Workflow Works

The repository uses GitHub Actions for automated building and deployment to Azure Static Web Apps. The workflow is defined in `.github/workflows/azure-static-web-apps-gray-stone-017611203.yml`.

### Workflow Triggers

The CI/CD pipeline is triggered on:
- **Push events** to the following branches:
  - `main` (production)
  - `dev` (development)
  - `staging` (staging environment)
- **Pull request events** (opened, synchronize, reopened, closed) targeting the `main` branch

### Build and Deploy Process

The workflow consists of two main jobs:

#### 1. Build and Deploy Job

This job runs when code is pushed or a pull request is opened/updated:

1. **Checkout Code**: Retrieves the repository code including submodules
2. **Setup Node.js**: Installs Node.js 20 with npm caching for faster builds
3. **Simplify Schema Names**: Runs a preprocessing script (`SimplifySchemaNames.cjs`) that:
   - Processes the `swagger.json` file
   - Simplifies verbose .NET type names in the OpenAPI schemas
   - Removes unnecessary namespace and assembly information
   - Makes the API documentation more readable
4. **Install Dependencies**: Runs both `npm install` and `npm ci` sequentially to ensure all required packages are installed correctly
5. **Build Application**: Executes `npm run build` to:
   - Compile the React application
   - Bundle assets using Vite
   - Generate production-ready static files in the `dist/` directory
6. **Deploy to Azure**: Uses the Azure Static Web Apps deployment action to:
   - Upload the built application from the `dist/` directory
   - Deploy to Azure Static Web Apps
   - Add deployment status comments on pull requests

#### 2. Close Pull Request Job

This job runs when a pull request is closed:
- Removes the staging deployment associated with the pull request
- Cleans up temporary preview environments

### Environment Variables and Secrets

The workflow uses the following secrets (configured in GitHub repository settings):
- `AZURE_STATIC_WEB_APPS_API_TOKEN_GRAY_STONE_017611203`: Azure deployment token for authentication
- `GITHUB_TOKEN`: Automatically provided by GitHub for PR comments and integrations

## Local Development

### Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)

### Setup and Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/PowerOffice/go-api-documentation.git
   cd go-api-documentation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Simplify schema names in the OpenAPI specification:
   ```bash
   node ./openapi/SimplifySchemaNames.cjs ./openapi/swagger.json
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

Deployments are handled automatically by GitHub Actions:
- Pushes to `main` deploy to the production environment
- Pushes to `dev` and `staging` deploy to their respective environments
- Pull requests create temporary preview deployments

Manual deployments are not typically necessary, but if needed, ensure you have the appropriate Azure credentials configured.

## Contributing

This is an internal PowerOffice repository. When contributing:

1. Create a feature branch from `main`
2. Make your changes
3. Test locally using `npm run dev`
4. Create a pull request targeting `main`
5. The GitHub Actions workflow will automatically build and create a preview deployment
6. After review and approval, merge to `main` to deploy to production

Note: Direct pushes to `dev` and `staging` branches will also trigger deployments to their respective environments.

## Support

For questions or issues related to this repository, please contact the PowerOffice development team.
