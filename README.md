## TODO SERVICE API

## Setup
1. **Clone the Repository:**

    Clone the project repository from the provided URL using the following command:
    ```bash 
    git https://github.com/aripbudiman007/Todos-Service.git
    ```
2. **Install Dependencies:**

    Navigate to the project folder using the terminal:
    ```bash
    cd Todos-Service/
    ```
    Install the project dependencies using npm or yarn (we recommend using npm for this example):
    ```bash
    npm install
    ```
3. **Setup Env Configuration:**
    ```
    cp .env.example .env
    ```
    Update the `.env` file with your preferred database credentials:

4. **Run Database Migrations:**

    Apply database migrations to set up the required database tables. Execute the following command:
    ```bash
    sequelize db:migrate
    ```
5. **Run Development Mode**
    
    Start the application in development mode using the following command:
    ```
    npm run dev
    ```

6. **API Test**

    API Test URL: On `api.http`  
