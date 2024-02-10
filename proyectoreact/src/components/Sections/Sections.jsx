import React from 'react';
import "./Sections.css";
import { Link, useParams } from 'react-router-dom';

//  Link reemplaza el a 

const Sections = () => {
    return (
        <div className='section-container'>
            <Link to = {`category/whiskies`}>
                <img src="../../../public/img/whiskies.jpg" alt="Whisky section" />
                <h3 className="section-title">Whiskies</h3>
            </Link>
            <Link to = {`category/spirits`} >
                <img src="../../../public/img/spirits.jpg" alt="Spirits section" />
                <h3 className="section-title">Spirits</h3>
            </Link>
            <Link to = {`category/cervezas`}>
                <img src="../../../public/img/cervezas.jpg" alt="Cervezas section" />
                <h3 className="section-title">Cervezas</h3>
            </Link>
        </div>
    );
}

export default Sections;
