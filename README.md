# Ecommerce-Follow-Along.

**Milestone 1: Project Overview**

 Core concepts:
 1)MERN Stack: A set of tools for building web apps:

MongoDB: Stores data.
Express.js: Builds APIs on the server.
React: Creates the front-end.
Node.js: Runs JavaScript on the server.

2)REST API: Lets the front-end talk to the back-end using HTTP methods:

GET: Fetch data.
POST: Add data.
PUT/PATCH: Update data.
DELETE: Remove data.
Data is sent in JSON format for easy use by the front-end.

3)Authentication: Confirms "Who are you?" to protect sensitive actions like buying items or viewing order history.

Tech Stack  

- Frontend: React framework for building the user interface.  
- Backend: Node.js to handle server-side operations and APIs.  
- Database: MongoDB for storing user and product data efficiently.  

Why This Project  

This project was developed to make online shopping easier and more enjoyable for users. By providing a personalized shopping experience, it helps users save time, find what they need, and stay updated with deals and notifications. The application aims to bring convenience and efficiency to e-commerce, catering to both frequent shoppers and occasional buyers.

**Milestone 2: Project Setup and Login Page**

This milestone focuses on setting up the project structure and implementing a basic login page.

Key Features

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Login Page: A simple login page with fields for username and password.

Tech Stack Used

- Frontend: React, Tailwindcss

**Milestone 3: Server setup and error handling.**


Key Features: 

Organized backend code with a clear folder structure.

Configured a Node.js server using Express to handle APIs.

Integrated MongoDB for data storage and management.

Implemented basic error handling for smooth server operations.

Tech Stack: 

Backend: Node.js, Express  
Database: MongoDB, Mongoose.

**Milestone 4:**

 User Management System with File Upload

This project is a simple User Management System that allows the creation, retrieval, and management of user data. It also supports file uploads (like profile pictures) using *Multer*.

Features
- *User Model*: Blueprint for storing user data in the database.
- *User Controller*: Manages operations like adding, retrieving, and updating user information.
- *File Uploads*: Accepts and stores user-uploaded files (e.g., profile images).
- *Documentation*: Well-documented code for ease of



**Milestone 5 :**

This milestone focus on creating the sign-up page and form validation.



Key Features

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Signup Page: A simple signup page with fields for Name Email Password User Photo.

Tech Stack Used

- Frontend: React


**Milestone 6:**
  This milestone focus on the password Encryption and User Data Storage

  Key Features

       1)Password Encryption: Used bcrypt to hash passwords.
       2)User Data Storage: Saved user data securely in the user inputs.

 Tech stack used :
   - Backend : node.js



**Milestone 7:**
  In this milestone we are going to create a backend endpoint for user and  the focus is on validating user credentials and verifying the encrypted password stored in the database.



Key features:
   1)validate user credentials during login:
Protect User Data: Keeps passwords safe even if the database is compromised.
Privacy: Ensures passwords aren't stored in plain text.
Compliance: Meets security standards like GDPR and PCI-DSS.
Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

   2) compare the encrypted password with the user’s input:
User Enters Credentials:

The user provides their email/username and password on the login page.

Fetch User Data from Database:

The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.

Tech stalk:
 Backend : bcryptjs.


**Milestone 8:**
In this milestone,  we will create a frontend card component for products and design a homepage to display these cards for each product.

Key features:   
  1) create a card component:
Showcase Products Effectively: Presents product details in a clear and visually appealing way.
Reusable Design: Can be used across multiple pages or sections of the app.
Improved User Experience: Makes it easy for users to browse and interact with products.
Organized Layout: Keeps the homepage clean and structured.
  2) display those cards on the products page:
Create a Dynamic Component: Design a single card component that accepts product details as props.
Use Mapping: Use array mapping to iterate over the product list and render a card for each product.
Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.
Maintain Consistency: Ensure the layout remains uniform for all products.



Tech stack :
Frontend: react




## MileStone-9 : CreateProduct Component


**Overview**          

CreateProduct is a React component that allows users to create a product by filling out a form with details such as name, description, category, price, stock, and images. It provides real-time image previews and validates required fields before submission.

Features

User-friendly form for creating a product
Supports image uploads with previews  
Dynamically updates form state using React useState
Cleans up object URLs to prevent memory leaks
Uses Tailwind CSS for styling
Displays an alert upon successful submission

## Milestone 10: Updated models/product.js controller/product.js Createproductjs

**Controller/Product.js:**

This Express.js route handles the creation of a new product. It validates the product data, checks if the user exists in the database, and ensures that at least one image is uploaded. If validation passes, the product is saved to the database and a success message is returned.

