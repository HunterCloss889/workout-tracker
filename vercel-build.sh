#!/bin/bash
set -e
# Extract the project directory from the zip
unzip -o workout-tracker.zip
# Move into the extracted directory
cd workout-tracker
# Install dependencies and build the app
npm install
npm run build
# Move built output to repository root for Vercel
cd ..
mv -f workout-tracker/dist dist
