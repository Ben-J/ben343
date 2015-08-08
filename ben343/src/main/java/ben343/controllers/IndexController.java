package ben343.controllers;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController implements ErrorController {

	private static final String PATH = "/error";

	@RequestMapping(value = PATH)
	public String error() {
		return "Mec t'as fait une reqûete qui mène null part !!!";
	}

	@Override
	public String getErrorPath() {
		return PATH;
	}
}
