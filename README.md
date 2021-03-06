# Shoebox Web

![Shoebox logo image](https://raw.githubusercontent.com/moopings/Shoebox-web/master/static/images/shoebox_logo.png)

## Pre Requirements
- Python 3
  - virturalenv
- Node.js
- MongoDB


## Installation

1. install pre requirements

2. clone this project
  ```
  $ git clone https://github.com/moopings/Shoebox-web
  ```

3. create project virtual environment
  ```
  $ cd Shoebox-web
  $ virtualenv -p python3 shoebox-env
  ```

4. activate your virtualenv
  ```
  $ source ./shoebox-env/bin/activate
  ```

5. install python project package dependencies
  ```
  $ pip install -r requirements.txt
  ```

6. install javascript project package dependencies
  ```
  $ npm install
  ```

7. start project
  ```
  $ npm start
  ```


## Server
* run Django server
  ```
  $ source ./shoebox-env/bin/activate
  $ python manage.py runserver
  ```

  or use NPM script

  ```
  $ npm run server
  ```


## Testing

* API test
  ```
  $ python manage.py test api.tests
  ```
  or use NPM script
  ```
  $ npm run api-test
  ```

* UI test
  ```
  $ npm run ui-test
  ```
