import { PlayOrders } from '../../enums/play-orders.enum';
import { ApiModelProperty } from '@nestjs/swagger';

export class PostQueueModelProperties {
    @ApiModelProperty({ type: String, isArray: true })
    public queue: string[];

    @ApiModelProperty({ enum: [PlayOrders.NORMAL, PlayOrders.RANDOM] })
    public order: PlayOrders;
}
