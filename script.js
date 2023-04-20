let catBreeds = [
  {
    breed: "Ragdoll",
    size: "Large",
    furtypes: "Long hair",
    traits: "More adventurous",
    personality: "Gentle, calm and sociable",
    colors: "Seal, blue, chocolate, lilac, red and cream",
    petprice: "$425+",
    breederprice: "$1,500 – $2,500+",
    image: "Maye.jpeg",
    description : "Affectionate without being demanding, Ragdolls have an almost dog-like devotion to their owners. Some people also say they are attuned to emotional needs, a characteristic that makes them a perfect companion animal."
  },
  {
    breed: "Siamese",
    size: "Medium",
    furtypes: "Short hair",
    traits: "More adventurous",
    personality: "Highly intelligent talkative and curious.",
    colors: "Seal point, chocolate point, blue point, and lilac point",
    petprice: "$250+",
    breederprice: "$400 – $1,000+",
    image: "siamese.jpeg",
    description : "Siamese cats are among the most vocal cats, enjoying long ‘conversations’ with their human friends. They are loving, loyal and crave human companionship, making them excellent family pets."
  },
  {
    breed: "Maine Coon",
    size: "Large",
    furtypes: "Long hair",
    traits: "More relaxed",
    personality: "Friendly, affectionate and goofy",
    colors: "Solid white, cream, red, blue, and black",
    petprice: "$400+",
    breederprice: "$1,000 – $2,000+",
    image: "Maine Coon.jpeg",
    description : "Much like a dog, the Maine Coon loves to be around its family and sometimes acts like a pack animal. They are obedient and will come when called."
  }
];

let container = document.getElementById("breeds-container");
container.classList.add("catContainer");

for (let i = 0; i < catBreeds.length; i++) {
  let heading = document.createElement("h3");
  heading.innerText = catBreeds[i].breed;

  let image = document.createElement("img");
  image.classList.add("catPic")
  image.src = catBreeds[i].image;
  image.alt = catBreeds[i].breed;

  let paragraph = document.createElement("P");
  paragraph.classList.add("catDescription")
  paragraph.innerHTML = "<strong>Size:</strong> " + catBreeds[i].size +
                        "<br><strong>Fur type:</strong> " + catBreeds[i].furtypes +
                        "<br><strong>Traits:</strong> " + catBreeds[i].traits +
                        "<br><strong>Personality:</strong> " + catBreeds[i].personality +
                        "<br><strong>Colors:</strong> " + catBreeds[i].colors +
                        "<br><strong>Pet price:</strong> " + catBreeds[i].petprice +
                        "<br><strong>Breeder price:</strong> " + catBreeds[i].breederprice +
                        "<br><strong></strong> " + catBreeds[i].description;

  let breedDiv = document.createElement("div");
  breedDiv.classList.add("breed");

  breedDiv.appendChild(heading);
  breedDiv.appendChild(image);
  breedDiv.appendChild(paragraph);

  container.appendChild(breedDiv);
}