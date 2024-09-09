pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', url: 'https://github.com/analuisaabarbosa/automocaoUi_ebacStore.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                sh 'NO_COLOR=1 npm run test'
            }
        }
    }
    
     post {
        always {
            echo 'Pipeline concluído.'
        }
    }
}
