# Where the food values come from

Values per base amount as listed in `src/app.html` (`fd(...)` lines). Pack labels and brand pages first, FatSecret South Africa and Open Food Facts next, USDA FoodData Central for generic items (marked "Generic value." in the app).

## Pizza and takeaways

```
/*
SOURCES

Official brand data:
- mc-qpc: https://www.mcdonalds.co.za/menu/quarter-pounder-with-cheese-1
- mc-cheeseburger: https://www.mcdonalds.co.za/menu/cheeseburger
- mc-nuggets6: https://www.mcdonalds.co.za/menu/6-pack-nuggets (4 pc portion matches the official 4 pc value, 159 kcal)
- mc-mcflurry: https://www.mcdonalds.co.za/menu/oreo-mcflurry
- kfc-zinger, kfc-dunked-wings, kfc-streetwise2-pap: KFC South Africa figures quoted in kJ by Athlone News,
  https://athlonenews.co.za/lifestyle/food-drink/restaurants/2024-06-25-heres-how-far-youd-have-to-run-to-burn-off-these-popular-kfc-meals
  (Zinger 1856 kJ, 4 Dunked Wings 1711 kJ, Streetwise Two with pap 2418 kJ; converted at 4.184)
- spur-cheddamelt: Spur Steak Ranches nutritional analysis (burgers), per 100 g, "Beef Cheddamelt Burger, Pepper Sauce, Chips & Onion Rings" 857 kJ,
  https://spursteakranches.com/uploads/menu_category/19707S-Nutritional-Analysis-24-Burgers-FA.pdf

FatSecret South Africa (brand entries):
- pz-debs-meaty: https://www.fatsecret.co.za/calories-nutrition/debonairs-pizza/something-meaty-(large)/1-slice
  (8 slices checked against https://www.fatsecret.co.za/calories-nutrition/debonairs-pizza/something-meaty-pizza-(large)/1-pizza, 1474 kcal)
- pz-debs-triple-meat: https://www.fatsecret.co.za/calories-nutrition/debonairs-pizza/triple-decker-meat-(large)/1-slice
- pz-debs-triple-chicken: https://www.fatsecret.co.za/calories-nutrition/debonairs-pizza/triple-decker-chicken-(large)/1-slice
- pz-debs-hawaiian: https://www.fatsecret.co.za/calories-nutrition/debonairs-pizza/hawaiian-(large)/1-slice (whole large pizza listed at 1275 kcal = 8 slices)
- pz-debs-margherita: https://www.fatsecret.co.za/calories-nutrition/debonairs-pizza/margherita-(stardard)/1-slice (whole standard pizza listed at 569 kcal = 6 slices)
- pz-debs-regina: https://www.fatsecret.co.za/calories-nutrition/debonairs-pizza/regina-pizza/100g
- pz-romans-sweet-chilli: https://www.fatsecret.co.za/calories-nutrition/romans-pizza/sweet-chilli-chicken/1-large-slice
- pz-romans-four-in-one: https://www.fatsecret.co.za/calories-nutrition/romans-pizza/four-in-one-large-pizza/1-slice
- pz-woolies-margherita: https://www.fatsecret.co.za/calories-nutrition/woolworths/margherita-pizza/100g
- kfc-breast: https://www.fatsecret.co.za/calories-nutrition/kfc/chicken-breast/1-piece
- kfc-thigh: https://www.fatsecret.co.za/calories-nutrition/kfc/chicken-thigh/1-serving
- kfc-streetwise2: https://www.fatsecret.co.za/calories-nutrition/kfc/streetwise-2-with-chips/1-meal
- kfc-chips: https://www.fatsecret.co.za/calories-nutrition/kfc/chips-(regular)/1-serving
- kfc-pops: https://www.fatsecret.co.za/calories-nutrition/kfc/pops-(large)/1-serving (small = 174 kcal, about 0.48 of large,
  https://www.fatsecret.co.za/calories-nutrition/kfc/pops-(small)/1-serving)
- kfc-twister: https://www.fatsecret.co.za/calories-nutrition/kfc/sweet-chilli-twister/1-serving (1229 kJ; 200 g from the KFC brand list)
- steers-burger: https://www.fatsecret.co.za/calories-nutrition/steers/steers-burger-beef/1-burger
- wimpy-burger: https://www.fatsecret.co.za/calories-nutrition/wimpy/wimpy-burger/1-burger
- wimpy-cheese: https://www.fatsecret.co.za/calories-nutrition/wimpy/cheese-burger/1-burger
- wimpy-cheese-tomato: https://www.fatsecret.co.za/calories-nutrition/wimpy/cheese-tomato-sandwich/1-serving
- wimpy-early-bird: https://www.fatsecret.co.za/calories-nutrition/wimpy/early-bird-breakfast/1-serving
- nandos-chips: https://www.fatsecret.co.za/calories-nutrition/nandos/peri-peri-chips-(single)/1-serving
- nandos-rice: https://www.fatsecret.co.za/calories-nutrition/nandos/spicy-rice-(single)/1-serving
- nandos-wrap: https://www.fatsecret.co.za/calories-nutrition/nandos/chicken-wrap/1-serving (1712 kJ)

Generic (USDA FoodData Central, SR Legacy):
- pz-cheese: FDC 173292 "Fast Food, Pizza Chain, 14in pizza, cheese topping, regular crust", 1 slice = 107 g,
  https://getfoodfacts.com/food/fast-food-pizza-chain-14-pizza-cheese-topping-regular-crust-173292
- pz-meat: FDC 173295 "Fast Food, Pizza Chain, 14in pizza, pepperoni topping, regular crust", 1 slice = 111 g,
  https://getfoodfacts.com/food/fast-food-pizza-chain-14-pizza-pepperoni-topping-regular-crust-173295
- slap-chips: FDC 170698 "Fast foods, potato, french fried in vegetable oil",
  https://getfoodfacts.com/food/fast-foods-potato-french-fried-in-vegetable-oil-170698
- fried-fish: FDC 169846 "Restaurant, family style, fish fillet, battered or breaded, fried",
  https://getfoodfacts.com/food/restaurant-family-style-fish-fillet-battered-or-breaded-fried-169846
- fried-wings: USDA SR Legacy "Chicken, broilers or fryers, wing, meat and skin, cooked, fried, flour" (1 wing about 19 g edible, no bone),
  https://www.recipal.com/ingredients/177198-nutrition-facts-calories-protein-carbs-fat-chicken-broilers-or-fryers-wing-meat-and-skin-cooked-fried-flour
*/
```

## Chips, nuts and sweets

```
// Chips & nuts
// Bars & sweets

/*
Sources (checked 2026-10-09):

SA pack data (FatSecret South Africa entries, which mirror the pack labels, and Open Food Facts):
- Simba Chutney, Cheese & Onion, Tomato Sauce; Ghost Pops; Peanuts & Raisins list:
  https://www.fatsecret.co.za/calories-nutrition/search?q=Simba
  https://www.fatsecret.co.za/calories-nutrition/search?q=Simba&pg=1
  https://www.fatsecret.co.za/calories-nutrition/simba/mrs-balls-chutney-potato-chips/100g
- Simba 120 g pack and 36 g serving label check (Mexican Chilli 120 g: 189 kcal, 12.6 g fat, 17 g carbs, 2.7 g protein per 36 g):
  https://world.openfoodfacts.org/product/6009510809442/mexican-chilli-simba
- Lay's Salted, Spring Onion & Cheese: https://www.fatsecret.co.za/calories-nutrition/search?q=Lays
  https://mobile.fatsecret.co.za/calories-nutrition/lays/spring-onion-cheese/100g
- Doritos Sweet Chilli Pepper (45 g packet and per 100 g agree): https://www.fatsecret.co.za/calories-nutrition/search?q=Doritos
- NikNaks Original Cheese: https://world.openfoodfacts.org/product/6009510808643/nik-naks-simba
  Pack sizes 50 g / 135 g: https://clicks.co.za/simba_niknaks-original-cheese-maize-snack-50g/p/360260
  https://www.clicks.co.za/simba_niknaks-sweet-chilli-maze-stack-135g/p/360246
- Fritos BBQ / Tomato: https://www.fatsecret.co.za/calories-nutrition/search?q=Fritos
- Willards Cheese Curls, Big Korn Bites: https://www.fatsecret.co.za/calories-nutrition/search?q=Willards
  https://www.fatsecret.co.za/calories-nutrition/search?q=Willards&pg=1
  https://www.fatsecret.co.za/calories-nutrition/willards/big-korn-bites/100g
- Ghost Pops 100 g bag: https://auberginefoods.ca/products/simba-ghost-pops100-g
- Safari Peanuts & Raisins (40 g serving): https://www.fatsecret.co.za/calories-nutrition/search?q=Safari
- Safari Seedless Raisins: https://www.fatsecret.co.za/calories-nutrition/safari/seedless-raisins/100g
- Safari Dried Mango Strips: https://www.fatsecret.co.za/calories-nutrition/safari/dried-mango-strips/100g
- Cadbury Dairy Milk: https://mobile.fatsecret.co.za/calories-nutrition/cadbury/dairy-milk-chocolate/100g
- KitKat (2 fingers 20 g = 103 kcal, scaled to the 41.5 g 4-finger bar): https://www.fatsecret.co.za/calories-nutrition/search?q=Kit+Kat
  41.5 g bar: https://clicks.co.za/nestle_kit-kat-4-finger-milk-chocolate/p/0003CNDS
- Tex 40 g, Tex Mini, Smarties box / mini box: https://mobile.fatsecret.co.za/calories-nutrition/search?q=Nestle
  https://mobile.fatsecret.co.za/calories-nutrition/search?q=Nestle&pg=1
- PS milk chocolate 48 g: https://www.fatsecret.co.za/calories-nutrition/cadbury/ps-milk-chocolate/1-bar
- Aero per 100 g: https://www.fatsecret.co.za/calories-nutrition/nestle/aero/100g
  40 g bar / 85 g slab: https://www.shoprite.co.za/product/aero-milk-chocolate-bar-40g-10258189EA
  https://www.dischem.co.za/nestle-aero-chocolate-85g-800
- Jelly Tots: https://www.fatsecret.co.za/calories-nutrition/beacon/jelly-tots/100g
  (Sour Jelly Tots similar: https://www.fatsecret.co.za/calories-nutrition/beacon/sour-jelly-tots/100g)
- Chomp per 100 g: https://mobile.fatsecret.co.za/calories-nutrition/cadbury/chomp/100g
  small Chomp 12 g: https://www.fatsecret.co.za/calories-nutrition/cadbury/chomp/1-small-chomp
  bar size 22.7 g: https://en.wikipedia.org/wiki/Chomp_(chocolate_bar)
- Bakers Tennis, Marie, Eet-Sum-Mor: https://www.fatsecret.co.za/calories-nutrition/search?q=Bakers
  https://www.fatsecret.co.za/calories-nutrition/bakers/tennis-biscuits/100g
- Romany Creams: https://world.openfoodfacts.org/product/6001125001877/romany-creams-classic-choc-choc-coconut-biscuits-bakers
- Choc-Kits: https://www.fatsecret.co.za/calories-nutrition/bakers/choc-kits/2-biscuits
- Oreo (3 biscuits 27.6 g): https://mobile.fatsecret.co.za/calories-nutrition/oreo/oreo-original/3-biscuits
- Magnum Classic: https://www.fatsecret.co.za/calories-nutrition/magnum/classic/1-ice-cream
- PnP cocktail koeksisters: https://www.fatsecret.co.za/calories-nutrition/pnp/cocktail-koeksisters/1-serving
- Grenade Carb Killa: https://www.fatsecret.co.za/calories-nutrition/grenade/carb-killa-high-protein-bar/1-bar
- PVM energy bar: https://www.fatsecret.co.za/calories-nutrition/pvm/energy-bar/1-bar

Generic values (USDA FoodData Central SR Legacy / FNDDS via getfoodfacts.com, and Health Canada):
- Popcorn air-popped (FDC 167959): https://getfoodfacts.com/food/snacks-popcorn-air-popped-167959
- Popcorn microwave butter (FDC 2708227): https://getfoodfacts.com/food/popcorn-microwave-butter-flavored-2708227
  oil-popped comparison: https://getfoodfacts.com/nutrition/popcorn
- Potato chips plain (43 g bag = 230 kcal, 3 g P, 21 g C, 15 g F):
  https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/nutrient-data/table-16-snacks-nutrient-value-some-common-foods-2008.html
- Almonds raw (FDC 170567): https://getfoodfacts.com/food/nuts-almonds-170567
- Cashews oil roasted, salted (FDC 169422): https://getfoodfacts.com/food/nuts-cashew-nuts-oil-roasted-with-salt-added-169422
- Mixed nuts dry roasted with peanuts, salted (FDC 168599): https://getfoodfacts.com/food/nuts-mixed-nuts-dry-roasted-with-peanuts-with-salt-added-168599
- Macadamias raw (FDC 170178): https://getfoodfacts.com/food/nuts-macadamia-nuts-raw-170178
- Pistachios dry roasted, salted (FDC 169426): https://getfoodfacts.com/food/nuts-pistachio-nuts-dry-roasted-with-salt-added-169426
- Sunflower kernels dry roasted, salted (FDC 169418): https://getfoodfacts.com/food/seeds-sunflower-seed-kernels-dry-roasted-with-salt-added-169418
- Trail mix regular (1 cup 150 g = 693 kcal): https://www.uhhospitals.org/health-information/health-and-wellness-library/article/nutritionfacts-v1/snacks-trail-mix-regular-1-cup
- Ice cream vanilla (FDC 167575, ½ cup = 66 g): https://getfoodfacts.com/food/ice-creams-vanilla-167575
- Doughnut glazed (FDC 172758, medium = 60 g): https://getfoodfacts.com/food/doughnuts-yeast-leavened-glazed-enriched-includes-honey-buns-172758
- Blueberry muffin (FDC 172765, small = 66 g): https://getfoodfacts.com/food/muffins-blueberry-commercially-prepared-includes-mini-muffins-172765
*/
```

## Drinks, SA favourites, meals and sides

