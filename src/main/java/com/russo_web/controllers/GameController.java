package com.russo_web.controllers;

import com.russo_web.model.Game; //import model
import com.russo_web.service.GameService; //import our logic
import org.springframework.beans.factory.annotation.Autowired; //automatic dependency injection 
import org.springframework.web.bind.annotation.GetMapping; //maps HTTP GET requests onto a specfic handler method
import org.springframework.web.bind.annotation.RestController; //applied to a class to mark it as a request handler


import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class GameController {
    
    @Autowired
    private GameService gameService;
    
    @GetMapping("/popular")
    public List<Game> getPopularGames(){
        return gameService.getPopularGames();
    }
    
}
