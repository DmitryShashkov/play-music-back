import { Injectable } from '@nestjs/common';
import {
    InitOptions,
    PlaylistListItem,
    PlaylistListResponse,
    default as PlayMusic,
    PlaylistResponse,
    PlaylistItem, PlaylistOptions
} from 'playmusic';
import { config } from '../../../../config/config';

// noinspection TsLint
const PlayMusicStatic = require('playmusic');

@Injectable()
export class GooglePlayMusicService {
    private readonly GET_TRACKS_PAGE_SIZE: number = 100;
    private readonly pmInstance: PlayMusic = new PlayMusicStatic();

    constructor () {
        const initOptions: InitOptions = config.credentials.googlePlayMusic;

        this.pmInstance.init(initOptions, (error: Error) => {
            if (error) { throw error; }
        });
    }

    public async getMyPlaylists () : Promise<PlaylistListItem[]> {
        return new Promise<PlaylistListItem[]>((resolve, reject) => {
            this.pmInstance.getPlayLists((error: Error, response: PlaylistListResponse) => {
                if (error) { return reject(error); }
                return resolve(response.data && response.data.items);
            });
        });
    }

    public async getTracksFromPlaylist (playlistId: string) : Promise<PlaylistItem[]> {
        const items: PlaylistItem[] = [];

        return new Promise<any>((resolve, reject) => {
            const getTracksFromPage = (nextPageToken?: string) => {
                const options: PlaylistOptions = {
                    nextPageToken,
                    limit: this.GET_TRACKS_PAGE_SIZE,
                };

                this.pmInstance.getPlayListEntries(options, (error: Error, response: PlaylistResponse) => {
                    if (error) { return reject(error); }

                    if (!response.data) { return resolve(items); }

                    items.push(...response.data.items.filter((item) => item.playlistId === playlistId));

                    if (response.nextPageToken) { return getTracksFromPage(response.nextPageToken); }

                    return resolve(items);
                });
            };

            getTracksFromPage();
        });
    }

    public async getStreamUrl (trackId) : Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.pmInstance.getStreamUrl(trackId, (error: Error, streamUrl: string) => {
                if (error) { return reject(error); }
                return resolve(streamUrl);
            });
        });
    }
}
