import { Injectable } from '@nestjs/common';
import * as Player from 'player';
import { PlayerLib } from '../../../definitions/player';

@Injectable()
export class PlayerService {
    private playerInstance: PlayerLib.Player = new Player();

    constructor () {
        this.playerInstance.add('');
        this.playerInstance.on(PlayerLib.PlayerEvents.PLAYEND, () => {});
        // this.playerInstance.on('playend', () => {});
    }

    public setPlaylist (sourceUrls: string[]) {
        this.playerInstance = new Player(sourceUrls);

        // event: on playing
        this.playerInstance.on('playing',function(item){
            console.dir(item);
        });

// event: on playend
        this.playerInstance.on('playend',function(item){
            // return a playend item
            console.log('src:' + item + ' play done, switching to next one ...');
        });

// event: on error
        this.playerInstance.on('error', function(err){
            // when error occurs
            console.log(err);
        });

        // for (const song of sourceUrls) {
        //     this.playerInstance.add(song);
        // }
    }

    public play () : void {
        this.playerInstance.play();
    }
}
