import { ServerResponse } from '../server-response';
import { PlaylistItemModelProperties } from '../model-properties/playlist-item.model-properties';
import { ApiModelProperty } from '@nestjs/swagger';

export class PlaylistItemServerResponse extends ServerResponse<PlaylistItemModelProperties[]> {
    @ApiModelProperty({
        type: PlaylistItemModelProperties,
        isArray: true,
    })
    public data: PlaylistItemModelProperties[];
}
