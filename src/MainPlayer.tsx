import { useState } from 'react';
import LeftArrow from './assets/LeftArrowBlack.svg'
import RightArrow from './assets/RightArrowBlack.svg'
import CoverTest from './assets/cover-test.png'
import './Scss/MainPlayer.scss';


const TrackList = [
    {
        title: "f a r a w a y",
        artist: "The Japanese House"
    },
    {
        title: "Dancing with my phone",
        artist: "HYBS"
    },
    {
        title: "Anything",
        artist: "SOMOH"
    },
    {
        title: "no way out",
        artist: "ivri"
    },
]

function MainPlayer() {
    //@ts-ignore
    const [ currentPlaylist, setCurrentPlaylist ] = useState("Spontaneous Combustion");

    const TrackSelector = () => {
        const tracks = TrackList.map((track) => {
            return (
                <>
                <div className="track">
                    <button> {track.title} - {track.artist} </button>
                </div>
                </>
            )
        });

        return <div id="AllTracks">{ tracks }</div>;
    };

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
                <div className="top"><h1>ADAMS LAND</h1></div>
                <div className="bottom"><h2>JUKEBOX</h2></div>
            </header>

            {/* PlaylistNavigator */}
            <div className="line"></div>
            <div id="PlaylistNav">
                <button><img src={LeftArrow} alt="Left arrow button" /></button>
                <div className="title"><h3>{currentPlaylist}</h3></div>
                <button><img src={RightArrow} alt="Right arrow button" /></button>
            </div>
            <div className="line"></div>

            {/* Record Table / Cover Art */}
            <div id="CoverArt">
                <img src={CoverTest} alt="Playlist cover art" />
            </div>

            {/* Track List */}
            <h4>Title</h4>
            <div id="TrackList">
                { TrackSelector() }
            </div>

            {/* Bottom Frame */}

            {/* Music Player */}

        </div>
    );
};

export default MainPlayer;