import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from "./VideoCard.js"

function RecommendedVideos() {
    return (
        <div className = "recommendedVideos">
        <h2>Recommended</h2>
        <div className= "recommendedVideos__videos">
         <VideoCard
             title="Talking Tech and 2020 with Bill Gates!"
             views="3.5M Views"
             timestamp="8 months ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnhoa6jtz7ccGj30Al2Ha8t4ImDVW2U98STxoLXp=s88-c-k-c0xffffffff-no-rj-mo"
             channel=" Marques Brownlee"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkxggYoYvzP9I14II7ZMsFdPRQlCfKds--Q&usqp=CAU"
         />
         <VideoCard
             title= "Travel INSIDE a Black Hole"
             views="25M Views"
             timestamp=" 8 years ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnhZ3RdTd90CWLjszcugYGMU4I72zJAVkphAfSflTQ=s88-c-k-c0xffffffff-no-rj-mo"
             channel="Vsauce"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49r7Dux5POXt2G6TEAcRjFuZP2nFIM9A8RQ&usqp=CAU"
         />
         <VideoCard
             title="Sci-Fi Short Film Perfectly Natural | DUST"
             views=" 5M Views"
             timestamp="2 years ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwng2CBgrwcQV4XqHQNac4HHqbsw0Hht26eb0KVi0tA=s88-c-k-c0xffffffff-no-rj-mo"
             channel="DUST"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ei623lsFCtPjgylEQySjp7icO-IkewPwqw&usqp=CAU"
         
         />
         <VideoCard
             title="22 Inventions That Are Saving The Earth"
             views=" 2M Views"
             timestamp="5 months ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnhgkG8ap7tbkEW1lZhTIbUPYDl4eEvEYx5QFSJE_A=s88-c-k-c0xffffffff-no-rj-mo"
             channel="Tech Insider"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MYKAn5yvR8p4AxQ07VvJavMtchOXoVsb3w&usqp=CAU"
         
         />
         <VideoCard
             title="Hyperloop Explained"
             views="6.9M views"
             timestamp="2 years ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwniK0jxyv1iXCALI9-_1ycyzweMhKwHX5thosUf__w=s88-c-k-c0xffffffff-no-rj-mo"
             channel="The B1M"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48gg2TFeTn2mTwJ4PjDepoZs8zM6cs7ly0Q&usqp=CAU"
         
         />
         <VideoCard
             title="Simulated Reality"
             views="4.5M views"
             timestamp="4 years ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnipIOGF5oWVbSffcVHhvJm5guRr4A21wbbmy1NX=s88-c-k-c0xffffffff-no-rj-mo"
             channel="LEMMiNO"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_woJBEUiogJtSDVcPFtEljFBj45lsc4caQ&usqp=CAU"
         
         />
         <VideoCard
             title="Watch Elon Musk announce the Tesla Cybertruck in 14 minutes"
             views="8.2M views"
             timestamp="1 year ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnjBWXhGhl4p6GLaQMMS7eZBlVXExwQLeaamWRYgrII=s88-c-k-c0xffffffff-no-rj-mo"
             channel="CNET"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxgozj_2zJmb0OZSdWQ3zImlAf60t6a8l8g&usqp=CAU"
         
         />

         <VideoCard
             title="Introducing AirPods Max — Apple"
             views="4.7M views"
             timestamp="4 days ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwniHNhQyp4hWj3nrADnils-6N3jNREP8rWKGDTp0Lg=s88-c-k-c0xffffffff-no-rj-mo"
             channel="Apple"
             image="data:image/jpeg;base64,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"
         
         />
         
        </div>
        </div>
    )
}

export default RecommendedVideos
