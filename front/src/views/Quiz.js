import axios from 'axios'

export default {
    
     data(){
        return{
            questions:{
                idQuestions: 0,
                intQuestionNumber: 0,
                txCategory: '',
                txType: '',
                txDifficulty: '',
                txQuestion: '',
                txCorrectAnswer: '',
                IncorrectAnswer1: '',
                IncorrectAnswer2: '',
                IncorrectAnswer3: '',
            },

            name: 'Quiz',
            Question:"",
            totalAnswears: 20,
            QuestionNumber: 1,
            RightAnswears: 0,
            Done: false,
            Finished: 0,

            Answear:[],
            PreviousAnswear:[],

            Static:[
               
            ],
            Test:[]

        }
    },
    methods: {
        GetAnswear(idQuiz, answear, text){
        if(this.PreviousAnswear.length >=1){
            if(this.QuestionNumber == 1){
                this.PreviousAnswear[0].answear.classList.remove('CheckAnswear')
                this.PreviousAnswear.pop()
            } 
        } 
          if(this.Test.length == 0){
            var element = document.getElementById(this.QuestionNumber + 'x' + idQuiz)
            element.classList.add("CheckAnswear")
            this.Test.push({element:element,text:text,answear:answear,idQuiz:idQuiz})
          }
          else{
            this.Test[0].element.classList.remove("CheckAnswear")
            this.Test = []
            var element = document.getElementById(this.QuestionNumber + 'x' + idQuiz)
            element.classList.add("CheckAnswear")
            this.Test.push({element:element,text:text,answear:answear,idQuiz:idQuiz})
          }
        },
        AdvanceQuestion(text, answear, idQuiz){
            if(this.Test.length == 1){
                var Barra = document.querySelector('.ProgessBar')
                if( this.QuestionNumber == 1){
                    Barra.classList.add('Bar10')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(1)
                } else if(this.QuestionNumber == 2){
                    Barra.classList.add('Bar15')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(2)
                } else if(this.QuestionNumber == 3){
                    Barra.classList.add('Bar20')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(3)
                } else if(this.QuestionNumber == 4){
                    Barra.classList.add('Bar25')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(4)
                } else if(this.QuestionNumber == 5){
                    Barra.classList.add('Bar30')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(5)
                } else if(this.QuestionNumber == 6){
                    Barra.classList.add('Bar35')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(6)
                } else if(this.QuestionNumber == 7){
                    Barra.classList.add('Bar40')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(7)
                } else if(this.QuestionNumber == 8){
                    Barra.classList.add('Bar45')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(8)
                } else if(this.QuestionNumber == 9){
                    Barra.classList.add('Bar50')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(9)
                } else if(this.QuestionNumber == 10){
                    Barra.classList.add('Bar55')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(10)
                } else if(this.QuestionNumber == 11){
                    Barra.classList.add('Bar60')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(11)
                } else if(this.QuestionNumber == 12){
                    Barra.classList.add('Bar65')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(12)
                } else if(this.QuestionNumber == 13){
                    Barra.classList.add('Bar70')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(13)
                } else if(this.QuestionNumber == 14){
                    Barra.classList.add('Bar75')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(14)
                } else if(this.QuestionNumber == 15){
                    Barra.classList.add('Bar80')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(15)
                } else if(this.QuestionNumber == 16){
                    Barra.classList.add('Bar85')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(16)
                } else if(this.QuestionNumber == 17){
                    Barra.classList.add('Bar90')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(17)
                } else if(this.QuestionNumber == 18){
                    Barra.classList.add('Bar95')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(18)
                } else if(this.QuestionNumber == 19){
                    Barra.classList.add('Bar100')
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.QuestionNumber+=1
                    this.ChangeQuestion(19)
                }  else if(this.QuestionNumber == 20){
                    this.PreviousAnswear.push({answear:document.getElementById(this.QuestionNumber + 'x' + idQuiz)})
                    this.Answear.push({text:text, answear:answear})
                    this.Test[0].element.classList.remove('CheckAnswear')
                    this.Test = []
                    this.Finished+=1
                } 

                if(this.Finished == 1){
                    this.Answear.forEach((CountAnswears)=>{
                        if(CountAnswears.answear == true){
                            this.RightAnswears += 5
                        }
                    })
                    this.Done= true
                }
            }
        },
        BackQuestion(){
            if(this.QuestionNumber >= 2){
                var Barra = document.querySelector('.ProgessBar')
                this.QuestionNumber-=1
                this.RightAnswears -= 5
                this.Test=[]
                if(this.QuestionNumber == 1){
                    this.ChangeQuestion(0)
                    Barra.classList.remove('Bar10')

                } else if(this.QuestionNumber == 2){
                    this.ChangeQuestion(1)
                    Barra.classList.remove('Bar15')

                } else if(this.QuestionNumber == 3){
                    this.ChangeQuestion(2)
                    Barra.classList.remove('Bar20')

                } else if(this.QuestionNumber == 4){
                    this.ChangeQuestion(3)
                    Barra.classList.remove('Bar25')

                } else if(this.QuestionNumber == 5){
                    this.ChangeQuestion(4)
                    Barra.classList.remove('Bar30')

                } else if(this.QuestionNumber == 6){
                    this.ChangeQuestion(5)
                    Barra.classList.remove('Bar35')

                } else if(this.QuestionNumber == 7){
                    this.ChangeQuestion(6)
                    Barra.classList.remove('Bar40')

                } else if(this.QuestionNumber == 8){
                    this.ChangeQuestion(7)
                    Barra.classList.remove('Bar45')

                } else if(this.QuestionNumber == 9){
                    this.ChangeQuestion(8)
                    Barra.classList.remove('Bar50')

                } else if(this.QuestionNumber == 10){
                    this.ChangeQuestion(9)
                    Barra.classList.remove('Bar55')

                } else if(this.QuestionNumber == 11){
                    this.ChangeQuestion(10)
                    Barra.classList.remove('Bar60')

                } else if(this.QuestionNumber == 12){
                     this.ChangeQuestion(11)
                    Barra.classList.remove('Bar65')

                } else if(this.QuestionNumber == 13){
                    this.ChangeQuestion(12)
                    Barra.classList.remove('Bar70')

                } else if(this.QuestionNumber == 14){
                    this.ChangeQuestion(13)
                    Barra.classList.remove('Bar75')

                } else if(this.QuestionNumber == 15){
                    this.ChangeQuestion(14)
                    Barra.classList.remove('Bar80')

                } else if(this.QuestionNumber == 16){
                    this.ChangeQuestion(15)
                    Barra.classList.remove('Bar85')

                } else if(this.QuestionNumber == 17){
                    this.ChangeQuestion(16)
                    Barra.classList.remove('Bar90')

                } else if(this.QuestionNumber == 18){
                    this.ChangeQuestion(17)
                    Barra.classList.remove('Bar95')

                } else if(this.QuestionNumber == 19){
                    this.ChangeQuestion(18)
                    Barra.classList.remove('Bar100')

                } 
            }
            
        },

        ChangeQuestion(QuestionNumber){
            this.Static = []
            this.Question = this.questions[QuestionNumber].txQuestion
            for(var i = 0; i < 4; i++){
                if(QuestionNumber == 7 || QuestionNumber == 11 || QuestionNumber == 17){
                    if(i == 0){
                        this.Static.push({idQuiz:i, text:this.questions[QuestionNumber].txCorrectAnswer, answear:true})
                    } else if(i == 1){
                        this.Static.push({idQuiz:i, text:this.questions[QuestionNumber].IncorrectAnswer1, answear:false})
                    }
                } else{
                    if(i == 0){
                        this.Static.push({idQuiz:i, text:this.questions[QuestionNumber].txCorrectAnswer, answear:true})
                    } else if(i == 1){
                        this.Static.push({idQuiz:i, text:this.questions[QuestionNumber].IncorrectAnswer1, answear:false})
                    } else if(i == 2){
                        this.Static.push({idQuiz:i, text:this.questions[QuestionNumber].IncorrectAnswer2, answear:false})
                    } else if(i == 3){
                        this.Static.push({idQuiz:i, text:this.questions[QuestionNumber].IncorrectAnswer3, answear:false})
                    } 
                }

            }
            this.Static.sort(() => Math.random() - (0.9*0.5)-0.3*0.5)
            

        },

        async GetData(){
            console.log('cheguei')
             await axios.get("http://localhost:3055/quiz/listar").then((res) =>{
                console.log(res)
                this.questions = []
                res.data.forEach(quiz => {
                    this.questions.push({ 
                        idQuestions: quiz.idQuestions,
                        intQuestionNumber: quiz.intQuestionNumber,
                        txCategory: quiz.txCategory,
                        txType: quiz.txType,
                        txDifficulty: quiz.txDifficulty,
                        txQuestion: quiz.txQuestion,
                        txCorrectAnswer: quiz.txCorrectAnswer,
                        IncorrectAnswer1: quiz.IncorrectAnswer1,
                        IncorrectAnswer2: quiz.IncorrectAnswer2,
                        IncorrectAnswer3: quiz.IncorrectAnswer3,
                    }
                )});
                this.ChangeQuestion(0)
                console.log(this.questions)
            })
            
        
            console.log('mas a que ponto')
        }
    
    },
    created(){
        this.GetData()
    }
}

