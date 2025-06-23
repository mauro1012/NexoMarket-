# Order Service

This project is part of the Distributed Systems course. It is responsible for handling order-related operations. The service is implemented in Python, uses MySQL as the database, and is containerized using Docker.

## Installation

To install the dependencies, run the following command:

```bash
pip install -r requirements.txt
```

## Usage

To start the service, use the following command:

```bash
python app.py
```

To run the service using Docker, use the following commands:

```bash
docker build -t order_service .
docker run -d -p 5000:5000 order_service
```

## API Endpoints

### Create Order

```
POST /orders
```

**Request Body:**
```json
{
    "productId": "string",
    "quantity": "number",
    "userId": "string"
}
```

**Response:**
```json
{
    "orderId": "string",
    "status": "string"
}
```

### Get Order

```
GET /orders/{orderId}
```

**Response:**
```json
{
    "orderId": "string",
    "productId": "string",
    "quantity": "number",
    "userId": "string",
    "status": "string"
}
```

