const formQuestionsAnswers = document.querySelector('.form-category');

const quizForm = document.querySelector('.quiz-form');
const question = document.querySelector('.lead');

const answer1 = document.getElementById("a");
const answer2 = document.getElementById("b");
const answer3 = document.getElementById("c");
const answer4 = document.getElementById("d");

const loadData = async (category, difficulty) => {
    const apiKey = "MadMtoJQ06VJL87IDAjThi090940mq4GRVbdRv7n"
    const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}&difficulty=${difficulty}&limit=1`
    console.log(apiUrl);
    const result = await fetch(apiUrl)
    const data = await result.json();
    // if (result.status === 200) {
        
    //     const data = await result.json();
    // } else {
    //     throw new Error('page could not be loaded')
    // }
    return data;

}


// the selection from the user will be shown in the console
formQuestionsAnswers.addEventListener('submit', e => {
    e.preventDefault();
    const category = formQuestionsAnswers.category.value;
    const difficulty = formQuestionsAnswers.difficulty.value;
    
    // to check data in the console
    // loadData(category, difficulty)
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
    

    // now show the data on the browser
    loadData(category, difficulty)
 .then(data => showQuestion(data[0]))
 .catch(err => console.log(err))
    
})

// show the questions in the form
const showQuestion = data => {
    // to check if the question is shown on the console
//console.log(data.question);

console.log(data);
// to show within the form HTML
question.innerHTML += data.question; 
answer1.innerHTML += data.answers.answer_a; 
answer2.innerHTML += data.answers.answer_b; 
answer3.innerHTML += data.answers.answer_c; 
answer4.innerHTML += data.answers.answer_d; 
}