# This project is about creating a TypeScript program for Unionversity, an educational institution

The program must be able to

1. Search for courses and study groups based on a query.
2. Enroll in courses or study groups.
3. Print a list of enrolled events.

Here's a summary of the tasks:

1. Import `courses.ts` and `studyGroups.ts` into `index.ts`.
2. Define types `Course` and `StudyGroup` based on the data in the imported files.
3. Create a function `searchEvents(options: SearchEventsOptions)` to search for events (courses or study groups) based on query and event type.
4. Define a type `SearchEventsOptions` to describe the input options for the `searchEvents` function.
5. Implement the `searchEvents` function to filter events based on the provided query and event type.
6. Implement a function `enroll(event: Course | StudyGroup)` to enroll in an event and store it in an array.
7. Print the list of enrolled events.

Additional tasks for extra credit are also mentioned at the end of the project description.
