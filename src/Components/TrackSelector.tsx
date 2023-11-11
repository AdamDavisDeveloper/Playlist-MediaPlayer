function TrackSelector(props: any) {
    props = props;
        const tracks = props.trackList.map((track: {title: string,artist: string}, i: number) => {
            return (
                <div className="track" key={i}>
                    <button> {track.title} - {track.artist} </button>
                </div>
            )
        });

        return <div id="AllTracks">{ tracks }</div>;
    };

export default TrackSelector;