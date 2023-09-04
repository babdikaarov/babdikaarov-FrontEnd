import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};




type SearchEventsOptions = {
    query: number | string;
    eventType: string
}


function searchEvents(options: SearchEventsOptions){
    const events: (Course | StudyGroup)[] = options.eventType === "course" ? courses : studyGroups;

    return events.filter((event: Course | StudyGroup)=>{
        if(typeof options.query === 'number'){
            return options.query === event.id;
        }
        if(typeof options.query === 'string'){
            return event.keywords.includes(options.query);
        }
    })
}

let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event : Course | StudyGroup) {
    enrolledEvents = enrolledEvents.concat(event)
}

let searchResults = searchEvents({query: 2, eventType: 'art'});

// console.log(searchResults[0]);
enroll(searchResults[0]);
console.log(enrolledEvents);

