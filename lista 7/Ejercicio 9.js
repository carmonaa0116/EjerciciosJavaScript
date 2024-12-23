const student = {
    name: "David",
    age: 25,
    skills: {
        frontEnd: [
            { skill: "HTML", level: 10 },
            { skill: "CSS", level: 8 },
            { skill: "JS", level: 8 },
            { skill: "React", level: 9 },
        ],
        backEnd: [
            { skill: "Node", level: 7 },
            { skill: "GraphQL", level: 8 },
        ],
        dataBase: [{ skill: "MongoDB", level: 7.5 }],
        dataScience: ["Python", "R", "D3.js"],
    },
};

const newStudent = {...structuredClone(student)};

newStudent.skills.frontEnd.push({skill: "Boostrap", level: 8});
newStudent.skills.backEnd.push({skill: "Express", level: 9});
newStudent.skills.dataBase.push({skill: "SQL", level: 8});
newStudent.skills.dataScience.push("SQL");