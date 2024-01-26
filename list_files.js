import openai from "./openaiConfig.js";

async function main(){

    const uploadedFiles = await openai.files.list({
        purpose: "assistants"
    });

    console.log(uploadedFiles);

}

main();