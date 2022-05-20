import React from 'react';

const Card = ({reverse, img, title, text}) => {
    return (
        <section className={`${reverse} my-5 mx-auto text-center`}>
            <div className="section__text">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
            <div className="section__img" style={{ backgroundImage: `url(${img})`, backgroundSize: `cover` }}></div>
        </section>
    )
}

export default Card;