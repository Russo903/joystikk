package com.russo_web.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.russo_web.config.AppConfig;
import com.russo_web.model.webUser.*;
import com.russo_web.service.GameService;
import dbUtils.*;
import view.WebUserView;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
public class WebUserController {

    private final GameService gameService;

    private final GameController gameController;

    private final Controller controller;

    private final AppConfig appConfig;

    WebUserController(AppConfig appConfig, Controller controller, GameController gameController, GameService gameService) {
        this.appConfig = appConfig;
        this.controller = controller;
        this.gameController = gameController;
        this.gameService = gameService;
    }

    @RequestMapping(value = "/webUser/getAll", produces = "application/json")
    public String allUsers() {

        StringDataList list = new StringDataList(); // dbError empty, list empty
        DbConn dbc = new DbConn();
        list = WebUserView.getAllUsers(dbc);

        dbc.close(); // EVERY code path that opens a db connection must close it
                     // (or else you have a database connection leak).

        return Json.toJson(list); // convert sdl obj to JSON Format and return that.
    }


    
    @RequestMapping(value = "/webUser/logon", params = {"email", "password"}, produces = "application/json") 
    public String logon(@RequestParam("email") String email,  @RequestParam("password") String password,  HttpSession session){
        StringData sd = new StringData();

        DbConn dbc = new DbConn();
        sd = DbMods.findByEmailAndPassword(dbc, email, password);
        dbc.close();

        if (sd.errorMsg.isEmpty()){
            session.setAttribute("loggedUser", sd);
        } else{
            session.invalidate();
        }

        return Json.toJson(sd);
    }

    @RequestMapping(value = "/webUser/getProfile", produces = "application/json")
    public String getProfile(HttpSession session){
        StringData sd = new StringData();

        // this works without the if check but this allows us a way to return some data with error filled in and not just a null response
            
        Object loggedUser = session.getAttribute("loggedUser");


        
        if (loggedUser != null){
            sd = (StringData) session.getAttribute("loggedUser");
            
        } else{
            sd.errorMsg = "Log in First";
        }

        return Json.toJson(sd);
    }

    @RequestMapping(value = "/webUser/logoff", produces="application/json")
    public String logoff(HttpSession session) {
        StringData sd = new StringData();

        Object loggedUser = session.getAttribute("loggedUser");

        // will log user logged out only if logged in, other wise you cant log out
        if (loggedUser == null){
            sd.errorMsg = "You must log in before you can log out.";
        } else{
            session.invalidate();
            sd.errorMsg = "User logged out";}
        

        return Json.toJson(sd);
    }


    
     @RequestMapping(value = "/webUser/insert", params = { "jsonData" }, produces = "application/json")
    public String insert(@RequestParam("jsonData") String jsonInsertData) {

        StringData errorMsgs = new StringData();

        if ((jsonInsertData == null) || jsonInsertData.length() == 0) {
            errorMsgs.errorMsg = "Cannot insert. No user data was provided in JSON format";
        } else {
            System.out.println("user data for insert (JSON): " + jsonInsertData);
            try {
                ObjectMapper mapper = new ObjectMapper();
                StringData insertData = mapper.readValue(jsonInsertData, StringData.class);
                System.out.println("user data for insert (java obj): " + insertData.toString());

                DbConn dbc = new DbConn();
                errorMsgs.errorMsg = dbc.getErr();
                if (errorMsgs.errorMsg.length() == 0) { // db connection OK
                    errorMsgs = DbMods.insert(insertData, dbc);
                }
                dbc.close();
            } catch (Exception e) {
                String msg = "Could not convert jsonData to model.webUser.StringData obj: "+
                jsonInsertData+ " - or other error in controller for 'user/insert': " +
                        e.getMessage();
                System.out.println(msg);
                errorMsgs.errorMsg += ". " + msg;
            }
        }
        return Json.toJson(errorMsgs);
    }
    
}


