import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ExpenseController {

    @GetMapping("/")
    public String showHomePage() {
        return "index"; // This corresponds to the filename without the extension
    }
}
