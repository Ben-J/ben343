package ben343.controllers;

import java.util.Date;
import java.util.List;

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
	@RequestMapping(method = RequestMethod.PUT, value = "/message/addMessage")
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
	/**
	 * /delete --> Delete the message having the passed id.
	 * 
	 * @param id
	 *            The id of the message to delete
	 * @return A string describing if the message is successfully deleted or not.
	 */
	@RequestMapping("/message/delete")
	public String delete(long id) {
		try {
			MessageApp msg = new MessageApp(id);
			messageAppRepo.delete(msg);
		} catch (Exception ex) {
			return "Error deleting the message:" + ex.toString();
		}
		return "Message succesfully deleted!";
	}

	/**
	 * /update --> Update the message in the database
	 * having the passed id.
	 * 
	 * @param id
	 *            The id for the message to update.
	 * @param description
	 *            The new description.
	 * @return A string describing if the message is succesfully updated or not.
	 */
	@RequestMapping("/message/update")
	@ResponseBody
	public String updateMessage(long id, String description) {
		try {
			MessageApp msg = messageAppRepo.findOne(id);
			msg.setContent(description);
			messageAppRepo.save(msg);
		} catch (Exception ex) {
			return "Error updating the message: " + ex.toString();
		}
		return "Message succesfully updated!";
	}

	@RequestMapping("/message/messages")
	public List<MessageApp> findAll() {
		return (List<MessageApp>) messageAppRepo.findAll();
	}
}
