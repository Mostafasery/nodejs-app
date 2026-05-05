# Node.js CI/CD Pipeline with Kubernetes Deployment & Monitoring

This project demonstrates a complete end-to-end DevOps pipeline for a Node.js application, including containerization, CI/CD automation, infrastructure provisioning, Kubernetes deployment, and centralized logging using New Relic.

---

## Architecture Overview

Developer → GitHub → GitHub Actions → Docker Image → GHCR → Terraform → Kubernetes → Application → New Relic (Logs)

---

## Prerequisites

- Node.js
- Docker
- Kubernetes (Docker Desktop)
- kubectl
- Terraform
- Helm

---

## Docker
- Run Locally first:
- docker build -t nodejs-app .
- docker run -p 3000:3000 nodejs-app

---

## CI/CD Pipeline

The pipeline runs on push to main branch and performs:
- Install dependencies
- Run linting
- Build Docker image
- Tag image (latest)
- Push to GHCR

---

## Deployment (Terraform with K8s provider)

- terraform init
- terraform plan
- terraform apply -auto-approve 

---

## Access the Application

- kubectl port-forward svc/nodejs-app-service 3000:80 -n nodejs-app

- Open: http://localhost:3000

---

## Monitoring & Logging (New Relic)

### Install via Helm

- helm repo add newrelic https://helm-charts.newrelic.com
- helm repo update
```
- helm upgrade --install newrelic-bundle newrelic/nri-bundle \
  --namespace nodejs-app \
  --set global.licenseKey=<YOUR_LICENSE_KEY> \
  --set global.nrRegion=EU \
  --set global.cluster="docker-desktop-nodejs-app" \
  --set newrelic-logging.enabled=true \
  --set kubeEvents.enabled=false


### View Logs

- Go to:
- https://one.newrelic.com → Logs
- https://one.eu.newrelic.com/logger?account=8004007&duration=1800000&state=fc874668-3d3f-7546-cf49-b44c68263ec7
---

## Assumptions

- Used Docker Desktop Kubernetes instead of cloud provider  
- Used GHCR instead of Docker Hub  
- Used Helm for monitoring setup  
- Used port-forward instead of LoadBalancer  
- Used latest tag for simplicity  
- Add Minimal logging for demo  

---

## Author

Mostafa Soliman