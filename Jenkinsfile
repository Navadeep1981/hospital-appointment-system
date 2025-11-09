pipeline {
    agent any

    environment {
        DOCKER_HUB = "your_dockerhub_username"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Navadeep1981/hospital-appointment-system.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'cd backend/auth-service && npm install'
                sh 'cd backend/doctor-service && npm install'
                sh 'cd backend/appointment-service && npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'cd backend/auth-service && npm test'
                sh 'cd backend/doctor-service && npm test'
                sh 'cd backend/appointment-service && npm test'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t ${DOCKER_HUB}/auth-service ./backend/auth-service'
                sh 'docker build -t ${DOCKER_HUB}/doctor-service ./backend/doctor-service'
                sh 'docker build -t ${DOCKER_HUB}/appointment-service ./backend/appointment-service'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')]) {
                    sh 'echo $DOCKER_TOKEN | docker login -u ${DOCKER_HUB} --password-stdin'
                    sh 'docker push ${DOCKER_HUB}/auth-service'
                    sh 'docker push ${DOCKER_HUB}/doctor-service'
                    sh 'docker push ${DOCKER_HUB}/appointment-service'
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
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
