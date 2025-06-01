// excercise1
const name = prompt("Enter your name: ");
const color = prompt("Enter your favorite color: ");

alert("Hello " + name + ", I see you like " + color + ". I'm a robot, but I like that too!");

// excercise2
const generateCodeName = function(Name){
    return `Agent ${Name.toUpperCase()}`;
}
console.log(generateCodeName('Sophea'));

// excercise3
const getGrade = (grade) => {
    if(grade >= 90 ){
        console.log("Your Grade is: A");
    }else if(grade >= 80){
        console.log("Your Grade is: B");
    }else if(grade >= 70){
        console.log("Your Grade is C");
    }else if(grade >= 60){
        console.log("Your Grade is D");
    }else if(grade < 60){
        console.log("Your Grade is F");
    }
}

getGrade(68);
getGrade(82);

// excercise4
const spellOutName = function(yourName){
    for(let i = 0; i < yourName.length; i++){
        console.log(yourName.charAt(i) + '\n');
    }
}

spellOutName('Daro');

// excercise5
const addSongToPlaylist = function(playlist, song) {
    playlist.push(song); // Add the song to the playlist
    return playlist;     // Return the updated playlist
};

const myPlaylist = ['Song 1', 'Song 2', 'Song 3'];
const updatedPlaylist = addSongToPlaylist(myPlaylist, 'Song 4');

console.log(updatedPlaylist);

// excercise6
const toAlienLanguage = (sentence) => 
{
    let transformed = ""; // Initialize an empty string to hold the result
    
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() === 'a' || 
            sentence[i].toLowerCase() === 'e' || 
            sentence[i].toLowerCase() === 'i' || 
            sentence[i].toLowerCase() === 'o' || 
            sentence[i].toLowerCase() === 'u') {
            transformed += "*"; // Replace vowels with '*'
        } else {
            transformed += sentence[i].toUpperCase(); // Convert consonants to uppercase
        }
    }
    
    return transformed; // Return the transformed sentence
}
console.log(toAlienLanguage('hello world'));
console.log(toAlienLanguage('javascrip is fun'));


// excercise7
const checkPassword = function(password) {
    // Check length
    if (password.length >= 8) {
        let hasNumber = false;
        let hasSpecialChar = false;
        
        // Loop through characters in the password
        for (let i = 0; i < password.length; i++) {
            const char = password[i];
            
            // Check for numbers
            if (char >= '0' && char <= '9') {
                hasNumber = true;
            }
            // Check for special characters
            if (['!', '@', '#', '$', '%', '&', '*'].includes(char)) {
                hasSpecialChar = true;
            }
        }
        
        // Check if both conditions are met
        if (hasNumber && hasSpecialChar) {
            return "Strong";
        }
    }
    
    return "Weak";
}

console.log(checkPassword("hello123")); 
console.log(checkPassword("Hello@123")); 
console.log(checkPassword("short1!"));    