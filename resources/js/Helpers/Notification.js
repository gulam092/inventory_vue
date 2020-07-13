class Notification{

success(){
  new Noty({
      type:"success",
      layout:"topRight",
      text: 'Successfully! Done',
      timeout:1000,
}).show();
}

alert(){
  new Noty({
      type:"alert",
      layout:"topRight",
      text: 'Are You sure?',
      timeout:1000,
}).show();
}
 error(){
  new Noty({
      type:"alert",
      layout:"topRight",
      text: 'Somthing went to wrong!',
      timeout:1000,
}).show();
} 

warning(){
  new Noty({
      type:"warning",
      layout:"topRight",
      text: 'Opps wrong!',
      timeout:1000,
}).show();
} 

image_validation(){
  new Noty({
      type:"error",
      layout:"topRight",
      text: 'Upload Imaze should be less than 1MB',
      timeout:5000,
}).show();
} 


}

export default Notification = new Notification()