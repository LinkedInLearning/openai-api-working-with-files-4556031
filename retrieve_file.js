import openai from "./openaiConfig.js";

async function main(){
    const file = await openai.files.retrieve("file-YcOhxyEc2zfEEpiT4a0EOzey");

    console.log(file);
}

main();