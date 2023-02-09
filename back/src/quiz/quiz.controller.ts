/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

@Get('listar')
async listar(): Promise<Quiz[]>{
    return this.quizService.findAll()
}
}