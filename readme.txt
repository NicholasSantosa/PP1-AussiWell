# Welcome
This repository contains folders for an extension and the website.
Github: https://github.com/NicholasSantosa/PP1-AussiWell
Website: http://environmint.ap-southeast-2.elasticbeanstalk.com/


## Installation instructions

- ### extension
    Navigate to chrome://extensions/ and select "Load unpacked" and choose the ./extensions directory from this repo.
- ### website
    You'll need 
1. cd in the directory ```cd ./website```
2. run ```npm install```
3. run ```composer install``` to install PHP dependencies.
4. run ```cp .env.example .env``` to make a copy of the env file
5. run ```php artisan key:generate``` to generate the application encryption key
3. run ```npm run dev``` to build for development or ```npm run build``` to build for production.


## Deployment

To deploy, our pipeline automatically builds and uploads the files when changes are pushed to the main branch our git repository.
Database credentials are added to the .env file during build time on AWS CodeBuild.