const findTheOldest = function(people) {
    const peopleWithAges = people.map(getAge);
    const sortWithAges = peopleWithAges.sort((firstItem, secondItem) => secondItem.age - firstItem.age);
    const oldestPerson = sortWithAges[0];
    return oldestPerson;
};

const getAge = function(person)
{
    const deathYear = person.yearOfDeath ?? new Date().getFullYear();
    const age = deathYear - person.yearOfBirth;
    return {...person, age};
}


// Do not edit below this line
module.exports = findTheOldest;
