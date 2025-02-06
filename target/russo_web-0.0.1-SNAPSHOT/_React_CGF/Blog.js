"use strict"
function Blog() {
    return (
        <section>
            <div className="blog">
                <h2>BLOG</h2>
                <h3>Server Page</h3>
                <p>
                    This page demonstrates the functionality of server-side code on our
                    platform. Using technologies like Spring Boot, the server processes
                    requests and dynamically generates content to deliver a seamless
                    experience. To see the server-side logic in action,<a
                    href="hello"
                    target="_blank"
                >
                    click here to go to the server-side page</a
                >
                    and explore how data is rendered and managed behind the scenes.
                </p>
                <h3>Proposed Datbase</h3>
                <p>
                    This table will store the essential information about games that users
                    add to their backlog, allowing them to rate and review the games. The
                    table will include fields for the game title, image URL, rating, and
                    review, along with a foreign key linking back to the user who added
                    the game.
                </p>
                <ul>
                    <li>
                        game_id - auto-incrementing primary key, unique identifier for each
                        game.
                    </li>
                    <li>game_title - title of the game (unique within the table).</li>
                    <li>image_url - URL to an image of the game (e.g., cover art).</li>
                    <li>
                        rating - a numerical rating for the game (nullable, between 0 and 5
                        stars).
                    </li>
                    <li>
                        review - a text field for the user to write their review (nullable).
                    </li>
                    <li>
                        user_id - foreign key referencing the web_user_id from the web_user
                        table, linking the game to the user who added it.
                    </li>
                    <li>
                        added_to_backlog - a boolean indicating whether the game has been
                        added to the user's backlog.
                    </li>
                </ul>
                <h3>My Database Experience</h3>
                <p>
                    I have no experience with relational databases like SQL. My only
                    exposure has been to MongoDB, where I did some very light work, but
                    I've never worked with the structure or queries of relational
                    databases.
                </p>
                <h3>My Web Development Experience</h3>
                <p>
                    My experience in web development is very amateur, consisting solely of
                    client-side HTML and CSS rendering. I have no experience working with
                    APIs or back-end development, and I'm just beginning to learn how
                    everything fits together.
                </p>
                <h3>Hw1 Homepage</h3>
                <p>
                    The biggest challenge I faced in Homework 1 was working with layouts
                    and positioning. It took quite a bit of time to get everything
                    properly aligned, and there were some frustrating moments trying to
                    figure out the right structure.
                </p>
                <h3>Database</h3>
                <p>
                    The biggest challenge I faced in Homework 2 was probably still trying to get down the join and
                    exactly how it works. It's not to tough just the general understanding of how it works
                    was a tad confusing for my first time. I think the most valuable part from this hw was just
                    practicing with different SQL queries and seeing what each do with and without certain keywords.
                    <a target="_blank" href="pics/Russo_database.pdf">Click this to be brought to my screenshots of my
                        database </a>
                </p>
                <h3>HW3 SPA</h3>
                <p>
                    My biggest hurdle here had to be just transferring everything over to this SPA. I made my site a tad complex in terms of css
                    and I had a lot of overwriting. I was not aware of CSS load order so it took me a painful while to figure out what was going wrong.
                    I now understand how to do that and the order of css precidence that happens based on the load order.
                </p>
            </div>
        </section>
    );
}