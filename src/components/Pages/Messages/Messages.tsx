import React from "react";

const Messages = () => (
  <div className="messages__pg">
    <input
      className="messages__search"
      type="search"
      value="Search for people and groups"
    />
    <section className="messages">
      <ul className="messages__list"></ul>
    </section>
  </div>
);

export default Messages;
