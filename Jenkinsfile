pipeline {
    agent any

    environment {
     HOME = '.'
     CI = 'true'
 }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('test')
        {
          steps
          {
            echo 'test succuss '
          }
        }
        stage('Deliver') {
            steps {
                sh 'npm run build'
                sh 'npm start'
                
            }
        }
    }
}
