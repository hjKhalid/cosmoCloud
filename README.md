# Employee Management CRUD Application

This project is a simple CRUD (Create, Read, Update, Delete) application for managing employee records. The frontend is built with React.js, and it integrates with the Cosmocloud API for backend operations.

## Features

- List all employees
- View details of a single employee
- Add a new employee
- Delete an employee

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **API**: Cosmocloud

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)
- Cosmocloud account with deployed CRUD API

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/employee-management-crud.git
cd employee-management-crud
```

2. **Install dependencies**:

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

3. **Setup environment variables**:

Create a `.env` file in the root of your project and add the following:

```plaintext
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_ENVIRONMENT_ID=your_environment_id
REACT_APP_API_BASE_URL=https://api.cosmocloud.io/v1
```

Replace `your_project_id` and `your_environment_id` with your actual Cosmocloud project and environment IDs.

4. **Start the development server**:

Using npm:

```bash
npm start
```

Or using yarn:

```bash
yarn start
```

The application will run on `http://localhost:3000`.

## Project Structure

```plaintext
src/
│
├── components/
│   ├── EmployeeList.tsx
│   ├── EmployeeDetails.tsx
│   ├── AddEmployee.tsx
│   └─
├── services/
│   └── employeeService.ts
│
├── App.tsx
├── index.tsx
└── ...
```

## Running Tests

To run the tests, use the following command:

Using npm:

```bash
npm test
```

Or using yarn:

```bash
yarn test
```

## Usage

- **Employee List Page**: View all employees.
- **Employee Details Page**: Click on an employee from the list to view detailed information.
- **Add Employee Page**: Add a new employee to the system.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Cosmocloud for providing the API platform.
- React.js and Tailwind CSS for the frontend framework and styling.

## Contact

If you want to contact me, you can reach me at [your-email@example.com].

---
