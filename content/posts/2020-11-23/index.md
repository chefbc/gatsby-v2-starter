---
title: "Home Lab Setup based on Red Hat CodeReady Containers"
cover: "https://source.unsplash.com/gKUC4TMhOiY/1280x500"
coverAuthor: "Ousa Chea"
coverSource: "https://unsplash.com/photos/gKUC4TMhOiY"
coverSourceText: "Unsplash"
author: "chefbc"
date: "2020-11-23"
category: "tech"
tags:
    - technology
    - container
    - home
    - lab
    - openshift
---

### Download
Download `crc` binary from [cloud.redhat.com](https://cloud.redhat.com/openshift/install/crc/installer-provisioned) and `oc` binary from [https://github.com/openshift](https://github.com/openshift/okd/releases). 


### Install
Install `crc`
```bash
wget https://mirror.openshift.com/pub/openshift-v4/clients/crc/latest/crc-linux-amd64.tar.xz

tar xvf crc-linux-amd64.tar.xz
sudo mv crc-linux-1.19.0-amd64/crc /usr/local/bin
```

Install `oc` & `kubectl`
```bash
wget https://github.com/openshift/okd/releases/download/4.5.0-0.okd-2020-10-15-235428/openshift-client-linux-4.5.0-0.okd-2020-10-15-235428.tar.gz

tar xvf crc-linux-amd64.tar.xz
sudo mv crc-linux-1.19.0-amd64/crc /usr/local/bin
```

Setup `crc`
```bash
crc setup
```

Start `oc` and provide secret from [cloud.redhat.com](https://cloud.redhat.com/openshift/install/crc/installer-provisioned) 
```bash
crc start
```

Get `crc` ip
```bash
crc ip
```

Get `crc` console
```bash
crc console
```

### Enable Remote Access 
Install `HAProxy` with dependencies
```bash
sudo dnf -y install haproxy policycoreutils-python-utils
```

Configuring the `Firewall`
```bash
sudo systemctl start firewalld
sudo firewall-cmd --add-port=80/tcp --permanent
sudo firewall-cmd --add-port=6443/tcp --permanent
sudo firewall-cmd --add-port=443/tcp --permanent
sudo systemctl restart firewalld
sudo semanage port -a -t http_port_t -p tcp 6443
```

Configure `HAProxy`
```bash
export SERVER_IP=<SERVER_IP_HERE>
export CRC_IP=<CRC_IP_HERE>
```
Backup orginal `haproxy.cfg`
```bash
sudo cp /etc/haproxy/haproxy.cfg /etc/haproxy/haproxy.cfg.orig
```

Replace contents of the `haproxy.cfg` with:
```bash
vi /etc/haproxy/haproxy.cfg
```
```bash
global
debug

defaults
log global
mode http
timeout connect 0
timeout client 0
timeout server 0

frontend apps
bind SERVER_IP:80
bind SERVER_IP:443
option tcplog
mode tcp
default_backend apps

backend apps
mode tcp
balance roundrobin
option ssl-hello-chk
server webserver1 CRC_IP check

frontend api
bind SERVER_IP:6443
option tcplog
mode tcp
default_backend api

backend api
mode tcp
balance roundrobin
option ssl-hello-chk
server webserver1 CRC_IP:6443 check
```

Replacements `placeholders` with `values`
```bash
sudo sed -i "s/SERVER_IP/$SERVER_IP/g" haproxy.cfg
sudo sed -i "s/CRC_IP/$CRC_IP/g" haproxy.cfg
```

Start and Enable `HAProxy`
```bash
systemctl start haproxy
systemctl enable haproxy.service 
```


### Configuring DNS for Client
Add line to `/etc/hosts` and replace `<SERVER_IP>` with ip of `crc` machine. 
```bash
<SERVER_IP> api.crc.testing oauth-openshift.apps-crc.testing console-openshift-console.apps-crc.testing default-route-openshift-image-registry.apps-crc.testing
```


### Access
Login with `oc` or via [web console](https://console-openshift-console.apps-crc.testing/dashboards)
```bash
oc login -u kubeadmin -p https://api.crc.testing:6443
```



### Links
- https://cloud.redhat.com/openshift/install/crc/installer-provisioned
- https://www.openshift.com/blog/accessing-codeready-containers-on-a-remote-server/
- https://itnext.io/how-to-access-your-app-behind-an-openshift-router-87cbae3e7185
- https://www.linkedin.com/pulse/setup-openshift-codeready-remote-server-adrian-gigante/?articleId=6660205880115638272
- https://gist.github.com/tmckayus/8e843f90c44ac841d0673434c7de0c6a
- https://www.stevenrombauts.be/2018/01/use-dnsmasq-instead-of-etc-hosts/
- https://www.jeffgeerling.com/blog/2019/trying-out-crc-code-ready-containers-run-openshift-4x-locally
