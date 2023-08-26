# Intro

## What is docker?

Its for building running and shipping applications.

## Virtual Machines vs Containers?

Container - is isolated env for running an applications.

Virtual machine - an abstraction of a machine.

for virtual machine we use HYPERVISORS like "virtualbox" VMware, "Hyper-v - for windows".

With virtual machine we can run in isolation inside of virtual machine.

cons of VM:

- VM needs an operating system (os, lunix, win),
- resource  intencive (CPU, RAM, Storage)
- slow to start

Containers on the other side with docker has:
cons of Containers in docker:

- allow running multiple apps in isolation;
- are lightweigh (no need to have a full operating system)
- the OS headache shoulders the host "Docker"
- run quickly
- resource accessability

## Architecture of DOcker

Curnels are used instead of OS

## Installing Docker

<a href="https://docs.docker.com/get-docker/">Install guide here</a>

## Development Workflow

- Dockerizing application (adding .DockerFile) => into image
- loading image to container.
- maintining registry