**model/Product.js**

This code defines a Mongoose schema for a "Product" model in MongoDB. It specifies fields such as name, description, category, tags, price, stock, email, and images, with validation rules to ensure that required data is provided. Additionally, it includes automatic timestamping for creation and modification times. The schema is then used to create and export the Product model.

**src/Creatproduct.js**

The CreateProduct component is a form for creating a new product. Here's a quick breakdown of its key features:

State Management: Uses useState to manage the form data for name, description, category, tags, price, stock, and email, along with image handling (images and previewImages).
File Handling: Allows users to upload multiple images, which are previewed before submission. The images are added to the form data using FormData.
Form Submission: When the form is submitted, the data is sent to the backend using axios. If the request is successful, a success message is displayed, and the form is reset. If there's an error, an alert is shown.
Category Options: Provides a set of predefined categories for the product (Electronics, Fashion, Books, and Home Appliances).


**Milestone 11 - Dynamic Home Page with MongoDB Integration**

In this milestone, we focused on making the home page dynamic by fetching and displaying product data stored in MongoDB. The objective was to write a backend endpoint that retrieves all saved product data and sends it to the frontend. On the frontend, we implemented a function to request this data and dynamically render it using the previously created product card component. This milestone helped in understanding how to extract data from MongoDB, send it through an API endpoint, receive it in the frontend, and display it efficiently using components. By completing this, we have successfully built a dynamic product listing system that enhances user interaction and improves the functionality of our application.

**Milestone 12 - My Products Page with User-Based Filtering**

In this milestone, we developed the *My Products* page, which displays only the products added by the logged-in user based on their email. We achieved this by writing a backend endpoint that filters product data in MongoDB using the user's email and sends only the relevant products to the frontend. On the frontend, we implemented a function to fetch this filtered data and dynamically render it using the existing product card component. This milestone provided valuable experience in filtering data based on specific constraints, handling API requests efficiently, and dynamically displaying user-specific content. Successfully completing this step enhances the personalization of the application, allowing users to manage their own products seamlessly. 


**Milestone 13: Edit Uploaded Products**

Overview
In this milestone, we implemented the functionality to edit uploaded products in our application. Users can now modify product details seamlessly, with the form auto-filling existing data for convenience. Once edited, the updated information is sent to the backend and reflected in real time.

 Tech Talk
Backend: Created a PUT API endpoint (/products/:id) using findByIdAndUpdate() in MongoDB, ensuring proper error handling for invalid or non-existent IDs.
Frontend: Added an edit button on product cards that fetches existing product details and auto-fills the form for editing. The updated data is then sent to the backend.
Testing: Verified API functionality using Postman, checked data updates in MongoDB, and ensured real-time UI updates for a smooth user experience



 **Milestone 14 - Delete Product Functionality**  

In this milestone, we implemented a delete functionality for products. We added a DELETE API endpoint in the backend using Express.js and MongoDB, allowing products to be removed using their ID. On the frontend, we added a **delete button to each product card, which sends a request to the server to remove the product from the database. This ensures a smooth user experience by dynamically updating the UI after deletion. 
**Milestone 15 - Reusable Navigation Component**  

In this milestone, we created a reusable and responsive navigation bar for our eCommerce project. The Nav component includes links to essential pages like home, My Products, Add Product, and Cart. It was designed to be adaptive and user-friendly using CSS for responsiveness. This component was then integrated across multiple pages to ensure seamless navigation throughout the app. 


Tech Stalk :

Frontend:
React.js – For building the Nav component.
give like this
ChatGPT said:
Here’s your Milestone 16 update in the same format:

**Milestone 16 - Product Info Page**
In this milestone, we created a Product Info Page that displays detailed product data. Users can choose the quantity and click the Add to Cart button to add items to their cart.


Tech Stack:
Frontend:
 React.js – For building the Product Info Page.


**Milestone 17 - Cart Functionality**


In this milestone, we implemented cart functionality that allows users to store product details in a shopping cart.  
Users can add products, and the cart schema stores the product information.


 Tech Stack
Backend:mongodb
frontend:react.js


**Milestone 18 - Backend API for Cart Page**
In this milestone, we created backend endpoints to interact with the cart page and manage cart data for users.

Features Implemented:
Create an endpoint to receive requests from the cart page.
Create a backend endpoint to fetch all products inside the cart using the user's email.

Tech Stack:
Backend:  MongoDB

**Milestone 19 - Cart Page Frontend & Quantity Management API**
In this milestone, we will create the cart page UI, display products from the backend API, and implement functionality to increase and decrease product quantity using backend endpoints.

