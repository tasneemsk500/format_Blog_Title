//Solution
function formatBlogTitle(title) {
  // Write your code here
  //Possible Variables
  let str1 = title.trim();
  let str2 = str1.split(' ');

  //Extracting each words in a string
  for (let i = 0; i < str2.length; i++){

    //Extracting each characters in a word
    let char = str2[i];
    for(let c = 0; c < char.length; c++){
        if(c == 0){
            str2[i] = char[0].toUpperCase() ;
        }else{
            str2[i] += char[c];
        }
    }
    
  }

  //Re-joining the words back in a string format
  let str3 = str2.join(' ');

  //Displaying the final message after fixing the JavaScript word format
  console.log(str3.replaceAll('Javascript', 'JavaScript'));
}
// Do not write anything outside function
