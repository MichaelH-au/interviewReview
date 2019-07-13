#!/usr/bin/env bash

# get current system info
uname -a
uname -v
uname -r

# get ip info
ifconfig | grep intet

# file system info
df -ah

service udev status/start/stop/restart
systemctl status udev

# check the size of dir
du -sh ES6

# CPU usage
ps aux | grep nginx