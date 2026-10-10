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
