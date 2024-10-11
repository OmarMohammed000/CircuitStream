# Blog Writing Site

A simple blog writing web application built with Node.js, Express, and EJS for rendering views. Users can create, view, and delete blog posts. Blog data is stored in memory, making this project ideal for learning or development environments.

## Features

- **Create Blog Posts**: Users can submit a new blog post with a title, image URL, and body content.
- **View Blogs**: All created blogs are displayed on the homepage.
- **Delete Blogs**: Users can delete blogs from the homepage.
- **Validation**: The blog title and image URL are validated before submission to ensure proper input.

## Prerequisites

Ensure you have Node.js installed on your machine.

- Node.js (v12 or higher)

## Installation

1. Clone the repository:

   `git clone https://github.com/yourusername/blog-writing-site.git`

2. Navigate to the project directory:

   `cd blog-writing-site`

3. Install the required dependencies:

   `npm install`

## Running the Application
### Run locally 
1. Start the server:

   `npm start`

2. Open your browser and go to `http://localhost:3000` to access the blog writing site.
### See it online 
 - https://circuitstream.onrender.com/
## Project Structure


```bash
.
├── public/                   # Static files (CSS, images)
├── views/                    # EJS templates
│   ├── index.ejs             # Homepage displaying all blogs
│   ├── blog-creation.ejs     # Blog creation page
│   ├── augmentedReality.ejs  # Page for Augmented Reality blogs
│   └── q.ejs                 # Page for Quantum Computing blogs
├── index.js                    # Main application file
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## Endpoints

- `GET /` - Displays all blog posts.
- `GET /blogCreation` - Displays the blog creation form.
- `POST /` - Handles blog creation and validation.
- `POST /blogCreation` - Handles blog editing.
- `POST /reset-content` - Deletes a specific blog post by its count.

## Blog Validation

- **Title**: Required field.
- **Image URL**: Optional, but must be a valid URL ending with a `.jpg`, `.jpeg`, `.png`, or `.gif` extension.
- **Body Content**: Free-form text field for the blog content.

## Development Notes

- Blog posts are stored in memory and will be lost upon server restart. For production use, consider integrating a database like MongoDB or PostgreSQL.
- The app uses `body-parser` for handling form submissions.


## Contact

For any questions or feedback, feel free to reach out at `omarmohammedelsayed00@gmail.com`.
