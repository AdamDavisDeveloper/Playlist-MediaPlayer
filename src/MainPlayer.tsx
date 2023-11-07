import { useState } from 'react';
import './Scss/MainPlayer.scss';

function MainPlayer() {
    //@ts-ignore
    const [ currentPlaylist, setCurrentPlaylist ] = useState("Spontaneous Combustion");

    return (
        <div id="MainPlayer">
            {/* Top Frame */}
            <div id="TopFrame">
                <div className="left">2023</div>
                <div className="center">Desc:</div>
                <div className="right">1</div>
            </div>

            {/* Header */}
            <header>
                <div className="top"><h1>ADAM DAVIS</h1></div>
                <div className="bottom"><h2>JUKEBOX</h2></div>
            </header>

            {/* PlaylistNavigator */}
            <div className="line"></div>
            <div id="PlaylistNav">
                <div className="title">{currentPlaylist}</div>
            </div>
            <div className="line"></div>

            {/* Record Table / Cover Art */}

            {/* Track List */}

            {/* Bottom Frame */}

            {/* Music Player */}

        </div>
    );
};

export default MainPlayer;