var namevalid=document.getElementById("namevalid")
var name2valid=document.getElementById("name2valid")
var mailvalid=document.getElementById("emailvalid")
var Numvalid=document.getElementById("numvalid")
var Msgvalid=document.getElementById('msgvalid')
var Submitvalid=document.getElementById('submitvalid')



function trimsapce(){
   name.trim()
}



function namevalidation() {
   var name=document.getElementById('fname').value;
   var Name=name.replace(/^\s+|\s+$/gm,'');
   if(Name.length==0){
    namevalid.innerHTML='first name is required';
    return false;
   }
   namevalid.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
  }
  function name2validation() {
    var name2=document.getElementById('lname').value;
   var Name2=name2.replace(/^\s+|\s+$/gm,'');
    if(Name2.length==0){
     name2valid.innerHTML='last name is required';
     return false;
    }
    name2valid.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
   }
  
  function emailvalidation(){
   var Mail=document.getElementById('mail').value;
      if(Mail.length==0){
         mailvalid.innerHTML='mail is required';
         return false;
      }
      if(!Mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
         mailvalid.innerHTML='enter a valid email';
         return false;
      }
      mailvalid.innerHTML='<i class="fa-solid fa-circle-check"></i>'
      return true;
   }
  
   function msgvalid(){
      var  Msg=document.getElementById('msg').value;
      if(Msg.length==0){
         Msgvalid.innerHTML='please enter your message'
         return false
      }
      Msgvalid.innerHTML='<i class="fa-solid fa-circle-check"></i>'
         return true;
      
   }  
   function validateform(){
      if(!namevalidation()|| !name2validation()|| !emailvalidation()||!msgvalid()){
        Submitvalid.style.display='block';
         Submitvalid.innerHTML='please fix the errors before submit';
         setTimeout(function(){Submitvalid.style.display='none';},3000);
         return false
      }
     // alert('message send succesfull');
      return true;
   }