```
/*
SOURCES (checked 2026-10-09)

Coca-Cola South Africa product labels (per 100 ml; kJ / 4.184 = kcal):
- Coca-Cola No Sugar (1 kJ): https://www.coca-cola.com/za/en/brands/brand-coca-cola-drinks/product-coca-cola-no-sugar
- Fanta Orange (66 kJ, 3.9 g sugar, sugar + sweeteners): https://www.coca-cola.com/za/en/brands/fanta
- Sprite (53 kJ, 3.1 g sugar): https://www.coca-cola.com/za/en/brands/sprite
- Stoney Classic (121 kJ, 7.4 g sugar): https://www.coca-cola.com/za/en/brands/Stoney
- Sparletta Creme Soda (61 kJ, 3.7 g) and Iron Brew (62 kJ, 3.5 g): https://www.coca-cola.com/za/en/brands/sparletta
- Appletiser (182 kJ, 10 g carbs): https://www.coca-cola.com/za/en/brands/appletiser
- Powerade Mountain Blast (133 kJ, 8 g carbs): https://www.coca-cola.com/za/en/brands/powerade
- SA can/bottle sizes (300 ml cans): https://www.shoprite.co.za/All-Departments/Drinks/Soft-Drinks/Diet-and-Sugar-Free-Soft-Drinks/Coca-Cola-No-Sugar-Soft-Drinks-24-x-300ml/p/10633691PK1

SAB brand page (per 100 ml): Castle Lager 179 kJ / 43 kcal, Castle Lite 124 kJ / 30 kcal, Hansa 163 kJ / 39 kcal,
Carling Black Label 46 kcal, carbs 2 g (Castle Lite 1.6 g):
- https://www.sab.co.za/our-brands/local-brands
- https://www.sab.co.za/our-brands/local-brands?brand=9

Savanna Dry (211 kJ, 3.6 g sugar per 100 ml) and Hunter's Dry (212 kJ, 4.6 g sugar per 100 ml), brand pages:
- https://www.nbplc.com/our-brands/savanna-cider/
- https://www.nbplc.com/our-brands/hunters-cider/
- Savanna Dry 6% ABV: https://world.openfoodfacts.org/product/6001108028044
- Savanna 500 ml cans: https://www.foodbusinessmea.com/heineken-launches-savanna-premium-cider-in-500ml-cans/

Monster Energy original (201 kJ / 47 kcal, 12 g carbs per 100 ml), Coca-Cola HBC label:
- https://hr.coca-colahellenic.com/en/our-24-7-portfolio/brands-a-z/monster-energy/monster-energy-original
- cross-check, FatSecret SA 248 kcal / 500 ml: https://mobile.fatsecret.co.za/calories-nutrition/monster/energy-drink-(can)/1-can

FatSecret South Africa (SA products):
- Red Bull 250 ml can 114 kcal, 27 g carbs: https://www.fatsecret.co.za/calories-nutrition/red-bull/energy-drink-(can)/1-can
- Play / Power Play original: https://www.fatsecret.co.za/calories-nutrition/power-play/original/100ml
- Energade: https://www.fatsecret.co.za/calories-nutrition/energade/naartjie-flavoured-drink/100ml
  and https://www.fatsecret.co.za/calories-nutrition/energade/sports-drink/1-litre
- Liqui-Fruit 100% juice, 250 ml = 135 kcal: https://www.fatsecret.co.za/calories-nutrition/liqui/100-fruit-juice/1-cup
- Cappuccino (generic, 240 ml = 74 kcal): https://www.fatsecret.co.za/calories-nutrition/generic/cappuccino
- Vetkoek (generic, 1 piece 280 kcal; 100 g 350 kcal -> piece is 80 g): https://www.fatsecret.co.za/calories-nutrition/generic/vetkoek
- Bunny chow (generic, 285 g serving): https://www.fatsecret.co.za/calories-nutrition/generic/bunny-chow
- Checkers beef samoosas: https://www.fatsecret.co.za/calories-nutrition/checkers/beef-samoosas/100g
- Woolworths chicken samoosas (100 g; 16 g each): https://www.fatsecret.co.za/calories-nutrition/search?q=samoosa
- Pieman's sausage roll 160 g: https://www.fatsecret.co.za/calories-nutrition/search?q=sausage+roll
- Enterprise cheese grillers (1 sausage 62.5 g): https://www.fatsecret.co.za/calories-nutrition/enterprise/cheese-grillers/1-sausage
- Eskort Russian: https://www.fatsecret.co.za/calories-nutrition/eskort/russian/100g
- Toasted cheese (generic grilled cheese; 1 sandwich 291 kcal, 100 g 350 kcal): https://www.fatsecret.co.za/calories-nutrition/generic/grilled-cheese-sandwich
- Chicken feet (generic/USDA boiled; 1 foot 73 kcal, 100 g 215 kcal): https://mobile.fatsecret.com/calories-nutrition/generic/chicken-feet
  and https://www.eatthismuch.com/calories/chicken-feet-603
- Woolworths Indian chicken curry with rice 300 g: https://www.fatsecret.co.za/calories-nutrition/woolworths/indian-chicken-curry-with-rice/1-serving
- Chicken curry (generic): https://www.fatsecret.co.za/calories-nutrition/generic/chicken-curry
- Spaghetti bolognese (generic, 249 g serving): https://www.fatsecret.co.za/calories-nutrition/generic/spaghetti-bolognese
- Beef stew with potatoes and vegetables (generic, 252 g serving): https://www.fatsecret.co.za/calories-nutrition/generic/beef-stew-with-potatoes-and-vegetables-in-gravy
- Mashed potato (generic, 1 cup 210 g): https://www.fatsecret.co.za/calories-nutrition/generic/mashed-potato
- Woolworths tangy mayo coleslaw: https://www.fatsecret.co.za/calories-nutrition/woolworths/cabbage-carrot-tangy-mayo-coleslaw/100g
- Pick n Pay potato salad: https://www.fatsecret.co.za/calories-nutrition/pick-n-pay/potato-salad/100g
- Pick n Pay beef frikkadels: https://www.fatsecret.co.za/calories-nutrition/pick-n-pay/beef-frikkadels/100g
  (frikkadel size from Woolworths 50 g frikkadel: https://www.fatsecret.co.za/calories-nutrition/woolworths/free-range-beef-frikkadels/1-frikkadel)
- Woolworths peri-peri chicken livers: https://www.fatsecret.co.za/calories-nutrition/woolworths/peri-peri-chicken-livers/100g
- Macaroni cheese (generic, 240 g serving): https://www.fatsecret.co.za/calories-nutrition/generic/macaroni-cheese
- Woolworths battered hake: https://www.fatsecret.co.za/calories-nutrition/woolworths/battered-hake/100g
- Fishaways fried fish, 1 fillet: https://www.fatsecret.co.za/calories-nutrition/fishaways/fried-or-battered-fish/1-fillet
- I&J Flame Grills hake fillet: https://www.fatsecret.co.za/calories-nutrition/i-j/flame-grills-hake-fillet/100g
- Tripe, cooked, simmered (USDA): https://mobile.fatsecret.com/calories-nutrition/usda/beef-tripe-(cooked-simmered)

Open Food Facts:
- Ceres 100% juice (185 kJ / 44 kcal, 10 g carbs per 100 ml): https://world.openfoodfacts.org/product/6001240100141
- Oros orange squash, undiluted (62 kcal, 16 g sugar per 100 ml): https://za-af.openfoodfacts.org/product/6001324011172/orange-squash-oros
  Dilution "1 part squash to 3 or 4 parts water": https://www.checkers.co.za/product/5d3af63ff434cf8420737f74
- BOS ice rooibos (85 kJ / 20 kcal, 5 g carbs per 100 ml): https://world.openfoodfacts.org/product/6009880030149/bos-ice-rooibos-peach
  and https://world.openfoodfacts.org/product/6009880500796

USDA SR Legacy (wine):
- Red table wine, 85 kcal / 100 g, 2.6 g carbs: https://getfoodfacts.com/food/alcoholic-beverage-wine-table-red-173190
- White table wine, 82 kcal / 100 g, 2.6 g carbs: https://www.recipal.com/ingredients/4159-nutrition-facts-calories-protein-carbs-fat-alcoholic-beverage-wine-table-white

Per-100 g macros for generic FatSecret dishes were scaled from the full-macro serving on each page
(e.g. spaghetti bolognese 364 kcal / 249 g). No numbers were made up.
*/
```

## Everyday meals: burgers, sandwiches, sushi, takeaway dishes, plates

```
// SOURCES (fatsecret generic entries are mostly USDA FNDDS foods; weights derived as kcal per serving / kcal per 100 g)
// av-burger-beef: https://www.fatsecret.co.za/calories-nutrition/generic/large-hamburger-with-condiments-and-vegetables (512 kcal; 235 kcal/100 g -> 218 g)
// av-burger-beef-small: https://www.fatsecret.co.za/calories-nutrition/generic/hamburger-on-bun (270 kcal; 290 kcal/100 g -> 93 g)
// av-cheeseburger: https://www.fatsecret.co.nz/calories-nutrition/generic/cheeseburger-(large-single-patty-with-condiments-and-vegetables) (563 kcal; 257/100 g -> 219 g)
// av-cheeseburger-small: https://www.fatsecret.co.za/calories-nutrition/generic/cheeseburger-(single-patty-with-condiments) (295 kcal; 261/100 g -> 113 g)
// av-burger-double: https://www.fatsecret.co.za/calories-nutrition/generic/double-cheeseburger-on-bun (472 kcal; 299/100 g -> 158 g)
// av-burger-chicken-crumbed: https://www.fatsecret.co.za/calories-nutrition/generic/chicken-fillet-sandwich (515 kcal; 283/100 g -> 182 g)
// av-burger-chicken-grilled: https://www.fatsecret.co.za/calories-nutrition/generic/grilled-chicken-fillet-sandwich-with-cheese-lettuce-tomato-and-spread-on-bun (524 kcal; 229/100 g -> 229 g)
// av-burger-veggie: https://www.fatsecret.co.nz/calories-nutrition/generic/meatless-soyburger-with-cheese-on-bun (1 serving 140 g)
// av-hotdog: https://www.fatsecret.com.sg/calories-nutrition/generic/frankfurter-or-hot-dog-with-catsup-and-or-mustard-on-bun (1 serving 105 g)
// av-chip-roll: https://www.fatsecret.co.za/calories-nutrition/generic/chip-sandwich (1 serving 120 g)
// av-sandwich-chicken-mayo: https://www.fatsecret.co.za/calories-nutrition/generic/chicken-salad-or-chicken-spread-sandwich (1 serving 141 g)
// av-sandwich-ham-cheese: https://www.fatsecret.co.za/calories-nutrition/generic/ham-and-cheese-sandwich (352 kcal; 241/100 g -> 146 g)
// av-sandwich-egg-mayo: https://www.fatsecret.co.za/calories-nutrition/generic/egg-salad-sandwich (1 serving 159 g)
// av-toasted-chicken-mayo: Wimpy SA chicken mayonnaise toasted sandwich, 1 sandwich 200 g: https://www.fatsecret.co.za/calories-nutrition/wimpy/chicken-mayonnaise-toasted-sandwich/1-sandwich
// av-wrap-chicken: https://www.fatsecret.co.za/calories-nutrition/generic/chicken-wrap (1 serving 130 g)
// av-shawarma-chicken: https://www.fatsecret.co.za/calories-nutrition/generic/chicken-shawarma (1 serving 390 g; same values as generic chicken-gyro-sandwich)
// av-gyro-beef-lamb: https://www.fatsecret.co.nz/calories-nutrition/generic/gyro-sandwich-(pita-bread-beef-lamb-onion-condiments-with-tomato-and-spread) (1 serving 390 g)
// av-sub-cold-meat: https://www.fatsecret.co.za/calories-nutrition/generic/cold-cut-sandwich-submarine-with-lettuce-and-tomato (1 serving 254 g). No generic chicken-sub entry found.
// av-sushi-salmon-nigiri: per 100 g from Norwegian Food Composition Table https://matvaretabellen.no/en/sushi-nigiri-salmon (143 kcal, 7.8 P, 16.8 C, 5 F); piece weight 28 g from https://www.fatsecret.co.za/calories-nutrition/generic/salmon-sushi (48 kcal/piece, 170 kcal/100 g)
// av-sushi-california: https://www.fatsecret.co.za/calories-nutrition/generic/california-rolls (33 kcal/piece; 126/100 g -> 26 g)
// av-sushi-salmon-maki: https://www.fatsecret.co.za/calories-nutrition/generic/salmon-maki (28 kcal/piece; 184/100 g -> 15 g)
// av-sashimi-salmon: https://www.fatsecret.co.za/calories-nutrition/generic/salmon-sashimi (41 kcal/piece; 146/100 g -> 28 g)
// av-sushi-salmon-rose: Pick n Pay salmon roses per rose https://www.fatsecret.co.za/calories-nutrition/pick-n-pay/salmon-roses/1-rose ; weight 33 g derived from average kcal density of
//   Ocean Basket (182 kcal/100 g) https://www.fatsecret.co.za/calories-nutrition/ocean-basket/salmon-roses/1-serving and Woolworths (220 kcal/100 g) https://www.fatsecret.co.za/calories-nutrition/woolworths/salmon-roses/100g
// av-sushi-prawn-tempura: Ocean Basket rock shrimp tempura roll per 100 g https://www.fatsecret.co.za/calories-nutrition/ocean-basket/rock-shrimp-tempura-roll/100g
// av-fried-rice-chicken: https://www.fatsecret.co.za/calories-nutrition/generic/chicken-fried-rice (1 cup 329 kcal; 166/100 g -> 198 g)
// av-chow-mein-chicken: https://www.fatsecret.com.sg/calories-nutrition/generic/chicken-or-turkey-chow-mein-or-chop-suey-with-noodles (1 serving 220 g)
// av-noodle-stir-fry-chicken: https://www.fatsecret.co.za/calories-nutrition/generic/chicken-lo-mein (1 serving 200 g)
// av-sweet-sour-chicken: https://www.fatsecret.co.za/calories-nutrition/generic/sweet-and-sour-chicken-or-turkey (1 cup 224 kcal; 89/100 g -> 252 g)
// av-spring-roll: https://www.fatsecret.co.za/calories-nutrition/generic/egg-roll (1 serving 90 g)
// av-butter-chicken-rice: Woolworths SA butter chicken ready meal 350 g https://www.fatsecret.co.za/calories-nutrition/woolworths/butter-chicken/1-serving (48 g carbs, so includes rice)
// av-curry-rice-beef: built from 177 g beef curry https://www.fatsecret.co.za/calories-nutrition/generic/beef-curry (cup 434 kcal, 184/100 g -> 236 g cup)
//   + 160 g cooked white rice (app's "rice" entry: 130 kcal, 2.7 P, 28 C, 0.3 F per 100 g)
// av-burrito-chicken: https://www.fatsecret.co.za/calories-nutrition/generic/burrito-with-chicken-beans-and-cheese (1 medium 238 g)
// av-taco-beef: https://www.fatsecret.co.za/calories-nutrition/generic/soft-taco-with-beef-cheese-and-lettuce (1 serving 92 g)
// av-quesadilla-chicken: https://www.fatsecret.co.za/calories-nutrition/generic/quesadilla-with-poultry-and-cheese (563 kcal; 306/100 g -> 184 g)
// av-nachos-cheese: https://www.fatsecret.co.za/calories-nutrition/generic/nachos-with-cheese (346 kcal; 306/100 g -> 113 g)
// Plates built from the app's existing generic entries:
// av-steak-chips: 200 g "steak" (190 kcal, 29 P, 0 C, 8 F /100 g) + 150 g "slap-chips" (312, 3.4, 41.4, 14.7 /100 g)
// av-chicken-chips: 150 g "rotisserie" meat (237, 27.1, 0, 13.5 /100 g) + 150 g "slap-chips"
// av-fish-chips: 150 g "sa-hake-battered" (182, 12.6, 10, 9.8 /100 g) + 150 g "slap-chips"
// av-roast-chicken-dinner: 150 g "rotisserie" + 136 g roast potato with fat https://mobile.fatsecret.co.za/calories-nutrition/generic/roasted-potato-(fat-added-in-cooking) (1 medium 136 g: 203 kcal, 3.16 P, 27.28 C, 9.52 F)
//   + 100 g "butternut" (40, 0.9, 10.5, 0.1)
// av-spaghetti-carbonara: Woolworths SA spaghetti carbonara 300 g https://www.fatsecret.co.za/calories-nutrition/woolworths/spaghetti-carbonara/1-serving
// av-lasagne: https://www.fatsecret.co.za/calories-nutrition/generic/lasagna-with-meat (1 piece 206 g)
// av-cottage-pie: https://www.fatsecret.co.za/calories-nutrition/generic/shepherds-pie-with-beef (1 cup 243 g)
// av-schnitzel-chicken: https://www.fatsecret.com.sg/calories-nutrition/generic/baked-or-fried-coated-chicken-breast-skinless-(coating-eaten) (100 g: 234 kcal, 25 P, 9.69 C, 9.88 F; serving 108 g)
// av-salad-chicken-caesar: https://www.fatsecret.co.za/calories-nutrition/generic/caesar-salad-with-chicken (188 kcal/100 g; 1 serving 150 g; macros scaled from 1 cup = 108.5 g)
// av-salad-greek: https://www.fatsecret.co.za/calories-nutrition/generic/greek-salad (1 serving 105 g)
// av-salad-chicken: https://www.fatsecret.co.nz/calories-nutrition/generic/chicken-or-turkey-garden-salad-(chicken-and-or-turkey-tomato-and-or-carrots-other-vegetables)
//   (1 fast food order = 161 kcal at 64 kcal/100 g -> 252 g; macros scaled from 1 cup = 90 g)
// Skipped (no trustworthy source found): boerewors roll, ramen bowl, chicken sub (used cold-meat sub), beef wrap, sushi platter by weight.
```

## Everyday meals: breakfast, bakery, desserts, café drinks, soups, braai

