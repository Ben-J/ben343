package ben343.runner;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import ben343.entities.UserApp;
import ben343.repositories.UserAppRepository;

@Component
public class UserInitializationCheck implements CommandLineRunner {

	@Autowired
	private UserAppRepository userRepo;

	@Override
	public void run(String... arg0) throws Exception {
		List<UserApp> users = (List<UserApp>) userRepo.findAll();

		if (users != null) {
			for (UserApp u : users) {
				System.err.println("User " + u.toString());
			}
		}
	}
}
