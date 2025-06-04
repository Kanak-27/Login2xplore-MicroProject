# 🚚 Shipment Management Form using JsonPowerDB

---

## 📄 Description

This is a simple client-side web application for managing shipment records using **JsonPowerDB (JPDB)**. It demonstrates how to integrate JPDB into a front-end-only form to perform **CRUD operations (Create, Read, Update)** directly via REST APIs, with no need for traditional server-side programming.

The form allows users to input shipment details including Shipment Number (primary key), Description, Source, Destination, Shipping Date, and Expected Delivery Date.

---

## 📋 Table of Contents

- [Description](#-description)
- [Benefits of using JsonPowerDB](#-benefits-of-using-jsonpowerdb)
- [Scope of Functionalities](#-scope-of-functionalities)
- [Examples of Use](#-examples-of-use)
- [Setup Instructions](#-setup-instructions)
- [Illustrations](#-illustrations)
- [Project Status](#-project-status)
- [Release History](#-release-history)
- [Sources](#-sources)
- [Other Information](#-other-information)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## ✅ Benefits of using JsonPowerDB

- 🔧 **No backend server required** — works entirely in the browser
- ⚡ **Fast performance** via direct REST API calls
- 🧩 **Schema-free structure** — great for flexible forms
- 🔐 **Token-based authentication** for secure data access
- 📡 **Built-in APIs** for CRUD: PUT, GET_BY_KEY, and UPDATE
- 🚀 **Quick setup** — get started in minutes
- 🛠️ **Minimal learning curve** for developers familiar with REST APIs

---

## 🧩 Scope of Functionalities (with respect to JPDB)

This project highlights how to use JsonPowerDB to:

- 🔍 **Search records by primary key** using `GET_BY_KEY`
- ➕ **Create new records** using `PUT`
- 🔁 **Update existing records** using `UPDATE`
- ✨ Perform real-time form validation before sending data to the database
- 🔒 Restrict and control form field access based on database state
- ⚙️ Maintain state between Save, Update, and Reset operations

---

## 💡 Examples of Use (for JsonPowerDB)

This project serves as a real-world use case of JPDB in the following contexts:

- Building **data-driven web forms** without a backend server
- Educational tools to teach **database API integration**
- Rapid prototyping where **fast NoSQL database setup** is needed
- Admin dashboards where data is directly saved and updated via **REST API**
- Offline-first apps that sync to a cloud DB like JPDB when online

---

## 🔧 Setup Instructions

1. Clone or download the project files.

2. Open the `index.html` file in a web browser.

3. Set your JPDB credentials in the JavaScript:
   ```javascript
   var connToken = "YOUR_JPDB_TOKEN";
   var dbName = "DELIVERY-DB";
   var relName = "SHIPMENT-TABLE";
