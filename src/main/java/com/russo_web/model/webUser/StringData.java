package com.russo_web.model.webUser;

public class StringData {
    public String webUserId = ""; // auto-increment primary key
    public String userEmail = ""; // varChar 45, must be unique
    public String userPassword = ""; // varChar 45, required (length >=1)
    public String userPassword2 = ""; // not in DB, but in UI
    public String userImage = ""; // varChar 500, required (length >=1)
    public String birthday = ""; // type date, optional
    public String membershipFee = ""; // type decimal, optional
    public String userRoleId = ""; // foreign key (integer), required by DB
    public String userRoleType = ""; // varChar, joined from user_role table.
    public String errorMsg = ""; // not actually in the database, used by the app
    // to convey success or failure.




    public int characterCount() {
        String s = this.webUserId + this.userEmail + this.userPassword +
                this.userPassword2 + this.userImage + this.birthday +
                this.membershipFee + this.userRoleId + this.userRoleType;
        return s.length();
    }

}
