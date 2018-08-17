import { Module } from '@nestjs/common';
import { MusicModule } from './modules/music/music.module';
import {MusicGateway} from "./gateways/music.gateway";

@Module({
    imports: [
        MusicModule,
    ],
    providers: [
        MusicGateway,
    ],
})
export class AppModule { }
