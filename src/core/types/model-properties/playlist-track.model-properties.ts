import { ArtRef, PlaylistTrack } from 'playmusic';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { ArtRefModelProperties } from './art-ref.model-properties';

export class PlaylistTrackModelProperties implements PlaylistTrack {
    @ApiModelPropertyOptional()
    public album?: string;

    @ApiModelPropertyOptional()
    public albumArtist?: string;

    @ApiModelPropertyOptional({ type: ArtRefModelProperties, isArray: true })
    public albumArtRef?: ArtRefModelProperties[];

    @ApiModelPropertyOptional()
    public albumAvailableForPurchase?: boolean;

    @ApiModelPropertyOptional()
    public albumId?: string;

    @ApiModelPropertyOptional()
    public artist?: string;

    @ApiModelPropertyOptional({ type: ArtRefModelProperties, isArray: true })
    public artistArtRef?: ArtRef[];

    @ApiModelPropertyOptional({ type: String, isArray: true })
    public artistId?: string[];

    @ApiModelPropertyOptional()
    public composer?: string;

    @ApiModelPropertyOptional()
    public contentType?: string;

    @ApiModelPropertyOptional()
    public discNumber?: number;

    @ApiModelPropertyOptional()
    public durationMillis?: string;

    @ApiModelPropertyOptional()
    public estimatedSize?: string;

    @ApiModelPropertyOptional()
    public genre?: string;

    @ApiModelPropertyOptional()
    public kind?: string;

    @ApiModelPropertyOptional()
    public nid?: string;

    @ApiModelPropertyOptional()
    public playCount?: number;

    @ApiModelPropertyOptional()
    public storeId?: string;

    @ApiModelPropertyOptional()
    public title?: string;

    @ApiModelPropertyOptional()
    public trackAvailableForPurchase?: boolean;

    @ApiModelPropertyOptional()
    public trackAvailableForSubscription?: boolean;

    @ApiModelPropertyOptional()
    public trackNumber?: number;

    @ApiModelPropertyOptional()
    public trackType?: string;

    @ApiModelPropertyOptional()
    public year?: number;
}
