package com.russo_web.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.russo_web.model.webUser.*;
import dbUtils.*;
import view.OtherTableView;

@RestController
public class OtherController {

    @RequestMapping(value = "/other/getAll", produces = "application/json")
    public String allUsers() {

        StringDataListOther list = new StringDataListOther(); // dbError empty, list empty
        DbConn dbc = new DbConn();
        list = OtherTableView.getAllUsers(dbc);

        dbc.close(); // EVERY code path that opens a db connection must close it
                     // (or else you have a database connection leak).

        return Json.toJson(list); // convert sdl obj to JSON Format and return that.
    }
}