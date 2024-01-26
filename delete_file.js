import openai from "./openaiConfig.js";

async function main(){

    const deletedFile = await openai.files.del("file-Pm79jyUDfQbK7prFbwYY95NT");

    console.log(deletedFile);

}

main();