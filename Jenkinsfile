node {
    def app

    stage('Clone repository') {

        checkout scm
    }

    stage('Build image') {
        app = docker.build("vigneshvj/nodejsapp-jen")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
	stage ('K8S Pod-Svc Deploy') {
       
        kubernetesDeploy(
            configs: 'pod.yml',
            kubeconfigId: 'K8S',
            enableConfigSubstitution: true
            )               
		kubernetesDeploy(
            configs: 'svc.yml',
            kubeconfigId: 'K8S',
            enableConfigSubstitution: true
            )               
        }
    }
}
