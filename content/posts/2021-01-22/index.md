---
title: "Private instances access without an bastion host on GCP"
cover: "https://source.unsplash.com/RXWgx93tz8w/1280x500"
coverAuthor: "Chris Buckwald"
coverSource: "https://unsplash.com/photos/RXWgx93tz8w"
coverSourceText: "Unsplash"
author: "chefbc"
date: "2021-01-22"
category: "tech"
tags:
    - Google Cloud Platform
    - Identity-Aware Proxy
---


Identity-Aware Proxy is a managed service that can control the access to your VM without an bastion host. 

![alt text](https://cloud.google.com/iap/images/iap-tcp-forwarding-diagram.png "iap diagram")

<!-- gcloud compute ssh virtual-machine-from-terraform \
--tunnel-through-iap 

gcloud compute ssh virtual-machine-from-terraform \
--tunnel-through-iap \
--ssh-flag="-N -L 8081:localhost:80" -->

<!-- gcloud compute ssh github-actions \
--tunnel-through-iap \
--ssh-flag="-N -L 5000:localhost:5000" -->


Enabling IAP tunneling by adding ingress firewall rule from IAP’s forwarding netblock.

For SSH access:
```bash
gcloud compute firewall-rules create allow-ssh-ingress-from-iap \
  --direction=INGRESS \
  --action=allow \
  --rules=tcp:22 \
  --source-ranges=35.235.240.0/20
```

For other protocols (PORT based on protocol):
```bash
gcloud compute firewall-rules create allow-ingress-from-iap \
  --direction=INGRESS \
  --action=allow \
  --rules=tcp:PORT \
  --source-ranges=35.235.240.0/20
  ```



IAP tunneling can be enforced via IAM permissions.  (Grant the iap.tunnelResourceAccessor role to the user):

```bash
gcloud projects add-iam-policy-binding PROJECT_ID \
    --member=user:EMAIL \
    --role=roles/iap.tunnelResourceAccessor
```


Access via "gcloud compute ssh" command with the “tunnel-though-iap” flag to connect to an instance.

```bash
gcloud compute ssh my-instance \
--tunnel-through-iap 
```

Access via local port forwarding.

```bash
gcloud compute ssh  my-instance \
--tunnel-through-iap \
--ssh-flag="-N -L 3306:localhost:3306"
```

### Links
- https://cloud.google.com/iap/docs/using-tcp-forwarding
- https://cloud.google.com/iap/docs/tcp-forwarding-overview

