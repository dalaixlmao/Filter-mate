# Almabase Assignment

This project is a frontend application built using Next.js. It utilizes Redux Toolkit for state management, Axios for making HTTP requests, and TailwindCSS for styling. The project is written in TypeScript to ensure type safety and better development experience.

## Deployed Link
*https://almabase-assignment-umber.vercel.app/*

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Features](#features)

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following software installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dalaixlmao/Almabase-assignment.git
   cd almabase-assignment

2. **Install dependencies:**

    ```bash
    npm install

### Running the Project
#### Development Server

    npm run dev

The application will start on http://localhost:3000.

### Project Structure
Here's an overview of the project structure:

    almabase-assignment/
    ├── app/         
    |   ├── favicon.ico
    |   ├── globals.css
    |   ├── layout.tsx
    |   ├── page.tsx
    ├── components/         
    |   ├── Alert.tsx
    |   ├── Cross.tsx
    |   ├── Error.tsx
    |   ├── Export.tsx
    |   ├── ExportFilter.tsx
    |   ├── FilterCheks.tsx
    |   ├── Filters.tsx
    |   ├── FilterType.tsx
    |   ├── Import.tsx
    |   ├── Loader.tsx
    |   ├── LowerHalf.tsx
    |   ├── Planet.tsx
    |   ├── Result.tsx
    |   ├── SearchBar.tsx
    |   ├── UploadOption.tsx
    ├── lib
    |   ├── action             
    |   |   ├── downloadJSON.ts
    |   |   ├── eventHandlers.ts
    |   |   ├── filterPlanets.ts
    |   ├── types
    |   |   ├── index.ts
    ├── public
    ├── store
    |   ├── store.ts
    |   ├── hook.ts
    |   ├── slice.ts
    |   ├── StoreProvider.tsx
    ├── .eslintrc.json    
    ├── tailwind.config.js
    ├── tsconfig.json     
    └── package.json     

### Technologies Used
- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A standardized way to write Redux logic, helping manage state efficiently.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.

### Features
- Filtering based on various parameters.
- Import other's filtering configurations.
- Download and share your filtering configuration.
