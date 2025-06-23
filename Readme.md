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

# 📁 Repository Structure
```tree
nexomarket-platform/
├── user_security_domain/
│   ├── auth_service/           # Autenticación (JWT)
│   ├── user_service/           # Gestión de usuarios
│   ├── authorization_service/  # Control de acceso
│   └── auditing_service/      # Registro de auditoría
│
├── sales_pos_domain/
│   ├── sales_service/          # Procesamiento de ventas
│   ├── discounts_service/      # Descuentos y promociones
│   ├── payment_gateway_service/ # Pasarela de pagos
│   ├── receipt_service/       # Generación de recibos
│   ├── returns_service/       # Devoluciones y reembolsos
│   ├── cash_register_service/  # Cuadre de caja
│   └── sales_report_service/   # Reportes de ventas
│
├── inventory_domain/
│   ├── product_catalog_service/ # Productos y categorías
│   ├── stock_service/         # Control de stock
│   ├── batch_tracking_service/ # Lotes y caducidades
│   ├── reorder_alert_service/  # Alertas de reposición
│   ├── supplier_service/      # Gestión de proveedores
│   ├── warehouse_service/     # Almacenamiento
│   ├── inventory_movement_service/ # Entradas y salidas
│   └── inventory_report_service/ # Reportes de inventario
│
├── customer_loyalty_domain/
│   ├── customer_profile_service/ # Perfiles de clientes
│   ├── purchase_history_service/ # Historial de compras
│   ├── loyalty_program_service/ # Puntos y recompensas
│   └── customer_notifications_service/ # Alertas y notificaciones
│
├── finance_domain/
│   ├── cash_flow_service/    # Ingresos y egresos
│   ├── financial_alerts_service/ # Alertas críticas
│   └── financial_report_service/ # Reportes contables
│
├── admin_support_domain/
│   ├── user_support_service/ # Soporte técnico
│   ├── system_config_service/ # Configuración del sistema
│   ├── backup_recovery_service/ # Backups y recuperación
│   └── monitoring_service/   # Métricas y logs (InfluxDB)
│
├── .github/
│   └── workflows/
│       ├── deploy_auth.yml
│       ├── deploy_sales.yml
│       └── deploy_all_microservices.yml
│
└── README.md
---
📁 Each microservice must contain

microservice_root/
├── app/ o src/               # Código fuente
├── Dockerfile                # Configuración de contenedor
├── .env.example              # Variables de entorno (plantilla)
├── requirements.txt o package.json o pom.xml  # Dependencias
├── config/                   # Archivos de configuración
├── routes/ o controllers/    # Lógica de endpoints
├── models/                   # Definiciones de datos
└── README.md                 # Documentación específica
