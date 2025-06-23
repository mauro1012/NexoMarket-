# 🛒 NexoMarket - Retail Management Platform

---

## 📌 Project Description 

**NexoMarket** is a complete retail management platform built using a microservices architecture. It is designed to automate key business operations such as sales, inventory control, customer management, cash register balancing, and expired product tracking — ideal for small and medium-sized stores like supermarkets, pharmacies, and convenience shops.

The system is divided into **business domains**, and each domain includes several independent microservices developed in different programming languages and connected to purpose-specific databases. All services are containerized with Docker and deployed to AWS.

---

## 🧱 Arquitectura / Architecture

### 🧩 Dominios de Microservicios / Microservice Domains

- `user_domain`:
  - auth_service (Python + PostgreSQL)
  - user_service (Java + PostgreSQL)

- `inventory_domain`:
  - product_service (Node.js + MySQL)
  - stock_service (Python + MySQL)
  - expiry_service (Go + MySQL)

- `sales_domain`:
  - sales_service (Node.js + PostgreSQL)
  - payment_service (Go + PostgreSQL)
  - cash_service (C# + PostgreSQL)

- `customer_domain`:
  - customer_service (Python + MongoDB)
  - loyalty_service (Node.js + MongoDB)

- `monitoring_domain`:
  - Prometheus + Grafana + CloudWatch

---

## 🚀 Tecnologías Clave / Key Technologies

- **Docker & Docker Compose**
- **GitHub Actions** (CI/CD)
- **AWS EC2 / RDS / CloudWatch**
- **PostgreSQL, MySQL, MongoDB**
- **Python, Node.js, Java, Go, C#**
- **JWT Authentication**
- **Prometheus + Grafana (Monitoring)**

---

## 🛠️ Deployment


Each microservice can be deployed independently via Docker or together using Docker Compose. Production deployment is done on AWS EC2 instances, connected to RDS-hosted or containerized databases as needed.

---

# 📁 Repository Structure - NexoMarket Platform

This repository is structured by **business domain**, where each domain contains its own group of microservices. Each microservice is independently containerized and deployed using Docker, and may use different languages and databases according to its purpose.

---

## 🧩 Domains and Microservices

### 🔐 `user_security_domain/`
- `auth_service/` – Authentication (JWT)
- `user_service/` – User management
- `authorization_service/` – Access control
- `auditlog_service/` – Audit logs

---

### 🛒 `sales_pos_domain/`
- `sales_service/` – Sales processing
- `discounts_service/` – Discounts and promotions
- `payment_gateway_service/` – Payment gateway
- `receipt_service/` – Receipt generation
- `returns_service/` – Returns and refunds
- `cash_register_service/` – Cash register control
- `sales_report_service/` – Sales reports

---

### 📦 `inventory_domain/`
- `product_catalog_service/` – Product and category management
- `stock_service/` – Stock control
- `batch_tracking_service/` – Batch and expiration tracking
- `reorder_alert_service/` – Restock alerts
- `supplier_service/` – Supplier management
- `warehouse_service/` – Warehouse management
- `inventory_movement_service/` – Stock movements
- `inventory_report_service/` – Inventory reporting

---

### 👥 `customer_loyalty_domain/`
- `customer_profile_service/` – Customer profiles
- `purchase_history_service/` – Purchase history
- `loyalty_program_service/` – Loyalty points and rewards
- `customer_notifications_service/` – Notifications and alerts

---

### 💰 `finance_domain/`
- `cash_flow_service/` – Daily cash flow
- `financial_alerts_service/` – Financial alerts
- `financial_report_service/` – Financial reporting

---

### 🛠️ `admin_support_domain/`
- `user_support_service/` – User support and ticketing
- `system_config_service/` – System configuration
- `backup_recovery_service/` – Backup and recovery
- `monitoring_service/` – Monitoring and metrics (InfluxDB)

---

## ⚙️ CI/CD Workflows

Located in:



---

## 📁 Each microservice must contain

📁 <nombre>/
├── app/ o src/                   # Código fuente
├── Dockerfile
├── .env.example
├── requirements.txt / package.json / pom.xml
├── config/
├── routes/ o controllers/
├── models/
├── README.md