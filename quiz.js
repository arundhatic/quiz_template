
var toDisplay ="";

var score  = 0;

var arrCorrectAns = new Array(3);
arrCorrectAns[0]="Answer 1 \n";
arrCorrectAns[1]="Answer 3 \n";
arrCorrectAns[2]="Answer 2 \n";

var questions = new Array(3);
questions[0]= "q1";
questions[1]= "q2";
questions[2]= "q3";


function checkQs(q){
    var qs = document.getElementsByName(q);
    console.log(qs);
    var noOfRadios = qs.length;

    for(var i = 0; i< noOfRadios; i++){
        if (qs[i].checked && qs[i].value == "correct"){
            toDisplay = toDisplay + "is correct, well done ! \n";
            score ++;


        }
        else
          {
              toDisplay = toDisplay + arrCorrectAns[questions.indexOf(q)];
              break;
        }
    }
}


function checkAll(){

    for(var i =0; i < questions.length; i++){
        checkQs(questions[i]);
    }

    quiz.display_answer.value = toDisplay + "\n your score is : " + score + " out of " + questions.length ;

}