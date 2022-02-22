import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';

@Module({
  imports: [CacheModule.register(), GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