Tech stalk :
Frontend: React.js
Backend : mongoDB

**Milestone 20 - Profile Page & API**


 In this milestone we are going to show profile page displaying user details dynamically.
Backend 
- Create an API endpoint to fetch user data by email.  
- Ensure database connection & CORS setup.  

Frontend 
- Fetch and display profile photo, name, email.  
- Show addresses (or "No address found").  
- Add Add Address button.  


**Milestone 21 - Address Form**

1)Create an address form page with input fields:

Country
City
Address 1
Address 2
Zip Code
Address Type (e.g., Home, Work)
2)Store the input address in the application state.
3)Ensure clicking "Add Address" in the profile page navigates to this form.

Tech stalk:
Frontend:React.js

**Milestone 22: Store User Address in Database**

Overview

Create a backend endpoint to store a user's address inside their profile in the database.

Steps to Complete

Set Up Route - Create an Express route to handle address submissions.

Implement Logic - Find user, update their address array, and save changes.

Tech Stalk:
Backend:mongoDB


**Milestone 23 - Place Order Functionality**

Features Implemented:

Added a "Place Order" button in the cart page.

Created a "Select Address" page to display and choose a delivery address.

Developed a backend endpoint to fetch user addresses.

Designed a Mongoose schema to store order details.

Tech Stack:

Frontend: React

Backend: Node.js, Express.js

Database: MongoDB

**Milestone 24 - Order Confirmation Page**

 Features Implemented:
- Display all the products being ordered.
- Show the selected delivery address.
- Display the total value of the cart.
- Add a "Place Order" button at the bottom.

Tech Stack:
Frontend: React
Backend: Node.js, Express.js
Database: MongoDB

**Milestone 25 - Placing an Order**
Overview
In this milestone, we will implement the backend endpoint that allows users to place an order. This endpoint will receive product details, user details, and the delivery address. Each product will be stored as a separate order in the database.


Tech Stack
Backend: Node.js, Express.js
Database: MongoDB


**Milestone 26 - Fetching User Orders**
Overview
In this milestone, we will implement an API endpoint that retrieves all orders placed by a specific user. The endpoint will receive the user’s email, find the user's _id, and return all orders associated with that user.

Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Frontend: React


**Milestone 27 - My Orders Page**

 Overview
In this milestone, we will create a My Orders page where users can view their order history. We will fetch user-specific orders from the backend by making a GET request to the `/my-orders` endpoint, passing the user's email. The retrieved orders will then be displayed on the frontend. Additionally, we will update the navigation bar to include a link to the My Orders page for easier access.

Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: React

**Milestone 28 - Cancel Order Feature**

Overview
In this milestone, we will enhance the My Order page by adding a Cancel Order button for each order. Users will be able to cancel an order unless it has already been canceled. We will implement a new backend endpoint to update the order status to Canceled when the button is clicked.

Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: React


**Milestone 29 - PayPal Integration**

Overview

In this milestone, we will integrate PayPal as an online payment option in the Order Confirmation page. Users can choose between Cash on Delivery (COD) and Online Payment (PayPal). Selecting Online Payment will display the PayPal buttons.

Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

Frontend: React

Payment Gateway: PayPal

**M-30 PayPal Payment Integration**

1. Install the @paypal/react-paypal-js package in your project.
2. Wrap your app with PayPalScriptProvider and provide your PayPal Client ID.
3. Create a PayPal button to handle payments.
4. Add the PayPal button to your checkout page.
5. Use *Sandbox mode* for testing before going live.
6. Replace the sandbox client-id with a live Client ID for real transactions.

This integration allows users to make secure payments via PayPal, credit, and debit cards. 



**Milestone 31 - Redux Global State Management**

Overview
In this milestone, we implement Redux for global state management, allowing seamless access to the user's email across components. We configure a Redux store, define actions, and provide the store to the app.

Tech Stack
- Frontend: React
- State Management: Redux, React-Redux

 **Milestone 32 - Global State Management with Redux (Login Flow)**

Overview
 In this milestone we will come to learn how to use Redux for managing global state by storing the user's email on login and accessing it across the app using useSelector.

Tech Stack:
Frontned: React.js
State Management: Redux, React-Redux


**Milestone 33 - Saving Password and Setting JWT Token in Cookie**

 Overview
In this milestone, you'll learn how to securely generate a JWT token upon user login and store it in the browser using cookies. This is essential for handling authenticated sessions in full-stack web applications.

Tech Stack:
Backend :Express.js,jsonwebtoken
Database: Mongodb
