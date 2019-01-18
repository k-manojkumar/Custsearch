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
          echo 'test '
        }
        stage('Deliver') {
            steps {
                sh 'npm run build'
                sh 'npm start'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'sleep 1'
                sh 'echo $! > .pidfile'
                sh 'kill $(cat .pidfile)'
            }
        }
    }
}