```
/* Sources (fatsecret "generic" entries are mostly USDA FNDDS/SR values; checked 2026-10-10)
 * Breakfast plate, full: composite of fatsecret generic fried egg (https://www.fatsecret.co.za/calories-nutrition/generic/fried-egg),
 *   bacon rasher below, app boerewors (75 g), app white bread (35 g) and butter (5 g).
 * Omelette plain:   https://www.fatsecret.co.za/calories-nutrition/generic/egg-omelette-or-scrambled-egg
 * Omelette cheese:  https://www.fatsecret.co.za/calories-nutrition/generic/egg-omelette-or-scrambled-egg-with-cheese
 * Omelette ham & cheese: https://www.fatsecret.com.au/calories-nutrition/generic/egg-omelette-or-scrambled-egg-with-cheese-and-ham-or-bacon
 * Scrambled eggs:   https://www.fatsecret.co.za/calories-nutrition/generic/scrambled-egg
 * Bacon rasher: average of Eskort back bacon https://www.fatsecret.co.za/calories-nutrition/eskort/back-bacon/100g and SPAR bacon rashers
 *   https://www.fatsecret.co.za/calories-nutrition/spar/breakfast-fry-bacon-rashers/100g ; rasher weight 30 g from
 *   https://www.fatsecret.co.za/calories-nutrition/eskort/round-cut-bacon/1-rasher
 * Flapjack plain:   https://www.fatsecret.co.za/calories-nutrition/generic/plain-pancakes
 * Pancakes butter & syrup: https://www.fatsecret.co.za/calories-nutrition/generic/pancakes-with-butter-and-syrup
 * Pancake cinnamon sugar: https://www.fatsecret.co.za/calories-nutrition/generic/plain-crepe (18 cm, 50 g) + 2 tsp sugar (app value)
 * French toast:     https://www.fatsecret.co.za/calories-nutrition/generic/plain-french-toast
 * Waffle:           https://www.fatsecret.co.za/calories-nutrition/generic/plain-waffle
 * Granola & yoghurt: USDA SR Legacy 170355 "Yogurt parfait, lowfat, with fruit and granola" https://getfoodfacts.com/food/yogurt-parfait-lowfat-with-fruit-and-granola-170355
 * Avocado toast:    https://www.fatsecret.co.za/calories-nutrition/generic/avocado-toast
 * Breakfast wrap:   https://www.fatsecret.com.au/calories-nutrition/generic/breakfast-burrito
 * Bacon egg cheese muffin: https://www.fatsecret.co.za/calories-nutrition/generic/egg-cheese-and-bacon-on-english-muffin
 * Croissant bacon egg cheese: https://www.fatsecret.co.nz/calories-nutrition/generic/croissant-with-egg-cheese-and-bacon
 * Croissant plain:  https://www.fatsecret.co.za/calories-nutrition/generic/croissant
 * Croissant cheese: https://www.fatsecret.co.za/calories-nutrition/generic/cheese-croissant
 * Muffin bran:      https://www.fatsecret.co.za/calories-nutrition/generic/wheat-bran-muffin
 * Muffin chocolate: https://www.fatsecret.co.za/calories-nutrition/generic/chocolate-muffin
 * Scone jam cream:  https://www.fatsecret.co.za/calories-nutrition/generic/scone + app jam (1 tbsp) +
 *   https://www.fatsecret.co.za/calories-nutrition/generic/whipping-cream (1 tbsp, whipped)
 * Cinnamon bun:     https://www.fatsecret.co.za/calories-nutrition/generic/frosted-sweet-cinnamon-bun
 * Bagel cream cheese: https://www.fatsecret.co.za/calories-nutrition/generic/bagel-with-cream-cheese
 * Roll white:       https://www.fatsecret.co.za/calories-nutrition/generic/burger-bun ; small roll weight from
 *   https://www.fatsecret.co.za/calories-nutrition/generic/hamburger-or-hotdog-rolls
 * Garlic bread:     https://www.fatsecret.co.za/calories-nutrition/generic/garlic-bread
 * Garlic roll (braai): average of https://www.fatsecret.co.za/calories-nutrition/spar/garlic-braai-rolls/1-serving and
 *   https://www.fatsecret.co.za/calories-nutrition/pnp/garlic-onion-braai-rolls/1-roll
 * Cheese roll:      https://www.fatsecret.co.za/calories-nutrition/generic/cheese-roll
 * Chocolate cake:   https://www.fatsecret.co.za/calories-nutrition/generic/chocolate-cake-(with-chocolate-icing)
 * Cheesecake:       https://www.fatsecret.co.za/calories-nutrition/generic/cheesecake
 * Carrot cake:      https://www.fatsecret.co.za/calories-nutrition/generic/carrot-cake-with-icing
 * Malva & custard: average of https://www.fatsecret.co.za/calories-nutrition/woolworths/malva-pudding/100g and
 *   https://www.fatsecret.co.za/calories-nutrition/the-menu/malva-pudding/100g , plus app custard (100 g)
 * Melktert: average of https://www.fatsecret.co.za/calories-nutrition/generic/melktert and
 *   https://www.fatsecret.co.za/calories-nutrition/woolworths/milk-tart/100g ; 90 g slice from the generic entry
 * Brownie:          https://www.fatsecret.co.za/calories-nutrition/generic/brownie
 * Apple pie:        https://www.fatsecret.co.za/calories-nutrition/generic/apple-pie-(two-crust)
 * Sundae:           https://www.fatsecret.com.sg/calories-nutrition/generic/ice-cream-sundae-(with-whipped-cream)
 * Latte, full cream: Norwegian Food Composition Table, "Caffe Latte, single, with whole milk" https://www.matvaretabellen.no/en/caffe-latte-single-with-whole-milk
 * Flat white: same per-100 g values as the whole-milk latte above, scaled to a 180 ml cup
 *   (fatsecret generic flat white https://www.fatsecret.co.za/calories-nutrition/generic/flat-white is reduced-fat milk, 58 kcal)
 * Hot chocolate:    https://www.fatsecret.co.za/calories-nutrition/generic/hot-chocolate-cocoa-(made-with-whole-milk)
 * Iced coffee/frappe: https://www.fatsecret.co.nz/calories-nutrition/generic/frappuccino (per 100 ml)
 * Milkshake:        https://www.fatsecret.com.sg/calories-nutrition/generic/chocolate-homemade-or-fountain-type-milk-shake
 * Smoothie fruit:   https://www.matvaretabellen.no/en/smoothie-yogurt-juice-banana-and-berries
 * Smoothie protein: https://www.fatsecret.co.za/calories-nutrition/generic/protein-smoothie
 * Tea / rooibos with milk & sugar: https://www.fatsecret.co.za/calories-nutrition/generic/tea-with-milk-and-sugar ;
 *   plain rooibos ~1 kcal per cup https://www.fatsecret.co.za/calories-nutrition/generic/rooibos
 * Orange juice fresh: https://www.matvaretabellen.no/en/orange-juice-freshly-squeezed
 * Soup butternut:   https://www.fatsecret.co.za/calories-nutrition/generic/butternut-soup
 * Soup chicken:     https://www.fatsecret.co.za/calories-nutrition/generic/chicken-noodle-soup
 * Soup split pea:   https://www.fatsecret.co.za/calories-nutrition/generic/split-pea-soup
 * Soup lentil:      https://www.fatsecret.co.za/calories-nutrition/generic/lentil-soup
 * Chicken braaied:  https://www.fatsecret.co.za/calories-nutrition/generic/chicken-or-turkey-with-barbecue-sauce-(skin-eaten)
 * Sosatie lamb: average of https://www.fatsecret.co.za/calories-nutrition/woolworths/6-lamb-sosaties/100g and
 *   https://mobile.fatsecret.co.za/calories-nutrition/woolworths/lamb-kebabs/100g
 * Kebab beef:       https://www.fatsecret.co.za/calories-nutrition/generic/beef-shish-kabob-with-vegetables
 * Braaibroodjie: composite of app white bread (70 g), cheddar (30 g), butter (10 g) + USDA SR raw tomato (30 g) and onion (15 g)
 * Sous: average of https://www.fatsecret.co.za/calories-nutrition/woolworths/braai-relish-tomato-onion-with-herb/100g and
 *   https://www.fatsecret.co.za/calories-nutrition/miami/tomato-onion-mix/100g
 * Garden salad: https://mobile.fatsecret.co.za/calories-nutrition/generic/lettuce-salad-with-assorted-vegetables-(including-tomatoes-and-or-carrots)
 *   (side salad, 153 g) + 2 tbsp https://www.fatsecret.co.za/calories-nutrition/generic/italian-salad-dressing
 * Roast potatoes:   https://www.fatsecret.co.za/calories-nutrition/generic/roasted-potato-(fat-added-in-cooking)
 * Onion rings:      https://www.fatsecret.co.za/calories-nutrition/generic/onion-rings-(breaded-and-fried)
 * Cheese & crackers: app cheddar (30 g) + https://www.fatsecret.com.sg/calories-nutrition/generic/crackers (6 round crackers)
 * Fruit salad:      https://www.fatsecret.co.za/calories-nutrition/generic/fruit-salad
 * Hummus & pita: https://www.fatsecret.co.za/calories-nutrition/generic/white-pita-bread (1 large) + 60 g generic hummus
 *   https://www.fatsecret.co.nz/calories-nutrition/food/hummus
 */
```

## Staples, sauces & spreads, dairy, protein extras, veg and fruit

```
// Staples, sauces & spreads, dairy, protein extras, veg, fruit (s2-)
// Bread & starch
// Sauces & spreads
// Dairy & shakes
// Meat & eggs
// Veg
// Fruit
/*
SOURCES
SA brand labels (fatsecret.co.za entries, per 100 g/ml unless stated):
- Tomato sauce (All Gold): https://www.fatsecret.co.za/calories-nutrition/all-gold/tomato-sauce/100g
- Chutney (Mrs H.S. Ball's): https://www.fatsecret.co.za/calories-nutrition/mrs-h-s-balls/original-recipe-chutney/100g
- Sweet chilli (Mrs H.S. Ball's): https://www.fatsecret.co.za/calories-nutrition/mrs-h-s-balls/sweet-chilli-sauce/100g
- Nando's medium peri-peri (UK bottle label): https://mcgrocer.com/products/nandos-medium-peri-peri-sauce-1l-1
  (SA hot: https://fatsecret.co.za/calories-nutrition/nandos/peri-peri-sauce-hot/100g)
- BBQ (All Gold): https://www.fatsecret.co.za/calories-nutrition/all-gold/barbeque-sauce/100g
- Hellmann's lite mayo: https://www.fatsecret.co.za/calories-nutrition/hellmanns/lite-mayonnaise/1-tbsp
- C&B tangy mayo lite: https://www.fatsecret.co.za/calories-nutrition/crosse-blackwell/tangy-mayonnaise-lite/100g
- Ina Paarman roast beef gravy: https://www.fatsecret.co.za/calories-nutrition/ina-paarmans/roast-beef-gravy/100ml
- Woolworths cheese sauce: https://www.fatsecret.co.za/calories-nutrition/woolworths/cheese-sauce/100g
- Woolworths mushroom sauce: https://www.fatsecret.co.za/calories-nutrition/woolworths/mushroom-sauce/100ml
- Woolworths pepper sauce: https://www.fatsecret.co.za/calories-nutrition/woolworths/pepper-sauce/100ml
- Ina Paarman French dressing: https://www.fatsecret.co.za/calories-nutrition/ina-paarmans/french-dressing/100ml
- Ina Paarman reduced-oil Greek dressing: https://www.fatsecret.co.za/calories-nutrition/ina-paarmans/reduced-oil-greek-dressing/100ml
- Nutella (15 g tbsp): https://www.fatsecret.com.au/calories-nutrition/nutella/hazelnut-spread-with-cocoa/1-tbsp
- Marmite (SA/FR, Open Food Facts): https://world.openfoodfacts.org/product/60050168/yeast-extract-marmite
- Bovril (8 g serving): https://www.fatsecret.co.za/calories-nutrition/bovril/beefy/1-serving
- Lancewood cream cheese: https://www.fatsecret.co.za/calories-nutrition/lancewood/medium-fat-cream-cheese/100g
- Woolworths white tortilla wrap (44 g): https://www.fatsecret.co.za/calories-nutrition/woolworths/white-tortilla-wraps/1-wrap
- Sasko Low GI whole wheat (55 g slice): https://www.fatsecret.co.za/calories-nutrition/sasko/low-gi-whole-wheat-brown-bread/1-slice
- Sasko Low GI seeded (55 g slice): https://www.fatsecret.co.za/calories-nutrition/sasko/low-gi-seeded-whole-wheat-brown-bread/1-slice
- Tastic parboiled (dry): https://www.fatsecret.co.za/calories-nutrition/tastic/long-grain-parboiled-rice/100g
- Tastic basmati (dry): https://www.fatsecret.co.za/calories-nutrition/tastic/basmati-rice/100g
- Maggi 2-minute chicken (68 g): https://www.fatsecret.co.za/calories-nutrition/maggi/2-minute-noodles-chicken-flavour/1-serving
  (cheese 73 g pack: https://mobile.fatsecret.co.za/calories-nutrition/maggi/2-minute-noodles-cheese-flavour/1-packet)
- Provita (4 biscuits 23 g): https://www.fatsecret.co.za/calories-nutrition/bakers/provita/4-biscuits
- Salticrax: https://www.fatsecret.co.za/calories-nutrition/bakers/salticrax/100g
- Clover cream: https://www.fatsecret.co.za/calories-nutrition/clover/cream/100ml
- Clover sour cream: https://www.fatsecret.co.za/calories-nutrition/clover/sour-cream/100ml
- Clover feta: https://www.fatsecret.co.za/calories-nutrition/clover/feta-plain/100g
- Lancewood mozzarella: https://www.fatsecret.co.za/calories-nutrition/lancewood/medium-fat-mozzarella/100g
- Lancewood gouda: https://www.fatsecret.co.za/calories-nutrition/lancewood/gouda-cheese/100g
- Clover Authentikos Greek yoghurt: https://www.fatsecret.co.za/calories-nutrition/clover/authentikos-greek-yogurt/100g
- Clover fat free milk: https://www.fatsecret.co.za/calories-nutrition/clover/fat-free-milk/100ml
- Woolworths organic oat drink: https://www.fatsecret.co.za/calories-nutrition/woolworths/organic-oat-drink/100ml
- Woolworths almond milk unsweetened: https://www.fatsecret.co.za/calories-nutrition/woolworths/almond-milk-unsweetened/100ml
- Nutriday: https://www.fatsecret.co.za/calories-nutrition/nutriday/yogurt/100g
- Clover Yogi Sip (300 ml = 261 kcal): https://www.fatsecret.co.za/calories-nutrition/clover/yogi-sip/1-serving
- Nestle condensed milk: https://www.fatsecret.co.za/calories-nutrition/nestle/full-cream-sweetened-condensed-milk/100g
- Lucky Star tuna in water: https://www.fatsecret.co.za/calories-nutrition/lucky-star/light-meat-tuna-chunks-in-water/100g
- Lucky Star tuna in oil: https://www.fatsecret.co.za/calories-nutrition/lucky-star/light-meat-tuna-chunks-in-vegetable-oil/100g
- Lucky Star pilchards (Open Food Facts label): https://za-af.openfoodfacts.org/product/6001115001535/pilchards-in-tomato-sauce-lucky-star
  (fatsecret Lucky Star/Koo agree: 105 kcal, 17 g P, 5.1 g F; label kcal is low for those macros)
- Enterprise sliced sandwich ham: https://www.fatsecret.co.za/calories-nutrition/enterprise/sliced-sandwich-ham/100g
  (slice weight 28 g from USDA ham slice: https://www.uhhospitals.org/health-information/health-and-wellness-library/article/nutritionfacts-v1/ham-sliced-regular-approximately-11-fat-1-slice)
- Rainbow crumbed chicken strips: https://www.fatsecret.co.za/calories-nutrition/rainbow/crumbed-chicken-strips/100g
- Woolworths beef stir fry: https://www.fatsecret.co.za/calories-nutrition/woolworths/beef-stir-fry/100g
- Eskort pork bangers: https://www.fatsecret.co.za/calories-nutrition/eskort/pork-bangers/100g
- Woolworths red kidney beans in brine: https://www.fatsecret.co.za/calories-nutrition/woolworths/red-kidney-beans-in-brine/100g
  (Koo: https://www.fatsecret.co.za/calories-nutrition/koo/red-kidney-beans/100g)
- Imana soya mince (200 g prepared serving): https://www.fatsecret.co.za/calories-nutrition/imana/soya-mince/1-serving

Generic (USDA FoodData Central via mirrors):
- Brown rice cooked (FDC 169704): https://getfoodfacts.com/nutrition/brown-rice
- Basmati cooked (fatsecret generic): https://www.fatsecret.co.za/calories-nutrition/generic/basmati-rice-(cooked)
- Parboiled rice cooked (FDC 169708): https://getfoodfacts.com/food/rice-white-long-grain-parboiled-enriched-cooked-169708
- Pasta dry (FDC 169736): https://getfoodfacts.com/food/pasta-dry-enriched-169736
- Couscous cooked (FDC 169700): https://getfoodfacts.com/food/couscous-cooked-169700
- Quinoa cooked (FDC 168917): https://getfoodfacts.com/food/quinoa-cooked-168917
- Pita white (FDC 174915): https://getfoodfacts.com/nutrition/pita-bread
- Rice cakes (FDC 170250): https://getfoodfacts.com/food/snacks-rice-cakes-brown-rice-plain-unsalted-170250
- Mustard yellow: https://triagemethod.com/tools/human-nutrition-explorer/food/mustard-prepared-yellow.html
- Soy sauce (1 tbsp): https://www.uhhospitals.org/health-information/health-and-wellness-library/nutrition-facts/article/nutritionfacts-v1/soy-sauce-made-from-soy-and-wheat-shoyu-1-tbsp
- Hot sauce: https://www.recipal.com/ingredients/1298-nutrition-facts-calories-protein-carbs-fat-sauce-ready-to-serve-pepper-or-hot
- Parmesan grated: https://triagemethod.com/tools/human-nutrition-explorer/food/cheese-parmesan-grated.html
- Sardines in oil: https://triagemethod.com/tools/human-nutrition-explorer/food/fish-sardine-atlantic-canned-in-oil-drained-solids-with-bone.html
- Chicken wing roasted: https://www.recipal.com/ingredients/922-nutrition-facts-calories-protein-carbs-fat-chicken-broilers-or-fryers-wing-meat-and-skin-cooked-roasted
- Lentils boiled: https://triagemethod.com/tools/human-nutrition-explorer/food/lentils-mature-seeds-cooked-boiled-without-salt.html
- Chickpeas canned drained: https://triagemethod.com/tools/human-nutrition-explorer/food/chickpeas-mature-seeds-canned-drained-solids.html
- Tofu firm: https://www.recipal.com/ingredients/4730-nutrition-facts-calories-protein-carbs-fat-tofu-firm-prepared-with-calcium-sulfate-and-magnesium-chloride-nigari
- Tomato (FDC 170457): https://getfoodfacts.com/food/tomatoes-red-ripe-raw-year-round-average-170457
- Cucumber (FDC 168409): https://getfoodfacts.com/food/cucumber-with-peel-raw-168409
- Lettuce iceberg: https://www.recipal.com/ingredients/3041-nutrition-facts-calories-protein-carbs-fat-lettuce-iceberg-includes-crisphead-types-raw
- Onion (FDC 170000), carrot (FDC 170393): https://getfoodfacts.com/nutrition/onions , https://getfoodfacts.com/nutrition/carrots
- Broccoli boiled (FDC 169967): https://getfoodfacts.com/food/broccoli-cooked-boiled-drained-without-salt-169967
- Cauliflower boiled (FDC 170397): https://getfoodfacts.com/food/cauliflower-cooked-boiled-drained-without-salt-170397
- Spinach boiled (FDC 168463): https://getfoodfacts.com/food/spinach-cooked-boiled-drained-without-salt-168463
- Green beans frozen cooked (FDC 2709853): https://getfoodfacts.com/food/green-beans-frozen-cooked-no-added-fat-2709853
- Peas frozen boiled (per cup 160 g): https://www.bodbot.com/Nutrition/Foods/11313/peas-green-frozen-cooked-boiled-drained-without-salt
- Mixed veg frozen boiled (FDC 170472): https://getfoodfacts.com/food/vegetables-mixed-frozen-cooked-boiled-drained-without-salt-170472
- Mushrooms raw (per cup 70 g): https://www.bodbot.com/Nutrition/Foods/11260/mushrooms-white-raw
- Sweetcorn canned drained: https://www.recipal.com/ingredients/2976-nutrition-facts-calories-protein-carbs-fat-corn-sweet-yellow-canned-whole-kernel-drained-solids
- Green pepper (per medium 119 g): https://www.uhhospitals.org/health-information/health-and-wellness-library/article/nutritionfacts-v1/peppers-sweet-green-raw-1-medium-approx-2-34-long-2-12-dia
- Cabbage raw (FDC 169975): https://getfoodfacts.com/food/cabbage-raw-169975
- Beetroot pickled (FDC 170480): https://getfoodfacts.com/food/beets-pickled-canned-solids-and-liquids-170480
- Pear (FDC 169118): https://getfoodfacts.com/food/pears-raw-169118
- Watermelon (FDC 167765): https://getfoodfacts.com/food/watermelon-raw-167765
- Strawberries (FDC 167762): https://getfoodfacts.com/food/strawberries-raw-167762
- Pineapple, peach, plum, litchi, guava, kiwi, blueberries (USDA values + portion weights):
  https://triagemethod.com/tools/human-nutrition-explorer/food/pineapple-raw-all-varieties.html
  https://triagemethod.com/tools/human-nutrition-explorer/food/peaches-yellow-raw.html
  https://triagemethod.com/tools/human-nutrition-explorer/food/plums-raw.html
  https://triagemethod.com/tools/human-nutrition-explorer/food/litchis-raw.html
  https://triagemethod.com/tools/human-nutrition-explorer/food/guavas-common-raw.html
  https://triagemethod.com/tools/human-nutrition-explorer/food/kiwifruit-green-raw.html
  https://triagemethod.com/tools/human-nutrition-explorer/food/blueberries-raw.html

CHECK NOTES (kcal vs 4P+4C+9F outside 15%):
- Veg (tomato, cucumber, lettuce, broccoli, cauliflower, spinach, green beans, mushrooms, sweetcorn,
  green pepper, cabbage) and watermelon run 15-30% under 4/4/9: USDA carbs include fibre and USDA uses
  lower specific energy factors for vegetables. Values kept as published.
- Hot sauce: tiny numbers, rounding (11 vs 12.8).
- Pilchards: label says 104 kcal but 17 g protein + 5.1 g fat implies ~130. Kept label values.
*/
```

