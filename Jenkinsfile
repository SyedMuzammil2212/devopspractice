pipeline{
    agent any

    environment {
        COMPOSE_FILE='docker-compose.yml'
    }

    stages{
        stage('Build Images'){
            steps{
                echo 'Building Docker'
                sh 'docker-compose build '
            }
        }

        stage('Deploy App'){
            steps{
                echo 'Deploying on docker hu'
                sh 'docker-compose up -d'
            }
        }
    }
}