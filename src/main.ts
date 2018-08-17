import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Rest } from './core/contracts/rest.contract';
import { config } from '../config/config';
import { NestApplicationOptions } from '@nestjs/common/interfaces/nest-application-options.interface';
import { INestApplication, INestExpressApplication } from '@nestjs/common';
import { SwaggerBaseConfig } from '@nestjs/swagger/dist/interfaces';

(async () => {
    const serverTitle: string = 'Play Music APIs';
    const globalPrefix: string = `${Rest.API}/v${config.server.apiVersion}`;

    const appOptions: NestApplicationOptions = { cors: true };
    const app: INestApplication & INestExpressApplication = await NestFactory.create(AppModule, appOptions);

    app.setGlobalPrefix(globalPrefix);

    const docsOptions: SwaggerBaseConfig = new DocumentBuilder()
        .setBasePath(globalPrefix)
        .setTitle(serverTitle)
        .setDescription(serverTitle)
        .setVersion(config.server.apiVersion)
        .build();
    const document = SwaggerModule.createDocument(app, docsOptions);
    SwaggerModule.setup(Rest.DOCUMENTATION, app, document);

    await app.listen(config.server.port);
})();
