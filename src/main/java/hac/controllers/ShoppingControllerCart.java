package hac.controllers;

import hac.repo.Purchase;
import hac.repo.PurchaseRepository;
import hac.utility.SingeltonValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class ShoppingControllerCart {

    @Autowired
    private PurchaseRepository repository;

    /**
     * The func validates the inputs the user put in order to submit the purchase.
     * If the data send by the user is valid it is saved in the db and if not it returns an error.
     * @param data
     * @return
     */
    @PostMapping(value = "/purchase")
    public ResponseEntity<HttpStatus> postPurchase(@RequestBody final Purchase data) {
        if(!SingeltonValidation.getInstance().validateEmail(data.getEmail()) ||
                !SingeltonValidation.getInstance().validateName(data.getLastName())||
                !SingeltonValidation.getInstance().validateName(data.getFirstName())){

            return ResponseEntity.badRequest().body(HttpStatus.BAD_REQUEST);
        }

        repository.save(data);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
