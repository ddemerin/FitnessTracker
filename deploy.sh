docker build -t FitnessTracker-image .

docker tag FitnessTracker-image registry.heroku.com/FitnessTracker/web


docker push registry.heroku.com/FitnessTracker/web

heroku container:release web -a FitnessTracker