function MakeEmp_CGF(){
    var ele = document.createElement("div");
    ele.classList.add("emp-card-container")

    var myEmp = MakeEmp({employeeName: "Doom Guy", title: "Slayer", salary: 100000, imageURL: "./userPics/doomguy.jpg"  });
    ele.appendChild(myEmp);

    var myEmp2 = MakeEmp({employeeName: "Kratos", title: "God of War", salary: 1000000, imageURL: "https://ew.com/thmb/odyLxuc4kZyb3rFNOaD926ACfXw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/god-of-war-2018-2000-408387a68b78478aaa52d04b8a99c0a0.jpg"  });
    ele.appendChild(myEmp2);


    return ele;
};