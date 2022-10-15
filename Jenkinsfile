pipeline{
    agent any

    tools{nodejs "node"}

    stages{
        stage('Cypress Parallel Test Suite'){
            parallel{
                stage('Slave Node1'){
                    agent{
                        label "node1"
                    }
                    steps {
                        git url:'https://github.com/jgrabanera/cypress-practice-project1.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                    }
                }
                stage('Slave Node2'){
                    agent{
                        label "node2"
                    }
                    steps {
                        git url:'https://github.com/jgrabanera/cypress-practice-project1.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                    }
                }
            }
        }
    }
}