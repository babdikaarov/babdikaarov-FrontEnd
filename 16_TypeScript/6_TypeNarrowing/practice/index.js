"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raccoon_meadows_log_1 = require("./raccoon-meadows-log");
const wolf_point_log_1 = require("./wolf-point-log");
function combineVolunteers(volunteers) {
    return volunteers.map((volunteer) => {
        let id = volunteer.id;
        if (typeof id == "string") {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: volunteer.name,
            activities: volunteer.activities,
        };
    });
}
function getHours(activity) {
    if ('hours' in activity) {
        return activity.hours;
    }
    else {
        return activity.time;
    }
}
function isVerified(verified) {
    if (typeof verified == 'string') {
        if (verified == "Yes")
            return true;
        else if (verified == 'No')
            return false;
    }
    return verified;
}
function calculateHours(volunteers) {
    return volunteers.map((volunteer) => {
        let hours = 0;
        volunteer.activities.forEach((activity) => {
            if (isVerified(activity.verified)) {
                hours += getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
}
function byHours(a, b) {
    return a.hours - b.hours;
}
const combinedVolunteers = combineVolunteers([...wolf_point_log_1.wolfPointVolunteers, ...raccoon_meadows_log_1.raccoonMeadowsVolunteers]);
// console.log(combinedVolunteers) 
let result = calculateHours(combinedVolunteers);
console.log(result.sort(byHours));
