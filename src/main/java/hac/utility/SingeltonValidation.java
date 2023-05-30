package hac.utility;
import java.util.regex.Pattern;

/**
 * The class is a singleton that is in charge of backend validation.
 */
public class SingeltonValidation {
    private static SingeltonValidation uniqueInstance;
    public boolean validateName(String name) {
        name = name.trim();
        if (name == null || name.isEmpty())
            return false;

        // Name should only contain letters, spaces, hyphens, or apostrophes
        if (!name.matches("^[a-zA-Z'\\- ]+$")) {
            return false;
        }
        return true; // Name is valid
    }

    public boolean validateEmail(String email) {
        // Email should not be null or empty
        if (email == null || email.isEmpty()) {
            return false;
        }

        // Regular expression pattern for email validation
        String emailPattern = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";

        // Create a Pattern object with the email pattern
        Pattern pattern = Pattern.compile(emailPattern);

        // Match the email against the pattern
        return pattern.matcher(email).matches();
    }

    public static synchronized SingeltonValidation getInstance() {

        if (uniqueInstance == null) {
            uniqueInstance = new SingeltonValidation();
        }
        return uniqueInstance;
    }
    private SingeltonValidation() {}
}
