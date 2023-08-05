# Adopt a pet

Alright, let's break it down the task project:

So, I'm working on this project where I'll be using React Router to add client-side routing to my React Application. The main goal is to build a cool pet adoption website. It will allow users like me to do two things: view all the animals of a particular species and check out specific animal profiles.

Currently, when I open the app, it shows me a list of all the adoptable pets on the homepage. It's nice, but I know it can be better. There's this PetDetailsPage that can show the detailed information of a pet, but right now, it doesn't work because it lacks a proper route to display it.

So, my job is to add this client-side routing using React Router. With this in place, when I click on a link to view pets of a particular species, the homepage should only show pets of that species. That's awesome because it saves me time searching through the whole list.

And here's the exciting part: when I click on a specific pet, the PetDetailsPage should pop up with all the cool information about that pet. This is achieved by using a unique ID in the URL, making sure the right data is shown for that specific pet.

Now, there's a search bar, and when I look for a pet, I want to be taken to a separate SearchPage that filters the pets by their names. This way, I can quickly find the pet I'm looking for without scrolling endlessly.

Oh, and here's a nice touch: if I happen to click on a pet that doesn't have details available, I should be redirected to a PetNotFoundPage. From there, I'll have an easy "Go Home" button that takes me back to the main page.

Before I dive into coding, I'll spend some time understanding the project's starting code. In particular, I'll check out these main components:

- App.js: The main component of the app.
- HomePage: The component that shows all the adoptable pets.
- PetDetailsPage: The component to display detailed information about a specific pet.
- SearchPage: The component to filter pets by name.
- PetNotFoundPage: The component to handle when details for a pet are not available.

Oh, one more thing, this project uses [Mock Service Worker (MSW)](https://mswjs.io/docs/getting-started/mocks/rest-api) to simulate an external API's functionality. So, to get it working, I need to use Google Chrome and enable third-party cookies. Alright, let's get started!
