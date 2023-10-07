
# Petroleum Report API

This API provides information on petroleum sales and related data.


## Installation

1. Clone the repository:

```bash
 git clone https://success-glich@bitbucket.org/yipl-intern-petroleum-reports/yipl-intern-petroleum-report.git
```
2. Install dependencies:
 ```bash
    npm install
```
## Usage/Examples
To run the server in development mode, use the following command:


The API will be accessible at `http://localhost:3000`.

## Routes

### Reports

- **Get All Data**:
  - Endpoint: `GET api/v1/reports`
  - Description: Retrieves all available reports.

- **Get Individual Petroleum Sales**:
  - Endpoint: `GET api/v1/reports/petroleum-sales`
  - Description: Retrieves individual petroleum sales data.

- **Get Top Highest and Lowest Country Sales**:
  - Endpoint: `GET /reports/country-sales`
  - Description: Retrieves the top 3 countries with the highest and lowest sales.

- **Get Average Sale by Product**:
  - Endpoint: `GET /reports/average-sales`
  - Description: Calculates the average sale of each petroleum product for a specified 4-year interval.

## Dependencies

- `axios`: For making HTTP requests.
- `cors`: Middleware for handling Cross-Origin Resource Sharing.
- `dotenv`: For loading environment variables from a `.env` file.
- `express`: Web application framework for Node.js.
- `sequelize`: ORM library for interacting with databases.
- `sqlite3`: Library for working with SQLite databases.

## Dev Dependencies

- `nodemon`: Automatically restarts the server during development.


## Deployment

The API is deployed on [Platform Name](https://your-deployment-url.com/).

To access the deployed API, use the following base URL:


## License

This project is licensed under the [ISC License](LICENSE).



