---
title: "Setup a Python Development Environment"
cover: "https://source.unsplash.com/cxMJYcuCLEA/1280x500"
author: "chefbc"
date: "2020-04-27"
category: "tech"
tags:
    - python
    - development
    - programming
    - coding
---

This is intended as a quick reference and explanation of how I setup environments to develop via Python on my Mac.

### Requirements
1. Develop/test on different versions of Python.
2. Isolate each project from each other.


### Isolate Python versions
I came across [pyenv](https://github.com/pyenv/pyenv) a simple python version management tool that can be installed via [homebrew](https://docs.brew.sh/Homebrew-and-Python).

##### Install
```bash
brew install pyenv
```

##### List installed python versions
```bash
pyenv install — list
```

##### Install python versions
```bash
pyenv install -v 3.8.0
```

##### List your installed python versions
```bash
pyenv versions
```

##### Change your global python version
```bash
pyenv global 3.8.0
```

##### Set location specific python version
```bash
pyenv local 2.7.15
```

##### Uninstall any version
```bash
pyenv uninstall 2.7.15
```

##### Create a virtual environment for python2
```bash
pyenv versions
pyenv shell 2.7.17
python -V
pip install virtualenv virtualenv env
source env/bin/activate
```

##### Create a virtual environment for python3 with [venv] (https://docs.python.org/3/library/venv.html)
```bash
python3 -m venv env
```
##### Activate your virtual env
```bash
source env/bin/activate
```
##### Leave virtual environment
```bash
deactivate
```
