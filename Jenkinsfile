pipeline {
    agent any

    environment {
        DOCKERHUB = "sachingiri01"
        ROLL = "2023bcd0009"
    }

    stages {

        stage('Build') {
            steps {
                sh 'docker build -t $DOCKERHUB/${ROLL}_frontend ./frontend'
                sh 'docker build -t $DOCKERHUB/${ROLL}_backend ./backend'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
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