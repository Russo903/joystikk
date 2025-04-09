"use strict";

function Blog() {
  return (
    <section>
      <div className="blog">
        <h1>BLOG</h1>
        <br />
        <h4>Server Page</h4>
        <p>
          This page demonstrates the functionality of server-side code on our
          platform. Using technologies like Spring Boot, the server processes
          requests and dynamically generates content to deliver a seamless
          experience. To see the server-side logic in action,
          <a href="hello" target="_blank">
            click here to go to the server-side page
          </a>
          and explore how data is rendered and managed behind the scenes.
        </p>
        <br />

        <h4>Proposed Database</h4>
        <p>
          This table will store the essential information about games that users
          add to their backlog, allowing them to rate and review the games. The
          table will include fields for the game title, image URL, rating, and
          review, along with a foreign key linking back to the user who added
          the game.
        </p>
        <br />

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
            table.
          </li>
          <li>
            added_to_backlog - a boolean indicating whether the game has been
            added to the user's backlog.
          </li>
        </ul>
        <br />

        <h4>My Database Experience</h4>
        <p>
          I have no experience with relational databases like SQL. My only
          exposure has been to MongoDB, where I did some very light work, but
          I've never worked with the structure or queries of relational
          databases.
        </p>
        <br />

        <h4>My Web Development Experience</h4>
        <p>
          My experience in web development is very amateur, consisting solely of
          client-side HTML and CSS rendering. I have no experience working with
          APIs or back-end development, and I'm just beginning to learn how
          everything fits together.
        </p>
        <br />

        <h4>HW1 Homepage</h4>
        <p>
          The biggest challenge I faced in Homework 1 was working with layouts
          and positioning. It took quite a bit of time to get everything
          properly aligned, and there were some frustrating moments trying to
          figure out the right structure.
        </p>
        <br />

        <h4>Database</h4>
        <p>
          The biggest challenge I faced in Homework 2 was probably understanding
          SQL joins. It's not too tough, but grasping how it works took some
          time. The most valuable part of this homework was practicing with
          different SQL queries and seeing what each does with and without
          certain keywords.
          <a target="_blank" href="pics/Russo_database.pdf">
            Click here to view my database screenshots
          </a>
          .
        </p>
        <br />

        <h4>HW3 SPA</h4>
        <p>
          My biggest hurdle here was transferring everything to a Single Page
          Application (SPA). My CSS was complex, and I had a lot of overwriting
          issues. I wasn't aware of CSS load order, so it took me a while to
          figure out what was wrong. I now understand CSS precedence and how
          load order affects styling.
        </p>
        <br />

        <h4>HW4 JS COMPONENTS</h4>
        <p>
          This one was a challenge. The hardest part was understanding how to
          use the list from the passed object in the reusable JavaScript file.
          It took some time, but I figured it out. I added two selectors and a
          review posting feature, and I'm happy with the result. You can change
          your rating and switch to an alternative game cover if desired.
        </p>

        <h4>HW5 DATABASE API</h4>
        <p>
          To see my <strong>List Users API</strong> open up in a new tab, click{" "}
          <a href="webUser/getAll" target="_blank">
            here
          </a>
          .<br></br>
          <br></br>
          To see my <strong>Games API</strong> open up in a new tab, click{" "}
          <a href="other/getAll" target="_blank">
            here
          </a>
          .<br></br>
          <br></br>
          Click{" "}
          <a target="_blank" href="docs/WEB-API-DB-ERRORS.pdf">
            here
          </a>{" "}
          to see my Web API error document
          <br></br>
          <br></br>
          Prior to this week Ive made no relational databases before. Once
          before I did use mongo for JWT authentication which allowed users
          browsers to store cookies and let them stay signed in. It also hashed
          the users passwords which I found pretty neat. This week I learned a
          lot about react and getting the front end to be able to pull from the
          back end making all the technologies work together.
        </p>
        <br />

        <h4>HW6 SHOW DATA</h4>
        <p>
          This homework was tough because I struggled with making the filter and
          sort features work together. I found it really difficult to keep the
          filter from messing up the sort order and vice versa—like, sorting
          would wipe out my filter, or filtering would ignore the sort. I fixed
          it by tracking the sort and filter states and reapplying them after
          each action, which was a quick but tricky solution. Besides that, I
          learned a ton about React this week. Getting the front end to pull
          data from the back end and making everything click was a challenge,
          but now I’ve got a better grip on writing components and using
          useEffect hooks to handle stuff like loading data when the page
          starts.
        </p>

        <h4>HW7 LOGON-LOGOFF</h4>
        <p>
          This homework wasnt terrible it was just a really big homework. If I
          struggled with anything here I believe that would be the just getting
          started. Figuring out a place to start is sometimes the hardest and in
          this case that is what i dealt with. Once I got the ball rolling
          though it was all good. I learned to work with states and hooks once
          more which is always a plus, especially now working with inputs.
        </p>
        <h4>HW8 INSERT</h4>
        <p>
          The most challenging part of this assignment was implementing the
          select dropdown menu that used a foreign key from the emails table.
          Understanding how to dynamically populate the dropdown and ensure the
          foreign key constraint was properly enforced took some time to figure
          out. It was a good learning experience in tying front-end components
          with relational database structures.
          <br />
          <br />
          <a href="docs/database.pdf" target="_blank">
            Click here to view my HW8 INSERT PDF
          </a>
        </p>
      </div>
    </section>
  );
}

export default Blog;
