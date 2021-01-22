import React from 'react';

const QuackBox = () =>
    <section className="quackBox">
        <input placeholder="What's up?" />
        <ul className="quackBox__btnGroup">
            <li>pic</li>
            <li>gif</li>
            <li>poll</li>
            <li>emoji</li>
            <li>schedule</li>
            <button className="quackBox__tweetBtn">Quack</button>
        </ul>

    </section>

export default QuackBox;