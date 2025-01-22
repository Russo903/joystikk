package com.russo_web.service; 

import com.russo_web.model.Game; //refers to the game class model we have in Game.java
import org.springframework.beans.factory.annotation.Value; //allows us to pull external variables like ones from application properties
import org.springframework.stereotype.Service; //indicates that this class is a service
import org.springframework.web.client.RestTemplate; // A spring class for making REST API calls
import org.springframework.web.util.UriComponentsBuilder;// helps construct URLS with query parameters 
import com.fasterxml.jackson.databind.ObjectMapper; //this will allow is to serialize and desrialize java, json, and jackso
import com.fasterxml.jackson.databind.JsonNode; // a in memory representation of a json object, we can pass it strings (part of jackson)

import java.util.Arrays;
import java.util.List;

@Service //tells our class that it will contains buisness logic like calling api
public class GameService {

    @Value("${rawg.api.url}")
    private String apiUrl;

    @Value("${rawg.api.key}")
    private String apiKey;

    //restTemplate is used to make HTTP requests to external APIs
    //declared as final because its value is set once in constructor and will not change
    private final RestTemplate restTemplate;
    
    public GameService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }   

    public List<Game> getPopularGames() {
        try{
            // makes a url by adding the values as parameters
            String url = UriComponentsBuilder.fromUriString(apiUrl)
                        .queryParam("key", apiKey)
                        .toUriString();

            //fetch the response an a JsonNode
            String response = restTemplate.getForObject(url, String.class);
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response);

            JsonNode results = root.path("results"); // extract results array from each object

            return Arrays.asList(mapper.treeToValue(results, Game[].class)); //now we will convert our json data into instances of our model

        } catch (Exception e){
            System.err.println("Error fetching games: " + e.getMessage());
            e.printStackTrace();
            return List.of(); //return empty list on failure
        }
    
}}
