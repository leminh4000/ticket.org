kubectl view contexts:
$ k config view

pause GCP cluster:
$gcloud container node-pools list --cluster=ticketing-dev
$ gcloud container clusters resize ticketing-dev --node-pool default-pool --num-nodes 0

restart GCP cluster:
$gcloud container node-pools list --cluster=ticketing-dev
$ gcloud container clusters resize ticketing-dev --node-pool default-pool --num-nodes 3