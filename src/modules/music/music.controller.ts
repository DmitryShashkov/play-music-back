import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { Rest } from '../../core/contracts/rest.contract';
import { GooglePlayMusicService } from './services/google-play-music.service';
import {PlaylistListItem} from "playmusic";
import {ApiModelProperty, ApiProduces, ApiResponse} from "@nestjs/swagger";
import {ServerResponse} from "../../core/types/server-response";
import {PlaylistListItemServerResponse} from "../../core/types/server-responses/playlist-list-item.server-response";
import {PlaylistItemServerResponse} from "../../core/types/server-responses/playlist-item.server-response";
import {PostQueueModelProperties} from "../../core/types/model-properties/post-queue.model-properties";
import {POST_QUEUE_SCHEMA} from "./schemas/post-queue.schema";
import {ValidationPipe} from "../../core/pipes/validation.pipe";
import {PlayerService} from "./services/player.service";

@Controller(Rest.Music.BASE)
export class MusicController {
    constructor (
        private readonly googlePlayMusicService: GooglePlayMusicService,
        private readonly playerService: PlayerService,
    ) { }

    @Get(Rest.Music.PLAYLISTS)
    @ApiResponse({
        status: 200,
        description: 'List of GP playlists',
        type: PlaylistListItemServerResponse,
    })
    public async getMyPlaylists () : Promise<PlaylistListItemServerResponse> {
        const data = await this.googlePlayMusicService.getMyPlaylists();
        return { data };
    }

    @Get(Rest.Music.ROUTE_SONGS_IN_PLAYLIST)
    @ApiResponse({
        status: 200,
        description: 'List of songs in playlist with specified ID',
        type: PlaylistItemServerResponse,
    })
    public async getTracksFromPlaylist (
        @Param(Rest.Music.PARAM_PLAYLIST_ID) playlistId: string,
    ) : Promise<PlaylistItemServerResponse> {
        const data = await this.googlePlayMusicService.getTracksFromPlaylist(playlistId);
        return { data };
    }

    @Post(Rest.Music.QUEUE)
    public async startPlayingQueue (
        @Body(new ValidationPipe(POST_QUEUE_SCHEMA)) body: PostQueueModelProperties,
    ) : Promise<void> {
        const streamUrls: string[] = await Promise.all(body.queue.map(
            (trackId) => this.googlePlayMusicService.getStreamUrl(trackId))
        );

        console.log(streamUrls);
        this.playerService.setPlaylist(streamUrls);
        this.playerService.play();

        return;
    }
}
