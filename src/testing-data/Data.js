import img from "./../img/chicken.jpg";
import img1 from "./../img/cookies.jpg";
import img2 from "./../img/cookies2.jpg";
import img3 from "./../img/meet.jpg";
import img4 from "./../img/meet2.jpg";

const recipes = [
  {
    id: "kolivo",
    country: "Bulgaria",
    title: "Kolivo",
    course: "dessert",
    description:
      "Boiled wheat with sugar and walnuts or kolivo is a common first course at the Bulgarian Christmas Eve table. It is similar to Russian kutya or sochivoand is also known as kutia in Poland, koljivo, colivă, koliva, and more depending on which country you happen to be in. This first-course Christmas Eve pudding of sorts is made with wheatberries, or other grains or legumes like rice, barley or beans, that are sweetened with honey and sometimes augmented with poppy seeds, dried fruits or walnuts. The kolivo is eaten from a common dish to symbolize unity.",
    dietaryrestrictions: {
      gluten: false,
      vegetarian: true,
      vegan: true,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "1 cup wheat berries or kamut berries rinsed",
      "1/2 teaspoon salt, 1 cup poppy seeds",
      "1/2 cup confectioners' sugar",
      "4 tablespoons honey",
      "1 teaspoon vanillaZest of 1 lemon",
      "2/3 cup plumped raisins",
      "1/2 cup ground, walnuts (optional)",
      "1/2 cup coarsely ground blanched almonds (optional)",
      "5 plumped figs, chopped (optional)",
      "5 plumped dates, chopped (optional)",
      "1/2 cup half-and-half"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Place rinsed wheat berries in a large pot or Dutch oven and cover with water by about 5 inches.",
      "Stir, cover and let stand overnight.",
      "When ready to cook, drain the wheat berries, rinse, drain again and place back in the pot.",
      "Add 6 cups cold water and salt, bring to a boil, reduce heat to a simmer, and cook until tender (anywhere from 90 minutes to 3 hours).",
      "Drain and set aside to cool.",
      "Prepare poppy seeds by placing them in a saucepan with water to cover by several inches.",
      "Stir and let stand 20 minutes.",
      "Pour off any impurities that rise to the surface, then drain through a sieve, rinse under cold water and drain again.",
      "Return poppy seeds to the saucepan and scald with boiling water to cover by an inch.",
      "Cover and let stand 15 minutes.",
      "Place saucepan on the burner, bring to a boil, reduce heat and simmer for 30 minutes.",
      "Poppy seeds are ready when they can be pulverized between the fingers.",
      "Drain and grind once in a poppy seed grinder or 3 times in a regular grinder.",
      "In a large bowl, combine cooled, cooked wheat, ground poppy seeds, confectioners' sugar, honey, vanilla, zest, raisins and some or all of the following, if using -- walnuts, almonds, figs, and dates.",
      "Mix well and add half-and-half, incorporating thoroughly. Refrigerate until ready to serve."
    ],
    time: "240min",
    image: img
  },
  {
    id: "monastery-gyuvetch",
    country: "Bulgaria",
    title: "Monastery Gyuvetch",
    course: "main",
    description:
      "This dish used to be prepared at the Rila Monastery kitchen. Rila Monastery is one of the most famous Bulgarian tourist attractions and a milestone in Bulgarian culture and religion - it has survived almost untouched throughout the years of the Ottoman Yoке.",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: false,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "2 lbs beef",
      "4 tomatoes chopped, 1/2 lbs mushrooms",
      "1 cup rice, 1 onion chopped",
      "15 olives  whole, a bunch of parsley",
      "2 tbsp vegetable oil",
      "1 tbsp butter",
      "1 tbsp sugar",
      "2 1/2 cups beef stock",
      "black pepper, paprika and salt"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Cut the beef into cubes or small pieces and fry in a pan with a little oil for about 5 minutes or until brown.",
      "Add the onions, beef stock and paprika, 5 minutes later add the mushrooms and rice and simmer for about 15 minutes.",
      "Add the tomatoes, salt to taste, butter, sugar and olives, and cook for another 5 minutes.",
      "Preheat oven to 400F. Transfer the content of the pan into a baking dish and cook for about 30 minutes.",
      "Sprinkle with parsley and pepper before serving."
    ],
    time: "60min",
    image: img1
  },
  {
    id: "baklava",
    country: "Bulgaria",
    title: "Baklava",
    course: "dessert",
    description:
      "A popular sweet pastry found in many cuisines of the Middle East and the Balkans, made of chopped nuts layered with phyllo pastry.",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: true,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "1 pack of filo dough",
      "1 lb walnuts chopped medium fine",
      "1 tsp vanilla (or use vanilla sugar)",
      "4 tablespoons of butter melted",
      "4 1/4 cups sugar",
      "2 cups water, 1 tsp lemon juice "
    ],
    message: "Let's start cooking!",
    instructions: [
      "Make the syrup first. Boil the water and sugar for 15 minutes.",
      "Add lemon juice, boil 10 more minutes, set aside to cool.",
      "Then make the filling - mix the walnuts, 1/4 cup of sugar and vanilla.",
      "Take out a sheet of dough and place it in the pan.",
      "Brush the dough with melted butter. Repeat 10-12 times.",
      "Spread the walnut filling across the tray.",
      "Do the rest of the dough sheets in the same way as the first 10-12.",
      "Cut the surface into squares or diamonds.",
      "Bake on 325 degrees for about 60 minutes or until golden brown.",
      "Let it cool a bit and add the syrup.",
      "Let cool down before serving.",
      "Best served chilled."
    ],
    time: "120min",
    image: img2
  },
  {
    id: "sarmale",
    country: "Romania",
    title: "Sarmale",
    course: "main",
    description:
      "One of the Romanian dishes that best represent the Balkan influence is the popular sarmale, stuffed cabbage or vine leaves with a mix of rice, minced meat, onion, tomatoes and herbs. A favorite for most Romanians, this dish is usually served with cream and polenta and is a sure presence on all Christmas tables across the country.",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: false,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "For the Cabbage:",
      "1 whole head cabbage (about 4 pounds).",
      "For the Filling:",
      "6 tablespoons olive oil",
      "1 medium, onion (finely chopped)",
      "2 garlic cloves (minced)",
      "2 1/2 tablespoons raw rice",
      "1/4 cup hot water",
      "1 1/2 pounds lean ground pork",
      "1 slice crustless white bread",
      "2 tablespoons fresh dill (chopped)",
      "1 teaspoon thyme",
      "2 teaspoons salt",
      "1 teaspoon black pepper",
      "Optional:",
      "1 teaspoon crushed red pepper",
      "2 tablespoons water",
      "For the Cooking Liquid:",
      "1 cup sauerkraut juice reserved from drained sauerkraut",
      "3 cups water",
      "1 tablespoon Vegeta",
      "10 black peppercorns",
      "4 bay leaves",
      "For the Dutch Oven:",
      "3 cups sauerkraut,",
      "6 strips bacon",
      "6 fresh dill sprigs",
      "2 pounds sliced tomatoes"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Prepare the Cabbage: Remove core from cabbage.",
      "Place whole head in a large pot filled with boiling, salted water.",
      "Cover and cook 3 minutes, or until softened enough to pull off individual leaves.",
      "You will need about 20 leaves.",
      "When leaves are cool enough to handle, use a paring knife to cut away the thick center stem from each leaf, without cutting all the way through.",
      "Chop any remaining cabbage and set aside.",
      "Make the Filling:",
      "In a large skillet, sauté chopped onion, garlic and rice in 1 tablespoon of the olive oil, stirring frequently, until onion is translucent.",
      "Add 1/4 cup hot water, bring to a boil, reduce heat and simmer 10 minutes.",
      "Remove from heat, cover and let stand 5 minutes or until rice has absorbed all the water.",
      "Let cool.",
      "Place pork in a large bowl.",
      "Quickly dip bread in water, squeeze to remove excess water and add to meat along with cooled onion-garlic-rice mixture, combining thoroughly.",
      "Add dill, thyme, salt, pepper, hot pepper, if using, and 2 tablespoons water.",
      "Mix completely but lightly so as not to toughen the meat.",
      "In a medium bowl, mix sauerkraut juice with 3 cups water, Vegeta, peppercorns, and bay leaves, and set aside.",
      "Assemble the Rolls: Place about 1/2 cup of meat mixture on each cabbage leaf.",
      "Roll away from you to encase the meat.",
      "Flip the right side of the leaf to the middle, then flip the left side.",
      "You will have something that looks like an envelope.",
      "Once again, roll away from you to create a neat little roll.",
      "Prepare the Dutch Oven: Using 2 tablespoons of the remaining olive oil, coat a large, lidded Dutch oven or casserole dish.",
      "Mix reserved chopped cabbage with sauerkraut and place some in the bottom of the prepared Dutch oven.",
      "Place 3 strips bacon across sauerkraut and cover with a layer of stuffed cabbages.",
      "Add another layer of sauerkraut, bacon strips and stuffed cabbage.",
      "Then top with remaining sauerkraut.",
      "Spread dill sprigs on top and sprinkle with remaining 3 tablespoons olive oil.",
      "Pour sauerkraut juice-water mixture over all.",
      "Cook and Serve the Cabbage Rolls: Heat oven to 375 F.",
      "Place Dutch oven over high heat on the stovetop and bring to a boil.",
      "Lower heat to medium-low, cover and simmer about 20 minutes.",
      "Transfer to oven and cook 1 1/2 hours.",
      "Then add sliced tomatoes, cover and cook another 45 minutes.",
      "Remove lid and continue cooking another 15 minutes.",
      "When ready to serve, remove bay leaves, and accompany sarmale with boiled potatoes, pasta or mamaliga (polenta)."
    ],
    time: "150min",
    image: img3
  },
  {
    id: "salata-orientala",
    country: "Romania",
    title: "Salata Orientala",
    course: "main",
    description:
      "This was the kind of salad that my mom would always make whenever she wasreally busy and tired after a long day at work, but no matter how tired she was she still had to put dinner on the table for her family. This salad was her go tomeal for such times because all that’s really required is to peel some potatoes, then boil the potatoes and the eggs and just toss everything together. It was easy, but still a very satisfying dinner for us. It’s also great if you’re looking for a satisfying meatless dish.",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: true,
      vegan: true,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "6 medium potatoes cut into cubes and boiled",
      "1 small red onion chopped",
      "5 eggs boiled",
      "1/2 cup black olives sliced or whole",
      "4 tbsp olive oil",
      "1/4 tsp salt or to taste",
      "1/4 tsp pepper or to taste, fresh parsley chopped, for garnish"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Peel the potatoes and cut them up in small cubes.",
      "Boil them for about 20 minutes or until they are tender when you stick a fork in them.",
      "Boil the eggs and cut them up in smaller pieces.",
      "Mix all the ingredients together gently and garnish with parsley."
    ],
    time: "30min",
    image: img4
  },
  {
    id: "cozonac",
    country: "Romania",
    title: "Cozonac",
    course: "dessert",
    description:
      "One of the top Romanian dishes to try in December, this sweet bread is one of the highlights of Christmas all around the country. Prepared with different fillings, but traditionally with walnut cream, cozonac is a culinary symbol that reunites families and recalls memories of celebrating Christmas at any age. Although all supermarkets and pastry shop have a wide variety of cozonac for sale this time of the year, do try the home-made version. It’s a treat.",
    dietaryrestrictions: {
      gluten: false,
      vegetarian: true,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "1 1/4 cup milk, 3 1/2 cups all-purpose flour (plus 2 1/2 tablespoons, separated)",
      "1 (1/4 ounce) package active dry yeast",
      "4 egg yolks (room-temperature)",
      "3/4 cup sugar (superfine)",
      "4 ounces raisins (light or dark)",
      "1 lemon (zest only), 4 ounces butter (melted)",
      "1 tablespoon dark rum",
      "1 teaspoon vanilla extract",
      "1 tablespoon vegetable (or canola oil)",
      "1 large room-temperature egg yolk mixed with 1 tablespoon water,",
      "Optional: 1 ounce walnuts",
      "Optional: 1 tablespoon raisins",
      "Optional: 1/2 cup sugar (confectioners)"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Scald 1/2 cup milk and stir in 2 1/2 tablespoons flour until smooth.",
      "Let cool 10 minutes.",
      "Heat another 1/2 cup milk just until lukewarm.",
      "Do not scald.",
      "Place yeast in a small bowl and pour lukewarm milk over, stirring until dissolved.",
      "Add yeast mixture to the milk-flour paste and beat until large air bubbles appear.",
      "Cover and let rise at least 15 minutes.",
      "Heat the remaining 1/4 cup milk to lukewarm. Do not overheat.",
      "Pour into a warmed large bowl or bowl of a stand mixer.",
      "Add the egg yolks, sugar, raisins, zest, yeast mixture, and 3 1/2 cups flour, stirring after each addition.",
      "Knead about 10 minutes by machine or 15 to 20 minutes with buttered hands while still in the bowl, adding melted butter as necessary to achieve a nonsticky, pliable, moist ball of dough.",
      "It will probably take about 3 ounces of the melted butter.",
      "Save the rest.",
      "Add rum, vanilla, and oil and knead another 2 to 3 minutes.",
      "Cover bowl with greased plastic wrap and let rise until doubled.",
      "Punch down and with hands dipped in some of the reserved melted butter, knead another 5 to 10 minutes.",
      "Heat oven to 350 F.",
      "Coat a 10- to 12-inch round pan that is at least 3 inches deep or a 9x5x3-inch loaf pan with cooking spray.",
      "Using buttered hands, twist the dough and place in the pan.",
      "Cover with greased plastic wrap and let rise until dough reaches the top of the pan.",
      "Brush top of dough with egg wash (1 large egg yolk mixed with 1 tablespoon water).",
      "Sprinkle with optional walnuts and raisins, if desired.",
      "Bake 1 hour or until toothpick tests clean or an instant-read thermometer registers 190 F.",
      "Remove from pan and cool on wire rack.",
      "If you wish, while the cake is still hot, sprinkle with optional confectioners' sugar."
    ],
    time: "80min",
    image: img
  },
  {
    id: "crab-rangoon",
    country: "China",
    title: "Crab Rangoon",
    course: "main",
    description:
      "The filling is made with a combination of cream cheese,crab meat or imitation crab meat, scallions or onion, garlic, and other flavorings. A small amount of the filling is wrapped in each Chinese wonton wrapper.",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: false,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "1 clove garlic, minced",
      "1 (8 ounce) package cream cheese",
      "1 (6 ounce) can crabmeat, drained and flaked",
      "2 green onions with tops, thinly sliced",
      "2 teaspoons Worcestershire sauce",
      "1/2 teaspoon light soy sauce",
      "48 wonton wrappers (gluten free optional)"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Preheat an oven to 425 degrees F (220 degrees C).",
      "Lightly spray baking sheet with cooking spray.",
      "Combine garlic, cream cheese, crab, green onions, Worcestershire sauce, and soy sauce in a bowl.",
      "To prevent wonton skins from drying, prepare only 1 or 2 rangoon at a time.",
      "Place 1 teaspoon of filling onto the center of each wonton skin.",
      "Moisten the edges with water and fold the wonton skin diagonally to form a triangle, pressing edges to seal.",
      "Moisten one of the bottom corners.",
      "Create a crown by pulling both bottom corners together and sealing.",
      "Arrange the rangoon on the baking sheet and lightly spray with cooking spray.",
      "Bake in the preheated oven until golden brown, 12 to 15 minutes."
    ],
    time: "50min",
    image: img1
  },
  {
    id: "General-Tsos-chicken",
    country: "China",
    title: "General Tso's Chicken",
    course: "main",
    description:
      "General Tso’s Chicken can sometimes have recipes that are really complicated and with many different breading steps. I eliminated them going to a simple cornstarch coating, but you can definitely do a thicker typical breading if you would like, like I did in my Orange Chicken recipe. Also, the addition of the hoisin sauce may seem small and you may want to skip it because it isn’t a normal pantry item unless you are used to doing Asian cooking, but the flavor is that specific General Tso’s Chicken flavor that you’ll miss without it.",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: false,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "1 pound chicken thighs cut into 1 inch chunks",
      "1/4 cup cornstarch, oil for frying",
      "1 tablespoon minced ginger",
      "1/2 teaspoon red chili flakes",
      "2 cloves garlic minced",
      "For the Sauce: 3 tablespoons rice vinegar",
      "3 tablespoons soy sauce",
      "2 teaspoons hoisin sauce",
      "1/4 cup water",
      "3 tablespoons sugar",
      "1 tablespoon cornstarch"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Toss the chicken thighs with the quarter cup of cornstarch and let sit while you mix the sauce ingredients.",
      "Add the rice vinegar, soy sauce, hoisin sauce, water, sugar and tablespoon of cornstarch in a small bowl and whisk together.",
      "Add the chicken to a pan with the oil and fry until crispy.",
      "Remove chicken from the pan and drain all but a tablespoon of the oil and add the chili flakes, ginger and garlic.",
      "Cook until you smell the garlic (about 30 seconds).",
      "Add in the chicken and toss, then add in the sauce.",
      "Stir for about 30 seconds until thickened.",
      "Serve immediately."
    ],
    time: "30min",
    image: img2
  },
  {
    id: "red-bean-So",
    country: "China",
    title: "Red Bean Soup",
    course: "dessert",
    description:
      "Red bean soup is a common Chinese dessert soup (or tong sui) made from red adzuki beans and brightened with the tangy citrus of orange zest or dried tangerine peel. It’s both humble and elegant — you’re equally likely to be served red bean soup as the complimentary dessert at your neighborhood Cantonese restaurant as you are to receive it as the closing act of a lavish banquet.",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: true,
      vegan: true,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "1 1/2 cups red adzuki beans",
      "1/2 cup Chinese rock sugar",
      "6 cups water, 2 tablespoons tapioca pearls",
      "1/4 teaspoon orange zest (optional)"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Just red adzuki beans, Chinese rock sugar, tapioca pearls and an orange (if you like).",
      "Soak the red beans in cold water for 3 hours.",
      "Discard the soaking water, then put the beans in a medium pot and cover with 6 cups of water.",
      "Bring to a boil, then reduce heat to low and simmer for 1 hour, stirring occasionally."
    ],
    time: "300min",
    image: img3
  },
  {
    id: "purple-cabbage",
    country: "Trinidad & Tobago",
    title: "Purple cabbage slaw",
    course: "main",
    description: "A perfect salad or side.",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: true,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "Salad -1 purple cabbage, shredded",
      "1/2 white cabbage, shredded",
      "2 carrots, grated",
      "1 bunch parsley, chopped",
      "Dressing -1 cup sour cream",
      "1/4 cup orange juice",
      "1/4 cup lime juice",
      "1/4 cup honey",
      "salt and cayenne pepper to taste",
      "Garnish -1/2 cup raisins soaked in 1 cup of dark rum",
      "3 oranges, segmented",
      "1/2 cup slivered, toasted almonds"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Mix salad ingredients.",
      "Add dressing and half the garnish ingredients and toss well.",
      "Adjust seasoning.",
      "Garnish with reserved oranges, almonds, and raisins."
    ],
    time: "20min",
    image: img4
  },
  {
    id: "turkey-vegetable-soup",
    country: "Trinidad & Tobago",
    title: "Turkey Vegetable Soup",
    course: "Main",
    description: "A turkey and Vegetable soup.",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: false,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "The carcass of the turkey, plus bones (that haven’t been gnawed) of the legs and wings of the bird.",
      "1 carrot sliced",
      "1 stalk celery sliced",
      "1 medium brown onion, sliced,",
      "water to cover the bones",
      "One or two tablespoons oil",
      "1 medium onion, sliced",
      "two stalks imported celery, trimmed",
      "One and a half medium carrots, peeled and sliced, 1/4 pound of pumpkin diced",
      "Half a tin of diced tomatoes",
      "Turkey stock made with the carcass of the, bird",
      "Left over bread stuffing",
      "Left over turkey gravy",
      "two bay leaves",
      "Half-teaspoon garlic salt",
      "Optional poultry seasoning to taste",
      "2 teaspoon rubbed sage",
      "Garlic salt to taste",
      "Salt and pepper to taste"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Put the bones in the slow cooker with the prepared carrot, celery and onion, cover the bones with warm water.",
      "Turn on the slow cooker to low and simmer for 6-8 hours.",
      "If you don’t have a slow cooker, put those bones and the vegetables in a large soup kettle or stockpot and simmer for at least 2-3 hours.",
      "Strain the stock, discard the bones and cooked vegetables.",
      "Now to make the soup.",
      "Heat the oil in a soup kettle or stockpot, add the onions and saut? until soft and translucent.",
      "Add the rest of the prepared vegetables and saut over a medium heat until the juices run.",
      "Now add the rest of the ingredients, the stock, the turkey gravy, the left over stuffing (or poultry seasoning and sage if no stuffing is left over), the bay leaves and garlic salt.",
      "Put the stockpot in the microwave and cook on HI for about 15 minutes.",
      "Season to taste with salt and pepper. Blend and serve."
    ],
    time: "120min",
    image: img
  },
  {
    id: "sorrel-sorbet",
    country: "Trinidad & Tobago",
    title: "Sorrel Sorbet",
    course: "dessert",
    description:
      "Known for its sharp, tangy taste, this fruit is also used to spice various vegetable and meat-based dishes. Like ginger, sorrel can be used to add flavour to stir fry or stews",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: true,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "1 large head cauliflower",
      "stem discarded",
      "florets chopped",
      "1 medium potato",
      "peeled and chopped",
      "1/2 onion, chopped",
      "1 tbsp butter",
      "1 tbsp olive oil",
      "4 cups light vegetable stock",
      "2 cups whole milk",
      "6 large sorrel leaves, stems trimmed, then shredded",
      "Sea salt and freshly ground, black pepper"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Place the cauliflower florets, potato, and onion in a saucepan with the butter and oil.",
      "Heat gently and, when the contents start to sizzle, cover with a lid and sweat everything over a low heat for about 10 minutes.",
      "Add the stock and bring to a boil, then pour in the milk and return gently to a boil.",
      "Season to taste, then simmer, uncovered, for 10-15 minutes when the vegetables should be soft.",
      "Puree in a food processor or blender, or blend in the pan with an immersion blender.",
      "Pass the puree through a sieve into a clean pan, rubbing with the back of a ladle.",
      "Bring the soup to a boil. Ladle into soup plates, top with sorrel shreds."
    ],
    time: "60min",
    image: img1
  },
  {
    id: "halwa-puri",
    country: "Pakistan",
    title: "Halwa Puri",
    course: "dessert",
    description:
      "Perhaps the most popular delicacy that Lahore has to offer is Halwa Puri. And the most famous place for trying this food is Sadiq Halwa Puri and Taj Puri Wala. What makes it even more special is the landscape with historical imprints that you enjoy.",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: true,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "1 cup semolina",
      "1 cup sugar",
      "1 cup ghee or butter (you can opt to use up to half this amount)",
      "1 can or 2 cups evaporated milk (you can use whole milk instead)",
      "1/4 tsp., cardamom powder",
      "pinch of colour and/or saffron (optional)",
      "crushed or flaked nuts for garnishing"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Halwa - 1 cup semolina",
      "1 cup sugar",
      "1 cup ghee or butter (you can opt to use up to half this amount)",
      "1 can or 2 cups evaporated milk (you can use whole milk instead)",
      "1/4 tsp., cardamom powder",
      "pinch of colour and/or saffron (optional), crushed or flaked nuts for garnishing.",
      "Pooris - 1 1/2 cups all-purpose flour",
      "1/2 cup atta flour",
      "2 tbsp. yoghurt",
      "3 tbsp. oil",
      "1 tsp. salt, pinch of baking powder warm water for kneading (you can add a bit of milk in it for extra soft pooris)",
      "oil for deep frying"
    ],
    time: "60min",
    image: img2
  },
  {
    id: "hareesa",
    country: "Pakistan",
    title: "Hareesa",
    course: "main",
    description:
      "Hareesa, also dubbed as the ‘stepsister’ of Haleem, is still a tad bit different from what this mysterious yet marvelous food is. You can find best Hareesa on Nisbat Road, near Lakshmi Chowk. Although it is not the fanciest places in the town, they serve the most delicious Hareesa that leaves you craving for more!",
    dietaryrestrictions: {
      gluten: false,
      vegetarian: false,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "4 TBSP Cooking Oil",
      "2 TBSP Ginger Garlic Paste",
      "500 gm K&N’s Boneless Chicken",
      "Salt (As Needed)",
      "8 Green Chilies (Chopped)",
      "1 TSP Turmeric Powder",
      "1 TSP Black Pepper",
      "3 TSP Red Chili Powder",
      "2 TSP Coriander Powder",
      "3 Cup Water (Chicken Tender)",
      "1 Cup Wheat Grains (soaked)",
      "½ Cup Soaked Rice (soaked)",
      "1 Cup Green Lentils (soaked)",
      "2 Liter Water (Hareesa Cooking)",
      "2 Cubes of K&N’s Stock, For Baghaar",
      "1/2 Cup butter",
      "½ TSP Cumin",
      "½ Cup Ground Spinach",
      "Lemons, Green coriander (As Needed for Garnishing)"
    ],
    message: "Let's start cooking!",
    instructions: [
      "Add cooking oil in a pan, then add ginger garlic paste & fry it for a while.",
      "Then add K&N’s boneless chicken in this fried paste & cook until it tender by adding salt, green chilies, turmeric powder, black pepper powder, red chili powder, coriander powder, & water.",
      "Now Shred this cooked chicken.",
      "Take another cooking pan.",
      "Add wheat grains, soaked rice, green lentils, water, K&N’s Stock, & cook until tender.",
      "Grind it well and put the cooked chicken in this grinded mixture.",
      "It’s time for Tarka: Add butter, cumin, ground spinach in a pan and fry it for a while then put this in the mixture which we have prepared above.",
      "Hareesa is ready to serve.",
      "Use Lemon slices, green coriander and green chilies for garnishing."
    ],
    time: "45min",
    image: img3
  },
  {
    id: "gulab-jamun",
    country: "Pakistan",
    title: "Gulab Jamun",
    course: "dessert",
    description:
      "For Gulab Jamun: 1/2 kg khoya ricotta cheese, 1 egg, 3 tablespoon plain flour, 3 tablespoon sooji, 2 tablespoon cooking oil, 1 tablespoon sugar, 1/2 teaspoon baking powder. For Sugar Syrup: 1/2 kg sugar, 2 cups water, 1/2 teaspoon green cardamom powder. For Garnishing: silver papers, pistachios and almonds",
    dietaryrestrictions: {
      gluten: true,
      vegetarian: true,
      vegan: false,
      none: true
    },
    subtitle: "Ingredients",
    ingredients: [
      "In a large bowl, combine the khoya, egg,  plain flour, sooji, oil, sugar and  baking powder.",
      "Knead a soft dough.",
      "Make small balls out of the dough.",
      "Now heat oil in a deep pan.",
      "Fry gulab jamuns for 5-6 minutes or  until golden brown.",
      "Meanwhile, bring water to a boil in a  large pot.",
      "Add sugar and cardamom powder.",
      "Cook for 30 minutes or until sugar syrup  is thickened.",
      "Put gulab jamun in the sugar syrup.",
      "Cover the pot or until gulab jamun  absorbed the syrup.",
      "Dish it out.",
      "Garnish with silver paper.",
      "Sprinkle almonds and pistachios over the  gulab jamuns.",
      "Delicious Gulab Jamun is ready to serve."
    ],
    message: "Let's start cooking!",
    instructions: [
      "Homemade gulab jamun is usually made up of powdered milk",
      "A pinch of all-purpose flour (optional)",
      "Baking powder and clarified butter (ghee); kneaded to form a dough moulded into balls, deep fried and dropped into simmeringsugar syrup."
    ],
    time: "45min",
    image: img4
  }
];
export default recipes;
