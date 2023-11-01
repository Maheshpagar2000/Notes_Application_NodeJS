# Notes Application using Node.js

This is a simple notes application created using Node.js. It allows you to add, remove, list, and read notes. Here's a brief overview of how the application works:

## Installation

Before using the application, make sure you have Node.js installed on your machine. If not, you can download it from [Node.js website](https://nodejs.org/).

To get started, follow these steps:

1. Clone or download this repository to your local machine.
2. Open a terminal or command prompt and navigate to the project directory.

## Usage

The application has several commands that you can use to manage your notes:

- **Add a Note**
  - Command: `add`
  - Description: Add a new note with a title and a body.
  - Example:
    ```
    node app.js add --title "Note Title" --body "Note Body"
    ```

- **Remove a Note**
  - Command: `remove`
  - Description: Remove a note by specifying its title.
  - Example:
    ```
    node app.js remove --title "Note Title"
    ```

- **List Notes**
  - Command: `list`
  - Description: List all your notes.
  - Example:
    ```
    node app.js list
    ```

- **Read a Note**
  - Command: `read`
  - Description: Read a note by specifying its title.
  - Example:
    ```
    node app.js read --title "Note Title"
    ```

## Example Data

The application uses a JSON file named `notes.json` to store your notes. Here is an example of the current data in `notes.json`:

```json
[{"title":"Deserts","body":"ice-cream"},{"title":"Courses","body":"C Java JS NodeJS"},{"title":"Groceries","body":"Shampoo, Oil, Facewash"},{"title":"D","body":"t"}]
