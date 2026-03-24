pipeline {
    agent any

    environment {
        DOCKERHUB = "sachingiri01"
        ROLL = "2023BCD0009"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/sachingiri01/sachin-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t $DOCKERHUB/${ROLL}_frontend ./frontend'
                sh 'docker build -t $DOCKERHUB/${ROLL}_backend ./backend'
            }
        }

        stage('Push') {
            steps {
                sh 'docker push $DOCKERHUB/${ROLL}_frontend'
                sh 'docker push $DOCKERHUB/${ROLL}_backend'
            }
        }
    }
}