pipeline {
    agent any

    tools {
        nodejs 'recent node'
    }

    parameters {
        booleanParam(name: 'MAINTENANCE_MODE', defaultValue: false, description: 'Set to true to enable maintenance mode')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/maurozurlo/sample-react-app.git'
            }
        }

        stage('Configure Environment') {
            steps {
                script {
                    def maintenanceMode = params.MAINTENANCE_MODE ? 'true' : 'false'
                    sh "echo VITE_MAINTENANCE_MODE=${maintenanceMode} > .env"
                    
                    // Read the JSON file
                    def jsonfile = readJSON file: 'src/env.json'

                    // Modify the JSON content
                    jsonfile['type'] = 'man'

                    // Write the modified JSON back
                    writeJSON file: 'src/env.json', json: jsonfile
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
            }
        }
    }
}
