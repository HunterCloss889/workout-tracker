#!/bin/bash
set -e
# Extract files from zip into the repository root
unzip -o workout-tracker.zip
# Install dependencies and build the app
npm install
npm run build
