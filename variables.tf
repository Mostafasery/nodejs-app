variable "namespace" {
  type    = string
  default = "nodejs-app"
}

variable "app_name" {
  type    = string
  default = "nodejs-app"
}

variable "image_name" {
  description = "Docker image from GitHub Container Registry"
  type        = string
  default     = "ghcr.io/mostafasery/nodejs-app:latest"
}

variable "container_port" {
  type    = number
  default = 3000
}

output "access_command" {
  value = "kubectl port-forward svc/nodejs-app-service 3000:80 -n nodejs-app"
}