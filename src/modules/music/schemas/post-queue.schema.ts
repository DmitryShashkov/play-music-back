import { array, object, ObjectSchema, string } from 'joi';
import { PlayOrders } from '../../../core/enums/play-orders.enum';

export const POST_QUEUE_SCHEMA: ObjectSchema = object().keys({
    queue: array()
        .required()
        .min(1)
        .items(string())
        .error(new Error('"queue" should be an array of string track IDs')),
    order: string()
        .required()
        .valid([PlayOrders.NORMAL, PlayOrders.RANDOM])
        .error(new Error('"order" should be either "normal" or "random"')),
});
