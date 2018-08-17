import { ArtRef } from 'playmusic';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class ArtRefModelProperties implements ArtRef {
    @ApiModelPropertyOptional()
    public url?: string;
}
