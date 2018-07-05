$(document).ready(function(){
    // mondayForLoop();
   // nameDemo()
    // profileDemo()
    // getTheAjax();
    buttonTest();
});


// $(document).ready(function(){
//     morningMission()
// });

// function morningMission(){
//     var student=[
//        {
//         name: "Wade",
//         band: "Tool",
//         beer: "Mahrs Brew U",
//         },
//         {
//         name: "Anna",
//         band: "No Doubt",
//         beer: "Holly Roller",
//         },
//         {
//         name: "Christian",
//         band: "The Internet",
//         beer: "Blue Moon",
//         },
//         {
//         name: "Logan",
//         band: "Daft Punk",
//         beer: "Keystone Light",
//         },
//         {
//         name: "Ed",
//         band: "In Flames",
//         beer: "PBR",
//         },
//         {
//         name:"Ken",
//         band: "Systems of a Dawn",
//         beer: "Seadog Blueberry",
//         },
//         {
//         name: "Andrew",
//         band: "Slowdive",
//         beer: "Abita Amber",
//         },
//         {
//         name: "Will",
//         band: "Killers",
//         beer: "High Life",
//         }
//         ]

//     for (var i = 0; i < student.length; i++) {
//         if (student[i].name== "Christian") {
//         console.log("My name is " + student[i].name + " and my favorite band is " + student[i].band + " and my favorite beer is " + student[i].beer)
//     }else{
//             console.log("This is my classmate: " + student[i].name + ". Their favorite beer is " + student[i].beer + " and their favorite band is " + student[i].band + ".")
//         }
//     };
// }


// var calculator = {
//     add: function(a,b) {
//         return a + b;
//     },
//     add:function(a,b){
//         return a*b;
//     }
// }
// console.log(calculator.add(2,3))


// function mondayForLoop(){
//     var beers=["Blue Moon", "Abita", "Budweiser"];
//     console.log(beers);
    
//     for (i = 0; i < beers.length; i++) {
//         console.log(beers[i])
//     };

// }

// function nameDemo(){
// var infoName={
//     name:"Chris Lynch",
//     last_name: "Lynch",
//     age: 22,
//     isAwesome: true,
//     Address:{
//         street: "Orleans",
//         city: "NOLA"
//     }
// };
// document.write(infoName.name);
// console.log(name.Address.city);
// nameDemo.Address.city="New Orleans",
// console.log(name.Address.city)
// };
// function profileDemo(){

// var person={
//     name: "Christian",
//     age:22,
//     Address:{
//         street: "Orleans",
//         city: "NOLA",
//     },
//     job_search: "Web Developer and Photographer"

// }
// function ajaxDisplay(){

// console.log("hello")
// }

// function getTheAjax(){
    
//     $.ajax({
//         method: "GET",
//         url: "https://jsonplaceholder.typicode.com/posts",
//         dataType: 'json',
//         headers: {
//             'Content-Type':'application/json',
//             'Access-Control-Allow-Headers':'*'
//         },
//         success: function(data) { 
            

//             console.log(data[0].title) 
    
//             $("#title1").html(data[0].title),
//             $("#description1").html(data[0].body)

//             $("#title2").html(data[1].title), 
//             $("#description2").html(data[1].body)

//             $("#title3").html(data[2].title),
//             $("#description3").html(data[2].body)


//         },
//         error: function(xhr, status, error) { .log("ERROR: ", error) }
//     })
    
// }

function buttonTest(){
    $("#btn").click(function(){
        
         var userEmail = $("#email").val()
         console.log(userEmail);


        getTheAjax(userEmail)
        // return "Good job" + userEmail;

    })
};

function getTheAjax(email){

    console.log(email)
    
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users?email="+ email,
        dataType: 'json',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Headers':'*'
        },
        success: function(data) { 
            if (data.length > 0) {
                $("#welcome_back").html("Welcome back!")
            }
            
           
         else{   
        // error: function(xhr, status, error) { console.log("ERROR: ", error) }
        $("#Access_Denied").html("Sorry about that!")
    }
    }
})
}
    




-->
-->

// // function ajaxDisplay(){
//     $("title").html(posts.title)
//     $("description").html(posts.body)



// $(document).ready(function(){
    

//     changeColor()

//     toggleButton()

//     hideGhost()


// });

// function changeColor(){

//     $("#my-rectangle").click(function(){
//         $("#my-rectangle").css("background-color", "blue");
//     });

// }

// function hideGhost(){

//     $("#ghostObject").click(function(){
//         $("#ghost").hide()
//         $("#boo").show();
//     });

// }

// function toggleButton(){

//     $("#toggleButton").click(function(){
//         $("#message").toggle();
//     });

// }

