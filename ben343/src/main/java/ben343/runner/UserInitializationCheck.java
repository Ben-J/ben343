package ben343.runner;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import ben343.entities.User;
import ben343.repositories.UserRepository;

@Component
public class UserInitializationCheck implements CommandLineRunner {

	@Autowired
	private UserRepository userRepo;

	@Override
	public void run(String... arg0) throws Exception {
		List<User> users = (List<User>) userRepo.findAll();

		if (users != null) {
			for (User u : users) {
				System.err.println("User " + u.toString());
			}
		}
	}
}
