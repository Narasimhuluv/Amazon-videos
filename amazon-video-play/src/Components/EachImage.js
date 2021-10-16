import React from 'react'

function Items(props) {
    return (
        <div className="w-full">
            <img className="w-full" src={`/images/${props.each}.webp`} alt="" />
        </div>
    )
}
export default Items