## Node.js CI/CD Pipeline with Kubernetes Deployment

This project demonstrates a complete CI/CD pipeline for a Node.js application using Docker, GitHub Actions, GHCR, Terraform, and Kubernetes.

## Architecture

Developer → GitHub → GitHub Actions → Docker Image → GHCR → Terraform → Kubernetes → App

## Setup

```bash
git clone https://github.com/YOUR_USERNAME/nodejs-app.git
cd nodejs-app
npm install
npm start
```

## Docker

```bash
docker build -t nodejs-app .
docker run -p 3000:3000 nodejs-app
```

## CI/CD

Pipeline runs on push to main and:
- installs dependencies
- runs lint
- builds Docker image
- pushes to GHCR

## Deploy

```bash
cd terraform
terraform init
terraform apply -auto-approve
```

## Access

```bash
kubectl port-forward svc/nodejs-app-service 3000:80 -n nodejs-app
```

Open http://localhost:3000

## Issues & Fixes

- Dockerfile not found → fixed naming
- Git OneDrive issue → moved project
- Missing lint → added ESLint
- ESLint Node issue → used globals.node
- Image uppercase → used lowercase
- GHCR private → made public
- Wrong kube context → switched to docker-desktop
- Terraform variable → added default

## Learnings

- CI should not modify code
- Docker naming rules matter
- Kubernetes needs accessible images
- Terraform needs explicit config

## Author

Mostafa Soliman

