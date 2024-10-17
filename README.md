# Comments Application

This is an intuitive **Comments Application** that allows users to post comments and reply to them in an n-level nested structure. Users can manage their comments and replies efficiently with an easy-to-use interface for adding, replying, deleting, and collapsing nested replies.

You can try the application [here](https://mukush11.github.io/JS---Comments/).

## Features

- **Add Comments:** Users can post comments, which will appear at the top level of the comment thread.
  
- **Reply to Comments:** Each comment can be replied to multiple times, and each reply can further be replied to, creating a nested comment structure with no limit (n-level nesting).

- **Hide/Show Reply Text Area:** The reply text area for each comment or reply is not visible by default. It becomes visible when the user clicks the **Reply** button. The same button is used to submit the reply after writing.

- **Delete Comments and Replies:** Each comment or reply has a **Delete** button, which will delete the comment/reply and all of its nested replies.

- **Expand/Collapse Nested Replies:** For each comment or reply, users can toggle the visibility of nested replies by clicking the **Expand** or **Collapse** buttons.

## How to Use

1. **Add a Comment:**
   - Enter your comment in the provided input field and submit it.
   
2. **Reply to a Comment:**
   - Click the **Reply** button below any comment. This will show a text area where you can write your reply. After writing, click the **Reply** button again to submit the reply.

3. **Delete a Comment/Reply:**
   - Click the **Delete** button next to any comment or reply. This will delete the comment/reply along with all nested replies under it.

4. **Expand/Collapse Replies:**
   - Use the **Expand** button to show all nested replies and **Collapse** to hide them.

## Tech Stack

- **HTML** for structuring the app.
- **CSS** for styling the user interface.
- **JavaScript** for handling the functionality and dynamic behavior of the comment threads.
- **LocalStorage/Database (if applicable)** for persisting comments and replies.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/MuKuSh11/JS---Comments.git

2. Navigate into the project directory:

    ```bash
    cd JS---Comments

3. Open index.html in your preferred browser to start using the application.

## Live Demo

Check out the live version of the app [here](https://mukush11.github.io/JS---Comments/).