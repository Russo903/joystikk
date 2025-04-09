package com.russo_web.model.webUser;

import dbUtils.*;

public class GameDbMods {
    /*
     * Returns a "StringDataOther" object that is full of field level validation
     */
    private static StringDataOther validate(StringDataOther inputData) {
        StringDataOther errorMsgs = new StringDataOther();

        /*
         * public String game_id = "";
         * public String game_title = "";
         * public String image_url = "";
         * public String rating = "";
         * public String review = "";
         * public String web_user_id = "";
         * public String added_to_backlog = ""; // Now an INT(11) for 0 or 1
         * public String user_email = "";
         * public String errorMsg = "";
         */
        // Validation
        errorMsgs.game_title = Validate.stringMsg(inputData.game_title, 45, true);
        errorMsgs.image_url = Validate.stringMsg(inputData.image_url, 45, false);
        errorMsgs.rating = Validate.integerMsg(inputData.rating, true);
        errorMsgs.review = Validate.stringMsg(inputData.review, 500, false);
        errorMsgs.web_user_id = Validate.integerMsg(inputData.web_user_id, true);
        
        // Validate added_to_backlog as an integer (0 or 1)
        errorMsgs.added_to_backlog = Validate.integerMsg(inputData.added_to_backlog, true);
        if (errorMsgs.added_to_backlog.length() == 0) { // No error from integer check
            int value = Integer.parseInt(inputData.added_to_backlog);
            if (value != 0 && value != 1) {
                errorMsgs.added_to_backlog = "Added to backlog must be 0 or 1";
            }
        }
        
        errorMsgs.user_email = Validate.stringMsg(inputData.user_email, 45, false);

        return errorMsgs;
    } // validate

    public static StringDataOther insert(StringDataOther inputData, DbConn dbc) {
        StringDataOther errorMsgs = new StringDataOther();
        errorMsgs = validate(inputData);
        if (errorMsgs.characterCount() > 0) { // at least one field has an error
            errorMsgs.errorMsg = "Please try again";
            return errorMsgs;
        } else { // all fields passed validation
            // Start preparing SQL statement
            String sql = "INSERT INTO games (game_title, image_url, rating, review, web_user_id, " +
                    "added_to_backlog) values (?,?,?,?,?,?)";

            // PrepStatement is Sally's wrapper class for java.sql.PreparedStatement
            PrepStatement pStatement = new PrepStatement(dbc, sql);

            // Encode string values into the prepared statement (wrapper class).
            pStatement.setString(1, inputData.game_title);
            pStatement.setString(2, inputData.image_url);
            pStatement.setString(3, inputData.rating);
            pStatement.setString(4, inputData.review);
            pStatement.setInt(5, Validate.convertInteger(inputData.web_user_id));
            // Set added_to_backlog as an integer
            pStatement.setInt(6, Validate.convertInteger(inputData.added_to_backlog));

            // here the SQL statement is actually executed
            int numRows = pStatement.executeUpdate();

            // This will return empty string if all went well, else all error messages.
            errorMsgs.errorMsg = pStatement.getErrorMsg();
            if (errorMsgs.errorMsg.length() == 0) {
                if (numRows == 1) {
                    errorMsgs.errorMsg = ""; // This means SUCCESS
                } else {
                    errorMsgs.errorMsg = numRows + " records were inserted when exactly 1 was expected.";
                }
            } else if (errorMsgs.errorMsg.contains("foreign key")) {
                errorMsgs.errorMsg = "Invalid Web User Id - " + errorMsgs.errorMsg;
            } else if (errorMsgs.errorMsg.contains("Duplicate entry")) {
                errorMsgs.errorMsg = "That game title is already taken - " + errorMsgs.errorMsg;
            }
        }
        return errorMsgs;
    } // insert
}