"use strict"
function Home() {
    return (
        <div className={"home"}>
            <section>
                <div id="topper">
                    <h1>Log Your Favorite Games, Review them, Rate Them</h1>
                    <p>
                        Join the ultimate community for gamers to share their experiences and
                        discover new adventures
                    </p>
                </div>
            </section>

        <section>
            <div class="cards-container">
                <div class="info-card">
                    <div class="text-content">
                        <h2>Backlog</h2>
                        <p>
                            Keep track of all the games you want to play with your personal
                            backlog. Whether it's a long-awaited title, a hidden gem, or a
                            classic you've always meant to try, the backlog feature lets you
                            organize and prioritize your gaming wishlist. Add games, sort them
                            by your own criteria, and never lose sight of what's next on your
                            journey through gaming!
                        </p>
                    </div>
                    <img src="pics/log-demo.png" />
                </div>
                <div class="info-card two">
                    <img src="pics/rating-demo-copy.png" />
                    <div class="text-content">
                        <h2>Rating</h2>
                        <p>
                            Share your thoughts on every game you play with our intuitive 1-5
                            star rating system. Whether it's a masterpiece deserving a perfect
                            score or a title that fell short of expectations, your ratings
                            help you reflect on your gaming experiences and contribute to the
                            community. Explore how others have rated games and uncover new
                            favorites based on collective feedback!
                        </p>
                    </div>
                </div>
                <div class="info-card three">
                    <div class="text-content">
                        <h2>Review</h2>
                        <p>
                            Go beyond the stars and share your unique perspective with
                            in-depth reviews. Highlight what made a game unforgettable,
                            critique its flaws, or gush about its standout moments. Your
                            reviews give others insight into your gaming journey and help
                            spark meaningful discussions within the community.
                        </p>
                    </div>
                    <img src="pics/review-demo-copy.png" />
                </div>
            </div>
        </section>
        </div>

)
}