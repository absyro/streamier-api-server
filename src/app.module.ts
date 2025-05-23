import { Module } from "@nestjs/common";
import { ThrottlerModule } from "@nestjs/throttler";

import { CommonModule } from "./common/common.module";
import { ConfigModule } from "./config/config.module";
import { DatabaseModule } from "./database/database.module";
import { HandlersModule } from "./handlers/handlers.module";
import { StreamsModule } from "./streams/streams.module";

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    ThrottlerModule.forRoot({ throttlers: [{ limit: 40, ttl: 60000 }] }),
    HandlersModule,
    StreamsModule,
    CommonModule,
  ],
})
export class AppModule {}
