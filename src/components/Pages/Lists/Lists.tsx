import React from "react";
import { BiListPlus } from "react-icons/bi";

const Lists = () => {
  const lists = null;
  return (
    <div className="lists__pg">
      <section className="lists--pinned">
        <h3>Pinned Lists</h3>
        {/*{lists.pinned && lists.pinned.length ? <ul className="lists--favorite">{lists.pinned}</ul> : <div className="lists__placeholder">Nothing to see here yet - pin your favorite Lists to access them quickly.</div>*/}
        <div className="lists__placeholder">
          Nothing to see here yet - pin your favorite Lists to access them
          quickly.
        </div>
      </section>
      <section className="lists--discover">
        <header>Discover new Lists</header>
        <ul className="lists--discover__listings">
          <li>
            1<button>Follow</button>
          </li>
          <li>
            2<button>Follow</button>
          </li>
          <li>
            3<button>Follow</button>
          </li>
        </ul>
        <button>Show more</button>
      </section>
      <section className="lists--created">
        <h3>Your Lists</h3>
        {/*{lists.created && lists.created.length ? <ul className="lists--created">{lists.created}</ul> : <div className="lists__placeholder">You haven't created or followed any Lists. When you do, they'll show up here.</div>*/}
        <div className="lists__placeholder">
          You haven't created or followed any Lists. When you do, they'll show
          up here.
        </div>
      </section>
      <div className="button--createlist">
        <BiListPlus />
      </div>
    </div>
  );
};

export default Lists;
