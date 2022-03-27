# Challenge-1

##  SET UP INSTRUCTIONS
1. clone the repo
2. verify you have your kubernetes cluster is running    `kubectl cluster-info`
3. command to enter      `kubectl apply -f nodejsapp`
4. To get ip to test app command `kubectl get svc -n sample` sample is the value of the namespace
5. Copy the value of the EXTERNAL-IP and paste in your browser url
6. Confirm it's working :)