

var names = ["Shelly", "John", "Joseph", "Kasmini", "Paul", "Frank", "Jenny", "Pola", "Harry", "Jim", "Elina"];


for (var i = 0; i < names.length; i++) {  

   var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
  	hellospeaker.Hello(names[i]);
   
  } else{
  	byespeaker.Bye(names[i]);
  }
}
 
  
       
  
  
