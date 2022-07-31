import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MuseumsModule } from './museums/museums.module';

@Module({
  imports: [MuseumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