## Spirits, mixed drinks, beer, wine, mixers, hot drinks and cereals

```
// Drinks & alcohol (round 2), plus a few breakfast/snack gaps

/*
SOURCES (checked 2026-10-17)

Spirits (no labels): generic per-ABV values. USDA SR Legacy "Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey)":
86 proof (43%) = 105 kcal per 1.5 fl oz jigger (44.4 ml) -> 237 kcal/100 ml; 80 proof (40%) = 97 kcal/jigger -> 219 kcal/100 ml.
Cross-check: 43 ml ethanol x 0.789 g/ml x 7 kcal/g = 237 kcal. FatSecret SA Klipdrift 1 shot 30 ml = 69 kcal (230/100 ml).
- https://www.fatsecret.co.za/calories-nutrition/klipdrift/brandy/1-shot
ABV checks on SA retailer pages:
- Klipdrift Premium 43%: https://www.woolworths.co.za/prod/WCellar/Spirits/Brandy-Cognac/Klipdrift-Premium-Brandy-750-ml/_/A-6001496010010
- Johnnie Walker Red (SA) 43%: https://www.shoprite.co.za/All-Departments/Drinks/Spirits-and-Liqueurs/Whisky/Johnnie-Walker-Red-Label-Blended-Scotch-Whisky-Bottles-12-x-750ml/p/10131182PK1
- Smirnoff 1818 40%: https://www.woolworths.co.za/prod/WCellar/Spirits/Vodka/Smirnoff-1818-Original-Vodka-750-ml/_/A-6001398119545
- Gordon's London Dry (SA) 43%: https://www.woolworths.co.za/prod/WCellar/Spirits/Gin/Gordons-London-Dry-Gin-750-ml/_/A-5000289937825
- Jose Cuervo Especial (SA) 43%: https://www.woolworths.co.za/prod/WCellar/Spirits/Tequila-Mezcal/Jose-Cuervo-Especial-Gold-Tequila-750-ml/_/A-7501035042148
- Red Heart rum 43%: https://www.spiritradar.com/rum-db/united-rum-merchants-red-heart-jamaica-special-reserve-43-percent-750ml
- Captain Morgan Original Spiced Gold (SA) 35%: https://www.woolworths.co.za/prod/_/A-6001398122095
Labelled liqueurs/spirits (per 100 ml):
- Amarula official: 1200 kJ / 287 kcal, P 2.1, carbs 21 (sugar 18.7), fat 10.9, 17%: https://amarula.com/?p=364
- Jägermeister 35%: 1043 kJ / 250 kcal, carbs 14.2 (sugar 13.2): https://www.kifli.hu/en-HU/102661-jagermeister
- Captain Morgan Spiced Gold 35%: 840 kJ / 201 kcal, carbs 1.3: https://www.kifli.hu/en-HU/26995-captain-morgan-spiced-gold-spicy-jamaican-rum-spirits-35
  and https://www.rewe.de/shop/p/captain-morgan-original-spiced-gold-1-5l/2121939

Mixed drinks built from parts: 25 ml brandy/gin at 43% (59 kcal) + 200 ml Coca-Cola Original (180 kJ, 11 g carbs per 100 ml,
https://www.coca-cola.com/za/en/brands/brand-coca-cola-drinks/product-coca-cola-original) or 200 ml Schweppes tonic (157 kJ, 9 g)
/ Schweppes tonic No Sugar (9 kJ) / Coke No Sugar (1 kJ).

SAB local brands page (per 100 ml): Castle Milk Stout 6% 260 kJ / 62 kcal, carbs 2; Lion Lager 4% 151 kJ / 36 kcal, carbs 2;
Flying Fish 4.5% 268 kJ / 64 kcal, carbs 8 (sugar 5.6); Brutal Fruit Spritzer 5% 251 kJ / 60 kcal, carbs 7.5:
- https://www.sab.co.za/our-brands/local-brands
Beer & cider labels:
- Heineken 176 kJ / 42 kcal, carbs 3.0, protein 0.4: https://www.nbplc.com/our-brands/heineken/
  (cross-check NZ label 176 kJ, carbs 3.2: https://www.woolworths.co.nz/shop/product-details/72923/heineken-original-beer-lager-330ml)
- Heineken 0.0 21 kcal, carbs 4.8: https://www.fatsecret.co.za/calories-nutrition/heineken/00/100ml?frc=True
- Corona Extra 4.5% 176 kJ / 42 kcal, carbs 4, P 0.3, F 0.1: https://www.rewe.de/shop/p/corona-extra-0-33l/3601890
- Stella Artois 4.6% 165 kJ / 39 kcal, carbs 3.2, P 0.4: https://www.ocado.com/products/stella-artois-belgian-lager-beer-bottles/603209011
- Windhoek Draught 33 kcal, carbs 3: https://www.fatsecret.co.za/calories-nutrition/windhoek/draught/100ml
  Windhoek Lager 112 kcal per 330 ml: https://www.fatsecret.co.za/calories-nutrition/windhoek/lager/1-bottle
- Castle Double Malt 45 kcal, carbs 3: https://www.fatsecret.co.za/calories-nutrition/castle/double-malt/100ml?frc=True
- Castle Free 23 kcal, carbs 6: https://www.fatsecret.co.za/calories-nutrition/castle/castle-free/100ml
  (0.0% ABV: https://www.woolworths.co.za/prod/_/A-6003326015868)
- Savanna Light 132 kcal, carbs 12 per 330 ml: https://www.fatsecret.co.za/calories-nutrition/savanna/light-cider/1-serving
- Savanna Alcohol Free 53 kcal, carbs 13.2 per 330 ml: https://www.fatsecret.co.za/calories-nutrition/savanna/alcohol-free/1-serving
- Hunter's Gold 207 kJ, sugar 5.6 g per 100 ml: https://www.nbplc.com/our-brands/hunters-cider/
  (4.5% ABV: https://www.checkers.co.za/All-Departments/Drinks/Beer-and-Cider/Cider/Hunter%27s-Gold-Cider-Can-440ml/p/10450253EA)
Wine:
- Rosé: USDA SR Legacy 171908 "Alcoholic beverages, wine, rose" 83 kcal, P 0.36, carbs 3.8 per 100 g:
  https://getfoodfacts.com/food/alcoholic-beverages-wine-rose-171908
- Sweet sherry: USDA SR Legacy 173176 "Wine, dessert, sweet" 160 kcal, P 0.2, carbs 13.7 per 100 g:
  https://getfoodfacts.com/food/alcoholic-beverage-wine-dessert-sweet-173176 ; OBS 17%:
  https://www.checkers.co.za/All-Departments/Drinks/Wine/Sherry-and-Port/Sweet-Sherry/Sedgwick%27s-Old-Brown-Sherry-Bottle-750ml/p/10131019EA
- Sparkling Brut generic 83 kcal/100 ml, carbs ~2.7: https://www.fatsecret.co.za/calories-nutrition/generic/sparkling-wine
- Tassenberg 13%, 322 kJ / 78 kcal, carbs 1.4: https://nambrew.com/alcohol-and-health/nutritional-information/
- Calculated (ABV x 0.789 x 7 + residual sugar x 4), ABV and sugar from Checkers/Shoprite pages:
  4th Street Natural Sweet Red 7.53%, 71 g/L: https://www.checkers.co.za/All-Departments/Drinks/Wine/Red-Wine/Red-Wine-Blends/4th-Street-Natural-Sweet-Red-Wine-Bottle-750ml/p/10363937EA
  Four Cousins Natural Sweet Rosé 7.5%, 78 g/L: https://www.checkers.co.za/All-Departments/Drinks/Wine/Ros%C3%A9-Wine/Sweet-Ros%C3%A9-Wine/Four-Cousins-Natural-Sweet-Ros%C3%A9-Bottle-1-5L/p/10168711EA
  Four Cousins Skinny Sweet Rosé 9%, 30 g/L: https://www.checkers.co.za/All-Departments/Drinks/Wine/Ros%C3%A9-Wine/Sweet-Ros%C3%A9-Wine/Four-Cousins-Skinny-Sweet-Ros%C3%A9-Wine-Bottles-12-x-750ml-/p/10258429PK1
  JC le Roux Le Domaine 8%, 75 g/L: https://www.checkers.co.za/All-Departments/Drinks/Wine/Champagne-and-Sparkling-Wine/White-Sparkling-Wine/J-C-Le-Roux-Le-Domaine-Premium-Sparkling-White-Wine-Bottles-6-x-750ml/p/10145891PK2
  JC le Roux Light Sauvignon Blanc can 5%, 6-6.4 g/L: https://www.shoprite.co.za/All-Departments/Drinks/Wine/Champagne-and-Sparkling-Wine/White-Sparkling-Wine/J-C-Le-Roux-Light-Sauvignon-Blanc-Sparkling-Wine-Can-250ml/p/10845652EA

Coca-Cola South Africa labels (per 100 ml, kJ / 4.184 = kcal):
- Schweppes: Tonic 157 kJ 9 g; Tonic No Sugar 9 kJ; Floral Pink Tonic 131 kJ 8 g; Soda Water 0; Lemonade 131 kJ 8 g;
  Ginger Ale 123 kJ 7 g; Dry Lemon 53 kJ 3.1 g: https://www.coca-cola.com/za/en/brands/schweppes
- Grapetiser red 221 kJ 13 g, white 227 kJ 13 g: https://www.coca-cola.com/za/en/brands/appletiser
- Sparletta Pine Nut 60 kJ sugar 3.6 g, Sparberry 63 kJ sugar 3.6 g: https://www.coca-cola.com/za/en/brands/sparletta
- Coca-Cola No Sugar Light Taste 1 kJ: https://www.coca-cola.com/za/en/brands/brand-coca-cola-drinks/product-coca-cola-no-sugar-light
Other soft/energy drinks:
- Pepsi 27 kcal 7 g; Pepsi Max 0 kcal: https://www.fatsecret.co.za/calories-nutrition/search?q=Pepsi
- Lipton Ice Tea 34 kcal 8.2 g (peach 170 kcal per 500 ml): https://www.fatsecret.co.za/calories-nutrition/search?q=Lipton
- Fuze Tea Lemon 43 kcal 11 g per 250 ml: https://www.fatsecret.co.za/calories-nutrition/search?q=Fuze+Tea
- Vitaminwater Power-C 114 kcal 27 g per 500 ml: https://www.fatsecret.co.za/calories-nutrition/search?q=Glaceau
- Score 27 kcal 6.1 g: https://www.fatsecret.co.za/calories-nutrition/score/energy-drink/100ml
- Dragon 16 kcal 4 g: https://www.fatsecret.co.za/calories-nutrition/dragon-energy/energy-drink/100ml
- Monster Ultra White 10 kJ / 2 kcal, carbs 0.9: https://hr.coca-colahellenic.com/en/our-24-7-portfolio/brands-a-z/monster-energy/monster-ultra-white
Hot drinks (built from parts):
- Instant coffee prepared: USDA SR Legacy 174130, 2 kcal, P 0.1, carbs 0.34 per 100 g:
  https://getfoodfacts.com/food/beverages-coffee-instant-regular-prepared-with-water-174130
- Milk = app's "Milk, full cream" (64 kcal, P 3.3, C 4.8, F 3.4 per 100 ml); sugar = app's 1 tsp 4 g (16 kcal).
- Milo powder 20 g (4 tsp): 84 kcal, P 2.3, C 13, F 2.1: https://www.fatsecret.co.za/calories-nutrition/search?q=Milo
Breakfast:
- Rice Krispies 397 kcal, P 7.1, C 82, F 2.9 per 100 g: https://www.fatsecret.co.za/calories-nutrition/kelloggs/rice-krispies/100g
- Coco Pops 1 cup 30 g = 104 kcal, P 2.1, C 23, F 0.4: https://www.fatsecret.co.za/calories-nutrition/kelloggs/coco-pops/1-cup
- Bokomo Luxury Toasted Nut Muesli 384 kcal, P 9.7, C 55, F 14.1 per 100 g: https://www.fatsecret.co.za/calories-nutrition/bokomo/luxury-toasted-nut-muesli/100g
- Nature Valley Oats & Honey 42 g: 192 kcal, P 3.4, C 27.1, F 7.2: https://www.fatsecret.co.za/calories-nutrition/nature-valley/oats-honey-crunchy-granola-bars/1-serving
  (cross-check UK label 467 kcal/100 g: https://www.ocado.com/products/nature-valley-crunchy-oats-honey-cereal-bars/455312011)
- Jungle Energy Bar Nuts 40 g: 195 kcal, P 3.2, C 20, F 10.9: https://www.fatsecret.co.za/calories-nutrition/jungle/energy-bar-nuts/1-bar

SKIPPED (no reliable label found or sources disagreed): Smirnoff Spin/Storm (FatSecret entries identical and don't add up),
Klipdrift & Cola premix, Bernini, Redd's, Esprit, Hooch, Strawberry Lips, Amstel, Carling Pink, Twizza (kcal vs carbs mismatch),
Coo-ee, Valpré flavoured water, Nesquik, Horlicks, Kellogg's All-Bran Flakes and Bokomo Bran Flakes (energy didn't match macros).
*/
```

