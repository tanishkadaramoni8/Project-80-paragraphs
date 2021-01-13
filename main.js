var name_of_the_student_array =[];

function submit() 
{
    


    for (var i = 1; i<12; i++)
    {
      name_of_the_student_array.push(document.getElementById("name_of_the_student_" + i).value);
    }
     console.log(name_of_the_student_array);


     document.getElementById("display_name").innerHTML = name_of_the_student_array;
      document.getElementById("submit_button").style.display = "none";
}
