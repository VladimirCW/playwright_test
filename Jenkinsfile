pipeline {
    agent any

    parameters {
        choice(name: 'browser', choices: ['chromium', 'firefox'], description: 'Pick browser')
    }

    stages {
        stage('Preparation') {
            steps {
                git 'https://github.com/VladimirCW/playwright_test.git'
            }
        }
        stage('Unit tests') {
            steps {
                bat 'npm i'
                bat 'npm run playwright --browser=%browser%'
                //sh 'mvn clean -DsuiteXmlFile=unit_testng.xml test'
            }
        }
    }
}