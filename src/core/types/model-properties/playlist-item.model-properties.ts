import { PlaylistItem } from 'playmusic';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { PlaylistTrackModelProperties } from './playlist-track.model-properties';

export class PlaylistItemModelProperties implements PlaylistItem {
    @ApiModelPropertyOptional()
    public absolutePosition?: string;

    @ApiModelPropertyOptional()
    public clientId?: string;

    @ApiModelPropertyOptional()
    public creationTimestamp?: string;

    @ApiModelPropertyOptional()
    public deleted?: boolean;

    @ApiModelPropertyOptional()
    public id?: string;

    @ApiModelPropertyOptional()
    public kind?: string;

    @ApiModelPropertyOptional()
    public lastModifiedTimestamp?: string;

    @ApiModelPropertyOptional()
    public playlistId?: string;

    @ApiModelPropertyOptional()
    public source?: string;

    @ApiModelPropertyOptional({ type: PlaylistTrackModelProperties })
    track?: PlaylistTrackModelProperties;

    @ApiModelPropertyOptional()
    public trackId?: string;
}
