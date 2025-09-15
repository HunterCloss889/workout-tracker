#!/bin/bash
set -e
# Extract App.jsx from zip to src
unzip -p workout-tracker.zip 'workout-tracker/src/App.jsx' > src/App.jsx
# Install dependencies and build
npm install
npm run build
