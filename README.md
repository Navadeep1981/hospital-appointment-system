# 🏥 Hospital Appointment Booking System

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![Microservices](https://img.shields.io/badge/Microservice%20Architecture-0078D7?style=for-the-badge)

An end-to-end **Hospital Appointment Booking Application** built using **Microservice Architecture**, **Docker Compose**, and **Jenkins CI/CD** automation.

---

## 📸 Project Overview

*Architecture: Auth, Doctor, Appointment microservices communicating with MongoDB, managed via Docker Compose and deployed using Jenkins.*

---

## 🚀 Features

- 🧑‍⚕️ Role-based Authentication (Patient, Doctor, Admin)
- 📅 Appointment Scheduling and Management
- 🔍 Doctor Availability Search and Booking
- 🗄️ MongoDB Integration for Each Microservice
- 🧩 Microservices:
  - `auth-service` — Authentication & JWT handling
  - `doctor-service` — Doctor registration and details
  - `appointment-service` — Appointment creation and linking
  - `frontend` — User-facing web app
- 🐳 Dockerized Deployment
- ⚙️ Automated CI/CD Pipeline with Jenkins
- ☁️ Docker Hub Integration for Image Hosting

---

## 🛠️ Tech Stack

| Component | Technology |
|------------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Node.js, Express |
| **Database** | MongoDB |
| **Containerization** | Docker, Docker Compose |
| **CI/CD** | Jenkins |
| **Registry** | Docker Hub |

---

## ⚙️ Setup Instructions

### 🌀 Clone the Repository
```bash
git clone https://github.com/Navadeep1981/hospital-appointment-system.git
cd hospital-appointment-system
