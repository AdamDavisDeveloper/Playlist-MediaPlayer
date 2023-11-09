import { useEffect, useState } from 'react';
import CoverTest from './assets/cover-test.png'
import './Scss/MainPlayer.scss';
// Components
import PlaylistNavigator from './Components/PlaylistNavigator';


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
    {
        title: "no way out",
        artist: "ivri"
    },
    {
        title: "no way out",
        artist: "ivri"
    },
    {
        title: "no way out",
        artist: "ivri"
    },
]

function MainPlayer() {
    //@ts-ignore
    const [ currentPlaylist, setCurrentPlaylist ]   = useState("Spontaneous Combustion");
    const [ highlightColor, setHighlightColor ]     = useState("#F75C03");

    useEffect(() => {
        setHighlightColor("#F75C03"); // change based on Playlist data (handcoded w/ love)
    }, []);

    const TrackSelector = () => {
        const tracks = TrackList.map((track, i) => {
            return (
                <div className="track" key={i}>
                    <button> {track.title} - {track.artist} </button>
                </div>
            )
        });

        return <div id="AllTracks">{ tracks }</div>;
    };

    return (
        <div id="MainPlayer">
            {/* Number */}
            <div id="Number">
                <span style={{color: `${highlightColor}`}}>017756</span>
            </div>
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
            <PlaylistNavigator 
                currentPlaylist={currentPlaylist}
                highlightColor={highlightColor}
            />
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
            <div id="BottomFrame">
                <div className="left"></div>
                <div className="center">Desc:</div>
                <div className="right">1</div>
            </div>

            {/* Music Player */}

        </div>
    );
};

export default MainPlayer;