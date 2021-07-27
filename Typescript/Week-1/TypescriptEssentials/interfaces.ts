interface Employee {
    name: string;
    title: string;
}

interface Manager extends Employee {
    department: string; 
    numOfEmployees: number;
    scheduleMeeting: (topic: string) => void;
}

let developer = {
    name: "michelle",
    title: "senior ts dev",
    editor: "DOOMEMACS"
}

let newEmployee: Employee = developer;
console.log( newEmployee);