## Restaurants and cafés

```
// Mugg & Bean
// Kauai
// Spur (official nutritional analysis, per 100 g of the whole plate)
// Nando's
// Burger King SA
// Ocean Basket
// Col'Cacchio
// Wimpy
// Steers
// Fishaways
// Starbucks
// Vida e Caffè
// Krispy Kreme
// Simply Asia
// Pedros

/*
SOURCES (checked 2026-10-21)

Official brand data:
- Spur Steak Ranches nutritional analysis PDFs (per 100 g of the full plate; kJ converted at 4.184):
  r-spur-beef-burger (Original Spur Beef Burger, Chips & Onion Rings 849 kJ), r-spur-beef-burger-only (Standard 869 kJ),
  r-spur-cheese-burger (Beef Cheese Burger 868 kJ), r-spur-chicken-burger (Original Grilled Chicken Burger 752 kJ),
  r-spur-rib-burger (Rib Burger 951 kJ):
  https://spursteakranches.com/uploads/menu_category/19707S-Nutritional-Analysis-24-Burgers-FA.pdf
  r-spur-ribs-400 (Rack of Ribs 400 g 919 kJ), r-spur-ribs-wings (Ribs & Buffalo Wings Combo, Grill Basting 732 kJ):
  https://spursteakranches.com/uploads/menu_category/19707S-Nutritional-Analysis-24-Ribs-Grills-Combos-FA.pdf
  r-spur-greek-salad (Greek Salad, Full 271 kJ):
  https://spursteakranches.com/uploads/menu_category/19707S-Nutritional-Analysis-24-Shareables-Salads-FA.pdf

FatSecret South Africa brand entries (base https://www.fatsecret.co.za/calories-nutrition/):
- Mugg & Bean (mugg-bean/...): blueberry-muffin, choc-chip-muffin, triple-chocolate-muffin, bran-muffin (+ bran-muffin-(preserves) 1265 kcal),
  back-bacon-cheddar-muffin, classic-breakfast-(rye), south-african-farm-breakfast-(rye),
  hearty-grill-breakfast-(rye), south-african-eggs-benedict-(single) (+ (double) 1373 kcal), breakfast-bagel, low-carb-breakfast,
  avo-on-toast-(wholewheat), beef-burger, chicken-burger, chicken-caesar-salad-(regular) (+ (light) 450 kcal), greek-salad-(light),
  chicken-mayo-toasted-sandwich-(white), back-bacon-egg-toasted-sandwich-(white),
  cappuccino-easy (+ cappuccino-serious 325 kcal), caff%C3%A8-latte, hot-chocolate, apple-pie-milkshake, baked-cheesecake
  (all /1-serving), e.g. https://www.fatsecret.co.za/calories-nutrition/mugg-bean/blueberry-muffin/1-serving
- Kauai (kauai/...): peanut-butter-bomb-smoothie-(350ml) and -(500ml), mocha-protein-smoothie-(350ml) (500 ml 631 kcal on brand page),
  ultimate-protein-smoothie-(350ml), salted-caramel-smoothie-(350ml), strawberry-stinger-smoothie-(350ml),
  bbq-chicken-wrap/1-wrap, princess-wrap-(regular-wrap) (+ (low-carb-wrap) 699 kcal), prince-wrap-(regular-wrap),
  teriyaki-chicken-wrap, chicken-feta-crunch-wrap, protein-breakfast-wrap/1-wrap, steak-avo-quesadilla-(regular-wrap), teriyaki-chicken-poke-bowl (others /1-serving)
  e.g. https://www.fatsecret.co.za/calories-nutrition/kauai/peanut-butter-bomb-smoothie-(350ml)/1-serving
- Spur (spur-steak-ranches/...): r-spur-chicken-avo-salad chicken-avo-bacon-salad/1-serving; r-spur-buffalo-wings buffalo-wings/1-2-serving
- Nando's (nandos/...): r-nandos-half-chicken 1-2-chicken/100g; r-nandos-chicken-burger chicken-burger/1-burger (per 100 g);
  r-nandos-grande-burger grande-cheese-burger/1-serving; r-nandos-winglets 6-regular-winglets/100g;
  r-nandos-hot-pot hot-pot-with-spicy-rice/1-serving; r-nandos-boujee-bowl roasted-corn-red-pepper-boujee-bowl-with-chicken-strips/1-serving;
  r-nandos-roll portuguese-roll/1-roll
- Burger King (burger-king/...): whopper/1-serving, whopper-with-cheese/1-serving, double-whopper-with-cheese/1-serving,
  original-chicken-sandwich/1-serving, 6pc-chicken-wings/1-serving
- Ocean Basket (ocean-basket/...): famous-fish-chips/1-serving, grilled-fish/1-serving, grilled-kingklip/1-serving, calamari-grilled/1-serving,
  prince-prawns/12-prawns, seafood-platter-for-one/1-serving, seared-salmon-salad/1-serving,
  chips-(full-portion)/1-serving
- Col'Cacchio (colcacchio/...): margherita-pizza, ruspante-pizza, carb-conscious-margherita-pizza (all /1-serving)
- Wimpy (wimpy/...): chicken-mayonnaise-toasted-sandwich/1-sandwich, dagwood-toasted-sandwich/1-serving, chicken-fillet-burger/1-burger,
  creamy-mayo-grilled-chicken-wrap/1-wrap
- Steers (steers/...): cheese-burger-beef/1-burger, bacon-and-cheese-burger/1-serving, cheesy-bbq-double-phanda/1-burger, chicken-burger/1-burger,
  quarter-chicken/1-serving, chocolate-milkshake/1-milkshake
- Fishaways (fishaways/...): fried-medium-hake-and-chips/1-serving, grilled-medium-hake/1-serving, large-grilled-hake-rice/1-serving,
  hake-wrap/1-serving
- Starbucks (starbucks/...): cappuccino-(grande)/1-serving, hot-chocolate/1-serving, caramel-frappuccino-(grande)/1-serving,
  spinach-feta-egg-white-wrap/1-wrap, chicken-mayo-seeded-bread-toastie/1-serving
  ("tall (approx.)" portions are a 0.75 volume ratio, not a published value)
- Vida e Caffè (vida-e-caff%C3%A8/...): vanilla-iced-caff%C3%A8/1-serving, chocolate-chunk-biscuit/1-serving
- Krispy Kreme (krispy-kreme/...): original-glazed-doughnut/1-doughnut, chocolate-iced-glazed-doughnut/1-doughnut
  (same as Krispy Kreme's published values)
- Simply Asia (simply-asia/...): green-curry/1-serving, cashew-nut-stir-fry/1-serving, tom-yum-ramen-chicken/1-serving, red-sauce-noodles/1-box,
  chicken-satay/1-serving
- Pedros (pedros/...): chicken-wrap/1-wrap, strips-and-chips/1-serving, strips-and-spicy-rice/1-serving

Notes:
- Outliers kept: r-steers-quarter-chicken (listed 400 kcal vs 341 from macros, +17%), r-sa-red-noodles (873 vs 756, +15%).
- Kauai 500 ml multipliers: Peanut Butter Bomb 764/467 = 1.64, Mocha Protein 631/431 = 1.46 (FatSecret 500 ml entries);
  others "500 ml (approx.)" = 500/350 volume ratio.
- Mugg & Bean caesar "light portion" = 450/663 = 0.68; cappuccino "Serious" = 325/190 = 1.71.
- Skipped (no credible source or values that don't add up): RocoMamas, Panarottis, John Dory's, Hungry Lion, Galito's (sauce only),
  Seattle Coffee Co, Woolworths Café, Tashas, News Café, Bootlegger, Chicken Licken (user-entered looking values);
  Nando's chicken livers (48 g carbs/100 g) and double chicken burger (147 g protein); Ocean Basket fish & calamari (269 g protein);
  Simply Asia chicken pad thai and Wimpy bacon & egg toastie (kcal far above macros); Fishaways hake pot (kcal far below macros);
  Kauai bowls other than the poke bowl (FatSecret entries archived); Burger King fries (values look like a much smaller portion).
*/
```

## Batch: Pretoria spots, SA chains, supermarket, brand sauces, biltong, drinks, frozen (Oct 2026)

1,031 items. Values marked "Estimate:" in their note are built from the menu portion and USDA/label averages, because the place publishes no nutrition.
Duplicates between batches were dropped. Corrections applied to existing items: Fanta Orange (Coca-Cola SA 93 kJ), Weet-Bix (biscuit 20 g),
Debonairs slices (official guide), Nando's medium peri-peri (SA label), generic mayo renamed to full-fat style, Woolworths mushroom sauce renamed generic, biltong note.

### foods-pta-cafes.js
```
/* SOURCES
- Lucky Bread Company, 20 16th Street Hazelwood (The Village): Uber Eats: lucky-bread-company-hazelwood, the-lucky-bread-company-menlyn-maine, -brooklyn-mall (Oct 2026)
- Aroma Gourmet Coffee Roastery, 9 Firwood Ave Hazelwood: Uber Eats: aroma-coffee-roastery-hazelwood breakfast + lunch menus (Oct 2026)
- Platō Coffee (chain; nearest branch Menlo Park): Uber Eats: plato-coffee-ferndale-on-republic-planet-fitness (menu text; same chain menu). plato.coffee/pages/our-menu is an image.
- Bakehouse, 18 Firwood Ave Hazelwood: Uber Eats: bakehouse-hazelwood (Oct 2026)
- Freddo Café, 18 Oaktree Ave Hazelwood: Uber Eats: freddo-cafe/Zehef83KXkayWetneTDxmw (Hazelwood); drinks from freddo-cafe/y5vACsk9Xq6KGHbYcgJaUw (same brand menu)
- 23 on Hazelwood, 23 Hazelwood Rd: Menu PDF May 2026: https://23onhazelwood.co.za/wp-content/uploads/2026/05/23-on-Hazelwood-Menu-May-2026.pdf ; Uber Eats: 23-on-hazelwood (most liked)
- La Coco C, 198 Long Ave Waterkloof (kcal published on the menu): Uber Eats: la-coco-c-waterkloof, la-coco-c (Shere), la-coco-c Stellenbosch, Paarl (Oct 2026). kcal = menu "KCAL" figures.
- Peaches, 15 16th Street Hazelwood: Menu V1.15 (Final), copy on Studocu (2024/25): https://www.studocu.com/en-za/document/varsity-college/psychology-1a/peaches-menu-version-115-final/125557600 . Uber Eats page could not be read.

Ingredient values used for the estimates (per 100 g unless noted):
- USDA FoodData Central (SR Legacy): egg (whole, fried, scrambled), breads (sourdough/French, white, rye, multigrain, hard roll, English muffin, egg bread, pita, bagel), butter croissant, flour, butter, oil, cheddar, mozzarella, feta, parmesan, cream cheese, brie, mayonnaise, mustard, avocado, tomato, mushrooms, onion, lettuce/rocket, chicken breast/meat roasted, battered fried chicken breast, sliced ham, smoked salmon, corned beef brisket, lamb leg roast, ground lamb, chicken liver, hummus, falafel, fast-food fries, Greek & plain yoghurt, homemade granola, fruit, dates, honey, maple syrup, sugar, jam, cream, condensed milk, espresso, chocolate, nuts, sesame, ice cream, waffle/French toast recipes, buttermilk biscuit (scone), brownie recipe, cheesecake, oats, rice. https://fdc.nal.usda.gov/
- fatsecret generic (foods.fatsecret.com): hollandaise 417 kcal/100 g, pesto 534, chutney 149, cheese sauce 174, halloumi 333, chicken tenders 293, creamed spinach 74, hash brown patty 143 kcal, egg tart 225 kcal/tart, prosciutto 18 kcal/slice, mascarpone (Cello label) 393.
- Labels: Nutella, Lotus Biscoff spread.
- Existing app values reused: avb-bacon-rasher, milk-full, steak, mince, boerewors, pb, whey-usn, avb-sous, sa-coleslaw, av-salad-greek, avb-chicken-braai.
*/
```

