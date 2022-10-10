"""
This python code is used to get multiple product in html (100)
Outputs are in "food_list.txt" and "food_list_for_cart.txt"
"""
#Please type max food here
max_food = 100
f = open("food_list.txt", "w")

for i in range(0, max_food):
    f.write("\n")
    f.write("<div class = \"w3-container my-box w3-round-xlarge w3-margin w3-padding w3-border w3-border-black\"\nstyle = \"display: none;\" id = \"block_" )
    f.write(str(i))
    f.write("\">\n<img id = \"image_")
    f.write(str(i))
    f.write("\" src=\"keyword_image\" style=\"width:100%;height:60%;\">\n<!--Image-->\n<div class = \"w3-padding\" style=\"width:100%;height:30%;\">\n<!--Name-->\n<b id = \"name_") 
    f.write(str(i))
    f.write("\" >keyword_name</b>\n</div>\n<div class = \"w3-center\">\n<!--Price-->\n<button class = \"w3-btn w3-teal w3-hover-blue\" onclick=\"alert('Successful purchase')\">\n<span id = \"price_") 
    f.write(str(i))
    f.write("\">keyword_price</span>\n</button>\n<!--keyword-->\n<button class = \"w3-btn w3-teal w3-hover-blue\" onclick=\"plusFood(") 
    f.write(str(i))
    f.write(")\">Add to cart</button>\n</div>\n</div>\n ")


f.close()

f = open("food_list_for_cart.txt", "w")

for i in range(0, max_food):
    f.write("\n")
    f.write("<div class = \"w3-container my-box w3-round-xlarge w3-margin w3-padding w3-border w3-border-black\"\nstyle = \"display: none;\" id = \"_block_" )
    f.write(str(i))
    f.write("\">\n<img id = \"_image_")
    f.write(str(i))
    f.write("\" src=\"keyword_image\" style=\"width:100%;height:60%;\">\n<!--Image-->\n<div class = \"w3-padding\" style=\"width:100%;height:20%;\">\n<!--Name-->\n<b id = \"_name_") 
    f.write(str(i))
    f.write("\" >keyword_name</b>\n</div>\n<div class = \"w3-center\">\n<!--Price-->\n<span id = \"_price_") 
    f.write(str(i))
    f.write("\">keyword_price</span>\n</div>\n")
    f.write("<div class = \"w3-center\">\n")
    f.write("<button class = \"w3-button\" onclick = \"reduceFood(")
    f.write(str(i))
    f.write(")\">-</button>\n")
    f.write("<span id = \"_number_")
    f.write(str(i))
    f.write("\">0</span><!--Number-->")
    f.write("<button class = \"w3-button\" onclick = \"plusFood(")
    f.write(str(i))
    f.write(")\">+</button>\n</div>\n</div>")


f.close()

