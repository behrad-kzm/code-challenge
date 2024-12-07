import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { UserSchema } from './user.model';
import { CompanySchema } from './company.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@127.0.0.1:27017', {
      dbName: 'exam',
    }),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'company', schema: CompanySchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
