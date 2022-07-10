import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CustomersModule,
    MongooseModule.forRoot(
      'mongodb+srv://sang:<password>@cluster0.jjmnl.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
