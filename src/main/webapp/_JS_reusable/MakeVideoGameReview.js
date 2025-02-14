//LAB 4 HW
"use strict"

//parameter deconstruction
function MakeEmp({ employeeName="noName",
                   title="noTitle",
                   salary=0,
                   imageURL="noIMG"}){

    //this is the DOM element that will be returned
    var empObj = document.createElement("div");
    empObj.classList.add("container")

    //build the UI
    empObj.innerHTML =
        `<img class='empImg' src="${imageURL}"/>
         <p class="description">${employeeName}, <span class="title"></span></p>
         <p class="salaryClass"></p>
         <button class="buttonTitle">Change Title</button> <input class="inputTitle"> <br>
         <button class="buttonSalary">Adjust Salary</button> <input class="inputSalary" type="number">
         
        `;

    var empImage = empObj.getElementsByClassName("empImg")[0];
    var empDescription = empObj.getElementsByClassName("description")[0];
    var empTitle = empObj.getElementsByClassName("title")[0];
    var empButtonTitle = empObj.getElementsByClassName("buttonTitle")[0];
    var empInputTitle = empObj.getElementsByClassName("inputTitle")[0];
    var salaryTag = empObj.getElementsByClassName("salaryClass")[0];
    var empButtonSalary = empObj.getElementsByClassName("buttonSalary")[0];
    var empInputSalary = empObj.getElementsByClassName("inputSalary")[0];


    var display = function () {
        empTitle.innerHTML = title;
        salaryTag.innerHTML = formatCurrency(salary);

    };

    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    //event listener to the button
    //when clickedm it takes the value from the input and update the title
    empButtonTitle.addEventListener("click", function (){
        //update the title with the new value from the input
        title = empInputTitle.value;
        //call display to update UI
        display();
    });

    empButtonSalary.addEventListener("click", function(){
        salary += Number(empInputSalary.value);
        display();
    })



    display();




    return empObj;

}