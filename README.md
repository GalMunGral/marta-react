<details>
  <summary>To Run The Web App</summary>
  
  ## 1. Prepare the database
  Make sure MySQL server is running, then start MySQL client from command line:
  ```bash
  mysql -u root -p [password]
  ```
  Run the following statements:
  ```mysql
  create database marta_v0;
  use marta_v0;
  source [project directory]/backend/v0/mysql/init.sql
  ```
  ## 2. Start the API server
  ```bash
  cd [project directory]/backend/v0
  npm install # Install dependencies first
  npm start
  ```
  ## 3. Start the app server
  ```bash
  cd [project directory]/frontend
  npm install # Install dependencies first
  npm start
  ```
  To log in as administrator, use username `admin` and password `admin123`.
  To log in as passenger use username `commuter14` and password `choochoo`.
</details>

<details>
  <summary>To Run The iOS / Xamarin.Forms App</summary>
  
  ## 1. Prepare the database
  Make sure MySQL server is running, then start MySQL client from command line:
  ```bash
  mysql -u root -p [password]
  ```
  Run the following statements:
  ```mysql
  create database marta;
  use marta;
  source [project directory]/backend/v1/mysql/init.sql
  ````
  ## 2. Start the API server
  ```bash
  cd [project directory]/backend/v1
  npm install # Install dependencies first
  npm start
  ```
  ## 3. For Xamarin.Forms
  Before building the project, make sure to replace the placeholder with your actual IP address in
  `[project_directory]/xamarin/MartaPassengerTraffic/MartaPassengerTraffic/LandingPage.xaml.cs`
  
  The line looks like this:
  ```c#
  var client = ((App)(Application.Current)).MyHttpClient;
  string endpoint = "http://[YOUR IP ADDRESS]:8080/stations";
  ```
  The mobile version is just a proof of concept that only displays the list of stations fetched from the server.
</details>
