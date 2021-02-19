import React from "react";

const Notifications = () => (
  <div className="notifications__pg">
    <nav className="notifications__categories">
      <div>All</div>
      <div>Mentions</div>
    </nav>
    <section className="notifications">
      <ul className="notifications__list">{/*{notifications}*/}</ul>
    </section>
  </div>
);

export default Notifications;
