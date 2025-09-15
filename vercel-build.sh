#!/bin/bash
set -e
# Unzip the project and build
unzip -o workout-tracker.zip -d app
cd app
npm install
npm run build
# Copy the build output to the root 'dist' directory for Vercel
cp -r dist ../dist
