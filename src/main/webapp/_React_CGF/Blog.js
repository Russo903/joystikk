"use strict";

function Blog() {
    return (
        <section>
            <div className="blog">
                <h1>BLOG</h1>
                <br/>
                <h4>Server Page</h4>
                <p>
                    This page demonstrates the functionality of server-side code on our
                    platform. Using technologies like Spring Boot, the server processes
                    requests and dynamically generates content to deliver a seamless
                    experience. To see the server-side logic in action, 
                    <a href="hello" target="_blank">click here to go to the server-side page</a>
                    and explore how data is rendered and managed behind the scenes.
                </p>
                <br/>

                <h4>Proposed Database</h4>
                <p>
                    This table will store the essential information about games that users
                    add to their backlog, allowing them to rate and review the games. The
                    table will include fields for the game title, image URL, rating, and
                    review, along with a foreign key linking back to the user who added
                    the game.
                </p>
                <br/>

                <ul>
                    <li>game_id - auto-incrementing primary key, unique identifier for each game.</li>
                    <li>game_title - title of the game (unique within the table).</li>
                    <li>image_url - URL to an image of the game (e.g., cover art).</li>
                    <li>rating - a numerical rating for the game (nullable, between 0 and 5 stars).</li>
                    <li>review - a text field for the user to write their review (nullable).</li>
                    <li>user_id - foreign key referencing the web_user_id from the web_user table.</li>
                    <li>added_to_backlog - a boolean indicating whether the game has been added to the user's backlog.</li>
                </ul>
                <br/>

                <h4>My Database Experience</h4>
                <p>
                    I have no experience with relational databases like SQL. My only
                    exposure has been to MongoDB, where I did some very light work, but
                    I've never worked with the structure or queries of relational
                    databases.
                </p>
                <br/>

                <h4>My Web Development Experience</h4>
                <p>
                    My experience in web development is very amateur, consisting solely of
                    client-side HTML and CSS rendering. I have no experience working with
                    APIs or back-end development, and I'm just beginning to learn how
                    everything fits together.
                </p>
                <br/>

                <h4>HW1 Homepage</h4>
                <p>
                    The biggest challenge I faced in Homework 1 was working with layouts
                    and positioning. It took quite a bit of time to get everything
                    properly aligned, and there were some frustrating moments trying to
                    figure out the right structure.
                </p>
                <br/>

                <h4>Database</h4>
                <p>
                    The biggest challenge I faced in Homework 2 was probably understanding SQL joins.
                    It's not too tough, but grasping how it works took some time. The most valuable part of this homework 
                    was practicing with different SQL queries and seeing what each does with and without certain keywords.
                    <a target="_blank" href="pics/Russo_database.pdf">Click here to view my database screenshots</a>.
                </p>
                <br/>

                <h4>HW3 SPA</h4>
                <p>
                    My biggest hurdle here was transferring everything to a Single Page Application (SPA). 
                    My CSS was complex, and I had a lot of overwriting issues. I wasn't aware of CSS load order, 
                    so it took me a while to figure out what was wrong. I now understand CSS precedence and how load order affects styling.
                </p>
                <br/>

                <h4>HW4 JS COMPONENTS</h4>
                <p>
                    This one was a challenge. The hardest part was understanding how to use the list from 
                    the passed object in the reusable JavaScript file. It took some time, but I figured it out. 
                    I added two selectors and a review posting feature, and I'm happy with the result. 
                    You can change your rating and switch to an alternative game cover if desired.
                </p>
                <br/>

            </div>
        </section>
    );
}

export default Blog;
