package ben343.repositories;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import ben343.entities.MessageApp;

@Transactional
public interface MessageAppRepository extends CrudRepository<MessageApp, Long> {

  /**
   * This method is not implemented and its working code will be
   * automagically generated from its signature by Spring Data JPA.
   *
   * @param date
   * @return the message having the passed date.
   */
  public MessageApp findByDate(Date date);

} // class Message Dao