### foods-pta-restaurants.js
```
/* SOURCES

MENUS USED (portion sizes, what comes with each dish)
- Smoke (SMOKE Pretoria, 16 Firwood Ave, The Village/Hazelwood; smokecapital.co.za). Taken to be the "Smoke City" asked for:
  it's the only smokehouse called Smoke in Hazelwood. Menu items/sizes (brisket 300 g, pork ribs 700 g) from
  https://briefly.co.za/facts-lifehacks/services/221093-smoke-pretoria-menu-prices-brunch-mains-desserts (Jul 2025).
  The current June 2026 PDF https://smokecapital.co.za/wp-content/uploads/2026/07/FOOD-SMOKE-June-2026.pdf is image-only (couldn't read it).
- The Rock Hazelwood: Dineplan sample menu (7 Feb 2024) https://www.dineplan.com/restaurant/the-rock-hazelwood/menu (burgers 180 g patty, hake 180 g/300 g)
- Pachas (Club Centre, Dely Rd): Mr D menu https://www.mrd.com/delivery/restaurant/pachas-restaurant-hazelwood/15026 (mains with creamed spinach, butternut, starch)
- Cowfish: the Pretoria branch is now at Lynnwood Bridge (the old 11 Hazelwood Rd site is now Alfie's Italian Cafe).
  Mr D menu https://www.mrd.com/delivery/restaurant/cowfish-lynwood-bridge-lynnwood-manor/21227 (160 g patties, ribs 500 g, rump 300 g)
- Alfie's Pizzeria & Deli (13 Firwood Ave): https://www.alfies.co.za/Pizzeria-Menu-2024.pdf (picana 300 g)
- Alfie's Italian Cafe (11 Hazelwood Rd), asked for as "Alfie's Italian Bistro": https://www.alfies.co.za/alfies-menu.pdf
  (rib-eye 500 g bone-in, fillet 250 g, Fiorentina min 600 g)
- Capito (The Club, Hazelwood): https://capito.co.za/assets/Capito-Food-Menu-May-2023.pdf (newest menu online; tomahawk 750 g, fillet 250 g, rump 300 g)
- Lotus Thai: moved from 19 Dely Rd Hazelwood to 975 Arcadia St, Hatfield (https://www.lotusthai.co.za/lotus-thai-cuisine/).
  Mr D menu https://www.mrd.com/delivery/restaurant/lotus-thai-hatfield/33611 (6 spring rolls, 6 prawns)
- Moo Moo Wine Bar & Grill (Menlyn, Brooklyn and others; small chain): https://www.moo-moo.co.za/order-online
  (+ /GRILLS-&-MAINS-c53897112, /RIBS-c54194080, /ESPETADA-c54169132, /STREET-FOOD-c54113108, /SMALL-PLATES-c158460760)
- Prosopa (Waterkloof Heights): https://prosopa.co.za/downloads/Prosopa-Menu.pdf (ribeye 300 g, fillet 250 g)
- Buffelsfontein Beesboerdery (Greenlyn, Menlo Park): https://www.beesboerdery.co.za/wp-content/uploads/2026/09/Beesboerdery-Spyskaart-2026.pdf
  (kruisskyf 200/350 g, beeshaas 200/350 g, ribbes 550 g, T-been 500 g, lam 3 x 100 g, 250 g burgers)
- Hinterland (The Club, Hazelwood): https://hinterland.restaurant/wp-content/uploads/2025/12/HL_MainMenu_Nov22_NoPrices.pdf
  (steaks 250/350 g, rib-eye on the bone 600 g, T-bone 500/700 g, 180 g burger)

SKIPPED (no current menu found, so no menu was guessed)
- Farmers Fowl: no restaurant by this name found in Pretoria.
- Padbok Thai (Cherry Lane, Brooklyn): listed as permanently closed (wanderlog.com/place/details/2633056).
- Mezetaki Pretoria (27 Maroelana St, Hazelwood): the group's site (mezetaki.co.za/our-greek-restaurants/) lists only Senderwood now;
  latest Hazelwood reviews Sep 2024; no Hazelwood menu online.
- Taso's Bar & Grill (Firwood & 16th St): open (reviews to May 2026) but no menu published anywhere readable (only a TripAdvisor photo).

COMPONENT VALUES per 100 g (dish values = sum of components x grams in the note)
- Steaks, USDA via fatsecret search (foods.fatsecret.com/calories-nutrition/search?q=...):
  rump = beef top sirloin 1/8" fat broiled 243 kcal; sirloin = top loin 1/8" broiled (224 kcal/3 oz); fillet = tenderloin lean 0" broiled (164 kcal/3 oz);
  rib-eye = rib eye small end 0" broiled (70 kcal/oz); T-bone/tomahawk = FNDDS beef steak lean & fat 252 kcal.
- Brisket: USDA brisket point 1/4" braised (222 kcal/3 oz). Pork ribs: FNDDS pork spareribs barbecued with sauce 310 kcal
  (https://foods.fatsecret.com/calories-nutrition/generic/pork-spareribs-barbecued-with-sauce). Beef ribs: FNDDS beef shortribs barbecued with sauce 381 kcal
  (https://foods.fatsecret.com/calories-nutrition/generic/beef-shortribs-barbecued-with-sauce).
- Lamb shank: USDA lamb foreshank 1/8" braised 243 kcal. Oxtail: FNDDS beef stew meat cooked (86 kcal/oz). Pork neck: USDA pork shoulder roasted 292 kcal.
  Pork belly: USDA raw belly 518 kcal/100 g, ~30% of fat assumed rendered. Lamb chops: app 'lamb-chop'. Roast chicken: app 'rotisserie' (= USDA).
- Crumbed chicken/veal: USDA chicken breast breaded & fried 303 kcal. Wings: USDA wing meat+skin roasted.
- Calamari fried: USDA squid fried 175 kcal; grilled: USDA raw squid by raw weight. Battered hake: FNDDS battered fried fish fillet 206 kcal.
  White fish grilled: USDA cod cooked. Salmon: USDA farmed Atlantic cooked. Prawns: USDA shrimp cooked.
- Burgers: USDA 80/20 patty broiled (209 kcal per 77 g patty); bun = app 'avb-roll-white'; cheddar/mozzarella/mayo/butter = app lines; bacon USDA pan-fried; gouda, feta, egg fried, ham USDA.
- Chips = app 'slap-chips'; mash = app 'sa-mash'; rice = app 'rice'; potatoes, sweet potato, veg, spinach, butternut, broccoli, peas, carrots, salad veg, olives: USDA.
- Cheese sauce: FNDDS cheese sauce 174 kcal (also used for creamy mushroom/pepper/biltong sauce). Cream: USDA heavy cream. BBQ sauce, teriyaki: USDA.
- Pizza: USDA 14" cheese pizza 264 kcal/100 g; meat pizzas USDA 14" pepperoni pizza 276 kcal/100 g. Neapolitan ~30 cm pizza assumed ~380 g.
- Pasta: FNDDS pasta with meat sauce 129 kcal; FNDDS fettuccine alfredo 208 kcal (used for creamy/cheese pastas and gnocchi); USDA spaghetti cooked.
- Thai: FNDDS Thai green curry 144 kcal, Thai red curry 139 kcal (red/panang/massaman), pad Thai 170 kcal, vegetable spring roll 63 kcal per roll.
- Greek: FNDDS moussaka 120 kcal; FNDDS beef gyro in pita 151 kcal (souvlaki pita); baklava 428 kcal (generic).
- Peri-peri livers: app 'sa-livers'. Bobotie: fatsecret.co.za generic 194 kcal. Chicken curry: app 'sa-chicken-curry'.
- Desserts (fatsecret generic): tiramisu 283, creme brulee 336 (404 kcal ramekin), cheesecake USDA 321, panna cotta 223;
  malva = average of Woolworths/SPAR/The Menu/Snowflake labels on fatsecret.co.za (317 kcal).
- California roll: FNDDS 126 kcal/100 g (33 kcal per piece).
*/
```

### foods-chains.js
```
/* SOURCES
 - Debonairs (rc-debs-*): official Nutritional & Allergen Guide, https://debonairspizza.co.za/nutritional-and-allergen-guide/ (whole-pizza kJ, protein, fat, carbs; Medium/Large rows; kcal = kJ / 4.184).
   Pizzawraps, wings and Death by Chocolate list no carbs; carbs = (kcal - 4p - 9f) / 4. Small-size rows (no carbs, one clearly broken BBQ Beef Small row) and cocktail griller rows (energy below their own macros) skipped.
 - Spur (rc-spur-*): official Spur nutritional analysis PDF (per 100 g), https://res.cloudinary.com/spur-group/image/upload/uploads/resource/menupage/01JT81Z5Y351ARRM9GVPY8R7VD.pdf
 - KFC (rc-kfc-*): fatsecret.co.za KFC brand entries, https://www.fatsecret.co.za/calories-nutrition/search?q=KFC (pages 1-8). kfc.co.za blocks fetching (robots).
   Skipped: Fries (Regular) 343 kcal (22% off its macros), Mini Twister (16% off), Large Gravy (odd serving), Sprinkle Pops, Simba KFC chips.
 - Nando's (rc-nandos-*): fatsecret.co.za Nando's brand entries (Nando's SA lists per 100 g), https://www.fatsecret.co.za/calories-nutrition/search?q=Nandos (pages 1-8).
   Skipped as broken: "Livers and a Nando's Roll" (per-serving values labelled per 100 g), "Boujee bowl with halloumi" (594 kcal per 100 g), Nandinos strips/winglets & chips (1 g carbs with chips), Grande Salad (Veg) (10 kcal vs macros).
 - Burger King (rc-bk-*): fatsecret.co.za Burger King brand entries, https://www.fatsecret.co.za/calories-nutrition/search?q=Burger+King (pages 1-5).
   Skipped: BK fries S/M/L (136/167/250 kcal look far too low), Cappuccino tall and Bar One Fusion (kcal 27-31% off macros), soft drinks.
 - Steers (rc-steers-*): fatsecret.co.za Steers brand entries, https://www.fatsecret.co.za/calories-nutrition/search?q=Steers (pages 1-7). steers.co.za nutrition guide loads dynamically and could not be read.
   Skipped as broken: all Steers chips entries (e.g. small chips 621 kcal with 56 g fat), Cheesy BBQ Triple (kcal 27% below macros), "Original King Steer per 100 g 1033 kcal", Milkshake 250 ml (28% off), conflicting Prince burger values (296 vs 668).
 - Kauai (rc-kauai-*): fatsecret.co.za Kauai brand entries, https://www.fatsecret.co.za/calories-nutrition/search?q=Kauai (pages 1-10).
   Skipped: Peanut Butter Berry 350 ml and Iced Matcha Latte (kcal ~28% off macros), Avo Steak Salad (27% off), Iced Cappuccino 350 ml (308 g protein typo).
 - Ocean Basket (rc-ob-*): fatsecret.co.za Ocean Basket brand entries, https://www.fatsecret.co.za/calories-nutrition/search?q=Ocean+Basket (pages 1-4).
   Skipped as broken: Fish and Calamari (269.5 g protein), Two Way Platter, Med Veg Bowl (504 kcal/100 g), Salmon Platter Sushi (580 kcal/100 g), Lemon Garlic Mussels and Grilled Calamari per 100 g (>20% off macros).
 - Simply Asia (rc-sa-*): fatsecret.co.za Simply Asia brand entries, https://www.fatsecret.co.za/calories-nutrition/search?q=Simply+Asia (pages 1-3).
   Skipped as broken: Chicken Pad Thai (670 kcal vs ~436 from macros), 6-Piece Combo Platter, Chocolate Spring Rolls, Thai Consommé, Roasted Chilli Paste Stir Fry ("per 100 g" 797 kcal).
 - Pedros: fatsecret.co.za Pedros entries, https://www.fatsecret.co.za/calories-nutrition/search?q=Pedros. Quarter Chicken Paella (14 g protein) and Chicken Livers & Roll (labelled per 100 g) skipped. Quarter chicken / burger are estimates.
 - Pizza Hut SA (rc-ph-*): no SA nutrition published (pizzahut.co.za unreachable, nothing on fatsecret.co.za). Estimates use Debonairs' official Medium/Large values for the closest pizza.
   Menu: https://briefly.co.za/facts-lifehacks/services/209183-pizza-hut-menu-latest-prices-mzansi-quick-guide/ (Feb 2025).
 - RocoMamas (estimates): menu https://rocomamas.com/za/menu (patty sizes from menu descriptions). No nutrition published; no fatsecret entries.
 - Hudsons (estimates): menu items from https://www.eatout.co.za/article/review-hudsons-kloof-proves-great-burgers-will-never-go-fashion/ and https://yourneighbourhood.co.za/hudsons-burger-joint-in-hazelwood/ . No nutrition published.
 - Doppio Zero (estimates): menu https://briefly.co.za/facts-lifehacks/services/199326-doppio-menu-prices-south-africa-updated/ . No nutrition published; no fatsecret entries.
 - Woolworths Café (estimates): menu PDF https://www.woolworths.co.za/images/elasticera/New_Site/Corporate/woolworths_wcafe_allday_menu_2026 (prints no nutrition).
 - Seattle Coffee Co (estimates): https://www.seattlecoffeecompany.co.za/ publishes no menu nutrition; no fatsecret entries.
 - Estimate components are the app's existing generic foods: avb-roll-white, mince, cheddar, s2-gouda, s2-mozzarella, s2-feta, avb-bacon-rasher, mayo, egg, avo,
   chicken-breast, slap-chips, avb-onion-rings, fried-wings, bread-white, butter, av-burger-chicken-crumbed, sa-coleslaw, avb-milkshake, s2-bbq-allgold, s2-onion, oil,
   s2-cream-cheese, avb-bagel-cream-cheese, avb-breakfast-full, av-cheeseburger, av-spaghetti-carbonara, av-lasagne, av-butter-chicken-rice, av-toasted-chicken-mayo,
   av-burger-chicken-grilled, rotisserie, dr-cappuccino, avb-latte, avb-flat-white, avb-hot-chocolate, avb-frappe, avb-croissant-plain, avb-muffin-chocolate, pasta;
   plus Col'Cacchio (r-cc-*) and Mugg & Bean (r-mb-eggs-benedict) values already in the app. Raw-to-cooked beef: 150 g raw ~ 110 g cooked.
 - Domino's: NOT included. Domino's South Africa was liquidated by Taste Holdings in 2020 and has not returned
   (https://businesstech.co.za/news/business/381887/taste-liquidates-dominos-in-south-africa-770-jobs-affected/ ; BusinessTech, 12 Dec 2024: https://businesstech.co.za/news/business/803884/5-nostalgic-franchises-that-have-disappeared-across-south-africa/).
*/
/* CORRECTIONS (from Debonairs' official guide, large = 8 slices, medium = 6 slices as in the existing notes):
 - pz-debs-meaty -> 1 slice (large): 227 kcal, protein 13.8, carbs 23.6, fat 8.7  (Something Meaty large 7606.79 kJ, p110.4 c189.16 f69.61 / 8)
 - pz-debs-hawaiian -> 1 slice (large): 195 kcal, protein 12.0, carbs 23.8, fat 6.1  (Hawaiian large 6523.57 kJ, p95.68 c190.28 f49.02 / 8)
 - pz-debs-margherita -> 1 slice (medium, was "standard"): 131 kcal, protein 6.3, carbs 17.8, fat 3.9  (Margherita medium 3277.04 kJ, p37.61 c106.7 f23.43 / 6)
 - pz-debs-triple-chicken -> rename "Creamy Chicken Triple-Decker, 1 slice"; 330 kcal, protein 14.9, carbs 39.8, fat 12.0  (large 11042.98 kJ, p118.82 c318.1 f95.84 / 8)
 - pz-debs-triple-meat: official large 11824.39 kJ / 8 = 353 kcal, p17.7 c41.5 f12.7 (existing 354/18.5/39.2/13.7 is close; optional update)
 - pz-debs-regina: Regina is no longer on Debonairs' guide (consider removing).
 Noted, not changed: kfc-twister (294 kcal) vs fatsecret "Sweet Chilli Twister" 479 kcal; r-steers-chicken-burger (570 kcal) vs fatsecret "Chicken Burger" 280 / "Original Chicken Burger" 250.
*/
```

