# Google Cloud functions

## Deploy

gcloud functions deploy cep-service --entry-point cep --runtime nodejs10 --trigger-http
gcloud functions deploy <other>-service --entry-point <other> --runtime nodejs10 --trigger-http

## Check logs

gcloud functions logs read

## Sidenote

`server.js` is not used by Google Cloud Functions. This is used for local testing of the service.

## CURL

`service` is optional.

```
curl --location --request POST 'https://<link to cloud>/cep-service' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cep": "31210-630",
    "service": "<service optional>"
}'
```
