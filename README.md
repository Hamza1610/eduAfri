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
