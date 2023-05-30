package hac.controllers.beans;

import org.springframework.stereotype.Component;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

/**
 * The func is in charge of creating a cart
 */
@Component
public class Cart implements Serializable {
    private Set<Movie> products;

    public Cart() {
        this.products = new HashSet<Movie>();
    }

    public Set<Movie> getMovies(){
        return products;
    }
    public void setMovie(Movie movie){
        products.add(movie);
    }
    public void deleteMovie(long id){

        Iterator<Movie> iterator = products.iterator();
        while (iterator.hasNext()) {
            Movie movie = iterator.next();
            if (movie.getId() == id) {
                iterator.remove();
                break;
            }
        }
    }
    public int getNumberOfMovie(){
        return products.size();
    }

    public void addItem(Movie newMovie){

        Iterator<Movie> iterator = products.iterator();
        while (iterator.hasNext()) {
            Movie movie = iterator.next();
            if (movie.getId() == newMovie.getId())
                return;
        }
        products.add(newMovie);
    }

    public void clearCart() {
        products.clear();
    }
}
