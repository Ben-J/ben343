package ben343.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ben343.entities.MessageApp;
import ben343.repositories.MessageAppRepository;

@RestController
public class MessageAppController {
	// ------------------------
	// PRIVATE FIELDS
	// ------------------------

	@Autowired
	private MessageAppRepository messageAppRepo;

	// ------------------------
	// PUBLIC METHODS
	// ------------------------

	/**
	 * /create --> Create a new message and save it in the database.
	 * 
	 * @param content
	 *            Message's content
	 * @param date
	 *            Message's date
	 * @return A string describing if the message is successfully created or
	 *         not.
	 */
	@RequestMapping("/addMessage")
	@ResponseBody
	public String create(@RequestBody MessageApp msg) {
		try {
			messageAppRepo.save(msg);
		} catch (Exception ex) {
			return "Error creating the message: " + ex.toString();
		}
		return "Message succesfully created! (id = " + msg.getId() + ")";
	}

}
