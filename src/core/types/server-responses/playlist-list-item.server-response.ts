import { ApiModelProperty } from '@nestjs/swagger';
import { PlaylistListItemModelProperties } from '../model-properties/playlist-list-item.model-properties';
import { ServerResponse } from '../server-response';

export class PlaylistListItemServerResponse extends ServerResponse<PlaylistListItemModelProperties[]> {
    @ApiModelProperty({
        type: PlaylistListItemModelProperties,
        isArray: true,
    })
    public data: PlaylistListItemModelProperties[];
}
