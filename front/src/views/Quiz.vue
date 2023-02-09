<template>
  <div class="">
    <div class="WrapQuiz">
      <div class="" v-if="this.Done == false">
        <div class="TitleQuiz"><p>Questionário</p></div>
        <div class="ProgessBarWrap">
          <div class="ProgessBar"></div>
        </div>
        <div class="BarCount"><p>Pergunta {{ QuestionNumber }} de {{ totalAnswears }}</p></div>
        <div class="QuestionNumber"><p>Pergunta {{ QuestionNumber }}</p></div>
        <div class="Question"><P> {{ Question }}</P></div>
        <ul  class="AnswearsList" style="list-style-type: none">
          <li >
            <div class="SingleAnswear" v-for="(data, indes) in Static" :key="indes" >
              <div :id="`${QuestionNumber}x${data.idQuiz}`" class="AnswearOption" @click="GetAnswear(data.idQuiz, data.answear, data.text)">
              </div>
              {{ data.text }}

            </div>
          </li>
        </ul>
      <div class="Buttons row">      
        <button class="AdvanceButton col-6" v-show="this.Test.length == 1" @click="AdvanceQuestion(Test[0].text, Test[0].answear, Test[0].idQuiz)">Avançar</button>
        <button class="BackButton col-6" @click="BackQuestion()">Voltar</button>
      </div>
      </div>
      <div class="" v-show="this.Done == true">
        <div class="Results"><p>Seu resultado foi:</p> <br> <p>{{ this.RightAnswears }}%</p></div>
      </div>

    </div>
  </div>
  
</template>

<script src="./Quiz.js" ></script>
<style lang="stylus" src="./Quiz.styl"></style>
