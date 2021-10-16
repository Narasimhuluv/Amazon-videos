import React from 'react'
import Carousal from 'react-elastic-carousel';
import Items from './EachImage'
function Cuarousel() {
    var breakPoints = [
        {width : 1, itemsShow : 1}
    ]
    var images = ["movie1","movie2","movie3","movie4","movie6","movie7","movie8","movie9"]
    return (
        <div className="">
            <Carousal breakPoints={breakPoints} >
                {
                    images.map((each) => (
                        <Items each={each}/>
                    ))
                }
            </Carousal>
        </div>
    )
}

export default Cuarousel
