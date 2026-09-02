interface Student {
    name: string,
    age: number,
    cgpa: number,
    isPlaced?: boolean
}

function getTopStudents(arr: Student[]): Student[] {
    arr = arr.filter((s) => s.cgpa > 7.5)
    return arr;
}