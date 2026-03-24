pipeline {
    agent any

    environment {
        DOCKERHUB = "sachingiri01"
        ROLL = "2023bcd0009"
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/sachingiri01/sachin-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t $DOCKERHUB/${ROLL}_frontend ./frontend'
                sh 'docker build -t $DOCKERHUB/${ROLL}_backend ./backend'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-password', variable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $DOCKERHUB --password-stdin'
                }
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