pipeline {
agent {
      docker {
          image 'node:6-alpine'
          args '-p 3000:3000'
      }
  }

    environment {
     HOME = '.'
     CI = 'true'
 }manish1712

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
                sh 'sleep 1'
                sh 'echo $! > .pidfile'
                sh 'kill $(cat .pidfile)'
            }
        }
    }
}
