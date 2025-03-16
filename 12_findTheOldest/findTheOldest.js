const findTheOldest = function(people) {
    const ages = people.map((person) => {
        if ("yearOfDeath" in person) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return new Date().getFullYear() - person.yearOfBirth;
        }

    });
    let highestAge = 0;
    let highestAgeIndex = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > highestAge) {
            highestAge = ages[i];
            highestAgeIndex = i;
        }
    }
    return people[highestAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
