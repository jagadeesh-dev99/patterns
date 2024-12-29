function appendPattern(patternFunc, n) {
    const divEl = document.getElementById('div');
    const childEl1 = document.createElement('div');
    childEl1.style.display = 'inline-block';
    childEl1.style.margin = '50px';
    childEl1.style.whiteSpace = 'pre'; 
    divEl.appendChild(childEl1);

    const pattern = patternFunc(n);
    pattern.forEach(row => {
        const childEl = document.createElement('div');
        childEl.textContent = row;
        childEl1.appendChild(childEl);
    });
}

function generateSquarePattern(n) {
    const pattern = [];
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            str += '* ';
        }
        pattern.push(str);
    }
    return pattern;
}

function generateTrianglePattern(n) {
    const pattern = [];
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '* ';
        }
        pattern.push(str);
    }
    return pattern;
}

function generateTriangleNumbersPattern(n) {
    const pattern = [];
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += `${j} `;
        }
        pattern.push(str);
    }
    return pattern;
}

function generateTriangleSameNumbersPattern(n) {
    const pattern = [];
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += `${i} `;
        }
        pattern.push(str);
    }
    return pattern;
}
function reversedTrainglePattern(n){
     const pattern = [];
     for(let i=1;i<=n;i++){
        let str='';
        for(let j=0;j<=n-i;j++){
            str+='* '
        }
        pattern.push(str)
     }
     return pattern;
}

function reversedTraingleNumbersPattern(n){
    const pattern = [];
    for(let i=1;i<=n;i++){
       let str='';
       for(let j=0;j<=n-i;j++){
           str+=`${j+1} `
       }
       pattern.push(str)
    }
    return pattern;
}

function trialgleMidPattern(n){
    const pattern = [];
    for(let i=0;i<n;i++){
        let str = '';
        let spaces =" ";
       
        for(let k=1;k<=i;k++){
            str+=" * ";            
        }
        for(let j=0;j<=(n-i-1);j++){
            spaces+="  "
        }
        pattern.push(spaces+str)
    }
    return pattern;
}
function reversetrialgleMidPattern(n){
    let pattern = []
    for(let i=0;i<n;i++){
        let str = '';
        let spaces =" "
        for(let k=1;k<=i;k++){
            spaces+="  "
        }
        for(let j=0;j<=(n-i-1);j++){
            str+=" * "
        }
        pattern.push(spaces+str)
    }
    return pattern;
}
function fullTriangle(n){
    return [...trialgleMidPattern(n),...reversetrialgleMidPattern(n)]
}
function sideTriangle(n){
    let pattern = []
    for(let i=1;i<=n;i++){
        let str=''
        let index = i<=n/2?i:n-i
        for(let j=1;j<=index;j++){
            str+='* '
        }
        pattern.push(str)
    }
    return pattern
}
function binaryTraingle(n){
    let pattern = [];
    for(let i=1;i<=n;i++){
        let str='';
        for(let j=1;j<=i;j++){
            str+= (i+j)%2===0 ?1 :0
        }
        pattern.push(str)
    }
    return pattern
}

function mirrorTrinaglePattern(n){
    let pattern = [];

for (let i = 1; i <= n; i++) {
    let str = '';
    let spaces = "";
    let last = '';
    for (let j = 1; j <= i; j++) {
        str += j
    }
      for (let k = 1; k <= (2*n-2*i); k++) {
        spaces += "  "
    }
     for (let l = 1; l <= i; l++) {
        let item = l+last
        last = item
    }
    pattern.push(str+spaces+last);
}
return pattern
}
function incrementTrainglePattern(n){
    let pattern = [];
    let value = 1
for (let i = 1; i <= n; i++) {
     let number ='';
     
     for(let j=1;j<=i;j++){
         number+=`${value} `;
         value++
     }
     pattern.push(number)
    
}
return pattern;
}
function abcMidPattern(){
    let pattern = [];
    const arr = ['A','B','C',"D",'E','F']
for(let i=0;i<arr.length;i++){
    let str='';
    let spaces = ""
    for(let j=0;j<=arr.length-i-1;j++){
        spaces+="   "
    }
    for(let j=0;j<=i;j++){
        str+=`${arr[j]} `
    }
    for(let k=i-1;k>=0;k--){
        str+=`${arr[k]} `
    }
    pattern.push(spaces+str)
}
return pattern
}
// Append patterns
appendPattern(generateSquarePattern, 10);
appendPattern(generateTrianglePattern, 10);
appendPattern(generateTriangleNumbersPattern,10);
appendPattern(generateTriangleSameNumbersPattern,9);
appendPattern(reversedTrainglePattern,10)
appendPattern(reversedTraingleNumbersPattern,10)
appendPattern(trialgleMidPattern,10)
appendPattern(reversetrialgleMidPattern,10);
appendPattern(fullTriangle,10);
appendPattern(sideTriangle,20);
appendPattern(binaryTraingle,20)
appendPattern(mirrorTrinaglePattern,9);
appendPattern(incrementTrainglePattern,10)
appendPattern(abcMidPattern)



