

Starberry App

Overview

The Starberry App is a responsive Next.js application designed to showcase property listings fetched dynamically from an API. The application features a static search result page and a dynamic detail view page, both styled using Tailwind CSS and integrated with various libraries like Formik, Yup, Axios, Fetch, Toast, and Leaflet.

Features

Responsive Pages: Two core pages - a static search result page and a dynamic detail view page.
Global CSS: Tailwind CSS used for styling, with global CSS managed in styles/globals.css and imported via pages/_app.js.
Data Fetching: Properties data is fetched from the following API: https://mira-strapi-dev.q.starberry.com/api/properties/?_limit=50
Form Handling: Built-in Form handling with Formik and Yup for form validation.
Dynamic Routing: Click on search result opens the dynamic detail view page.
Localization: Integrated with Leaflet for displaying property locations on a map.
Authorization: Future-ready for adding authentication if needed.
Error Handling: Proper handling of API errors and user input validation.


Technologies Used

Next.js: For server-side rendering and static site generation.
Tailwind CSS: For responsive and utility-first styling.
Formik & Yup: For form validation and handling.
Axios: For HTTP requests.
Leaflet: For integrating interactive maps.
React: Frontend framework.
Vercel: Deployment platform.

Installation

Clone the repository:

git clone https://github.com/BUUSHABR/starberry_app.git

Navigate into the project directory:
cd starberry_app

Install dependencies:

npm install  # or use yarn if preferred
Usage
Start the development server:
npm run dev  # or yarn dev

Access the application locally at: http://localhost:3000


Deployment
The app is deployed on Vercel and can be accessed using: ' https://starberry-8r8uhfv5n-one-days-projects.vercel.app'

Starberry App
File Structure

starberry_app/
├── node_modules/
├── pages/
│   ├── _app.js
│   ├── globals.css
│   ├── index.js (search result page)
│   └── details.js (dynamic detail view page)
├── components/
├── styles/
│   └── globals.css
└── ...

Thank You 