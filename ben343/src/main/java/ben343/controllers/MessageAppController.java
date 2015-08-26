package ben343.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	@RequestMapping(method = RequestMethod.PUT, value = "/addMessage")
	@ResponseBody
	public boolean create(@RequestBody MessageApp msg) {
		msg.setDate(new Date());
		try {
			messageAppRepo.save(msg);
		} catch (Exception ex) {
			return false;
		}
		return true;
	}

}
