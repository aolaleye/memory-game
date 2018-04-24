# Memory Game

#### React breaks up this application's UI into components, manages component state, and responds to user events to create a memory game.

### Overview
* This application renders different images to the screen. Each image listens for click events.
* The app keeps track of the user's score. 
* The user's score is incremented when clicking an image for the first time. 
* The user's score is reset to 0 if the user clicks the same image more than once.
* Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.
* Once the user's score is reset after an incorrect guess, the game restarts.