package com.russo_web.model.webUser;

import java.util.ArrayList;

// This class holds a possible database error message followed by an array of objects 
// (each object being a single row in a result set extracted from a database). 

public class StringDataListOther {

    public String dbError = "Dont worry the database will be back up soon. Did you try tunneling?";
    public ArrayList<StringDataOther> otherList = new ArrayList<StringDataOther>();

    // Default constructor leaves StringDataList objects nicely set with properties
    // indicating no database error and 0 elements in the list.
    public StringDataListOther() {
    }

    // Adds one StringData element to the array list of StringData elements
    public void add(StringDataOther sd) {
        this.otherList.add(sd);
    }
}
