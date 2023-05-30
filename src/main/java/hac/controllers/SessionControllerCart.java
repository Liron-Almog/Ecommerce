package hac.controllers;

import hac.controllers.beans.Cart;
import hac.controllers.beans.Movie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("")
public class SessionControllerCart {

    @Autowired
    @Qualifier("sessionBeanCart")
    private Cart sessionCart;

    /**
     * The func deletes all the items from the cart
     * @return
     */
    @DeleteMapping(value = "delete-all-items")
    public ResponseData deleteAllMovies(){
        sessionCart.clearCart();
        return new ResponseData("Deleted all the items");
    }

    /**
     * The func deletes chosen item from the cart
     * @param id
     * @return
     */
    @DeleteMapping(value = "delete-item/id/{id}")
    public ResponseData deleteMovie(@PathVariable("id") final Long id){
        sessionCart.deleteMovie(id);
        return new ResponseData("Deleted from cart");
    }

    @GetMapping (value = "/get-items")
    public Set<Movie> getMovies(){
        return sessionCart.getMovies();
    }
    @GetMapping (value = "/get-price")
    public double getPrice(){
        return sessionCart.getMovies().size() * 3.99;
    }

    @GetMapping (value = "/number-of-items")
    public int numbersOfItems(){
        return sessionCart.getMovies().size();
    }

    @PostMapping("/destroy-session")
    public String destroySession(HttpServletRequest request) {
        request.getSession().invalidate();
        return "/";
    }

    /**
     * The func adds item to the cart
     * @param movie
     * @return
     */
    @PostMapping(value = "/add-item")
    public ResponseData postAddItem(@RequestBody final Movie movie) {
        if(movie.getTitle() != null) {
            sessionCart.addItem(movie);
        }
        return new ResponseData(String.valueOf(sessionCart.getNumberOfMovie()));
    }
}
