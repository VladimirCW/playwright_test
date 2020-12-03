pipeline {
    agent any

    parameters {
        choice(name: 'browser', choices: ['chromium', 'firefox', 'webkit'], description: 'Pick browser')
    }

    stages {
        stage('Preparation') {
            steps {
                git 'https://github.com/VladimirCW/playwright_test.git'
            }
        }
        stage('Tests') {
            steps {
                bat 'npm i'
                bat 'npm run playwright --browser=%browser%'
                //sh 'mvn clean -DsuiteXmlFile=unit_testng.xml test'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'screens/*.png'
        }
    }
}