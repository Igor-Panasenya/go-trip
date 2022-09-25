import React from 'react';
import './subscribe.scss';

const Subscribe = () => {
    return (
        <section className="container">
            <div className="subscribe">
                <h2 className="subscribe-title">
                    Subscribe <br/>
                    To Our Newsletter
                </h2>
                <form className="subscribe-form">
                    <input type="email" className="subscribe-input" placeholder="Yourmail@mail.com"/>
                        <button className="subscribe-btn">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;