/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var holdTheNft = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _price, _shirtColor, _EyesColor, _Type) {
    const metadata= {
        "name" : _name,
        "price" : _price,
        "Shirt" : _shirtColor, 
        "Eyes_Color" : _EyesColor,
        "Type" : _Type
    }
    holdTheNft.push(metadata);
    console.log("Minted NFT: " +_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for( let i = 0; i < holdTheNft.length; i++){
        console.log("\n");
        console.log("ID: " + (i+1))
        console.log("Name: \t\t" + holdTheNft[i].name);
        console.log("Price: \t\t" + holdTheNft[i].price);
        console.log("Shirt: \t\t" + holdTheNft[i].Shirt);
        console.log("Eyes Color: \t" + holdTheNft[i].Eyes_Color);
        console.log("Type: \t\t" + holdTheNft[i].Type);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + holdTheNft.length);
}

// call your functions below this line
mintNFT("Shuryansh", "$1000", "Blue", "Black", "cool");
mintNFT("Sam", "$900", "Red", "Blue", "hot");
mintNFT("Mukesh", "$1000", "Black", "Brown", "cool");
listNFTs();
getTotalSupply();
