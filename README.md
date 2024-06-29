# Node.js API Project

This is a Node.js application that provides an API to do the following:
- Make CRUD requests to a postgres database for users of both brands and retailers
- Make CRUD requests a postgres database for information related to orders, SKUs, cartons, etc.
- Make CRUD requests to a postgres database for routing guides and related packing information. This also 
includes functionality to interact with Amazon S3 and the GPT-4 API for processing PDF files and retrieving packing
steps based on routing guide content.

## Features

- Query user, shipping order, and routing guide details from a PostgreSQL database.
- Interact with Amazon S3 for file storage and retrieval.
- Process PDF files and query the GPT-4 API to convert brand routing guides to actionable steps.

## Prerequisites

- Node.js (>=14.x)
- PostgreSQL
- Amazon S3 account
- OpenAI API key

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

   Create a `.env` file in the root directory with the following content:

    ```env
    PORT=3000
    DB_HOST=your_postgresql_host
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_user
    DB_PASSWORD=your_database_password
    AWS_ACCESS_KEY_ID=your_aws_access_key_id
    AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
    AWS_REGION=your_aws_region
    S3_BUCKET_NAME=your_s3_bucket_name
    OPENAI_API_KEY=your_openai_api_key
    ```

4. Initialize the database:

   Ensure your PostgreSQL server is running and create the necessary database and database user.

## Running the Application

To start the application, run:

```bash
npm start
```

The server will start on the port specified in the .env file (default is 3000). Tables that do not already exist in the 
database will be auto-generated with `sequelize`.

## API Endpoints
### Users
- `GET /users` - Retrieve all users
- `GET /users/{id}` - Retrieve specific user
- `DELETE /users/{id}` - Delete specific user
- `POST /users` - Create a new user

### Brands
- `GET /brands` - Retrieve all brands
- `GET /brands/{id}` - Retrieve specific brand
- `DELETE /brands/{id}` - Delete specific brand
- `POST /brands` - Create a new brand

### Retailers
- `GET /retailers` - Retrieve all retailers
- `GET /retailers/{id}` - Retrieve specific retailer
- `DELETE /retailers/{id}` - Delete specific retailer
- `POST /retailers` - Create a new retailer

### Routing Guides
- `GET /routing-guides/{id}` - Retrieve specific routing guide
- `DELETE /routing-guides/{id}` - Delete specific routing guide
- `POST /routing-guides` (WiP) - Uploads routing guide .pdf to S3, stores S3 URL in DB, calls GPT4 for parsed routing guide information, stores routing guide product items and steps in DB

The following endpoints are WiP (models have been created but endpoints have not):
- Skus
- Orders
- Pallets
- Packing Steps
- Cartons
- Routing Guide Items

## Testing
This project uses Jest for testing. To run the tests, execute:
```
npm test
```

## Acknowledgements
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [pdf-parse](https://www.npmjs.com/package/pdf-parse)
- [axios](https://www.npmjs.com/package/axios)
- [Jest](https://jestjs.io/)