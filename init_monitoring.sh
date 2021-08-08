#!/bin/bash

kubectl create namespace monitoring

cd ./kub-prometheus
kubectl apply -f ./clusterRole.yaml -f ./config-map.yaml -f ./prometheus-deployment.yaml -f ./prometheus-service.yaml

cd ../kub-grafana
kubectl apply -f ./grafana-datasource-config.yaml -f ./deployment.yaml -f ./service.yaml