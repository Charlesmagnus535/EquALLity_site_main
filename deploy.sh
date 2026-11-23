#!/bin/bash
set -e
npm run build
rsync -av --delete dist/ vm_vegas:/var/www/equallity/
echo "ok"
