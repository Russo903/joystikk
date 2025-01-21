package com.russo_web.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Game {
    private String name;
    private String backgrouns_image;
    private double rating;
}


//this model is a getter that will map the data fetched 
//from the RAWG API into the java object