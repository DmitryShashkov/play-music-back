export namespace PlayerLib {
    export interface SourceObject {
        src: string;
    }

    export enum PlayerEvents {
        PLAYING = 'playing',
        PLAYEND = 'playend',
        ERROR = 'error',
    }

    export abstract class Player {
        // abstract constructor (playlist: string | string[]);

        public abstract add (song: string | SourceObject): void;

        public abstract play () : void;

        public abstract pause () : void;

        public abstract stop () : void;

        public abstract next () : void;

        public abstract on (eventName: PlayerEvents, callback: Function) : void;
    }
}
