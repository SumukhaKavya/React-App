# React-App
This is a Front End Application that uses the Unsplash API to retrieve images and display them to the user based on their search query. The application is built using React and utilizes routes, context, and hooks.

To get started, you will need to sign up for a free Unsplash account to get an API client key. Alternatively, you can use other image provider APIs such as Flickr.

Features
The application has the following features:

Search: Users can search for images by entering keywords in the search box and clicking the search button.

No Results Found: If no images are found based on the user's search query, the application will display a "No images found" message.

Display Images: If images are returned based on the search query, the application will display 12 images with their small dimensions. Each image is also linked to a higher resolution version of the image itself.

Loading Indicator: While the image data is being loaded from the API, the application displays a loading indicator in the form of a spinner or text that says "loading."

Error Logging: If there is an error in the API, the application logs it to the console.

Installation
To run this application locally, follow these steps:

Clone the repository: git clone https://github.com/SumukhaKavya/React-App.git

Install dependencies: npm install

Add your API client key to the .env file: REACT_APP_UNSPLASH_ACCESS_KEY=your-access-key

Start the development server: npm start

This application was built using the following technologies:
1. React

2. Unsplash API

3. Axios

4. React Router

5. React Context API

6. React Hooks

7. HTML

8. CSS

Conclusion:
This application demonstrates how to build a simple front-end application using React and the Unsplash API. It is a good starting point for developers who want to learn how to integrate APIs into their applications.
