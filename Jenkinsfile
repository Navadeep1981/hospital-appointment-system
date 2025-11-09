pipeline {
    agent any

    environment {
        DOCKER_HUB = "navadeep81"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Navadeep1981/hospital-appointment-system.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'cd backend\\auth-service && npm install'
                bat 'cd backend\\doctor-service && npm install'
                bat 'cd backend\\appointment-service && npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'cd backend\\auth-service && npm test'
                bat 'cd backend\\doctor-service && npm test'
                bat 'cd backend\\appointment-service && npm test'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker build -t %DOCKER_HUB%/auth-service ./backend/auth-service'
                bat 'docker build -t %DOCKER_HUB%/doctor-service ./backend/doctor-service'
                bat 'docker build -t %DOCKER_HUB%/appointment-service ./backend/appointment-service'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')]) {
                    bat 'echo %DOCKER_TOKEN% | docker login -u %DOCKER_HUB% --password-stdin'
                    bat 'docker push %DOCKER_HUB%/auth-service'
                    bat 'docker push %DOCKER_HUB%/doctor-service'
                    bat 'docker push %DOCKER_HUB%/appointment-service'
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                bat 'docker-compose down || exit 0'
                bat 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful!"
        }
        failure {
            echo "❌ Build failed!"
        }
    }
}
