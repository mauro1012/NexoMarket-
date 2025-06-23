# Project Overview

This project is a microservice-based application. Below is an analysis of the folder structure, the languages used, and the database.

## Folder Structure

```
/C:/Users/User/Documents/GitHub/NEXOMARKET-/productCatalog/
│
├── backend/
│   ├---
│   ├── config/
│   │── controllers/
│   └── models/
│
├── frontend/
│   ├
│   ├── assets
│   ├── js
│   
└── README.md
```

## Languages Used

- **JavaScript**: The main programming language used for both backend and frontend.
- **HTML**: Used for structuring the frontend.
- **CSS**: Used for styling the frontend.

## Database

- **PostgreSQL**: The project uses PostgreSQL as the database management system.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/NEXOMARKET-.git
    ```

2. **Navigate to the microservice directory**:
    ```sh
    cd NEXOMARKET-/productCatalog
    ```

3. **Build the backend**:
    ```sh
    cd backend
    mvn clean install
    ```

4. **Run the backend application**:
    ```sh
    mvn spring-boot:run
    ```

5. **Build the frontend**:
    ```sh
    cd ../frontend
    npm install
    npm run build
    ```

6. **Run the frontend application**:
    ```sh
    npm start
    ```


