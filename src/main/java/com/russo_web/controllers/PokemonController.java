package com.russo_web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.russo_web.model.Pokemon;
import com.russo_web.service.PokemonService;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {
    @Autowired
    private final PokemonService pokemonService;

    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    //constructor injection
//    public PokemonController(PokemonService pokemonService){
//        this.pokemonService = pokemonService;
//    }

    @GetMapping("/{name}")
    public ResponseEntity<Pokemon> getPokemon(@PathVariable String name){
        String url = "https://pokeapi.co/api/v2/pokemon/" + name;
        Pokemon pokemon = pokemonService.getPokemonByName(url);
        return ResponseEntity.ok(pokemon);
    }
    
}
