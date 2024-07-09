const { VanityClient }= require("discord-url")
const urlClient = new VanityClient("TOKEN","GUILD ID",true)

urlClient.setVanityURL("Alınacak URL girin");

urlClient.on("VanitySuccess", async(response) => {
console.log(`URL ${response.vanityURL} Successfully Received!`);
})

urlClient.on('VanityError', async(error) => {
console.log(`An Error Occurred While Retrieving URL!\nError; ${error}`);
})