#!/bin/bash
while !</dev/tcp/db/5432; do sleep 1; done;

# db-migrate db:create event_zoo --config config/db.json -e pg-docker
# db-migrate db:create test --config config/db.json -e pg-docker
sleep 1 && db-migrate up --config config/db.json -e pg-docker
swagger project start
# & sleep 1 && swagger project edit -s -p 8081
