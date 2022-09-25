import React, {useState} from 'react';
import './castomers.scss'

const Castomers = () => {

    const [activeRating, isActiveRating] = useState(0);
    const rating = [1, 2, 3, 4, 5];

    return (
        <section className="container">
            <div className="castomers">
                <div className="castomers-main-img">
                    <img src="./img/castomers/castomers-main.png" alt="photo"/>
                </div>
                <div className="castomers-content">

                    <h3 className="castomers-title">
                        What do customers say about us?
                    </h3>

                    <div className="castomers-person">
                        <img className="castomers-person-photo" src="./img/castomers/castomers-icon.png" alt="photo"/>
                            <div className="castomers-person-content">
                                <h4 className="castomers-person-name">Alpanasap</h4>
                                <p>Japung, Indonesia</p>
                            </div>
                    </div>

                    <p className="castomers-person-text">
                        Very satisfying service makes it <br/>
                        comfortable, a beautiful place in the world.
                    </p>

                    <div className="castomers-rating">

                        {rating.map(index =>
                            <div
                                onClick={() => isActiveRating(index)}
                                className={activeRating >= index ? "rating-star active": "rating-star"}
                            >
                                <img className="star" src="./img/castomers/star-rating.png" alt="star"/>
                                <img className="star-active" src="./img/castomers/star-rating-active.png" alt="star"/>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Castomers;