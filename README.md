
#Ecommerce

https://github.com/Liron-Almog/Ecommerce/assets/100926289/4f3485a3-4dd3-4d4b-a8b8-c76f208d049d

I will develop a registration-free e-commerce website using React and Spring. The goal is to allow customers to browse movies, add them to a cart, and complete purchases without registration. To minimize server work, I'll use the TMDB API for product browsing.

For the front-end, I'll use React to create a single-page application . The search page will display movies based on search and a search history will allow quick access to previous searches.

Movies can be added to the cart on the search page, with no duplicates allowed. The cart page will show all items and a fixed price. Users can remove items individually or empty the cart entirely. The checkout page will feature a form for mandatory customer information, and upon submission, purchases will be saved in the database, and the cart will reset.

The back-end will use Spring to create a REST API for cart handling and purchase recording. Spring session beans will store the cart, and a SQL Server database will store completed orders. 