### foods-supermarket.js
```
/* SOURCES (fatsecret.co.za entries are label data entered from SA packs; each line's values were read from the search-result summary for that brand/item)
Bread & starch:
  Albany: https://www.fatsecret.co.za/calories-nutrition/search?q=Albany%20Superior , https://www.fatsecret.co.za/calories-nutrition/search?q=Albany%20rolls , https://www.fatsecret.co.za/calories-nutrition/search?q=Albany%20Best%20of%20Both
  Sasko: https://www.fatsecret.co.za/calories-nutrition/search?q=Sasko%20bread
  Blue Ribbon: https://www.fatsecret.co.za/calories-nutrition/search?q=Blue%20Ribbon%20bread
  Woolworths breads/rolls: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20bread , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20rolls , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20bun , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20muffin (English muffin)
  Pick n Pay: https://www.fatsecret.co.za/calories-nutrition/search?q=Pick%20n%20Pay%20bread
  Checkers: https://www.fatsecret.co.za/calories-nutrition/search?q=Checkers%20bread
  Spar: https://www.fatsecret.co.za/calories-nutrition/search?q=Spar%20bread
  Wraps/pitas: https://www.fatsecret.co.za/calories-nutrition/search?q=wraps%20tortilla , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20wrap , https://www.fatsecret.co.za/calories-nutrition/search?q=pita%20bread
Breakfast:
  Kellogg's: https://www.fatsecret.co.za/calories-nutrition/search?q=Kellogg%27s (pages 1-2)
  Bokomo (corn flakes, Otees, Weet-Bix Protein, Maltabella, wholewheat rusks): https://www.fatsecret.co.za/calories-nutrition/search?q=Bokomo (pages 1-2)
  ProNutro: https://www.fatsecret.co.za/calories-nutrition/search?q=Pronutro (pages 1-2)
  Jungle oats / Oat So Easy / oat bran: https://www.fatsecret.co.za/calories-nutrition/search?q=Jungle%20oats (pages 1-2); Jungle muesli: https://www.fatsecret.co.za/calories-nutrition/search?q=Jungle%20muesli
  Woolworths granola/muesli: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20granola , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20muesli
  Futurelife: https://www.fatsecret.co.za/calories-nutrition/search?q=Futurelife
  Spar mabele: https://www.fatsecret.co.za/calories-nutrition/search?q=Spar%20meal
  Rusks: https://www.fatsecret.co.za/calories-nutrition/search?q=Ouma%20rusks , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20rusks , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20muesli (homestyle muesli rusk), https://www.fatsecret.co.za/calories-nutrition/search?q=Checkers%20bread (Checkers rusks)
Dairy & shakes:
  Fage (official UK labels): https://uk.fage/yoghurts/fage-total-0 , https://uk.fage/yoghurts/fage-total-2 , https://uk.fage/yoghurts/fage-total-5
  Clover yoghurt: https://www.fatsecret.co.za/calories-nutrition/search?q=Clover%20yoghurt ; Clover milk/Nolac: https://www.fatsecret.co.za/calories-nutrition/search?q=Clover%20milk ; Tussers: https://www.fatsecret.co.za/calories-nutrition/search?q=Clover%20cheese ; Super M: https://www.fatsecret.co.za/calories-nutrition/search?q=Clover%20Super%20M
  Danone (DanPro, Activia, buttermilk): https://www.fatsecret.co.za/calories-nutrition/search?q=Danone (pages 1-2)
  Woolworths yoghurt/milk/high protein/cottage: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20greek%20yoghurt , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20double%20cream%20yoghurt , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20drinking%20yoghurt , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20high%20protein , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20milk , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20cheese , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20yoghurt (full cream plain, fat free plain, low fat strawberry)
  Steri Stumpie: https://www.fatsecret.co.za/calories-nutrition/search?q=Clover%20Steri%20Stumpie ; Parmalat Protein+: https://www.fatsecret.co.za/calories-nutrition/search?q=Parmalat (page 2)
  Melrose: https://www.fatsecret.co.za/calories-nutrition/search?q=Melrose ; Lancewood: https://www.fatsecret.co.za/calories-nutrition/search?q=Lancewood
  Protein powders: https://www.fatsecret.co.za/calories-nutrition/search?q=Nutritech , https://www.fatsecret.co.za/calories-nutrition/search?q=Evox , https://www.fatsecret.co.za/calories-nutrition/search?q=USN
Sauces & spreads:
  Rama: https://www.fatsecret.co.za/calories-nutrition/rama/original-60-fat-spread/100g (70% version: https://www.fatsecret.co.za/calories-nutrition/rama/original-70-fat-spread/100g)
  Flora: https://www.fatsecret.co.za/calories-nutrition/search?q=Flora%20margarine ; Clover butter/Butro: https://www.fatsecret.co.za/calories-nutrition/search?q=Clover%20butter
  Black Cat: https://www.fatsecret.co.za/calories-nutrition/search?q=Black%20Cat (pages 1-2)
  Woolworths hummus: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20hummus ; pasta sauces: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20pasta%20sauce
  All Gold: https://www.fatsecret.co.za/calories-nutrition/search?q=All%20Gold
Meat & eggs:
  Eskort: https://www.fatsecret.co.za/calories-nutrition/search?q=Eskort ; Enterprise: https://www.fatsecret.co.za/calories-nutrition/search?q=Enterprise
  Woolworths deli: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20ham , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20sliced%20chicken , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20salami , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20roast%20chicken , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20eggs
  PnP deli/chicken: https://www.fatsecret.co.za/calories-nutrition/search?q=Pick%20n%20Pay%20chicken , https://www.fatsecret.co.za/calories-nutrition/search?q=Pick%20n%20Pay%20sandwich (sandwich ham)
  Spar chicken: https://www.fatsecret.co.za/calories-nutrition/search?q=Spar%20chicken
  Rotisserie: Woolworths entries at https://www.fatsecret.co.za/calories-nutrition/search?q=rotisserie%20chicken ; Checkers/PnP/Spar = ESTIMATE from USDA FoodData Central SR Legacy "Chicken, broilers or fryers, leg, meat and skin, cooked, roasted" (232 kcal, 26.0 P, 13.5 F) and "...breast, meat and skin, cooked, roasted" (197 kcal, 29.8 P, 7.8 F)
  Chicken strips: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20chicken%20strips , Spar/PnP links above
  Biltong: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20biltong , https://www.fatsecret.co.za/calories-nutrition/search?q=Checkers%20biltong , https://www.fatsecret.co.za/calories-nutrition/search?q=Pick%20n%20Pay%20biltong
  Bull Brand: https://www.fatsecret.co.za/calories-nutrition/search?q=Bull%20Brand
Meals & sides:
  Woolworths meals: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20lasagne , ...%20cottage%20pie , ...%20chicken%20a%20la%20king , ...%20spaghetti%20bolognaise , ...%20bobotie , ...%20chicken%20pie , ...%20sushi , ...%20nuts (cashew nut chicken), ...%20hummus (booster bowl), ...%20cheese (mac cheese)  [all https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20...]
  Woolworths sandwiches/wraps: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20chicken%20mayo%20sandwich , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20roast%20chicken , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20sandwich , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20wrap
  Woolworths deli salads: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20pasta%20salad , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20salad
  Pick n Pay: https://www.fatsecret.co.za/calories-nutrition/search?q=Pick%20n%20Pay%20lasagne , https://www.fatsecret.co.za/calories-nutrition/search?q=Pick%20n%20Pay%20cottage%20pie , https://www.fatsecret.co.za/calories-nutrition/search?q=Pick%20n%20Pay%20sandwich , https://www.fatsecret.co.za/calories-nutrition/search?q=Pick%20n%20Pay%20chicken , https://www.fatsecret.co.za/calories-nutrition/search?q=Pick%20n%20Pay%20salad
  Checkers: https://www.fatsecret.co.za/calories-nutrition/search?q=Checkers%20Simple%20Truth , https://www.fatsecret.co.za/calories-nutrition/search?q=Checkers%20chicken , https://www.fatsecret.co.za/calories-nutrition/search?q=Checkers%20salad , https://www.fatsecret.co.za/calories-nutrition/search?q=Checkers%20sandwich
  Spar: https://www.fatsecret.co.za/calories-nutrition/search?q=Spar%20chicken
  Tinned: https://www.fatsecret.co.za/calories-nutrition/search?q=Koo , https://www.fatsecret.co.za/calories-nutrition/search?q=Rhodes , https://www.fatsecret.co.za/calories-nutrition/search?q=Rhodes%20pasta%20sauce
Bars & sweets:
  https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20muffin , https://www.fatsecret.co.za/calories-nutrition/search?q=Spar%20muffin , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20croissant , https://www.fatsecret.co.za/calories-nutrition/search?q=Pick%20n%20Pay%20croissant , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20scones , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20bun , https://www.fatsecret.co.za/calories-nutrition/search?q=Checkers%20bread (hot cross bun)
  Bars: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20high%20protein , https://www.fatsecret.co.za/calories-nutrition/search?q=Pronutro , https://www.fatsecret.co.za/calories-nutrition/search?q=Nutritech , https://www.fatsecret.co.za/calories-nutrition/search?q=USN , https://www.fatsecret.co.za/calories-nutrition/search?q=Futurelife
Chips & nuts: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20nuts , https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths%20cashews
Extras: https://www.fatsecret.co.za/calories-nutrition/search?q=Snowflake%20flour
Not added (no published values found): in-store bakery muffins at Checkers/PnP (generic muffins already exist), Checkers/PnP/Spar hot-deli chicken strips (packaged Spar/Woolworths/PnP strips added instead).
*/
/* CORRECTIONS:
weetbix -> base "1 biscuit 20 g", 71 kcal, 2.5 P, 12.5 C, 0.6 F. Two Bokomo Weet-Bix entries on fatsecret.co.za list "2 biscuits (40 g) = 141 kcal, 5 P, 25 C, 1.1 F" (and 354 kcal/100 g). The current line (47 kcal per biscuit) implies a ~13 g biscuit, which looks too light. Please confirm against a current pack before changing. Source: https://www.fatsecret.co.za/calories-nutrition/bokomo/weet-bix-regular/2-biscuits
pronutro -> no change needed, but note the current "ProNutro Wholewheat Original" label is 175 kcal / 10.2 P / 24 C / 2.3 F per 50 g (added as sm-pn-wholewheat); the existing line matches the older "Pronutro Original (Bokomo)" entry.
*/
```

### foods-sauces-biltong.js
```
/* CORRECTIONS:
- s2-periperi-nandos -> 1 tbsp 15 g: 8 kcal, 0.1 P, 0.2 C, 0.6 F; note "Per SA label." (SA Medium label is 52 kcal / 214 kJ per 100 g,
  P 0.6, C 1, F 4.3: https://www.nandos.co.za/eat/products/medium-peri-peri-sauce ; existing used the UK label, 7 kcal).
- s2-mushroom-sauce-ww (127 kcal, 2.2 P, 6.0 C, 10.2 F per 100 ml) is identical to Ina Paarman's Mushroom Sauce on fatsecret
  (https://mobile.fatsecret.co.za/calories-nutrition/ina-paarmans/mushroom-sauce/100ml). The Woolworths page shows no values,
  so this could be mis-attributed. Suggest renaming it to Ina Paarman or checking a Woolworths label (sc-paarman-mushroom now covers Ina Paarman).
- mayo (generic, 94 kcal per 14 g = 671 kcal/100 g) matches full-fat US/UK mayo (e.g. Hellmann's Original 685/100 g), but everyday SA mayos
  are about 30% lower: Nola Original 477, C&B Tangy 455, Hellmann's Creamy 489 per 100 g. Suggest either renaming it to
  "Mayonnaise, full-fat (US/UK style)" or changing to the SA typical: 1 tbsp 14 g: 67 kcal, 0.1 P, 1.1 C, 7.3 F.
- biltong (lean 249 / 52.2 / 1.4 / 3.8): NO number change needed. It matches lean dry biltong labels: Takis Sliced Traditional
  250 kcal / 49.3 P / 2.1 C / 4.9 F (https://www.fatsecret.co.za/calories-nutrition/takis/sliced-traditional-biltong/100g), Checkers 267 / 53.3 / 0 / 6.7,
  fatsecret generic 250 / 52 / 0.2 / 5. But "typical" supermarket sliced biltong is somewhat fattier, about 265-310 kcal and 7-13 g fat
  (PnP 274/9.5 g fat, Kauai 268/11 g, Cape Deli 304/12.7 g). Wet biltong is ~206 kcal (Woolworths moist). Suggest a better note:
  "Lean, dry biltong. Shop sliced biltong is ~270-310 kcal per 100 g; fatty biltong ~380+."
- droewors (PnP 475 / 36.3 / 6 / 34.3): confirmed against the PnP listing (https://www.fatsecret.co.za/calories-nutrition/pick-n-pay/droewors/100g).
  It is at the high end; other SA labels: Woolworths beef 451 / 37.7 / 6 / 30.9, Woolworths free-range beef 405 / 41.8 / 3 / 25.5,
  DELi 381 / 42.3 / 2 / 22.6. No change needed.
- s2-tomato-sauce-allgold (16 kcal / 15 g = 107/100 g) agrees with fatsecret All Gold 109/100 g. No change.
*/
/* SOURCES
Wimpy retail labels (Checkers product pages):
  https://www.checkers.co.za/All-Departments/Food/Food-Cupboard/Table-Condiments-and-Dressings/Tomato-Sauce/Wimpy-Tomato-Sauce-500ml/p/10206743EA (409 kJ)
  https://www.checkers.co.za/All-Departments/Food/Food-Cupboard/Table-Condiments-and-Dressings/Mustard%2C-Mint-and-Jellies/Wimpy-Mustard-Sauce-500ml/p/10206742EA (434 kJ)
  Burger relish: https://www.fatsecret.co.za/calories-nutrition/wimpy/burger-relish/100g
  (Wimpy only sells tomato & mustard sauce in retail. No BBQ/peri/cheese/mayo retail Wimpy sauce found.)
Spur: retail range & pack sizes from https://www.spursauces.co.za/documents/pdf/Spur%20Retail%20Trade%20Presenter%20April%2025.pdf (no nutrition in it).
  Cheese sauce label: https://www.somethingfromhome.co.nz/products/spur-sauce-cheese-200ml (530 kJ per 100 ml)
  Others (fatsecret "Spur Steak Ranches", individual pages checked):
  https://www.fatsecret.co.za/calories-nutrition/spur-steak-ranches/durky-sauce/100ml
  https://www.fatsecret.co.za/calories-nutrition/spur-steak-ranches/bbq-sauce/1-serving
  https://www.fatsecret.co.za/calories-nutrition/spur-steak-ranches/durkynaise/100ml
  https://www.fatsecret.co.za/calories-nutrition/spur-steak-ranches/sweet-chilli-dressing/100ml
  https://www.fatsecret.co.za/calories-nutrition/spur-steak-ranches/salad-french-fry-dressing/100ml
  https://www.fatsecret.co.za/calories-nutrition/spur-steak-ranches/spurs-tangy-vinaigrette/100ml (from the Spur search listing)
  https://www.fatsecret.co.za/calories-nutrition/spur-steak-ranches/cheddamelt-sauce/100g
  https://www.fatsecret.co.za/calories-nutrition/spur-steak-ranches/mushroom-sauce/100g
  https://www.fatsecret.co.za/calories-nutrition/spur-steak-ranches/pepper-sauce/100ml
  (No Spur monkey gland or basting values found. The 2025 retail range has no monkey gland, and the bastings have no published values.)
Steers (fatsecret, Steers brand; 12 ml = dispenser serving):
  https://www.fatsecret.co.za/calories-nutrition/steers/peri-peri-sauce/1-serving
  https://www.fatsecret.co.za/calories-nutrition/steers/monkey-gland-sauce/1-serving
  https://www.fatsecret.co.za/calories-nutrition/steers/prego-sauce/1-serving
  https://www.fatsecret.co.za/calories-nutrition/steers/rave-sauce/1-serving
  https://www.fatsecret.co.za/calories-nutrition/steers/burger-relish-sauce/1-serving
  https://www.fatsecret.co.za/calories-nutrition/steers/sweet-chilli-sauce/1-serving
  https://www.fatsecret.co.za/calories-nutrition/steers/garlic-sauce/1-serving
  https://www.fatsecret.co.za/calories-nutrition/steers/barbeque-sauce/100ml
  https://www.fatsecret.co.za/calories-nutrition/steers/mustard/100ml
  https://www.fatsecret.co.za/calories-nutrition/steers/tomato-sauce/100ml (from the Steers search listing)
  https://www.fatsecret.co.za/calories-nutrition/steers/chicken-marinade/100ml
  https://www.fatsecret.co.za/calories-nutrition/steers/steakmaker-marinade/100ml
  (Left out Spicy Tikka: listed 81 kcal vs ~61 from its macros.)
Nando's SA official product pages (per 100 g / 20 g serving):
  https://www.nandos.co.za/eat/products (index) and /eat/products/{lemon-and-herb-peri-peri-sauce, mild-peri-peri-sauce, hot-peri-peri-sauce,
  xhot-peri-peri-sauce, xx-hot-peri-peri-sauce, garlic-peri-peri-sauce, wild-herb-peri-peri-sauce, mozam-paprika-peri-peri-sauce,
  bushveld-braai-peri-peri-sauce, honey-and-soy-peri-peri-sauce, prego-sauce, pepper-sauce, creamy-garlic-sauce,
  perinaise-original-creamy-dressing, perinaise-lite-creamy-dressing, garlic-perinaise-creamy-dressing, perinaise-hot-creamy-dressing,
  vusa-perinaise-creamy-dressing, nandos-umlilo}
All Gold (fatsecret):
  https://www.fatsecret.co.za/calories-nutrition/all-gold/light-tomato-sauce/1-serving (31 kcal/100 g; agrees with
  https://www.fatsecret.co.za/calories-nutrition/all-gold/70-less-sugar-tomato-sauce/1-serving 5 kcal/16 g)
  https://www.fatsecret.co.za/calories-nutrition/all-gold/hot-spicy-tomato-sauce/100g
  https://www.fatsecret.co.za/calories-nutrition/all-gold/mustard-sauce/100ml
  https://www.fatsecret.co.za/calories-nutrition/all-gold/tomato-paste/100g
  https://www.fatsecret.co.za/calories-nutrition/all-gold/braai-relish/100g
  (All Gold makes no chutney.)
Mrs H.S. Ball's (fatsecret): https://www.fatsecret.co.za/calories-nutrition/mrs-h-s-balls/{hot-chutney/100g, extra-hot-chutney/100g,
  light-chutney/100g, peach-chutney/100ml (27 kcal per 15 g serving listed), chilli-chutney/1-serving}
Crosse & Blackwell (fatsecret): https://www.fatsecret.co.za/calories-nutrition/crosse-blackwell/{tangy-mayonnaise/100g, creamy-mayonnaise/100g,
  burger-mayonnaise/1-tbsp, trim-mayonnaise/100g, salad-cream/100g, sandwich-spread/1-tbsp}
  (Retailer pages, e.g. Checkers 10128012EA, show no values.)
Hellmann's: https://www.fatsecret.co.za/calories-nutrition/hellmanns/original-mayonnaise/100g , .../hellmanns/creamy-mayonnaise/100g
Nola: https://mobile.fatsecret.co.za/calories-nutrition/nola/{original-mayonnaise/100g, lite-mayonnaise/1-tablespoon,
  sweet-creamy-reduced-oil-mayonnaise/100g, hot-street-style-reduced-oil-mayonnaise/100g, sandwich-spread/100g}
Heinz ketchup: https://www.countrychoice.co.uk/grocery/condiments/ketchup/heinz-tomato-ketchup-342g/p/28167 (435 kJ / 102 kcal)
Knorr brown onion gravy (dry): https://www.fatsecret.co.za/calories-nutrition/knorr/brown-onion-gravy/100g (from search listing).
  The 32 g portion is the common SA gravy sachet size (e.g. Woolworths onion gravy powder 32 g, made with 1 cup water).
Ina Paarman (fatsecret): https://mobile.fatsecret.co.za/calories-nutrition/ina-paarmans/{cheese-sauce/1-serving (50 ml, scaled x2),
  pepper-sauce/1-serving (50 ml, scaled x2), mushroom-sauce/100ml, roast-chicken-gravy/100ml, roast-onion-gravy/100ml,
  honey-mustard-creamy-salad-dressing/1-serving, caesar-salad-dressing/1-serving, blue-cheese-salad-dressing/1-serving}
Woolworths (fatsecret): https://www.fatsecret.co.za/calories-nutrition/woolworths/{tomato-sauce/100g, tartare-sauce/100g, hoisin-sauce/100ml,
  peri-peri-mayonnaise/100g, reduced-oil-tangy-mayonnaise/100g, mint-sauce/1-serving}
Wellington's: https://www.fatsecret.co.za/calories-nutrition/wellingtons/sweet-chilli-sauce/1-tbsp
NOT ADDED (no SA nutrition found): KFC SA dips/sauces, McDonald's SA dips (mcdonalds.co.za blocks fetching), Debonairs/Domino's dips,
  Kauai dressings, Galito's (only one fatsecret entry, 46 kcal vs ~59 from its macros). Bull Brand is canned meat, not a sauce.
  Tabasco is covered by the existing s2-hot-sauce. Robertsons/Aromat have negligible kcal.

BILTONG / DROEWORS (fatsecret.co.za individual pages; search listings sometimes differ from the item page, so only page values were used):
  https://www.fatsecret.co.za/calories-nutrition/pick-n-pay/sliced-beef-biltong/100g
  https://mobile.fatsecret.co.za/calories-nutrition/kauai/sliced-free-range-biltong/100g (40 g serving scaled)
  https://www.fatsecret.co.za/calories-nutrition/checkers/beef-biltong/1-serving (30 g: 80 kcal, 16 P, 0 C, 2 F)
  https://www.fatsecret.co.za/calories-nutrition/woolworths/moist-sliced-biltong/100g
  https://www.fatsecret.co.za/calories-nutrition/woolworths/free-range-beef-biltong-sliced-smoked/100g (basis for bl-fatty)
  https://www.fatsecret.co.za/calories-nutrition/woolworths/beef-biltong-snapsticks/100g
  https://www.fatsecret.co.za/calories-nutrition/pnp/biltong-snapstix/100g
  https://www.fatsecret.co.za/calories-nutrition/takis/biltong-stokkies/1-serving (40 g: 121 kcal, 26.6 P, 1.2 C, 1.1 F)
  https://www.fatsecret.co.za/calories-nutrition/takis/chilli-stokkies/1-packet
  https://www.fatsecret.co.za/calories-nutrition/cracklys/chilli-bites/100g
  https://www.fatsecret.co.za/calories-nutrition/kalahari/kudu-biltong-sliced/100g
  https://www.fatsecret.co.za/calories-nutrition/pnp/sliced-game-biltong/100g
  https://www.fatsecret.co.za/calories-nutrition/cape-deli/ostrich-biltong/100g
  https://mobile.fatsecret.co.za/calories-nutrition/woolworths/chicken-biltong/100g
  https://www.fatsecret.co.za/calories-nutrition/woolworths/beef-biltong-crisps/100g
  https://www.fatsecret.co.za/calories-nutrition/woolworths/beef-dro%C3%ABwors/100g
  https://www.fatsecret.co.za/calories-nutrition/woolworths/venison-droewors/100g
  Dry vs moist biltong moisture (21-25% vs 35-43%): https://agritrop.cirad.fr/576658/
  Fatty biltong cross-check (AU "Beef Biltong - Fatty", 288 kcal, 11 g fat): https://thejerkyco.com.au/products/beef-biltong-fatty

CHECK NOTES (kcal vs 4P+4C+9F):
- Nando's XHot (65 vs ~56) and Garlic peri-peri (59 vs ~51) are label kcal, ~15% above their macros (chilli fibre / rounding). Kept as on label.
- C&B Tangy mayo 455 vs ~504 from its macros (-10%), Kalahari kudu 257 vs ~291 (-12%), Crackly's chilli bites 301 vs ~264 (+14%): within 15%, kept.
*/
```

