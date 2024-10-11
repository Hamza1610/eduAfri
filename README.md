# EduAfri API Service

EduAfri is a classical educational platform that makes learning accessible anywhere, anytime. This backend API is built using **Node.js**, **Express**, **Mongoose**, and **MongoDB**, and provides a structured system to manage **courses**, **categories**, and track **user progress**. It also integrates features for managing the course curriculum by week and includes an EduAfri AI assistant for personalized help.

## Table of Contents

- [Technologies](#technologies)
- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Steps to Set Up](#steps-to-set-up)
- [Usage](#usage)
  - [Starting the Server](#starting-the-server)
  - [Testing with Postman](#testing-with-postman)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)

## Technologies

This API is built using the following technologies:

- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing application data
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js

## Project Description

EduAfri is a platform designed to provide educational courses that can be accessed online. The API organizes courses into different **categories** such as **new courses**, **degree courses**, and **popular courses**. Each course includes various properties such as:

- **About the Course**: Course description, instructor details, and more
- **Resources**: List of course-related materials
- **Permissions**: Information on access rights for the course
- **Curriculum**: Weekly breakdown of course content with downloadable materials

Additionally, the API tracks user course progress, including courses they have completed and those currently in progress. Future enhancements include integrating the **EduAfri AI Assistant** for personalized guidance.

## Features

- **Course Management**: Create, update, delete, and retrieve course details.
- **Category Management**: Organize courses into categories such as "Degree Courses" and "Popular Courses."
- **User Progress Tracking**: Track which courses users have taken and which ones are in progress.
- **EduAfri AI Assistant** (Upcoming): AI assistant to assist users with course recommendations and questions.

## Installation

### Prerequisites

To run this project, you will need to have the following installed:

- **Node.js** (v14 or later)
- **MongoDB** (running locally or a cloud instance like MongoDB Atlas)

### Steps to Set Up

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/eduafri-api.git
   cd eduafri-api




# API Endpoints

## Courses

| Method | Endpoint          | Description                      |
|--------|-------------------|----------------------------------|
| GET    | /api/courses       | Retrieve all courses             |
| POST   | /api/courses       | Create a new course              |
| PUT    | /api/courses/:id   | Update a specific course         |
| DELETE | /api/courses/:id   | Delete a course by ID            |

## Categories

| Method | Endpoint               | Description                         |
|--------|------------------------|-------------------------------------|
| GET    | /api/categories         | Retrieve all course categories      |
| POST   | /api/categories         | Create a new course category        |
| GET    | /api/categories/:id     | Retrieve a category by ID           |
| PUT    | /api/categories/:id     | Update a category                   |
| DELETE | /api/categories/:id     | Delete a category by ID             |

# Models

## Course Model

| Field        | Type      | Description                                                         |
|--------------|-----------|---------------------------------------------------------------------|
| name         | String    | Name of the course                                                  |
| about        | String    | Summary of the course                                               |
| rating       | Number    | Rating of the course (1-5 stars)                                    |
| instructor   | String    | Name of the course instructor                                       |
| lastUpdated  | Date      | The date when the course was last updated                           |
| language     | String    | Language used in the course (e.g., English)                         |
| level        | Enum      | Difficulty level (Beginner, Mid, Advance)                           |
| curriculum   | Array     | List of weekly contents for the course. Each week has content and a link |
| resources    | Array     | Array of resource links                                             |
| permission   | Boolean   | Indicates whether the course is accessible (true/false)             |
| info         | String    | Additional information about the course                             |
| category     | ObjectId  | Reference to the Category model                                     |

## Category Model

| Field       | Type      | Description                                       |
|-------------|-----------|---------------------------------------------------|
| name        | String    | Name of the category (e.g., New Courses)          |
| description | String    | Description of the category                       |
| courses     | Array     | List of courses under this category               |

## User Model

| Field             | Type    | Description                                        |
|-------------------|---------|----------------------------------------------------|
| name              | String  | Name of the user                                   |
| email             | String  | Email of the user                                  |
| takenCourses      | Array   | List of courses the user has completed             |
| inProgressCourses | Array   | List of courses the user is currently taking       |
