package com.russo_web.model;


//our Pokémon model that we will populate
//only using surface attributes because I do not know how to GET
//json data nested in an array
public class Pokemon {
    private int weight;
    private int height;
    private int id;

    //constructor
    public Pokemon(int weight, int height, int id){
        this.weight = weight;
        this.height = height;
        this.id = id;
    }
    
    //getters and setters
    public int getHeight(){
        return this.height;
    }

    public void setHeight(int height){
        this.height = height;
    }

    public int getWeight(){
        return this.weight;
    }

    public void setWeight(int weight){
        this.weight = weight;
    }

    public int getId(){
        return this.id;
    }

    public void setId(int id){
        this.id = id;
    }
}
