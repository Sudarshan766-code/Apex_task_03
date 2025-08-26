const quizData = [
  { 
    question: "Which data structure uses LIFO (Last In First Out)?", 
    img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Data_stack.svg", 
    options: ["Queue", "Stack", "Tree", "Graph"], 
    answer: "Stack" 
  },
  { 
    question: "What is the time complexity of binary search?", 
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_search_into_array.png", 
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], 
    answer: "O(log n)" 
  },
  { 
    question: "Which data structure is best for implementing BFS (Breadth First Search)?", 
    img: "https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif", 
    options: ["Stack", "Queue", "Linked List", "Heap"], 
    answer: "Queue" 
  },
  { 
    question: "Which tree is always height balanced?", 
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif", 
    options: ["Binary Tree", "AVL Tree", "Heap", "Trie"], 
    answer: "AVL Tree" 
  },
  { 
    question: "What is the best case time complexity of QuickSort?", 
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif", 
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], 
    answer: "O(n log n)" 
  }
];

let current = 0, score = 0, userName = "", college = "";

function startQuiz(){
  userName = document.getElementById("name").value;
  college = document.getElementById("college").value;
  if(userName==="" || college===""){
    alert("Please enter Name and College!");
    return;
  }
  document.querySelector(".input-box").classList.add("hidden");
  document.getElementById("quizBox").classList.remove("hidden");
  loadQuestion();
}




function loadQuestion(){
  if(current < quizData.length){
    let q = quizData[current];
    let imgElement = document.getElementById("qImage");
    imgElement.src = q.img;

    
    imgElement.style.background = "transparent";
    imgElement.style.padding = "0";

    
    if(current === 0){
      imgElement.style.background = "linear-gradient(45deg, gold, black)";
      imgElement.style.padding = "10px";
    }
    if(current === 1){
      imgElement.style.background = "linear-gradient(45deg, violet, silver)";
      imgElement.style.padding = "10px";
    }

    document.getElementById("question").innerText = q.question;
    let opts = "";
    q.options.forEach(opt=>{
      opts += `<div class='option' onclick="checkAnswer('${opt}')">${opt}</div>`;
    });
    document.getElementById("options").innerHTML = opts;
  } else {
    showResult();
  }
}

function checkAnswer(selected){
  if(selected === quizData[current].answer){
    score++;
  }
  current++;
  loadQuestion();
}

function showResult(){
  document.getElementById("quizBox").classList.add("hidden");
  document.getElementById("resultBox").classList.remove("hidden");
  document.getElementById("resultText").innerText =
    `${userName} from ${college}, your Score is ${score}/${quizData.length}`;
}

function restartQuiz(){
  current = 0; score = 0;
  document.getElementById("resultBox").classList.add("hidden");
  document.querySelector(".input-box").classList.remove("hidden");
}
