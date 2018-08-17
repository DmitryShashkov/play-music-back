import { Module } from '@nestjs/common';
import { GooglePlayMusicService } from './services/google-play-music.service';
import { MusicController } from './music.controller';
import { PlayerService } from './services/player.service';

@Module({
    providers: [
        GooglePlayMusicService,
        PlayerService,
    ],
    controllers: [
        MusicController,
    ],
})
export class MusicModule { }
