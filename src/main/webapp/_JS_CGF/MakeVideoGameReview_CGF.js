function MakeVideoGameReview_CGF(){

    //make dom element to put individual makevideogame objects in
    var ele = document.createElement("div");
    ele.classList.add("game-Card-Container"); //give it a class name



    var gameObj1 = MakeVideoGameReview({gameTitle: "Red Dead Redemption II",
                                        imgFileName: "./pics/reddead1.png",
                                        imgObjList: [{"display":"Main Cover", "val":"./pics/reddead1.png"}, //list of images
                                                     {"display":"Alt Cover 1", "val":"./pics/reddead2.png"},
                                                     {"display":"Alt Cover 2", "val":"./pics/reddead3.png"}],
                                        review: "My Favorite Game I ever played!",
                                        rating: 5   });
    ele.appendChild(gameObj1);



    var gameObj2 = MakeVideoGameReview({gameTitle: "Bully",
                                        imgFileName: "./pics/bully1.jpg",
                                        imgObjList: [{"display":"Main Cover", "val":"./pics/bully1.jpg"}, //list of images
                                                    {"display":"Alt Cover 1", "val":"./pics/bully2.png"},
                                                    {"display":"Alt Cover 2", "val":"./pics/bully3.png"}],
                                        review: "Absolutely a classic!",
                                        rating: 5   });
    ele.appendChild(gameObj2);

    var gameObj3 = MakeVideoGameReview({gameTitle: "CyberPunk 2077",
                                        imgFileName: "./pics/cyberpunk1.png",
                                        imgObjList: [{"display":"Main Cover", "val":"./pics/cyberpunk1.png"}, //list of images
                                                    {"display":"Alt Cover 1", "val":"./pics/cyberpunk2.png"},
                                                    {"display":"Alt Cover 2", "val":"./pics/cyberpunk3.png"}],
                                        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl velit, tempor vel nibh eget, venenatis tempor quam. Integer aliquam commodo arcu, quis accumsan augue efficitur vin dignissim vehicula enim at vulputate. Cras ullamcorper hendrerit tortor elementum lobortis. Fusce porta purus eget libero molestie lobortis. ",
                                        rating: 4   });
    ele.appendChild(gameObj3);



    var gameObj4 = MakeVideoGameReview({});
    ele.appendChild(gameObj4);







    return ele;
}