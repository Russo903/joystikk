package com.russo_web.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
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


    @RequestMapping(value = "other/insert", params = { "jsonData" }, produces = "application/json")
    public String insert(@RequestParam("jsonData") String jsonInsertData) {

        StringDataOther errorMsgs = new StringDataOther();

        if ((jsonInsertData == null) || jsonInsertData.length() == 0) {
            errorMsgs.errorMsg = "Cannot insert. No game data was provided in JSON format";
        } else {
            System.out.println("game data for insert (JSON): " + jsonInsertData);
            try {
                ObjectMapper mapper = new ObjectMapper();
                StringDataOther insertData = mapper.readValue(jsonInsertData, StringDataOther.class);
                System.out.println("game data for insert (java obj): " + insertData.toString());

                DbConn dbc = new DbConn();
                errorMsgs.errorMsg = dbc.getErr();
                if (errorMsgs.errorMsg.length() == 0) { // db connection OK
                    errorMsgs = GameDbMods.insert(insertData, dbc);
                }
                dbc.close();
            } catch (Exception e) {
                String msg = "Could not convert jsonData to model.role.StringDataOther obj: " +
                        jsonInsertData + " - or other error in controller for 'game/insert': " +
                        e.getMessage();
                System.out.println(msg);
                errorMsgs.errorMsg += ". " + msg;
            }
        }
        return Json.toJson(errorMsgs);
    }
}