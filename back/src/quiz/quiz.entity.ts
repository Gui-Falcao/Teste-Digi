/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Questions'})
export class Quiz {
  @PrimaryGeneratedColumn({ type: 'int' })
  idQuestions: number

  @Column({ type: 'int' })
  intQuestionNumber: number

  @Column({ length: 500 })
  txCategory: string

  @Column({ length: 500 })
  txType: string

  @Column({ length: 100 })
  txDifficulty: string

  @Column({ length: 500 })
  txQuestion: string

  @Column({ length: 500 })
  txCorrectAnswer: string

  @Column({ length: 500 })
  IncorrectAnswer1: string

  @Column({ length: 500 })
  IncorrectAnswer2: string

  @Column({ length: 500 })
  IncorrectAnswer3: string
}
