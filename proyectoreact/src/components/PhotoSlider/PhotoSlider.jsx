import React, {useEffect} from 'react'
import "./PhotoSlider.css"

const PhotoSlider = () => {

    setInterval( () =>{
        changePhoto();
    },1000);

    function changePhoto(index){
        if (index >= 1 && index <= 6){
            index += 1
        }else(index = 0)
        return index;
    };

    return (
        <div>
            <div className="container">
                <div className="box"><img src={`../../../public/img/${index}`} alt="" /></div>
                <div className="box"><img src="../../../public/img/2.jpg" alt="" /></div>
                <div className="box"><img src="../../../public/img/3.jpg" alt="" /></div>
                <div className="box"><img src="../../../public/img/4.jpg" alt="" /></div>
                <div className="box"><img src="../../../public/img/5.jpg" alt="" /></div>
                <div className="box"><img src="../../../public/img/6.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default PhotoSlider
