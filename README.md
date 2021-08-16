# Vanilla JavaScript Slot-Machine 

## About the project

The original app was created during a CodeCool teamwork week sprint. The task was to create a vanilla JavaScript game in three days. This was our second week learning JavaScript, thus we decided to create a simple game and focus on clean code, gitflow workflow. 
Recently, I studied the basics of containerized app deployment. Therefore, I decided to practice my new skills in Docker and Kubernetes.

## Motivation

- create a skeleton template for static content hosting
- experiment with Nginx
- mesure resource requirement of Prometheus and Grafana

## Technologies

- <strong>JavaScript</strong> as base programming language
- <strong>Nginx</strong> webserver
- <strong>Docker</strong>  using images to facilitate deployment
- <strong>Kubernetes</strong> cluster management
- <strong>Prometheus & Grafana</strong> - cluster monitoring

## Features

-  Shell script initiating the deployment to AWS EKS service.
-  The game is playable on a public DNS.
-  Cluster resources can be monitored on Grafana


## Installation

*The deployment process and the following commands are optimized for Linux environment*

- The shell script is using kubectl command to create the cluster and prepare the docker images. Thus, running the script requires the following:
    - ***kubectl*** installed and configured to use a pre-existing **EKS** cluster resource on **AWS**. This build is using a NodeBalancer that relies on AWS so ***minikube*** will not work without extra modification. 
        - running **Grafana** and **Prometheus** require 5 worker nodes of t3micro instances
    - ***docker*** installed

- The Game can be played on localhost. The suggested way to do this is by using python3 http.server.

## How to use the program
- If all the installation prequisites are met for AWS deployment. The process can be initiated by running ***bash init_cluster.sh*** in working directory. After a few minutes the game is reachable on the public DNS AWS gives to the loadbalancer.
- **Grafana**  is reachable on ***port 3000***


- Running the program on localhost is possible by executing the following commands in the working directory:
    - cd /app
    - python3 -m http-server 8888
- Now the game is accessible by typing localhost:8888 in the browser.




