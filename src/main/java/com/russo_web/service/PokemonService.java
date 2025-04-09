package com.russo_web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.russo_web.model.Pokemon;

@Component
@Service
public class PokemonService {
    
    private final RestTemplate restTemplate;

    @Autowired
    public PokemonService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    
    public Pokemon getPokemonByName(String url){
        Pokemon pokemon = restTemplate.getForObject(url, Pokemon.class);
        return pokemon;
    }


}
