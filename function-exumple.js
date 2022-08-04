// function functionName(parameters) {
//     function body
//     return 
// }

// var returnedValue = functionName(parameters value)

function getAverage(assingnment1, assingnment2, assingnment3) {
    const total = assingnment1 + assingnment2 + assingnment3;
    const average = total / 3;
    return average;
}

const assingnment1Marks = 60;
const assingnment2Marks = 58;
const assingnment3Marks = 59;

var myAverage = getAverage(assingnment1Marks, assingnment2Marks, assingnment3Marks);
console.log('my average so far:', myAverage);