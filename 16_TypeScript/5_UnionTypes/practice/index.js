"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = __importDefault(require("./courses"));
const studyGroups_1 = __importDefault(require("./studyGroups"));
function searchEvents(options) {
    const events = options.eventType === "course" ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return options.query === event.id;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents = enrolledEvents.concat(event);
}
let searchResults = searchEvents({ query: 2, eventType: 'art' });
// console.log(searchResults[0]);
enroll(searchResults[0]);
console.log(enrolledEvents);
