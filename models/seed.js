//Sources of recipies
//https://www.simplyrecipes.com/recipes/chilaquiles/
//https://www.allrecipes.com/recipe/76464/chorizo-breakfast-burritos/
//https://downshiftology.com/recipes/carne-asada-tacos/
//https://muybuenocookbook.com/how-to-make-tamales-tamalada-video/
//https://www.delish.com/cooking/recipe-ideas/a30875851/pozole-recipe/
//https://tastesbetterfromscratch.com/authentic-mexican-rice/
//https://www.allrecipes.com/recipe/20988/fried-ice-cream/
//https://www.cookingclassy.com/churros/
//https://www.lovefromtheoven.com/easy-nachos/
//Butter Tortillas is what I do
//https://www.muydelish.com/traditional-mexican-horchata/
//Paloma is what I do




const recipes = [
    {
        name: 'Chilaquiles',
        description: 'Chilaquiles are basically corn tortilla pieces that are fried, cooked in salsa, and sprinkled with cheese. They are often served for breakfast with eggs and a side of beans',
        ingredients: '12 corn tortillas, oil for frying, Kosher salt, 1 1/2 to 2 cups red chile sauce or salsa verde',
        instructions: 'Cut the tortillas into 6 wedges, then fry them in batches in a large skillet over medium-high heat until golden brown and crisp, 3 to 4 minutes per batch. Transfer to a paper towel-lined plate and season with salt. Pour the chile sauce into the skillet and bring to a simmer. Add the tortilla wedges and cook, tossing, until the tortillas are coated in the sauce, 1 to 2 minutes. Transfer to a serving platter and top with cheese. Serve with eggs and beans.',
        picture: 'https://www.seriouseats.com/thmb/wceJtot3qMjXcVAnk6PBw_OhxRw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chilaquiles-verdes-fried-eggs-hero-01_1-d18b82d02fa54c92a05e66881e906814.JPG',
        foodType: 'Breakfast',
        isFeatured: true,
    },
    {
        name: 'Chorizo Breakfast Burrito',
        description: 'This breakfast burrito with chorizo sausage is great when you are craving greasy, yummy breakfast food (i.e., when you are hungover)!',
        ingredients: '3/4 pound chorizo sausage, casings removed and crumbled, 1/2 cup chopped red onion, 1 green chile pepper, seeded and diced, 4 large eggs, 4 flour tortillas, 1 cup shredded Cheddar cheese',
        instructions: 'Generously coat a large frying pan with cooking spray. Cook and stir chorizo in the prepared pan over medium-high heat until well browned and crumbled. Add onion and chile pepper; continue cooking, stirring occasionally, until onion is tender. Beat eggs in a medium bowl and add to chorizo mixture. Reduce heat to medium-low; continue cooking and stirring until eggs are scrambled and no longer runny. Warm flour tortillas in the microwave for 30 seconds. Spoon chorizo-egg mixture into the middle of each tortilla and top with shredded Cheddar cheese. Roll up like a burrito.',
        picture: 'https://www.berlyskitchen.com/wp-content/uploads/2020/06/Chorizo-Breakfast-Burritos-Featured-Image.jpg',
        foodType: 'Breakfast',
        isFeatured: false,
    },
    {
        name: 'Carne Asada Tacos',
        description: 'Carne asada tacos are delicious flank steak, Mexican-inspired street tacos! Just load up your tortilla with juicy steak bites, avocado, onion, cotija cheese, and fresh cilantro.',
        ingredients: 'Flank or Skirt steak, 2 Avocados, 1 Onion, Diced, 3 Limes, stalk of Cilantro, Cotija cheese, taco tortillas.',
        instructions: 'Grill the carne asada until it’s cooked to your preference. Slice it against the grain, then chop it into small pieces. Use a spoon to mash the avocado and spread a large spoonful or two onto each tortilla. Then, top the avocado with chopped carne asada, a sprinkle of cotija cheese, some diced onion and fresh cilantro. Squeeze fresh lime juice on top.',
        picture: 'https://www.allrecipes.com/thmb/vG-of0Xa0W0eodSXPWV1KXD009U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/70935-taqueria-style-tacos-mfs-3x2-35-9145991a0ef94ceb8be05ae8d6be4f0f.jpg',
        foodType: 'Lunch',
        isFeatured: false,
    },
    {
        name: 'Pork Tamales',
        description: 'Tamales are a traditional Mexican dish made with masa (corn dough) and filled with meat, cheese, or vegetables. They are wrapped in corn husks and steamed.',
        ingredients: '7-8 pounds pork butt or pork shoulder, 2 1/2 cups water, 1 tablespoon sea salt, 6 1/2 cups Red Chile Sauce, 1 Batch Tamale Masa, Corn husks',
        instructions: 'Shredded pork: Place pork, water, and salt in a slow cooker and cook for 6 to 8 hours. Shred pork and remove fat while shredding, reserving fat. In a blender combine the cooled broth from the cooked pork and the leftover fat pieces. Blend and reserve for using when making tamale masa and filling. Filling: Heat the 6 tablespoons broth in a large skillet. Add flour and whisk for at least 4 to 5 minutes. Add red chile sauce and salt, stir, and cook for 10 minutes. The chile sauce will be very thick at this time. Add the shredded pork and stir so all the pork is well coated with the red chile sauce. Prepare Corn Husks: Soak corn husks in water for an hour before using, rinse well with running water to take off any dust or corn husk fibers. Spread Masa: Place the wide end of the husk on the palm of your hand, narrow end is at the top. Starting at the middle of the husk spread 2 tablespoons of the masa with the back of a spoon in a rectangle or oval shape. Do not spread the masa to the ends; leave about a 2-inch border on the left and right sides of the husk. Fill Corn Husks: Spoon 1 1/2 tablespoons of your chosen filling down the center of the masa. Fold both sides to the center; finish off by bringing the pointed end of the husk toward the filled end. Steam Tamales: Use a deep pot or tamale steamer to steam tamales. If using a tamale steamer fill with water up to the fill line. Set the tamale rack over the water. Place tamales upright, with fold against the sides of the other tamales to keep them from unfolding. Cover pot with a tightly fitting lid. Set heat on high and bring to a boil, about 15 minutes. Lower heat and simmer for 2 1/2 to 3 hours. Keep lid on tightly. To test if done, put one tamal on a plate and take off the corn husk. If it comes off without sticking to the tamal they are done.',
        picture: 'https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/spicy-beef-tamales-recipe.jpg',
        foodType: 'Lunch',
        isFeatured: false,
    },
    {
        name: 'Pozole',
        description: 'Pozole is a traditional Mexican soup made with hominy, pork, and chiles. It is often served on special occasions such as Christmas and New Year’s Eve.',
        ingredients: '3 lb. pork shoulder, cut into 2" pieces, Kosher salt, black pepper, 1 large yellow onion, quartered, 3 cloves garlic, sliced, 1 tsp. whole cloves, 1 tsp. cumin seeds, 1 bay leaf, 4 c. low-sodium chicken broth, 2 dried chiles de arbol, stem and seeds removed, 2 dried ancho chiles, stem and seeds removed, 2 dried guajillo chiles, stem and seeds removed, 3 (15-oz.) cans hominy, drained and rinsed , Thinly sliced radishes, for serving, Thinly sliced green cabbage, for serving, Freshly chopped cilantro, for serving',
        instructions: 'Season pork with salt and pepper. In a large pot over medium heat, add pork, onion, garlic, cloves, cumin seeds, bay leaf, and broth. Add enough water to cover pork by 2”. Bring to a boil, then cover and reduce heat to a simmer. Let simmer 1 ½ hours, skimming foam off top as necessary.  Place dried chiles into a medium bowl and pour 2 cups boiling water over. Let soak 30 minutes. Place chiles and about ½ cup of their soaking liquid into a blender. Blend until smooth, adding more water as necessary. Add chile puree and hominy to pot with pork. Continue to simmer, covered, until pork is very tender, 1 hour and 30 minutes more. Serve pozole with radishes, cabbage, and cilantro.',
        picture: 'https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg?crop=1.00xw:0.752xh;0,0.0986xh&resize=1200:*',
        foodType: 'Dinner',
        isFeatured: false,
    },
    {
        name: 'Mexican Rice',
        description: 'The BEST, truly authentic Mexican Rice is so easy to make, and a necessary side dish for all of your favorite Mexican recipes.',
        ingredients: '1 1/2 cups long grain white rice, 1/4 cup oil (vegetable or canola oil), 1 teaspoon garlic , minced, 1/4 medium onion , finely diced, 1/4 cup tomato sauce , or 2 pureed tomatoes, 2 teaspoons tomato bouillon granulated, or cubes, 1/4 teaspoon salt, 1 carrot , diced, 1/2 cup peas (frozen or fresh), 3 cups water',
        instructions: 'Rinse the rice in a fine mesh strainer until the water runs clear. Set aside. In a large saucepan over medium-high heat, add the oil. Once hot, add the rice and stir to combine. Cook over medium heat, stirring frequently, until the rice is lightly golden brown all over (about 10 minutes). Add tomato sauce, garlic, and diced onion to the pan. Stir. Add tomato bullion, salt, carrots, peas, and water (and serrano peppers, if using. They add a little flavor, but not spice.). Bring to a boil, then cover, reduce heat to low and cook for about 20 minutes or until the water is completely absorbed.  Remove from heat and allow to rest for 5 minutes before fluffing with a fork.',
        picture: 'https://www.yellowblissroad.com/wp-content/uploads/2020/04/mexican-rice-social.jpg',
        foodType: 'Dinner',
        isFeatured: false,
    },
    {
        name: 'Fried Ice Cream',
        description: 'This fried ice cream is crunchy outside and smooth and creamy inside. Serve with whipped cream, honey, and cherries.',
        ingredients: '1 quart vanilla ice cream, 3 cups crushed cornflakes cereal, 1 teaspoon ground cinnamon, 3 egg whites, 2 quarts oil for frying',
        instructions: 'Scoop ice cream into eight 1/2-cup-sized balls. Place on a baking sheet and freeze until firm, about 1 hour, Combine cornflakes and cinnamon in a shallow dish. Beat egg whites until foamy in a separate bowl. Roll ice cream balls in egg whites, then in cornflakes, covering ice cream completely. Repeat if necessary. Freeze again until firm, about 3 hours. Heat oil in a deep-fryer or large, heavy saucepan to 375 degrees F (190 degrees C). Using a basket or slotted spoon, fry ice cream balls 1 or 2 at a time in hot oil until golden, 10 to 15 seconds. Drain quickly on paper towels and serve immediately.',
        picture: 'https://kitchenfunwithmy3sons.com/wp-content/uploads/2022/04/fried-ice-cream-feature.jpg',
        foodType: 'Dessert',
        isFeatured: true,
    },
    {
        name: 'Churros',
        description: "There's nothing like a fresh homemade churro. They're crispy on the outside, soft and tender on the inside and they have the most irresistable flavor. Plus they're easier to make than you'd think. Always a crowd favorite! Plan on two per person or pipe out longer churros.",
        ingredients: '1 cup (250ml) water, 1/4 cup (56g) unsalted butter, diced into small cubes, 1 Tbsp (13g) granulated sugar, 1/4 tsp salt, 1 cup (141g) all-purpose flour (scoop and level to measure), 1 large egg, 1/2 tsp vanilla extract, Vegetable oil, for frying. For coating: 1/2 cup (100g) granulated sugar, 3/4 tsp ground cinnamon',
        instructions: 'For the coating whisk together 1/2 cup sugar and cinnamon in a shallow dish, set aside. Heat about 1 1/2 inches vegetable oil in a large pot or deep skillet over medium-high heat to 360 degrees Fahrenheit. While oil is heating prepare batter. Reduce burner temperature as needed once oil reaches 360 degrees to maintain that temperature. Add water, butter, sugar and salt to a large saucepan, bring to a boil over medium-high heat. Add flour reduce heat to medium-low and cook and stir constantly with a rubber spatula until mixture comes together and is smooth (a few lumps in it are fine). Transfer mixture to a large mixing bowl, let cool 5 minutes. Add vanilla and egg to flour mixture then blend immediately with an electric mixer. Blend until mixture comes together and is smooth (it will separate at first but keep mixing it will come together). Transfer to a 16-inch piping bag fitted with a rounded star tip (no bigger than 1/2-inch). Carefully pipe mixture into preheated oil, into about 6-inch lengths, cut end with clean scissors. Let fry until golden brown, about 2 minutes per side. Transfer to paper towels to dry briefly then transfer to cinnamon sugar mixture and roll to coat. Serve immediately.',
        picture: 'https://www.recipetineats.com/wp-content/uploads/2016/08/Churros_9-SQ.jpg',
        foodType: 'Dessert',
        isFeatured: false,
    },
    {
        name: 'Nachos',
        description: 'Nachos are a popular Mexican dish made with tortilla chips and cheese. They are often served as an appetizer or snack, but can also be a meal.',
        ingredients: '1 Standard Size Bag Of Tortilla Chips, 1 pound of cheese such as cheddar Monterrey Jack or Colby Jack, shredded, Optional Ingredients: Any meat of choice (Pollo Asada, Carne Asada, Shredded Pork), Beans (Pinto or black beans), Veggies (Jalapenos, Tomatoes, Onions, etc.)',
        instructions: 'Preheat oven to 350 degrees Farenheit. Spread chips over cookie sheet. Sprinkle half of the grated cheese over the chips. Sprinkle toppings over the chips and cheese, Sprinkle on remaining cheese. Bake for 5-10 minutes, or until cheese is melted and bubbly. Serve immediately.',
        picture: 'https://static.onecms.io/wp-content/uploads/sites/43/2023/01/06/51147-SuperNachos-MFS-2X3-0095.jpg',
        foodType: 'Snack',
        isFeatured: false,
    },
    {
        name: 'Butter Tortillas',
        description: 'Butter tortillas are a traditional Mexican snack made with corn tortillas and butter.',
        ingredients: 'Tortillas, Butter',
        instructions: 'Heat a skillet over medium heat. Place a tortilla in the skillet and cook until golden brown on one side, about 1 minute. Flip the tortilla and cook until golden brown on the other side, about 1 minute. Spread butter on the inside of the tortilla and roll up tortilla. Repeat with remaining tortillas. Serve immediately.',
        picture: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_37/1773281/ana-regalado-buttery-tortilla-te-main-210913.jpg',
        foodType: 'Snack',
        isFeatured:false,
    },
    {
        name: 'Horchata',
        description: 'Horchata is a traditional Mexican drink made with rice, cinnamon, and sugar. It is often served cold.',
        ingredients: '1 cup uncooked white rice, 2 cinnamon sticks, 1-12 oz. can evaporated milk, 1-12 oz can condensed milk, 8 cups of warm water divided, Sugar to taste, Ground cinnamon to garnish optional, 1/2 teaspoon vanilla optional',
        instructions: "Wash and drain the rice. Place the rice, cinnamon sticks and 4 cups of water into a bowl. Cover the bowl and refrigerate overnight (preferably) or a minimum of 4 hours. Once you're ready to blend the rice, remove most of the cinnamon sticks but it's okay to leave small pieces with the rice. Once you're ready to blend the rice, remove most of the cinnamon sticks but it's okay to leave small pieces with the rice. Using a very fine strainer (or some cheese cloth) pour the blended mixture over a pitcher. Strain out as much liquid as possible, pushing on the solids with a spatula or spoon. Repeat this process for the rest of the rice, water & cinnamon mixture. Stir in the milks, vanilla (0ptional), and 4 cups of water. Stir well. Taste and add more sugar or water if needed. Chill and stir before serving over ice. Garnish with ground cinnamon.",
        picture: 'https://keviniscooking.com/wp-content/uploads/2021/01/Horchata-square.jpg',
        foodType: 'Drink',
        isFeatured: true,
    },
    {
        name: 'Paloma (Alcoholic)',
        description: 'The Paloma is a popular Mexican cocktail made with tequila, grapefruit soda, and lime juice.',
        ingredients: 'Your Favorite Tequila, Grapefruit Soda (Squirt), Lime Juice, Salt or Tajin (optional)',
        instructions: 'Fill a glass with ice. Add tequila (about 2 ounces or more if you want it stronger), grapefruit soda, and lime juice. Stir to combine. Sprinkle the top with salt or Tajin',
        picture: 'https://whitneybond.com/wp-content/uploads/2021/08/paloma-11.jpg',
        foodType: 'Drink',
        isFeatured: false,
    },

];


// Export the model
module.exports = recipes
