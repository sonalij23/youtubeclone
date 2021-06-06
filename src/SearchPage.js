import React from 'react';
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";

import TuneIcon from '@material-ui/icons/Tune';
import "./SearchPage.css";

function SearchPage() {
    return (
        <div className= "searchPage">
        <div className= "searchPage__filter">

        <TuneIcon/>
        <h2>FILTER</h2>
        </div>
         <hr/>

         <ChannelRow
             image="https://yt3.ggpht.com/ytc/AAUvwngxLFOAQi_SmMc30fJJ-Cj67TNWS-XRoWYeS2BN=s176-c-k-c0x00ffffff-no-rj-mo"
             channel="Aperture"
             verified
             subs="964K"
             noOfVideos={64}
             description="Bringing the universe down to earth"
         />
         <hr/>

         <VideoRow
             views= "134K views"
             subs="964K"
             description = "The Earth has a deadline, and it's up to us to save it."
             timestamp = "1 day ago"
             channel="Aperture"
             title="the earth is running out of time.."
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25t4Z_JnonZ0al45e9wG3Oza14nhQ6aTE5g&usqp=CAU"
         />

          <VideoRow
             views= "1.2M views"
             subs="964K"
             description = "The Golden Record: Human Existence in 90 Minutes"
             timestamp = "1 month ago"
             channel="Aperture"
             title="The Golden Record: Human Existence in 90 Minutes"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfzdWrEZsZiC43T8L6zcyO4zTsKT3HZ1-dA&usqp=CAU"
         />

          <VideoRow
             views= "900K views"
             subs="964K"
             description = "shower thoughts that make me question reality..Follow me!:"
             timestamp = "7 months ago"
             channel="Aperture"
             title="shower thoughts that make me question reality..."
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZP5gGVyGF5Y8U1a47IIi58a5tl79fYRBjg&usqp=CAU"
         />

          <VideoRow
             views= "5M views"
             subs="964K"
             description = "The english language is a giant meme.. - English Explained?"
             timestamp = "1 year ago"
             channel="Aperture"
             title="The english language is a giant meme.."
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbyXxDI3E5ApPzTsznqPK0pXr5oyORxHctw&usqp=CAU"
         />

          <VideoRow
             views= "8M views"
             subs="964K"
             description = "What Will Happen In One Billion Years? - The Future of Our Universe: Part 1"
             timestamp = " 8 years ago"
             channel="Aperture"
             title="What Will Happen In One Billion Years?"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeV9xonkV51LHQzC29QBiFw1u7pjE19dDN3g&usqp=CAU"
         />

          



        </div>
    )
}

export default SearchPage;
