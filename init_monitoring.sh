#!/bin/bash

kubectl create namespace monitoring

cd ./kub-prometheus
kubectl apply -f ./clusterRole.yaml -f ./config-map.yaml -f ./prometheus-deployment.yaml -f ./prometheus-service.yaml
cd ../kub-grafana
