package com.russo_web.model.webUser;

public class StringDataOther {
    public String game_id = ""; // auto-increment primary key
    public String game_title = ""; // varChar 45, must be unique
    public String image_url = ""; // varChar 45, required (length >=1)
    public String rating = ""; // varChar 500, required (length >=1)
    public String review = ""; // type date, optional
    public String web_user_id = ""; // FK
    public String added_to_backlog = ""; // foreign key (integer), required by DB

    public String user_email = ""; // varChar, joined from user_role table.
    public String errorMsg = ""; // not actually in the database, used by the app
    // to convey success or failure.

}
