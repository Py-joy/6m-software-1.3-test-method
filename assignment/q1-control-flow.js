/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "Dev"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password"; //In this case, dev env acts as a default

// Task: Add code here
// A switch statement is used when we have discrete values for different conditions (also like a lookup table)
switch (env.toUpperCase()){
    case "DEV":
        databaseCredential = "devuser:password";
        break;

    case "STAGE":
        databaseCredential = "stageuser:password";
        break;

    case "PROD":
        databaseCredential = "produser:password";
        break;

    // default:
    //     console.log("Unknown environment");
    //     break;
}

console.log(`Database credential for environment ${env} is ${databaseCredential}`);
