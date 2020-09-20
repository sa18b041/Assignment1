
const apiKey = "MadMtoJQ06VJL87IDAjThi090940mq4GRVbdRv7n"
const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=linux&difficulty=Easy&limit=1`
console.log(apiUrl);


// async function getQuiz(limit, difficulty, category, tags) {
//     const url = apiUrl + '?' +
//         `apiKey=${apiKey}& ` +
//         `limit=${limit ?? 1}& ` +
//         `difficulty=${difficulty ?? 'easy'}& ` +
//         `category=${category ?? ''}& ` +
//         `tags=${tags ?? ''}`
//     const response = await fetch(url)
//     let json = await response.json()

//     if (json.multiple_correct_answers === 'true')
//         return await getQuiz(limit, difficulty, category, tags)


// // curl https://quizapi.io/api/v1/questions \
// // -H 'X-Api-Key: MadMtoJQ06VJL87IDAjThi090940mq4GRVbdRv7n

// const getTodos = callback => {

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//     if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         callback (undefined, data);
//      } else if (request.readyState === 4){
//             callback ('could not get the data', undefined);
//         }

//         });
//        // if you use the own JSON file then:
//         //request.open('GET', 'todos.json');  

//     // request.open('GET', 'curl https://quizapi.io/api/v1/questions \
//     // -H "X-Api-Key: MadMtoJQ06VJL87IDAjThi090940mq4GRVbdRv7n"');
//     request.open('GET', 'curl https://quizapi.io/api/v1/questions -G \
//     -d apiKey=MadMtoJQ06VJL87IDAjThi090940mq4GRVbdRv7n \
//     -d limit=10');
//     request.send();
    
// }; 

// getTodos((err, data) => {
//     console.log('callback fired');
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
