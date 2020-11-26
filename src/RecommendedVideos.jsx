import React from "react";
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
const videoCardData = [
    {
        channelImage:"https://yt3.ggpht.com/a-/AOh14GjPPADdDEHreelkbegGkaApVVMaI2vELxZ6Kw=s68-c-k-c0x00ffffff-no-rj-mo",
        thumbnailImage:"https://i.ytimg.com/vi/1IyTZKVkq5w/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAxwId4YAY3S2yePwJ4xlbSVC76DA",
        title:"ENGLISH CHILL SONGS PLAYLIST - MISSED YOU (FT. LAUV, CHELSEA CUTLER, LANY LYRIC VIDEO) by Chill Playlist",
        channelName:"Chill Playlist",
        views:"322k Views",
        timestamp:"2 days ago",
    },
    {
        channelImage:"https://yt3.ggpht.com/a-/AOh14GhE1OqSx_HJxaITnpSyIz6FKfr4DnsD92flQg=s68-c-k-c0x00ffffff-no-rj-mo",
        thumbnailImage:"https://i.ytimg.com/an_webp/6e9VzDbdzhA/mqdefault_6s.webp?du=3000&sqp=CIC7_P0F&rs=AOn4CLASfN7qmyBBgj1t1U1Ur0kwdWSBeg",
        title:"NAGING SADBOI AKO PARA SA BABAE 😭😭😭",
        channelName:"PaoLUL",
        views:"196l Views",
        timestamp:"5 days agao",
    },
    {
        channelImage:"https://yt3.ggpht.com/a-/AOh14GiMPbCxlael_KFtOcmfkbRrEL3s1js3M7OEzg=s68-c-k-c0x00ffffff-no-rj-mo",
        thumbnailImage:"https://i.ytimg.com/vi/BCmkYODLpaU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA8x6mCSI3djhAxpqEY3TxgmWiGSg",
        title:"a lit OPM rap/hiphop playlist that slaps harder than mama's hanger",
        channelName:"binibining yena",
        views:"5.4K views",
        timestamp:"4 days ago",
    },
    {
        channelImage:"https://yt3.ggpht.com/a-/AOh14GiBJG1tCsoE5oHJIUFLTar2BrITjkWpXPN6Og=s68-c-k-c0x00ffffff-no-rj-mo",
        thumbnailImage:"https://i.ytimg.com/an_webp/g4_XZIVltmU/mqdefault_6s.webp?du=3000&sqp=CIXg_P0F&rs=AOn4CLDca62bVPTDvvMwu8JO3F1ji6Ut7g",
        title:"YES TO ABS CBN SHUTDOWN tapos SUMALI NG PBB...ANO?!",
        channelName:"Nico David",
        views:"43K views",
        timestamp:"3 weeks ago",
    },
    {
        channelImage:"https://yt3.ggpht.com/a-/AOh14GiolggbHxlTxQd5zhPJWQEHfIAi1ZrshjF9SA=s68-c-k-c0x00ffffff-no-rj-mo",
        thumbnailImage:"https://i.ytimg.com/an_webp/fqt6xBtyDs4/mqdefault_6s.webp?du=3000&sqp=CIit_P0F&rs=AOn4CLANQPMLQqPqj8x44UPvpyTcaT8aqg",
        title:"One Punch Man (Season 2) - Episode 18 [English Sub]",
        channelName:"Muse Asia",
        views:"329k views",
        timestamp:"3 weeks ago",
    },
    {
        channelImage:"https://yt3.ggpht.com/a-/AOh14GgzZYvR78Km8-HH9OCqC0sUmDE1qL6X0O_ouA=s68-c-k-c0x00ffffff-no-rj-mo",
        thumbnailImage:"https://i.ytimg.com/an_webp/NffgUDLcq-0/mqdefault_6s.webp?du=3000&sqp=CN-z_P0F&rs=AOn4CLDYfY2YCQj_jIpKWGwH8B1SBieRmQ",
        title:"Top 10 Naruto Fights - No Voice Over",
        channelName:"Top10Anime",
        views:"428k views",
        timestamp:"4 months ago",
    },
    {
        channelImage:"https://yt3.ggpht.com/a-/AOh14Gjl7faK-LsUqDTxLZauVykg-4la2nkQwc2NqA=s68-c-k-c0x00ffffff-no-rj-mo",
        thumbnailImage:"https://i.ytimg.com/an_webp/txPFuOvctwg/mqdefault_6s.webp?du=3000&sqp=CIC6_P0F&rs=AOn4CLBOlLUW3qcPaTiOnJrjV5AyuhcJYw",
        title:"DATING AUDIO MAN NG TV5, HUMIHINGI NG SAKLOLO.",
        channelName:"Raffy Tulfo in Action",
        views:"545k views",
        timestamp:"2 days ago",
    },
    // {
    //     channelImage:"",
    //     thumbnailImage:"",
    //     title:"",
    //     channelName:"",
    //     views:"",
    //     timestamp:"",
    // },
]

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                {
                    videoCardData.map(details => (
                        <VideoCard {...details}/>
                    ))
                }
            </div>
        </div>
    );
}

export default  RecommendedVideos;