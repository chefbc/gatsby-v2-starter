---
title: "Format and Mount Disk on GCP Instance"
cover: "https://source.unsplash.com/wYD_wfifJVs/1280x500"
author: "chefbc"
date: "2020-05-05"
category: "tech"
tags:
    - ssh
    - tunnel
    - snippet
---

This is a quick reference to SSH snippets.




### Manage SSH-keys with the SSH-agent

###### List the ssh-keys currently available in the ssh-agent
```bash
ssh-add -l
```

###### Add the ssh-key to the ssh-agent
```bash
ssh-add -K ~/.ssh/id_rsa
```

###### To remove a key from the ssh-agent, the -d option can be used as the example below shows. This identifies the key to be removed.
```bash
ssh-add -d ~/.ssh/id_rsa
```

###### Removing all private keys from the ssh-agent can be achieved with the -D option as shown below.
```bash
ssh-add -D
```

### SSH Tunnel

###### Setup SSH tunnel
```bash
ssh -i ~/.ssh/id_rsa -L <LOCAL_PORT>:<DEST_SERVER>:<DEST_PORT> user@<JUMP_SERVER> cat -
```

###### SSH via tunnel
```bash
ssh -i ~/.ssh/id_rsa user@localhost -p <LOCAL_PORT>
```

###### SCP via tunnel
```bash
scp -i -i ~/.ssh/id_rsa file.txt user@localhost:/tmp/. -p <LOCAL_PORT>
```
