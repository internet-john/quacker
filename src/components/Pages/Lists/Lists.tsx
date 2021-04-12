const Lists = () => {
  const lists = null;
  return (
    <div className="lists__pg">
      <section className="lists--pinned">
        <header className="lists--pinned__header">Pinned Lists</header>
        {/*{lists.pinned && lists.pinned.length ? <ul className="lists--favorite">{lists.pinned}</ul> : <div className="lists__placeholder">Nothing to see here yet - pin your favorite Lists to access them quickly.</div>*/}
        <div className="lists__placeholder">
          Nothing to see here yet - pin your favorite Lists to access them
          quickly.
        </div>
      </section>
      <section className="lists--discover">
        <header className="lists--discover__header">Discover new Lists</header>
        <ul className="lists--discover__listings">
          <li className="listitem--discover">
            <CgNotes className="list__icon" />
            <div className="list__title">Best kept krabby patty secrets</div>
            <div className="list__author">
              <div className="author__avatar"></div>
              <div className="author__displayname">displayname</div>
              <div className="author__username">username</div>
            </div>
            <button className="list--follow">Follow</button>
          </li>
          <li className="listitem--discover">
            <CgNotes className="list__icon" />
            <div className="list__title">Top Plankton Fails</div>
            <div className="list__author">
              <div className="author__avatar"></div>
              <div className="author__displayname">displayname</div>
              <div className="author__username">username</div>
            </div>
            <button className="list--follow">Follow</button>
          </li>
          <li className="listitem--discover">
            <CgNotes className="list__icon" />
            <div className="list__title">Gary content ❤️</div>
            <div className="list__author">
              <div className="author__avatar"></div>
              <div className="author__displayname">displayname</div>
              <div className="author__username">username</div>
            </div>
            <button className="list--follow">Follow</button>
          </li>
        </ul>
        <div className="button__lists--discovery">Show more</div>
      </section>
      <section className="lists--created">
        <header className="lists--created__header">Your Lists</header>
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
