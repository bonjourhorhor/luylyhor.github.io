## Personal information
- Name: *LUY Lyhor*
- ID: e20220355
- Group: I3-GIC-B
##
<div style="text-align: center;">
    <span style="font-size: 32px"><strong>Tp 08</strong><span>
</div>

<hr>

1. Create a function that prompts the user to enter their name and favorite color, then displays an
alert saying: “Hello [name], I see you like [color]. I’m a robot, but I like that too!”

```js
// excercise1
const name = prompt("Enter your name: ");
const color = prompt("Enter your favorite color: ");

alert("Hello " + name + ", I see you like " + color + ". I'm a robot, but I like that too!");
```

2. Secret Code Name Generator

+ Create an anonymous function that converts a name to uppercase and adds "Agent" in front.

```js
// excercise2
const generateCodeName = function(Name){
    return `Agent ${Name.toUpperCase()}`;
}
console.log(generateCodeName('horhor'));
```

3. Grade Evaluator

+ Create an arrow function that takes a test score from 0 to 100 and returns a letter grade: A
(90+), B (80–89), C (70–79), D (60–69), or F (below 60).

```js
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
```

4. Spell Out Your Name

+ Create a function that takes a name as input and logs each letter one by one using a loop.

```js
// excercise4
const spellOutName = function(yourName){
    for(let i = 0; i < yourName.length; i++){
        console.log(yourName.charAt(i) + '\n');
    }
}

spellOutName('bubu');
```

5. Music Playlist Manager

+ Create an anonymous function assigned to a variable that takes a playlist (array) and a song
(string), adds the song to the playlist, and returns the updated playlist.

```js
// excercise5
const addSongToPlaylist = function(playlist, song) {
    playlist.push(song); // Add the song to the playlist
    return playlist;     // Return the updated playlist
};

const myPlaylist = ['Song 1', 'Song 2', 'Song 3'];
const updatedPlaylist = addSongToPlaylist(myPlaylist, 'Song 4');

console.log(updatedPlaylist);
```

6. Alien Translator

+ Create an arrow function that takes a sentence and returns it with all vowels replaced by * and
all letters in uppercase.

```js
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
```

7. Password Strength Checker

+ Create an anonymous function assigned to a variable that takes a password and checks if it is
“strong”. A strong password must have at least 8 characters, contain at least one number, and at
least one special character like !, @, or #. Return either "Strong" or "Weak".

```js
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
```