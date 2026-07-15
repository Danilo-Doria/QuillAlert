# QuillAlert
QuillAlert is a citizen participation platform that allows the inhabitans of barranquilla to report urban issues such as damaged roads, garbage accumulation, broken streetlights, traffic signs or security concerns.

## 📖 Description:
citizens can create reports, attach images, sepecify the location on an interactive map, and track the status of each report. Administrators (City Hall) can review reports, update their status, and organize incidents through an administrative dashboard.

The main goal of this project is to develop a modern Single Page Application (SPA) using Vanilla JavaScript while implementing authentication, role-based access control, REST APIs, and relational databases.

### 🔐 Key Features:
- **Authentication:** User registration, Secure login, Profile management.
- **Citizen Reports:** Create urban incident reports, Upload images, Select location on an interactive map, Categorize reports, View personal reports, Track report status.
- **Interactive map:** Visualize report locations, Navigate through reported incidents.
- **Administration Panel:** Administrators can: View every report, Filter reports by category and status, Update report status, Manage users and View platform statistics.

## 📂 Project Structure (test version)

The project is divided in two main parts:

- **`/client`**: Contains the user interface built with **Vite** and **Tailwind CSS**.
- **`/server`**: Contains the backend, simulating the data server using JSON Server. **json-server**.

```bash
.
QuillAlert
│
├── Frontend (client)
│   ├── src
│   │   ├── components     # Reusable components
│   │   ├── controllers    # View Logic
│   │   ├── router         # SPA Route Configuration
│   │   ├── services       # API Usage and HTTP Requests
│   │   ├── styles         # Global Styles
│   │   ├── utils          # Auxiliary Functions
│   │   ├── views          # App Pages
│   │   └── main.js        # Entry point
│   │
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── Backend (server provisional)
│   ├── package.json
│   └── ...
│
└── README.md

```

## 🛠️ Technologies Used

- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS.
- **Build Tool:** Vite.
- **Backend (Simulated):** Express.js, REST API
- **Database:** PostgreSQL, Supabase
-- **External services:** Supabase Storage, Leaflet, OpenStreetMap

##  Database model
...
## 🚀 Installation

1.  Install the dependencies in the folder `client`:
    ```bash
    cd client
    npm install
    npm run dev
    ```
2.  Set up and start your server in the folder `server`:
    ```bash
    cd server
    npm install
    ```

## MVP
  the first version of QuillAlert includes: User Authentication, Citizen and Administrator roles, Create reports, Upload images, Interactive map, Categories, Report status management, Administrative dashboard

  - Future versions will include: Voting system, Notifications, AI classification, Mobile application, Government API integration.

# Scrum

This project follows the **Scrum** framework to organize development, manage tasks, and deliver incremental improvements throughout the project lifecycle.

## Team Roles

| **Product Owner** | Danilo Doria |
| **Scrum Master** | Leonardo Jiménez |
| **Frontend Developers** | Development Team |
| **Backend Developers** | Development Team |


### Product Backlog

The Product Backlog contains all prioritized features and requirements, including:

- User authentication
- Citizen reports
- Interactive map
- Report management
- Administration panel
- Statistics dashboard
- Voting system *(Future implementation)*

### Sprint Backlog

Each sprint focuses on delivering a functional increment of the project. Current sprint objectives include:

- SPA architecture
- User authentication
- Report creation
- Interactive map integration
- Administrative dashboard

### Sprint Increment

At the end of every sprint, the team delivers a working version of the application with completed and tested features.

## Project Management Tools

- Jira — Sprint planning and task management
- GitHub — Version control
- Git Flow — Branching strategy
- Google documents — Project documentation



## 👨‍💻 Authors

- GitHub: **[Danilo-Doria](https://github.com/Danilo-Doria)**
- GitHub: **[Leonardo-Jimenez](https://github.com/LeonardoFRNG)**
- GitHub: **[Emanuel-manotas](https://github.com/Emanuel1102)**


## 📄 License

This project was created for educational purposes and personal learning.
