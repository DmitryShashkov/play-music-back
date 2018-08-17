import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { SchemaLike, validate } from 'joi';

@Injectable()
export class ValidationPipe implements PipeTransform {
    constructor (
        private readonly schema: SchemaLike,
    ) { }

    transform (value: any, metadata: ArgumentMetadata) {
        const { error } = validate(value, this.schema);
        if (error) {
            throw new BadRequestException(error.message);
        }
        return value;
    }
}
