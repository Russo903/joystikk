package view;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.russo_web.model.webUser.*;
import dbUtils.*;

public class OtherTableView {

    public static StringDataListOther getAllUsers(DbConn dbc) {

        // sdl will be an empty array and DbError with ""
        StringDataListOther sdl = new StringDataListOther();

        sdl.dbError = dbc.getErr(); // returns "" if connection is good, else db error msg.
        if (sdl.dbError.length() > 0) {
            return sdl; // cannot proceed, db error (and that's been recorded in return object).
        }

        // sd will have all of it's fields initialized to ""
        StringDataOther sd = new StringDataOther();

        try {
            String sql = "SELECT game_id, game_title, image_url, rating, review, added_to_backlog, "
                    + "games.web_user_id, user_email "
                    + "FROM games, web_user where web_user.web_user_id = games.web_user_id "
                    + "ORDER BY game_id "; // always order by something, not just random order.

            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();

            while (results.next()) {

                sd = new StringDataOther();

                // the Format methods do not throw exceptions. If they find illegal data (like
                // you
                // tried to format a date as an integer), they return an error message (instead
                // of
                // returning the formatted value). So, you'll see these error messages right in
                // the
                // API output (JSON data) and/or you'll see it on the page in the UI.

                sd.game_id = Format.fmtInteger(results.getObject("game_id"));
                sd.game_title = Format.fmtString(results.getObject("game_title"));
                sd.image_url = Format.fmtString(results.getObject("image_url"));
                sd.rating = Format.fmtString(results.getObject("rating"));
                sd.review = Format.fmtString(results.getObject("review"));
                sd.web_user_id = Format.fmtInteger(results.getObject("games.web_user_id"));
                sd.added_to_backlog = Format.fmtInteger(results.getObject("added_to_backlog"));
                sd.user_email = Format.fmtString(results.getObject("user_email"));
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in OtherTableView.getAllUsers(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}
