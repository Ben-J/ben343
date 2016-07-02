package ben343.controllers;

import java.security.Principal;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class IndexController implements ErrorController {

	@RequestMapping(value = "error")
	public String error() {
		return "Mec t'as fait une requête qui mène null part !!!";
	}

	@Override
	public String getErrorPath() {
		return "error";
	}
	
	// for 403 access denied page
	@RequestMapping(value = "403", method = RequestMethod.GET)
	public ModelAndView accesssDenied(Principal user) {

		ModelAndView model = new ModelAndView();

		if (user != null) {
			model.addObject("msg", "Hi " + user.getName() + ", you do not have permission to access this page!");
		} else {
			model.addObject("msg", "You do not have permission to access this page!");
		}

		model.setViewName("403");
		return model;
	}
}
