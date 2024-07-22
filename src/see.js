const answers = ['A', 'B', 'C', 'D', 'E'];

const shuffleArray = (array) => {
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
console.log(answers)
answers = shuffleArray(answers)
