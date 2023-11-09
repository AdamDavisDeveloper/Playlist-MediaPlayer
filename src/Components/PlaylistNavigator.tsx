// Controls which playlist is in view. (Will effect parent component state)
// Left and right image arrows allow user to flip through playlists
// Playlist title appear between the left and right arrow buttons

import LeftArrow from '../assets/LeftArrowBlack.svg'
import RightArrow from '../assets/RightArrowBlack.svg'

function PlaylistNavigator(props:any) {
    props = props;
    return (
        <div id="PlaylistNav">
                <button><img src={LeftArrow} alt="Left arrow button" /></button>
                <div className="title"><h3>{props.currentPlaylist}</h3></div>
                <button><img src={RightArrow} alt="Right arrow button" /></button>
            </div>
    )
};

export default PlaylistNavigator;