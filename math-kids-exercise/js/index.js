// Shape object and the shapes
let shapes = {
    circle: {
        name: "circle",
        title: "Circle",
        textToDisplay: "2. Enter Radius",
        tableContents : {
            RADIUS: "π",
            AREA: "πr²",
            PERIMETER: "2*π*r"
        },
        calcArea: (radius) => {
            return Math.PI*radius*radius;
        },
        calcPerimeter: (radius) => {
            return 2*Math.PI*radius;
        }
    },
    square: {
        name: "square",
        title: "Square",
        textToDisplay: "2. Enter Side",
        tableContents: {
            SIDE: "s",
            AREA: "s*s",
            PERIMETER: "4*s"
        },
        calcArea: (side) => {
            return side*side;
        },
        calcPerimeter: (side) => {
            return 4*side;
        }
    },
    triangle: {
        name: "triangle",
        title: "Triangle",
        textToDisplay: "2. Enter Side (Base & Height)",
        tableContents: {
            SIDE: "s",
            AREA: "0.433*s*s",
            PERIMETER: "3*s"
        },
        calcArea: (side) => {
            return 0.433*side*side;
        },
        calcPerimeter: (side) => {
            return 3*side;
        }
    }
}

// Calculation function
let calculateMetrics = (givenValue, currShape) => {
    let calculatedDetailsForTable  = [];
    console.log(givenValue);
    calculatedDetailsForTable.push(givenValue+" cm");
    console.log(shapes[currShape].calcArea(22));
    calculatedDetailsForTable.push(Math.round(shapes[currShape].calcArea(givenValue)*100)/100+ " sq cm");
    calculatedDetailsForTable.push(Math.round(shapes[currShape].calcPerimeter(givenValue)*100)/100+ " sq cm");
    return calculatedDetailsForTable;
}

// Storing elements from HTML document
let pageSections = document.querySelectorAll("section");
let pageButtons = document.querySelectorAll("button");
let availableShapes = document.querySelector(".shape").children;
console.log(availableShapes);

let setStorage = () => {
    if(sessionStorage.getItem("sectionIndex")==null){
        sessionStorage.setItem("sectionIndex",0);
    }
    return sessionStorage.getItem("sectionIndex");
}
let sectionIndex = setStorage();
pageSections[sectionIndex].style.display = "flex";

// Checking if text area is empty or not
let checkTextArea=()=>{
    if (document.querySelector("#value").value == "")
    {
        return false;
    }
    return true;
}

// changing the sessions
for(let thisButton of pageButtons) {
    thisButton.addEventListener("click", () => {
        if(sectionIndex == 1 && !checkTextArea()) {
            window.alert("Enter the value as required!");
            sectionIndex = 1;
        } else {
            sectionIndex = ++sectionIndex % 3;
        }
        for(let section=0;section<pageSections.length;section++){
            pageSections[section].style.display="none";
        }
        pageSections[sectionIndex].style.display = "flex";
        sessionStorage.setItem("sectionIndes", sectionIndex);
    })
}

// storing the value entered by the user
document.querySelector("#value").addEventListener("keyup", () => {
    let thisValue = document.querySelector("#value").value;
    sessionStorage.setItem("enterValue", thisValue);
})

// function to remove tick over the shape
let removeTickIcon = () => {
    let tickIcon = document.querySelector(".tick-icon");
    if(tickIcon != null)
        tickIcon.remove();
}

// Storing the values entered by the user in the session storage
document.querySelector("#enterDetailsStatement").innerHTML = sessionStorage.getItem("enterText");
document.querySelector("#value").value = sessionStorage.getItem("enterValue");

// Insert the tick over shapes
var output;
for(let currentShape of availableShapes) {
    currentShape.addEventListener("click", (event) => {
        let className = event.target.className;
        removeTickIcon();
        output="";
        output+='<div class="tick-icon">'
        output+='<i class="fa-solid fa-check"></i>'
        output+='</div>'
        event.target.innerHTML = output;
        document.querySelector("#nextButton").style.display="block";
        let detailsStatement = document.querySelector("#enterDetailsStatement");
        detailsStatement.innerHTML = shapes[className].textToDisplay;
        sessionStorage.setItem("shape", className);
        sessionStorage.setItem("enterText", shapes[className].textToDisplay);
    })
}

// Creating and inserting the table
let tableCreation =  () => {
    let tableID = document.querySelector("#metricTable");
    let enteredValue = sessionStorage.getItem("enterValue");
    console.log(sessionStorage.getItem("enterValue"));
    let currShape = shapes[sessionStorage.shape];
    let tableDiv = "<table>";
    let calculatedArray = calculateMetrics(enteredValue, currShape.name);
    let i=0;
    for(let vals in currShape.tableContents) {
        tableDiv += "<tr>";
        tableDiv += ("<td>" + vals + "</td>");
        tableDiv += ("<td>" + currShape.tableContents[vals] +"</td>");
        tableDiv += ("<td>" + calculatedArray[i++] + "</td>");
        tableDiv += "</tr>";
    }
    tableID.innerHTML = tableDiv;
    let insertShape = document.createElement("div");
    insertShape.setAttribute("class", currShape.name);
    removeTickIcon();
    let paraTag = document.createElement("p");
    paraTag.innerHTML = currShape.title;
    tableID.prepend(paraTag);
    tableID.prepend(insertShape);
}

// new table after refreshing
if(sessionStorage.getItem("shape")) {
    tableCreation();
}

// to create the table after we click on calculate
document.querySelector("#calculateButton").addEventListener("click", () => {
    if(checkTextArea()) {
        tableCreation();
    }
});

// clear the session storage on start again
document.querySelector("#startAgainButton").addEventListener("click", () => {
    console.log('hello');
    document.querySelector("#nextButton").style.display = "none";
    document.querySelector("#value").value = "";
    sessionStorage.clear();
});