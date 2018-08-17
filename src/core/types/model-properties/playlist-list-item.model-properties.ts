import { PlaylistListItem } from 'playmusic';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class PlaylistListItemModelProperties implements PlaylistListItem {
    @ApiModelPropertyOptional()
    public accessControlled?: boolean;

    @ApiModelPropertyOptional()
    public creationTimestamp?: string;

    @ApiModelPropertyOptional()
    public deleted?: boolean;

    @ApiModelPropertyOptional()
    public description?: string;

    @ApiModelPropertyOptional()
    public id?: string;

    @ApiModelPropertyOptional()
    public kind?: string;

    @ApiModelPropertyOptional()
    public lastModifiedTimestamp?: string;

    @ApiModelPropertyOptional()
    public name?: string;

    @ApiModelPropertyOptional()
    public ownerName?: string;

    @ApiModelPropertyOptional()
    public ownerProfilePhotoUrl?: string;

    @ApiModelPropertyOptional()
    public recentTimestamp?: string;

    @ApiModelPropertyOptional()
    public shareToken?: string;

    @ApiModelPropertyOptional()
    public type?: string;
}
