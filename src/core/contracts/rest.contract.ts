export namespace Rest {
    export const API = 'api';
    export const DOCUMENTATION = 'documentation';

    export namespace Music {
        export const BASE = 'music';

        export const PLAYLISTS = 'playlists';
        export const QUEUE = 'queue';

        export const PARAM_PLAYLIST_ID = 'playlistId';

        export const ROUTE_SONGS_IN_PLAYLIST = `${Music.PLAYLISTS}/:${PARAM_PLAYLIST_ID}`;
    }
}
