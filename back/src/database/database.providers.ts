/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Quiz } from '../quiz/quiz.entity';
import "reflect-metadata";

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'testedigi.csh9pv6xefdk.sa-east-1.rds.amazonaws.com',
        port: 3306,
        username: 'admin',
        password: 'Generica1234',
        database: 'TesteDigi',
        entities: [Quiz],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];