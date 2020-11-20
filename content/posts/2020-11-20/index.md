---
title: "OpenShift Cheat Sheet"
cover: "https://source.unsplash.com/CpsTAUPoScw/1280x500"
coverAuthor: "Andy Li"
coverSource: "https://unsplash.com/photos/CpsTAUPoScw"
coverSourceText: "Unsplash"
author: "chefbc"
date: "2020-11-20"
category: "tech"
tags:
    - technology
    - container
    - cheet sheet
---

| Login/User management        |                                          |
| ---------------------------- |----------------------------------------- |
| oc login                     |   authenticate to an openshift           |
| oc logout                    |   end the current session                |
| oc whoami                    |   show the current user context          |

```bash
example here
```

| Project management           |                                                       |
| ---------------------------- |------------------------------------------------------ |
| oc project                   |   show the current project context                    |
| oc get projects              |   show all project current login has access to        |
| oc status                    |   show overview of current project resources          |
| oc new-project               |   create a new project  and change to that context    |

```bash
examples here
```

| Resource management          |                                                                |
| ---------------------------- |--------------------------------------------------------------- |
| oc new-app                   |   create a new app from source code, image, or template        |                   |
| oc new-build                 |   create a new build configuration from source code            |
| oc label                     |   add/update/remove labels from a resource                     |
| oc annotate                  |   add/update/remove annotations from a resource                |
| oc create                    |   create a new resource from filename or stdin                 |
| oc get                       |   retrieve a resource                                          |
| oc replace                   |   replace an existing resource from filename or stdin          |
| oc delete                    |   delete a resource                                            |
| oc edit                      |   modify a resource from text editor                           |
| oc describe                  |   retrieve a resource with details                             |

```bash
examples here
```

| Operational commands         |                                                   |
| ---------------------------- |-------------------------------------------------- |
| oc logs                      |   retrieve the logs for a resource                |
| oc rsh                       |   remote shell into a container                   |
| oc rsync                     |   copy files to or from a container               |
| oc exec                      |   execute a command in a container                |
| oc run                       |   create a deployment configuration from image    |
| oc idle                      |   scale resources to zero replicas                |

```bash
examples here
```

| Operational commands         |                                                              |
| ---------------------------- |------------------------------------------------------------- |
| oc rollout                   |   manage deployments from configuration                      |
| oc rollout latest            |   start a new deployment with the latest state               |
| oc rollout undo              |   perform a rollback operation                               |
| oc rollout history           |   historical info for a deployment configuration             |
| oc rollout status            |   watch the status of a rollout until complete               |
| oc tag                       |   tag existing images into image streams                     |
| oc start-build               |   start a new build from a build configuration               |
| oc cancel-build              |   cancel a build in progress                                 |
| oc import-image              |   pull in images and tags from an external Docker registry   |
| oc scale                     |   change the number of pod replicas for a deployment         |

```bash
examples here
```