### foods-drinks3.js
```
/* CORRECTIONS:
dr-fanta -> kcal 22, protein 0, carbs 5.7, fat 0. Coca-Cola SA now lists Fanta Orange at 93 kJ and 5.7 g sugar per 100 ml
  (https://www.coca-cola.com/za/en/brands/fanta). Existing value (16 kcal, 3.9 g) looks like an older recipe.
Checked and OK: dr-sprite (53 kJ), d2-tonic (157 kJ), d2-lemonade (131 kJ), d2-ginger-ale (123 kJ), d2-tonic-pink (131 kJ),
  d2-dry-lemon (53 kJ), Sparletta Creme Soda/Iron Brew/Pine-Nut/Sparberry (60-63 kJ), dr-powerade (133 kJ, 8 g),
  dr-monster (1006 kJ, 60 g per 500 ml), cola (OFF ZA 440 ml: 187 kJ, 11 g).
*/
/* SOURCES
Coca-Cola SA brand pages (Fanta, Sprite, Powerade, Schweppes, Sparletta, Charged):
  https://www.coca-cola.com/za/en/brands/fanta
  https://www.coca-cola.com/za/en/brands/sprite
  https://www.coca-cola.com/za/en/brands/powerade
  https://www.coca-cola.com/za/en/brands/schweppes
  https://www.coca-cola.com/za/en/brands/sparletta
  https://www.coca-cola.com/za/en/brands/charged
  https://www.coca-cola.com/za/en/media-center/new-sparkling-caffeinated-beverage-launch (Charged 500 ml can)
Twizza orange: https://world.openfoodfacts.org/product/6009880412563/twizza-orange
Mountain Dew: https://www.fatsecret.co.za/calories-nutrition/pepsi/mountain-dew/100ml
Jive: https://www.fatsecret.co.za/calories-nutrition/jive/iron-brew/100ml
Monster ZA (product pages, per 500 ml):
  https://www.monsterenergy.com/en-za/energy-drinks/juiced-monster/monster-mucho-loco/
  https://www.monsterenergy.com/en-za/energy-drinks/juiced-monster/pipeline-punch/
  https://www.monsterenergy.com/en-za/energy-drinks/juiced-monster/monster-pacific-punch/
  https://www.monsterenergy.com/en-za/energy-drinks/juiced-monster/monster-mariposa/
  https://www.monsterenergy.com/en-za/energy-drinks/juiced-monster/juiced-aussie-lemonade/
  https://www.monsterenergy.com/en-za/energy-drinks/juiced-monster/juiced-monster-viking-berry/ (+ https://www.fatsecret.co.za/calories-nutrition/monster/energy-viking-berry/100ml)
  https://www.monsterenergy.com/en-za/energy-drinks/monster-energy/reserve-white-pineapple/
  https://www.monsterenergy.com/en-za/energy-drinks/monster-ultra/zero-sugar-ultra-fiesta/
  https://www.monsterenergy.com/en-za/energy-drinks/monster-ultra/zero-sugar-ultra-watermelon/
  https://www.monsterenergy.com/en-za/energy-drinks/monster-energy/the-original-green-monster-energy/ (check of dr-monster)
Red Bull ZA: https://www.redbull.com/za-en/energydrink (range), .../products/red-bull-red-edition, red-bull-summer-edition,
  red-bull-peach-edition, red-bull-cherry-edition, red-bull-apricot-edition (27 g sugar / 250 ml), red-bull-sugarfree (250/355/473 ml), red-bull-xero
  kcal: https://www.fatsecret.co.za/calories-nutrition/red-bull/sugar-free/100ml, https://www.fatsecret.co.za/calories-nutrition/red-bull/xero/1-serving
Switch: https://www.fatsecret.co.za/calories-nutrition/switch/energy-drink/100ml, .../switch/sugar-free-energy-drink/100ml,
  500 ml can: https://www.fatsecret.co.za/calories-nutrition/switch/jelly-babies-energy-drink/1-can, https://www.pricecheck.co.za/offers/258266258/Switch+Energy+Drink+Mandrin+Pear+Cherry+500ML
Reboost: https://www.fatsecret.co.za/calories-nutrition/search?q=Reboost (500 ml: .../reboost/pineapple-spike/1-serving)
Dragon sugar free: https://www.fatsecret.co.za/calories-nutrition/dragon-energy/sugar-free/100ml
Energade Zero / Lite: https://www.fatsecret.co.za/calories-nutrition/energade/energade-zero/100ml, .../energade/tropical-lite/100ml, .../energade/blueberry-lite/100ml
Aquelle: https://www.fatsecret.co.za/calories-nutrition/search?q=Aquelle
Bonaqua Pump: https://www.fatsecret.co.za/calories-nutrition/search?q=Bonaqua
BOS sugar free: https://www.fatsecret.co.za/calories-nutrition/bos/sugar-free-rooibos-ice-tea-(lemon)/100ml
Kombucha: https://www.fatsecret.co.za/calories-nutrition/generic/kombucha, https://www.fatsecret.co.za/calories-nutrition/woolworths/kombucha-rooibos/100ml
Liqui-Fruit (official, per 100 ml + pack sizes): https://liquifruit.co.za/product-range/ and product pages
  clear-apple, berry-blaze, breakfast-punch, cranberry-cooler, mango-orange, orange, red-grape, tropical, passion-power,
  sparkling-apple, sparkling-strawberry-lemonade
Ceres: https://www.fatsecret.co.za/calories-nutrition/search?q=Ceres (apple, orange, peach, whispers of summer, medley of fruits, secrets of the valley)
Clover Krush: https://www.clover.co.za/?p=2074 (apple), https://clover.co.za/?p=2085 (mango), https://clover.co.za/?p=2077 (berries),
  https://clover.co.za/?p=2103 (6 fruits & fibre), https://www.clover.co.za/?p=2121 (UHT orange)
Woolworths juices: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths+juice
Tropika: https://clover.co.za/?p=2033 (pineapple, sizes), https://www.fatsecret.co.za/calories-nutrition/search?q=Tropika
Super M: https://www.clover.co.za/?p=2180 (strawberry), https://clover.co.za/?p=8748 (vanilla), https://www.clover.co.za/?p=14446 (mini chocolate, sizes),
  https://www.checkers.co.za/All-Departments/Drinks/Dairy-Drinks/Milkshakes/Clover-Super-M-Peanut-Butter-Flavoured-Milk-6-x-300ml/p/10861875PK2
Steri Stumpie: https://www.fatsecret.co.za/calories-nutrition/search?q=Steri+Stumpie
Mageu Number One: https://www.fatsecret.co.za/calories-nutrition/search?q=Mageu
Nescafe Gold sachets: https://www.fatsecret.co.za/calories-nutrition/nescafe/gold-cappuccino/1-packet, .../nescafe/gold-double-decadent/1-sachet
Frisco / Friscochino: https://www.fatsecret.co.za/calories-nutrition/frisco/original/100g, .../frisco/friscochino/1-sachet
Woolworths iced coffee: https://www.fatsecret.co.za/calories-nutrition/woolworths/iced-coffee-original/100ml (300 ml bottle: .../woolworths/iced-coffee-vanilla/1-bottle)
USN x Super M protein shake: https://za.usn.global/products/usn-super-m-protein-shake, https://www.fatsecret.co.za/calories-nutrition/clover/usn-protein-shake/100ml
Woolworths high-protein milk: https://www.fatsecret.co.za/calories-nutrition/woolworths/high-protein-low-fat-chocolate-flavoured-milk/1-serving
Steri Stumpie Plus Protein: https://www.fatsecret.co.za/calories-nutrition/steri-stumpie/plus-protein-chocolate/1-bottle
Parmalat Protein+: https://www.fatsecret.co.za/calories-nutrition/parmalat/protein-strawberry-flavoured-low-fat-milk/1-serving

NOT ADDED (no reliable SA data or not sold): Coca-Cola Vanilla/Cherry (not in SA range), Pepsi Twist, Coo-ee mocktails (no label data found),
  Nesquik RTD (discontinued in SA in 2023), Milo RTD (not confirmed as sold in SA), Lucozade, Red Square, Boom, Halls,
  Minute Maid (current SA range unclear), Monster Ultra Rosa/Strawberry Dreams and Zero Sugar (Monster ZA pages lack full panel),
  Nutritech/PVM RTD shakes (no data found). Lipton sugar-free (fatsecret values inconsistent).
*/
```

### foods-frozen.js
```
/* SOURCES (label values as listed on fatsecret.co.za brand search pages, per 100 g or per stated serving; converted to per 100 g/ml):
- Dr. Oetker (Ristorante, Ital Pizza Classic/Familia/Lite, Foldover, mini pizza, pizza donuts):
  https://www.fatsecret.co.za/calories-nutrition/search?q=Dr.+Oetker+pizza (pages 1-4)
  https://www.fatsecret.co.za/calories-nutrition/search?q=Ristorante
  https://www.fatsecret.co.za/calories-nutrition/dr-oetker/ital-pizza-classic-margherita/100g
  Ristorante sold in SA: https://www.checkers.co.za/All-Departments/Food/Frozen-Food/Frozen-Pizza-and-Garlic-Bread/Frozen-Pizza/Dr-Oetker-Ristorante-Mozzarella-Frozen-Pizza-355g-/p/10853867EA
  Familia box weights: https://www.pricecheck.co.za/offers/237475071/Ital+Pizza+Familia+Frozen+Chicken+%26+Jalape+O+Pizza+529G
                       https://www.pricecheck.co.za/offers/245220072/Dr.+Oetker+Ital+Pizza+Familia+Frozen+Spicy+Pepperoni+Pizza+380G
- McCain (chips, wedges, smiles, shotz, veggie burger, meals, sides): https://www.fatsecret.co.za/calories-nutrition/search?q=McCain (pages 1-8)
- Woolworths frozen (roast potatoes, mash, spinach, cauli rice, butter chicken, pulled beef pie, hake, nuggets, berries, lollies, frozen yoghurt):
  https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths+frozen (pages 1-5)
- Woolworths pizzas: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths+pizza (pages 1-2)
- Woolworths crumbed chicken: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths+crumbed+chicken
- Woolworths fish fingers / fish cakes: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths+Frozen+fish
- Woolworths patties: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths+burger+patties
- Woolworths spring rolls: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths+spring+rolls
- Woolworths garlic baguette: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths+garlic+bread
- Woolworths oven chips: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths+chips+oven
- Woolworths ice cream: https://www.fatsecret.co.za/calories-nutrition/search?q=Woolworths+ice+cream
- Woolworths crumbed calamari: https://www.fatsecret.co.za/calories-nutrition/search?q=calamari+crumbed
- Pick n Pay frozen (waffles, curry, a la king, pizza base, chicken fillets): https://www.fatsecret.co.za/calories-nutrition/search?q=Pick+n+Pay+frozen
- Hash browns (PnP, Wimpy retail): https://www.fatsecret.co.za/calories-nutrition/search?q=hash+browns
- Checkers southern fried strips: https://www.fatsecret.co.za/calories-nutrition/search?q=Checkers+Housebrand
- I&J: https://www.fatsecret.co.za/calories-nutrition/search?q=I%26J (pages 1-6)
- Sea Harvest: https://www.fatsecret.co.za/calories-nutrition/search?q=Sea+Harvest (pages 1-3)
- Fry's: https://www.fatsecret.co.za/calories-nutrition/search?q=Fry%27s (pages 1-3)
- Country Fair: https://www.fatsecret.co.za/calories-nutrition/search?q=Country+Fair (pages 1-2)
- Rainbow: https://www.fatsecret.co.za/calories-nutrition/search?q=Rainbow+chicken (pages 1-2)
- Pieman's: https://www.fatsecret.co.za/calories-nutrition/search?q=Pieman%27s
- Ola / Magnum: https://www.fatsecret.co.za/calories-nutrition/search?q=Ola (pages 1-3), https://www.fatsecret.co.za/calories-nutrition/search?q=Magnum
- Dairymaid: https://www.fatsecret.co.za/calories-nutrition/search?q=Dairymaid
- Haagen-Dazs: https://www.fatsecret.co.za/calories-nutrition/search?q=Haagen-Dazs
- Ben & Jerry's Cookie Dough (UK label, per 100 g): https://www.onestop.co.uk/wp-content/uploads/Ben-and-Jerrys-Ice-Cream-Cookie-Dough-465-ml-399251.pdf

NOT ADDED (already in the app or no reliable data):
- Already exist: Rainbow nuggets & crumbed strips (nuggets, s2-chicken-strips), Eskort pork bangers (s2-pork-bangers), Magnum Classic (sw-magnum),
  Woolworths pepper steak pie (pie), Pieman's sausage roll, Checkers beef / Woolies chicken samoosas, Woolies battered hake,
  I&J Flame Grills hake (sa-hake-grilled), Woolies margherita pizza, generic frozen peas / mixed veg.
- No label data found: Casa di Mama / Feliciana (not seen in SA), Ola Feast & Fruttare, Mydeal, Like Meat, Quorn, Goodlife, Dewfresh,
  Enterprise frozen, Bull Brand patties, Mr. Pie, Beyond/Impossible (SA pack values not confirmed).
- Skipped McCain veg mixes where label kcal and macros disagree by >15% (carbs on the SA label exclude fibre): garden peas, mixed veg,
  stir-fry mixes, broccoli, classic roast veg, rustic veg; chilli garlic potato bites (carbs look wrong).

PORTION NOTES: Whole-pizza weights for Ital Pizza Classic/Familia (other than the two PriceCheck boxes) were not found, so those use 100-300 g portions.
Portion weights marked "≈" or "approximate" in the note are typical pack weights, not printed on the source.
*/
```
